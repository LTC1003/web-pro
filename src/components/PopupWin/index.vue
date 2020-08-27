<template>
  <div id="popup" @click.self="onClose()">
    <div class="container-pop">
      <!-- {{defaultLiterals}} -->
      <div class="popheader">
        <div class="title">{{defTitle}}</div>
        <div class="closebtn el-icon-close" @click="onClose()"></div>
      </div>
      <div class="popbody">
        <div class="selectair" v-show="popData.type == 1">
          <el-select class="el-select" v-model="selectValue" placeholder="请选择" v-show="1">
            <el-option
              v-for="item in defaultData"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          <button class="setbutton" @click="setClick()">确认修改</button>
        </div>
        <!-- 2区 -->
        <div class="tags" v-show="popData.type == 2">
          <el-tag
            :class="tag.name"
            v-for="tag in tags" 
            :key="tag.id"
            @click="optionTags(tag.name)"
            >
            {{tag.name}}
          </el-tag>
        </div>
        <div class="outUser" v-show="popData.type == 3">
          <div>你确定要退出当前账号？</div>
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
    // visible: {
    //   type: Boolean,
    //   default: false,
    // }
  },
  data () {

    return {
      // defaultLiterals: '公用弹窗组件',
      defaultData: '默认初始数据',
      defTitle: 'defTitle',
      selectValue: '',
      // options: [
      //   {value: 'value1', label: 'label1'},
      //   {value: 'value2', label: 'label2'},
      //   {value: 'value3', label: 'label3'}
      // ],
      tags: [
        // {name: 'tsg1', type: '#2591f1' },
        // {name: 'tsg2', type: '#9b1d11' },
        // {name: 'tsg3', type: '#38c993' },
        // {name: 'tsg4', type: '#f959e2' },
        // {name: 'tsg5', type: '#FB897A' },
        // {name: 'tsg6', type: '#FFCD5C' },
        // {name: 'tsg7', type: '#CDABDA' },
      ],
      setArr: new Set([]),
      // activeTag: true,
      // bgcolorTag: [activeTag1, activeTag2, activeTag3],
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
    onClose(){
      this.$emit('onFromPopData', false);
    },
    setClick(){
      if(this.selectValue){
        // 值不为空， 传回数据
        let roleItemObj;
        this.defaultData.forEach((val, i) => {
          if(val.name === this.selectValue){
            roleItemObj = val
          }
        })
        console.log(roleItemObj);
        this.$emit('onFromPopData', {showType: false, roleItemObj});
      }
    },
    // 确定退出调接口
    outRight(){
      if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token){
        this.$api.userInfo.outUsers({token: JSON.parse(localStorage.loginUserInfo).token}).then(
          res => {
            if(res.message === "操作成功") {
              this.$emit('onFromPopData', {showType: false, islogin: 0});
              localStorage.clear();
              this.$router.push('/');
            } else {
              if (res.message === "token失效,重新登录") {
                this.$emit('onFromPopData', {showType: false, islogin: 0});
                localStorage.clear();
                this.$router.push('/');
              }
            }
          }
        )
      } else {
        this.$message.error('token is null userOut!')
      }
    },
    // 选择颜色
    optionTags(keyName){
      // 点击单数选择改变颜色，点击双数放弃回复颜色
      let className = document.getElementsByClassName(keyName);
      if (this.setArr.has(keyName)){ // SET查询 
        // repeat返回 true
        this.setArr.delete(keyName);
        className[0].style.background = '';
		    className[0].style.color = '#666'
        //全部删除 // setArr.clear();
      } else {
        // no-repeat返回 false
        this.setArr.add(keyName);
        className[0].style.background = this.isColorBG(keyName);
		    className[0].style.color = '#fff'
      }
      console.log(this.setArr, '成功');
    },
  },
  watch: {
    popData: {
      handler(n, o){
        console.log(n, 'pop');
        switch (n.type) {
          case 1:    
          this.defaultData = n.data;
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
          console.log(n.data);
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