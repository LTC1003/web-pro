<template>
    <div>
        {{viewData}}
    </div>
</template>
<script>
export default {
    name: 'Login',
    component: {},
    data() {
        return {
            viewData: '用户登录注册页面'
        }
    },
    mounted() {
        this.funs;
    },
    methods: {
        funs :function () {
            console.log('登录获取方法打印');
        }
    },
}
</script>