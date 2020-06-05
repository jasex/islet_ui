<template>
    <div>
        <el-container>
            <el-aside width="200px" style="background-color: white"></el-aside>
            <el-main style="height: 900px;background-color: #F2F6FC;border-radius: 25px;">
                <el-main class="img_box" style="height: 400px;width: 100%;border-radius: 25px;"></el-main>
                <font color="#909399" size="5px" style="position: absolute; top: 450px;right: 280px">Try to understand other people's ideas instead of attacking all opinions that are different from your own</font>

                <el-button type="primary" round style="position: absolute;top: 60%;right: 17%" icon="el-icon-chat-line-round" v-on:click="getTree()"></el-button>
                <el-main style="height: 140px;width: 89%;position: absolute;top: 65%;border-radius: 25px">
                    <font color="#ff572f" style="text-align: center;font-weight: bold;line-height: 0px" size="3px">{{quote.quote}}</font>
                </el-main>
                <el-form ref="TreeForm" :model="form" label-width="80px" class="" style="position: absolute;top: 800px;width: 1000px;left: 600px">
                    <el-form-item prop="tree" label="Upload">
                        <el-input v-model="form.tree" type="textarea" placeholder="上传我的小纸条"  @input="change($event)"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="position: absolute;left: 40%" type="primary" v-on:click="submitTree('tree')">上传</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Tree",
        data() {
            return {
                form: {
                   quote: ''
                },
                quote: {"quote":""}
            }
        },created() {
            axios.get("http://175.24.55.105:8080/getTree").then((response)=>{
                console.log(response.data)
                this.quote=response.data
            })
            console.log(this.quote.quote)

        },
        methods: {
            change(e){
                this.$forceUpdate()
            },
            submitTree(){
                this.$message({
                    message: '恭喜你，上传成功',
                    type: 'success'
                });
                let tree=this.form
                let param = new URLSearchParams()
                param.append('quote',tree.tree )
                axios({
                    method: 'post',
                    url: 'http://175.24.55.105:8080/postTree',
                    data: param,
                })
            },

            getTree(){
                axios.get("http://175.24.55.105:8080/getTree").then((response)=>{
                    console.log(response.data)
                    this.quote=response.data
                })
            }
        }


    }
</script>

<style scoped>
    .img_box{
        background-image: url("../assets/time.jpg");
    }
</style>