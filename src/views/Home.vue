<template>
    <div class="img_box">
        <!--                        <el-image :src="require('../assets/islet02.jpg')" fit="scale-down" style="width: 70%; height: 65%"></el-image>-->
        <div align="center">
            <font color="#909399" size="18px" style="position: absolute; top: 300px;right: 230px"> Peace of mind is impossible without a considerable amount of solitude.</font>
            <el-row>
                <el-button round style="position: absolute;top: 10px;right: 200px" disabled>注册</el-button>
                <router-link to="/login">
                    <el-button type="primary" round style="position: absolute;top: 10px;right: 100px">登录</el-button>
                </router-link>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home.vue"
    }
    // export default {
    //     name: "Home.vue"
    // }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }


    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .img_box{
        width: 100%;height: 100%;
        background-image: url(../assets/back.jpg);
        background-size: cover; /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
        position: absolute; /* 不可缺少 */
        z-index: -1;
        background-repeat: no-repeat;
        /* overflow: hidden; */
        /* overflow: auto; */
    }
</style>