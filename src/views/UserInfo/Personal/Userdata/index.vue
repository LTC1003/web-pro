
<template>
  <div class="personal"> 
    <h2 class="caption">我的信息</h2>
    <div class="userinfo-list">
      <div class="list">
        <!-- <div class="label"></div> -->
        <el-form ref="personalData" :model="personalData" 
          label-width="80px" 
          style="">
          <el-form-item label="头像">
            <el-avatar class="avatar" :src="personalData.avatar"></el-avatar>
          </el-form-item>
          <el-form-item label="身份">
            <el-button round plain type="warning" size="mini">{{personalData.roleName}}</el-button>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input class="inputmini" v-model="personalData.userName"></el-input>
          </el-form-item>
          <el-form-item label="名片">
            <el-input class="inputSamll" type="text" v-model="personalData.userCard"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input class="inputSamll" type="textarea" v-model="personalData.userSignature"></el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-select class="inputmini" v-model="personalData.region" placeholder="请选择">
              <el-option label="上海" value="上海"></el-option>
              <el-option label="北京" value="北京"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="兴趣爱好">
            <el-tag
              v-for="tag in personalData.lableIds" :key="tag">
              {{tag}}
            </el-tag>
            <el-button class="addtag" @click="getTagsList()">+Tag</el-button>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button round size="small" style="width: 130px; margin-left: -80px" type="danger" @click="onSubmit">保存</el-button>
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
export default {
  name: "userdata",
  components: {
    PopupWin,
  },
  data() {
    return {
      
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
        userName: '吗快没电',
        userCard: '',
        userSignature: '',
        userRole: '',
        roles: {
          name: '默认'
        }, // 身份集合
        roleName: '身份',
        lableIds: [1,2,3,4,5,6],
        province: '',
        city: '', 
        country: '',
        region: {
          value: 'tianjin',
        },
      },
      setDataRow: [
        {setType: '手机', setState: 0, setbtn: '修改手机'},
        {setType: 'QQ', setState: 0, setbtn: '解绑'},
        {setType: '微信', setState: 0, setbtn: '绑定'},
        {setType: '微博', setState: 0, setbtn: '绑定'},
        {setType: '密码', setState: 2, setbtn: '设置密码'},
      ],
    }
  },
  mounted() {
    if(localStorage && localStorage.loginUserInfo){
      this.personalData = JSON.parse(localStorage.loginUserInfo)
      // console.log( this.personalData, 90890);
     
      this.setDataRow.forEach((val,key) =>{
        if(val.setType == "密码"){
          val.setState = this.personalData.passwordStatus;
        }
      });
    }
  },
  methods: {
    onSubmit(){
      console.log(this.personalData, 'rrrr')
      let user = {
        id: this.personalData.id,
        // userRole: this.personalData.roles.id,
        userRole: 2,
        lables: [4,6,7],
        token: this.personalData.token
      }
      this.$api.userInfo.updateUserRole(JSON.parse(JSON.stringify(user))).then(res => {
        console.log(res.message);
      });
    },
    // 身份角色
    setRole(){
      // token: c897553fa9914dfdb0d5e7ad5907042b
      this.$api.userInfo.getRoleList({token: this.personalData.token}).then(res => {
        console.log(res.data.result, 'role')
        this.popData.showType = true;
        this.popData.type = 1;
        this.popData.data= res.data.result;
      })
    },
    // 兴趣标签
    getTagsList(){ 
      this.$api.userInfo.tagsList({token: this.personalData.token}).then(
        res => {
          // id name icon
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
    // parent dispatch child
    getPopData(popVal){
      console.log(popVal, 'parentData');
      //roleVal: "探索者"
      // showType: false
      this.personalData.roles = popVal.roleVal;
      this.personalData.roleName = popVal.roleVal.name;
      this.popData.showType = popVal.showType;
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
