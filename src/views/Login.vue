<template>
    <div>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
            </el-form-item>
            <el-form-item>
<!--                <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>-->
                <el-button type="primary" v-on:click="submitLogin('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>

        <el-dialog
                title="温馨提示"
                :visible.sync="dialogVisible"
                width="30%">
<!--                :before-close="handleClose">-->
            <span>请输入账号和密码</span>
            <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },

                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                rules: {
                    username: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                },

                // 对话框显示和隐藏
                dialogVisible: false
            }
        },
        methods: {
            onSubmit(formName) {

                // console.log(this.form.username)
                // console.log(this.form.password)
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                        this.$router.push("/main");
                    } else {
                        this.dialogVisible = true;
                        return false;
                    }
                });
            },
            wrong(){
                this.$alert('账号或密码错误', '',{
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                })
            },

            submitLogin () {
                // console.log(this.$refs.loginForm)
                // this.$refs.loginForm.validate(valid => {
                //     if (valid) {
                //         let loginForm=this.$refs.loginForm
                //         console.log(this.form.username)
                //         console.log(this.form.password)
                //         axios.post('http://localhost:8080/login', {
                //             user: loginForm.user,
                //             pass: loginForm.pass
                //         })
                //             .then((response) => {
                //                 if (response.status === 200) {
                //                     this.$store.commit('SET_TOKEN', response.data.token)
                //                     this.$store.commit('GET_USER', response.data.user)
                //                     this.$message({
                //                         message: '登陆成功',
                //                         type: 'success'
                //                     })
                //                     this.$router.push({name: 'activity'})
                //                 }
                //             })
                //             .catch(function (error) {
                //                 console.log(error)
                //             })
                //     } else {
                //         console.log('error submit!!')
                //         return false
                //     }
                // })

                let loginForm=this.form
                console.log(loginForm.username)
                console.log(loginForm.password)
                let param = new URLSearchParams()
                param.append('user',loginForm.username )
                param.append('pass', loginForm.password)
                axios({
                    method: 'post',
                    url: 'http://175.24.55.105:8080/login',
                    data: param,
                })
                    .then((response) => {
                                    if (response.status === 200) {
                                        this.$store.commit('SET_TOKEN', response.data.token)
                                        this.$store.commit('GET_USER', response.data.user)
                                        this.$message({
                                            message: '登陆成功',
                                            type: 'success'
                                        })
                                        // this.$router.push({name: 'MainPage' })
                                        this.$router.push('/main')
                                    }
                                    // }else{
                                    //     console.log(response.status)
                                    //     this.$alert('账号或密码错误', '',{
                                    //         confirmButtonText: '确定',
                                    //         callback: action => {
                                    //             this.$message({
                                    //                 type: 'info',
                                    //                 message: `action: ${ action }`
                                    //             });
                                    //         }
                                    //     })
                                    // }
                                })
                                .catch(function (error) {
                                    alert("账号或密码错误")
                                    console.log(error)
                                })
            },
        }
    }


</script>

<style lang="scss" scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px #909399;
    }

    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #303133;
    }
</style>