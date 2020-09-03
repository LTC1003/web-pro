
<template>
  <div class="personal"> 
    <h2 class="caption">我的信息</h2>
    <div class="userinfo-list">
      <div class="list">
        <!-- <div class="label"></div> -->
        <el-form ref="personalData" :model="personalData" :rules="rulesPersonal"
          label-width="80px" 
          >
          <el-form-item label="头像" prop="avatar">
            <el-avatar class="avatar" :src="personalData.avatar"></el-avatar>
          </el-form-item>
          <el-form-item label="身份" prop="userRole">
            <!-- <el-button round plain type="warning" size="mini">{{personalData.userRole}}</el-button> -->
            <div class="rolename">
              {{getRoleName(personalData.userRole)}}
            </div>
          </el-form-item>
          <el-form-item label="昵称" prop="userName">
            <el-input class="inputmini" v-model="personalData.userName" clearable></el-input>
          </el-form-item>
          <el-form-item label="名片" prop="userCard">
            <el-input class="inputSamll" type="text" v-model="personalData.userCard" clearable></el-input>
          </el-form-item>
          <el-form-item label="个人简介" prop="userSignature">
            <el-input class="inputSamll" type="textarea"  placeholder="请输入内容"
              maxlength="50"
              show-word-limit
              v-model="personalData.userSignature">
            </el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-cascader
              size="large"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
          </el-form-item>
          <el-form-item label="兴趣爱好" prop="lables">
            <el-tag
              v-for="tag in personalData.lables" 
              :key="tag.id"
              :color="tag.bgcolor">
              {{tag.name}}
            </el-tag>
            <el-button class="addtag" @click="getTagsList()">添加兴趣</el-button>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button round size="small" style="width: 130px; margin-left: -80px" type="danger" @click="onUserSubmit('personalData')">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="control-btn">
        <el-button style="background: #479cdc; color: #fff" @click="setRole()">修改身份</el-button>
      </div>
    </div>
    <h2 class="caption">账号设置</h2>
    <div class="setAccount">
      <div class="setcol" v-for="(item, index) in setDataRow" :key="index">
        <div>{{item.setType}}</div>
        <div class="setState">{{item.setState}}</div>
        <el-button class="setbtn" @click="setUserBtn(item)">{{item.setbtn}}</el-button>
      </div>
    </div>
    <!-- 引用弹出组件 -->
    <PopupWin :popData="popData" @onFromPopData="getPopData" v-show="popData.showType"></PopupWin>
  </div>
</template>

<script>
import PopupWin from "@/components/PopupWin"
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'

export default {
  name: "userdata",
  components: {
    PopupWin,
  },
  data() {
    return {
      //三级联动
      options: regionDataPlus,
      selectedOptions: [],
      visibleType:'',
      popData: {
        type: 0,
        data: [],
        showType: false,
      },
      colorArr: ['#FFC0CB','#4169E1','#00BFFF','#DC143C','#C71585','#7B68EE','#00FA9A','#FFD700'],
      // tagList: ['名胜古迹','野外垂钓','毕摩登感'],
      personalData: {
        avatar: '',
        userName: '', //昵称
        userCard: '', // 名片
        userSignature: '', // 个人简介
        userRole: '', // -1未设定 1旅游2探索3文案
        lables: [], 
        province: '',
        city: '', 
        country: '',
      },
      rulesPersonal: {
        userRole: [
          { required: true, message: '必填', trigger: 'change' },
        ],
        lables: [
          {required: true, message: '必填', trigger: 'change' }
        ],
        userName: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 8, message: '昵称2到8个字符', trigger: 'blur' }
        ],
        userCard: [
          { required: false, message: '', trigger: 'blur' },
          { max: 12, message: '最多12个字符', trigger: 'blur' }
        ],
        userSignature:[
          { max: 50, message: '最多50个字符', trigger: 'blur' }
        ],
      },
      setDataRow: [
        // {setType: '手机', setState: 0, setbtn: '修改手机'},
        // {setType: 'QQ', setState: 0, setbtn: '解绑'},
        // {setType: '微信', setState: 0, setbtn: '绑定'},
        // {setType: '微博', setState: 0, setbtn: '绑定'},
        {setType: '密码', setState: 2, setbtn: '设置密码'},
      ],
      localUserData: '',
    }
  },
  mounted() {
    // 获取个人信息
    if(localStorage && localStorage.loginUserInfo){
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.getUserDataInfo();
    }
    // 个人绑定设置
    this.setDataRow.forEach((val,key) =>{
      if(val.setType == "密码"){
        val.setState = this.personalData.passwordStatus;
      }
    });
  },
  methods: {
    // 三级联动事件
    handleChange (value) {
      console.log(value) // value值为区域码
      // // 用CodeToText转换成中文
      // console.log(CodeToText[value[0]]) // 省 province
      // console.log(CodeToText[value[1]]) // 市 city
      // console.log(CodeToText[value[2]]) // 区 country
      this.personalData.province = CodeToText[value[0]]
      this.personalData.city = CodeToText[value[1]]
      this.personalData.country = CodeToText[value[2]]
      console.log(this.selectedOptions,123123);
    },
    // 获取个人信息
    getUserDataInfo(){
      let objData = {
        phoneType: '-',
        channel: '-',
        lastLoginTime: (new Date()).valueOf().toString(),
        lastLoginIp: '10.12.88.103',
      }
      objData['moblie'] = this.localUserData.userMobile;
      this.$api.userInfo.userLoginMobile(objData).then(res => {
        this.personalData = res.data.result;
        // console.log(TextToCode[this.personalData.province].code, 911);
        // console.log(TextToCode[this.personalData.province][this.personalData.city].code, 922);
        // console.log(TextToCode[this.personalData.province][this.personalData.city][this.personalData.country].code, 911);
        this.selectedOptions = TextToCode[this.personalData.province][this.personalData.city][this.personalData.country].code
      })
    },
    onUserSubmit(formName){
      this.$refs[formName].validate( valid => {
        console.log(valid, 'hho');
        if(valid){
          let user = this.personalData;
          let lableIds = [];
          this.personalData.lables.forEach(val => {
            // console.log(val, 'tagid')
            lableIds.push(val.labelId);
          });
          user['lableIds'] = lableIds;
          this.$api.userInfo.updateUserRole(user).then(res => {
            if (res.message == "操作成功") {
              localStorage.loginUserInfo = JSON.stringify(res.data.result);
              this.getUserDataInfo();
            } 
          });
        }
      })
    },
    // 身份角色
    setRole(){
      this.$api.userInfo.getRoleList({token: this.localUserData.token}).then(res => {
        this.popData.showType = true;
        this.popData.type = 1;
        this.popData.data= res.data.result;
      })
    },
    // 兴趣标签
    getTagsList(){ 
      this.$api.userInfo.tagsList({token: this.localUserData.token}).then(
        res => {
          console.log(res.data.result, 'tags');
          this.popData.showType = true;
          this.popData.type = 2;
          this.popData.data= res.data.result;
        }
      )
    },
    // 绑定设置
    setUserBtn(item){
      // console.log(item.setType, 'user');
      switch (item.setType) {
        case "密码": 
          if (item.setState < 2){
            this.$router.push({name: 'password-first'});
          } else {
            this.$router.push({name: 'paswd-modify'});
          }
          break;
        case "手机": 
          if (item.setState < 2){
            this.$router.push({name: 'bind-mobile'});
          }
          break; 
        default:
          break;
      }
    },
    // 窗口返货的参数
    getPopData(popVal){
      // console.log(popVal, 'parentData');
      if (popVal.type == 1) {  // 身份
        this.personalData.userRole = popVal.roleItemObj.id;
        this.popData.showType = popVal.showType;
      } else if (popVal.type == 2) { // 兴趣
        if (popVal.selectTags.size) {
          this.personalData.lables = popVal.selectTags
          this.popData.showType = popVal.showType;
        }
      } else { // undefind
        console.log(popVal);
        this.popData.showType = popVal.showType;
        return
      }
      
    },
    // 身份状态切换回调函数
    getRoleName(index){
      switch (index) {
        case 1:
          return '旅行家'
          break;
        case 2:
          return '探索者'
          break;
        case 3:
          return '文创师'
          break;
        default:
          return '未设定'
          break;
      }
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
   .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
