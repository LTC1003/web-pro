<template>
  <div class="about">
    <h1 id='hid'>This is an about page</h1>
    <div>
      <Row>
        <Col span="12">div-12</Col>
        <Col span="12">div-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">
          <button></button>
        </Col>
        <Col span="8">div-8</Col>
        <Col span="8">div-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">div-6</Col>
        <Col span="6">div-6</Col>
        <Col span="6">div-6</Col>
        <Col span="6">div-6</Col>
    </Row>
    <Row>
        <Col span="4">div-4</Col>
        <Col span="4">div-4</Col>
        <Col span="4">div-4</Col>
        <Col span="4">div-4</Col>
        <Col span="2">div-2</Col>
        <Col span="2">div-2</Col>
        <Col span="4">div-4</Col>

    </Row>
    <div>
      <Button @click="value1 = true" type="primary">Open</Button>
      <Drawer title="Basic Drawer" :closable="false" v-model="value1">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
      </Drawer>
      <div>
        <input type="text">
        <div v-for="item in list" :key="item">
          <div>{{item}}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>

  export default {
    components: {
    },
    data () {
      return {
        value1: false,
        list: ['第一行','第二行','第三行']
      }
    }
  }
</script>

<style lang="scss" scoped>
  $color: red;
  #hid{
      // color: #f0f;
      color: $color;
  }
  h1{
    background: #adf;
    border-radius: 5px;
    border: 1px solid #734;
  }
  .ivu-col-span-8{
    background: #0f0;
  }
  .ivu-col{
    border: 1px solid #333;
  }
</style> 