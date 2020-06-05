<template>
    <div>
        <el-container >
            <el-aside width="200px" style="background-color: white"></el-aside>
            <el-main style="height: 900px;background-color: #F2F6FC;border-radius: 25px;">

                <el-image :src="require('../assets/relax/'+urls[0])" fit="cover" lazy></el-image>
                <el-image :src="require('../assets/relax/'+urls[1])" fit="cover" lazy></el-image>
                <el-image :src="require('../assets/relax/'+urls[2])" fit="cover" lazy></el-image>

            </el-main>

        </el-container>

    </div>
</template>

<script>
    import axios from 'axios'
    // export default {
    //     name: "Time",
    //
    //     methods: {
    //
    //     }
    // }

    export default {
        data() {
            return {
                urls: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ]
            };
        },
        created() {
            this.$message({
                message: '每天我们会提供美图欣赏',
                type: 'success'
            });
            axios.get("http://175.24.55.105:8080/relax").then((response)=>{
                var str=response.data
                console.log(response.data)
                var stringResult=str.split(',')
                //this.urls[0]=stringResult[0]
                //this.urls[1]=stringResult[1]
                //this.urls[2]=stringResult[2]
                this.urls=stringResult
                console.log(this.urls[0])
                console.log(this.urls[1])
                console.log(this.urls[2])
                console.log(this.urls)
            })
            console.log(this.urls)
            console.log(this.urls[1])

        },
        methods: {

        }
    }

</script>

<style>

    .img_box{
        width: 50%;height: 40%;
        background-image: url(../assets/time.jpg);
        background-size: cover; /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
        /*position: absolute; !* 不可缺少 *!*/
        z-index: -1;
        position: center;
        background-repeat: no-repeat;
        /* overflow: hidden; */
        /* overflow: auto; */
    }
</style>