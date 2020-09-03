<template>
  <div id="popup" >
    <div class="container-pop">
      <!-- {{defaultLiterals}} -->
      <div class="popheader">
        <div class="title">{{defTitle}}</div>
        <div class="closebtn el-icon-close" @click="onClose()"></div>
      </div>
      <div class="popbody">
        <!-- 1区 -->
        <div class="selectair" v-show="popData.type == 1">
          <el-select class="el-select" v-model="selectRole" placeholder="请选择" v-show="1">
            <el-option
              v-for="item in userRoles"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          <button class="setbutton" @click="setClick">确认修改</button>
        </div>
        <!-- 2区 -->
        <div class="tags" v-show="popData.type == 2">
          <el-tag
            :class="tag.name"
            v-for="tag in tags" 
            :key="tag.id"
            @click="optionTags(tag, tag.name, tag.id)"
            >
            {{tag.name}}
          </el-tag>
          <div v-show="isTagErrMsg"  style="color: #f00; text-align: center; margin: 10px">{{errMsgText}}</div>
          <div class="btn-group">
            <button class="setbutton" @click="setDataTags">确认修改</button>
          </div>
        </div>
        <!-- 2区 -->
        <div class="outUser" v-show="popData.type == 3">
          <div class="outelart">你确定要退出当前账号？</div>
          <button class="setbutton" @click="outRight">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'popup-win',
  props: {
    popData: '',
  },
  data () {
    return {
      errMsgText: '',
      isTagErrMsg: false, //tag err提示 
      userRoles: 'userRoles',
      defTitle: 'defTitle',
      selectRole: '',
      tags: [],
      setArr: new Set([]),
      bgcolor: '',
      isColorBG : function(key){
        switch (key) {
          case '美食小吃':
            return'#22e7e4'
            break;
          case '笔墨书画':
            return'#FFCD5C'
            break;
          case '历史文化':
            return'rgb(219, 11, 11)'
            break;
          case '户外探险':
            return'rgb(199, 23, 140)'
            break;
          case '野外垂钓':
            return'#CDABDA'
            break;
          case '名胜古迹':
            return'#FB897A'
            break;
          case '文物艺术':
            return'#c05358'
            break;
          case '自然风光':
            return'#61ce4b'
            break;
          case '娱乐休闲':
            return'#6fa5c9'
            break;
          default:
            return'666'
            break;
        }
      },
    }
  },
  mounted() {

  },
  methods: {
    // 选择角色后确认
    setClick(){
      if(this.selectRole){
        // 值不为空， 传回数据
        let roleItemObj;
        this.userRoles.forEach((val, i) => {
          if(val.name === this.selectRole){
            roleItemObj = val
          }
        })
        // console.log(roleItemObj, 77878778878);
        this.$emit('onFromPopData', {showType: false, type: 1, roleItemObj});
      }
    },
    // 选择颜色
    optionTags(tagObj, tagName, tagid){
      // 点击单数选择改变颜色，点击双数放弃回复颜色
      let className = document.getElementsByClassName(tagName);
      console.log(this.setArr.size)
      if (this.setArr.has(tagObj)){ // SET查询 
        // repeat返回 true
        this.setArr.delete(tagObj);
        className[0].style.background = '';
        className[0].style.color = ''
        //全部删除 // setArr.clear();
      } else {
        // no-repeat返回 false
        if(this.setArr.size > 2){
          this.errMsgText = '最多不超过3个';
          this.isTagErrMsg = true;
        } else {
          tagObj['bgcolor'] = this.isColorBG(tagName)
          className[0].style.background = this.isColorBG(tagName);
          className[0].style.color = '#fff'
          this.setArr.add(tagObj);
        }
      }
    },
    // 提交选择的兴趣
    setDataTags(){
      // console.log(this.setArr.size);
      if(this.setArr.size){
        this.$emit('onFromPopData', {showType: false, type: 2, selectTags: this.setArr});
      } else {
        this.errMsgText = '不少于一个';
        this.isTagErrMsg = true;
      }
    },
    // 确定退出调接口
    outRight(){
      if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token){
        this.$api.userInfo.outUsers({token: JSON.parse(localStorage.loginUserInfo).token}).then(res => {
          if(res.message === "操作成功") {
            this.$emit('onFromPopData', {showType: false, type: 3, islogin: 0});
            localStorage.clear();
            this.$router.push('/');
          } else {
            if (res.message === "token失效,重新登录") {
              // this.$emit('onFromPopData', {showType: false, type: 3, islogin: 1});
              console.log('token失效,重新登录')
            }
          }
        });
      } else {
        this.$message.error('token is null userOut!');
        this.$emit('onFromPopData', {showType: false, islogin: 0});
      }
    },
    // 关闭窗口
    onClose(){
      // this.$emit('onFromPopData', false);
      this.$emit('onFromPopData', {showType: false, islogin: 1});
    },
  },
  watch: {
    popData: {
      handler(n, o){
        // console.log(n, o,'pop');
        switch (n.type) {
          case 1:    
          this.userRoles = n.data;
          this.defTitle = '修改身份'   
            break; 
          case 2:    
          this.tags = n.data;
          this.defTitle = '添加兴趣'       
            break;
          case 3:    
          this.defTitle = n.docs
          this.defTitle = '退出'   
            break;           
          default: 
            break;
        }
      },
      deep:true
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss'
</style> 