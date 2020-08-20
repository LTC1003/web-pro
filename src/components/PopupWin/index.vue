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
            v-for="tag in tags"
            :key="tag.id"
            @click="optionTags(tag)"
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
        let roleVal;
        this.defaultData.forEach((val, i) => {
          if(val.name === this.selectValue){
            roleVal = val
          }
        })
        console.log(roleVal);
        this.$emit('onFromPopData', {showType: false, roleVal});
      }
    },
    // 确定退出调接口
    outRight(){
      console.log(JSON.parse(localStorage.loginUserInfo).token);
      this.$api.userInfo.outUsers({token: JSON.parse(localStorage.loginUserInfo).token}).then(
        res => {
          if(res.message === "操作成功") {
            this.$emit('onFromPopData', {showType: false, islogin: 0});
            localStorage.clear();
          }
        }
      )
    },
    // 选择颜色
    optionTags(keyId){
      // 点击单数选择改变颜色，点击双数放弃回复颜色
      console.log(keyId);
    }
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