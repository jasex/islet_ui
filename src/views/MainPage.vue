<template>
    <div>
        <el-container >
            <el-aside width="200px" style="background-color: white"></el-aside>
            <el-main style="height: 900px;background-color: #F2F6FC;border-radius: 25px">
                <el-carousel :interval="4000" type="card" height="500px">
                    <el-carousel-item style="border-radius: 20px">
<!--                        <h3 class="medium" style="size: 10px">{{quotes[0].quote}}-->
<!--                            {{quotes[0].author}}</h3>-->
                        <font color="#6666FF" size="5px">{{quotes[0].quote}}</font><br>
                        <font color="#909388" size="4px">--{{quotes[0].author}}</font>
                    </el-carousel-item>
                    <el-carousel-item style="border-radius: 20px">
                        <font color="#6666FF" size="5px">{{quotes[1].quote}}</font><br>
                        <font color="#909388" size="4px">--{{quotes[1].author}}</font>
                    </el-carousel-item>
                    <el-carousel-item style="border-radius: 20px">
                        <font color="#6666FF" size="5px">{{quotes[2].quote}}</font><br>
                        <font color="#909388" size="4px">--{{quotes[2].author}}</font>
                    </el-carousel-item>
                </el-carousel>
                <font color="#FBA9C7" size="18px">Daily Quote</font>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MainPage",
        methods: {

        },
        data() {
            return {
                quotes:[{"author":"Henry Kissinger","quote":"The illegal we do immediately. The unconstitutional takes a little longer."},{"author":"Art Buchwald","quote":"You can't make up anything anymore. The world itself is a satire. All you're doing is recording it."},{"author":"Jacob Braude","quote":"Always behave like a duck - keep calm and unruffled on the surface but paddle like the devil underneath."}]
            }

        },
        created() {
            console.log(123)
            axios.get("http://175.24.55.105:8080/quote").then((response)=>{
                console.log(response.data)
                this.quotes=response.data
            })
        }
    }
</script>

<style scoped>

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>