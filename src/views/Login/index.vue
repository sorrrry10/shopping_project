<template>
  <div class="login">
    <h1 class="logo">LOGO</h1>
    <a href="" class="to_home" @click="$router.push('/layout')">进入官网首页&nbsp;<span style="color: #D3DAD9;">》</span></a>
  </div>
  <div class="backImg">
    <form action="" class="login_box">
      <h3 class="login_box_title">账号登录</h3>

      <el-form ref="ruleFormRef" status-icon :model="form" :rules="rules">

        <el-form-item label="账号" prop="account">
          <el-input type="text" autocomplete="off" v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" autocomplete="off" v-model="form.password" />
        </el-form-item>
        <el-form-item prop="agree" label-width="5px">
          <el-checkbox name="type" v-model="form.agree">
            我已同意隐私条款和服务条款
          </el-checkbox>
        </el-form-item>
        <el-button class="login_btn" @click="submitLoginForm">登录</el-button>
      </el-form>
    </form>
  </div>
  <div class="footer">
    <div class="footer_last_bottom">
      <ul>
        <li><a href="">关于我们</a></li>
        <li></li>
        <li><a href="">帮助中心</a></li>
        <li></li>
        <li><a href="">售后服务</a></li>
        <li></li>
        <li><a href="">配送与验收</a></li>
        <li></li>
        <li><a href="">商务合作</a></li>
        <li></li>
        <li><a href="">搜索推荐</a></li>
        <li></li>
        <li><a href="">友情链接</a></li>
      </ul>
      <p style="font-size: 12px;color: #5a5a5a;margin-top: 10px;">CopyRight@YW</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { getLoginAPI } from "@/apis/login"
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
const ruleFormRef = ref();
const form = ref({
  account: "",
  password: "",
  agree: false
})
const rules = {
  account: [
    { required: true, message: "用户名不能为空", trigger: "blur" }
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { max: 14, min: 6, message: "密码长度为6~14", trigger: "blur" }
  ],
  agree: [
    {
      validator: (rule: [], value: boolean, callback: (error?: Error) => void) => {
        if (value) {
          callback()
        } else {
          callback(new Error("请勾选协议"))
        }
      }
    }
  ]
}
const router = useRouter();
async function submitLoginForm() {
  const { account, password } = form.value;
  ruleFormRef.value.validate(async (valid: boolean) => {
    if (valid) {

      const res = await getLoginAPI(
        account, password
      )
      ElMessage({ type: "success", message: "登陆成功" })
      router.replace("/");
      userStore.getUserInfor(account, password)
      console.log("res", res);
    } else {
      console.log(false);
    }
  })
}
</script>

<style scoped lang="scss">
.agree span.active {
  color: #3378D9;
}

.footer {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer_last_bottom ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.footer_last_bottom ul li a {
  color: #5a5a5a;
}

.footer_last_bottom ul li:nth-child(even) {
  /* float: left; */
  width: 1px;
  height: 10px;
  background-color: #5a5a5a;
}

.footer_last_bottom {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login_btn {
  background-color: #3378D9;
  width: 300px;
  height: 40px;
  border: none;
  color: white;
}

.agree {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password_text {
  text-indent: 10px;
  width: 240px;
  height: 25px;
  outline: none;
  border: 1px solid #cacaca;
  background-color: white;
  margin: 10px 0;
}

.account_text {
  margin: 10px 0;
  text-indent: 10px;
  width: 240px;
  height: 25px;
  outline: none;
  border: 1px solid #c3c3c3;
  background-color: white;
}

.login_box_title {
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 20px;

}

.login_box {
  text-align: center;
  height: 270px;
  width: 350px;
  background-color: #FEFEFE;
  position: absolute;
  top: 50%;
  left: 60%;
  margin-top: -135px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  padding: 0 20px;
  box-sizing: border-box;
}

.backImg {
  position: relative;
  height: 500px;
  background-image: url("@/assets/images/logingorund.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.login {
  background-color: #fefefe;
  height: 120px;
  line-height: 120px;
  padding: 0 200px;
}

.to_home {
  float: right;
  color: #3B3B3B;
}

.to_home:hover {
  color: #3378D9;
}

.to_home:hover span {
  color: #3378D9 !important;
}
</style>
