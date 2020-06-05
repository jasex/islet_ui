<template>
    <div>
        <el-menu default-active="this.$router.path" class="el-icon-notebook-1" router mode="horizontal">
            <el-menu-item index="/relax" style="position: absolute;left: 10px; top: 0px;">
                <i class="el-icon-suitcase"></i>
                <span slot="title" >Relax</span>
            </el-menu-item>
            <el-menu-item index="/tree" style="position: absolute;left: 10px;top: 80px;">
                <i class="el-icon-postcard"></i>
                <span slot="title">      树洞      </span>
            </el-menu-item>
            <el-menu-item index="/answer" style="position: absolute; left: 10px; top: 165px;">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">答案之书</span>
            </el-menu-item>
        </el-menu>
        <router-link to="/main">
            <el-button type="primary" icon="el-icon-s-home" circle style="position: absolute; left: 70px;bottom: 80px"></el-button>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style>
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
</style>