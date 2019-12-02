<template>
  <div class="main">
    {{viewData}}
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <div>
      <div>
        <Button type="default" ghost>Default</Button>
        <Button type="primary" ghost>Primary</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="text" ghost>Text</Button>
        <Button type="info" ghost>Info</Button>
        <Button type="success" ghost>Success</Button>
        <Button type="warning" ghost>Warning</Button>
        <Button type="error" ghost>Error</Button>
      </div>
      <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {

  },
  component:{},
  data() {
    return {
      viewData: '页面主要内容'
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
    @import 'Main';
</style>
