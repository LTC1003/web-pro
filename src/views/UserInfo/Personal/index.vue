<template>
  <div class="personal"> 
    <h2 class="caption">我的信息</h2>
    <div class="userinfo-list">
      <div class="list">
        <!-- <div class="label"></div> -->
        <el-form ref="form" :model="form" 
          label-width="80px" 
          style="">
          <el-form-item label="头像">
            <el-avatar class="avatar" :src="form.userAvatar"></el-avatar>
          </el-form-item>
          <el-form-item label="身份">
            <el-button round plain type="warning" size="mini">{{form.roleName}}</el-button>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input class="inputmini" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="名片">
            <el-input class="inputSamll" type="text" v-model="form.motto"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input class="inputSamll" type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-select class="inputmini" v-model="form.region" placeholder="请选择">
              <el-option label="区域一" value="上海"></el-option>
              <el-option label="区域二" value="北京"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="兴趣爱好">
            <el-tag
              v-for="tag in tagList" :key="tag">
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
        <el-button class="setbtn">{{item.setbtn}}</el-button>
      </div>
    </div>
    <!-- 引用弹出组件 -->
    <PopupWin :popData="popData" @onFromPopData="getPopData" v-show="popData.showType"></PopupWin>
  </div>
</template>

<script>
import PopupWin from "@/components/PopupWin"
export default {
  name: "personal",
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
      tagList: ['名胜古迹','野外垂钓','毕摩登感'],
      form: {
        userAvatar: '',
        name: '吗快没电',
        motto: '',
        desc: '',
        userRole: '',
        roleName: '未获取身份',
        region: {
          value: 'tianjin',
        },
      },
      setDataRow: [
        {setType: '手机', setState: 0, setbtn: '修改手机'},
        {setType: 'QQ', setState: 1, setbtn: '解绑'},
        {setType: '微信', setState: 0, setbtn: '绑定'},
        {setType: '微博', setState: 0, setbtn: '绑定'},
        {setType: '密码', setState: 4, setbtn: '设置密码'},
      ],
      userInfoDate: '',
    }
  },
  mounted() {
    if(localStorage && localStorage.loginUserInfo){
      this.userInfoDate = JSON.parse(localStorage.loginUserInfo)
      this.form.userAvatar = this.userInfoDate.avatar;
      this.form.name = this.userInfoDate.userName;
      this.form.motto = this.userInfoDate.userCard;
      this.form.desc = this.userInfoDate.userSignature;
      this.form.userRole = this.userInfoDate.userRole; // 兴趣爱好
      this.form.province = this.userInfoDate.province; // 省
      this.form.city = this.userInfoDate.city; // 市
      this.form.country = this.userInfoDate.country; //乡镇
      // this.setDataRow = this.userInfoDate.userMobile;
    }
  },
  methods: {
    // handleClose(tag) {
    //   this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    // },

    // showInput() {
    //   this.inputVisible = true;
    //   this.$nextTick(_ => {
    //     this.$refs.saveTagInput.$refs.input.focus();
    //   });
    // },

    // handleInputConfirm() {
    //   let inputValue = this.inputValue;
    //   if (inputValue) {
    //     this.dynamicTags.push(inputValue);
    //   }
    //   this.inputVisible = false;
    //   this.inputValue = '';
    // },

    onSubmit(){

    },
    // 身份角色
    setRole(){
      // token: c897553fa9914dfdb0d5e7ad5907042b
      this.$api.userInfo.setRoleList({token: this.userInfoDate.token}).then(res => {
        console.log(res.data.result, 'role')
        this.popData.showType = true;
        this.popData.type = 1;
        this.popData.data= res.data.result;
      })
    },
    // 兴趣标签
    getTagsList(){ 
      this.$api.userInfo.tagsList({token: this.userInfoDate.token}).then(
        res => {
          // id name icon
          console.log(res.data.result, 'tags');
          this.popData.showType = true;
          this.popData.type = 2;
          this.popData.data= res.data.result;
        }
      )
    },
    // parent dispatch child
    getPopData(popVal){
      console.log(popVal, 'parentData');
      //roleVal: "探索者"
      // showType: false
      this.form.roleName = popVal.roleVal;
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
