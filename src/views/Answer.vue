<template>
    <div>
        <el-container>
            <el-aside width="200px" style="background-color: white"></el-aside>
            <el-main style="height: 900px;background-color: #F2F6FC;border-radius: 25px" >
                <el-main class="img_box" style="height: 400px;width: 100%;border-radius: 25px;"></el-main>
                <div style="border-radius: 25px">
                    <el-input
                            style="border-radius: 20px"
                            placeholder="向宇宙发出你的疑问"
                            v-model="input"
                            clearable
                            @input="change($event)">

                    </el-input>
                    <el-button type="success" plain round style="position: absolute;top: 60%;left: 50%" v-on:click="getAnswer()">发送</el-button><br><br><br>
                    <font color="#909388" size="3px" style="position: absolute;top: 65%;left: 48%;height: 20px">{{answer.answer}}</font>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Answer",
        data() {
            return {
                answer: {"answer":"The universe will response"}
            }
        },
        methods: {
            change(e){
                this.$forceUpdate()
            },
            getAnswer(){
                axios.get("http://175.24.55.105:8080/answer").then((response)=>{
                    console.log(response.data)
                    this.answer=response.data
                })
            }
        }
    }
</script>

<style scoped>
    .img_box{
        background-image: url("../assets/answer.jpg");
    }
</style>