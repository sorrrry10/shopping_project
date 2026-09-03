<template>
  <div class="footer_help">
    <ul>
      <li>
        <h3 class="footer_help_title">客服服务</h3>
        <div class="footer_help_content"><a href="">
            <!-- <img src="@/assets/images/onlineServer.png" alt="" class="footer_img"> -->
            <i class="iconfont icon-kefu01 footer_font_icon"></i>
            <span style="color: #a4a4a4;">在线客服</span>
          </a>
          <a href="">
            <!-- <img src="@/assets/images/problem.png" alt="" class="footer_img"> -->
            <i class="iconfont icon-wentifankui footer_font_icon"></i>
            <span style="color: #a4a4a4;">问题反馈</span></a>
        </div>
      </li>
      <li>
        <h3 class="footer_help_title">关注我们</h3>
        <div class="footer_help_content"><a href="">
            <!-- <img src="@/assets/images/wchar.png" alt="" class="footer_img"> -->
            <i class="iconfont icon-weixin footer_font_icon"></i>
            <span style="color: #a4a4a4;">公众号</span>
          </a>
          <a href="">
            <!-- <img src="@/assets/images/WB.png" alt="" class="footer_img"> -->
            <i class="iconfont icon-xinlangweibo footer_font_icon"></i>
            <span style="color: #a4a4a4;">微博</span></a>
        </div>
      </li>
      <li>
        <h3 class="footer_help_title">下载APP</h3>
        <div class="footer_help_content"><a href="">
            <img src="@/assets/images/scan.png" alt="" class="scan_img">
          </a>
          <div class="scan_content">
            <p style="color: #cbcbcb;">扫描二维码</p>
            <p style="color: #cbcbcb;">立即下载app</p>
            <button class="scan_btn">下载页面</button>
          </div>
        </div>
      </li>
      <li>
        <h3 class="footer_help_title">服务热线</h3>
        <div class="footer_help_content">
          <div style="margin: 30px 5px;">
            <h2 style="color: #5a5a5a;font-weight: 450;">400-0000-000</h2>
            <h3 style="color: #b7b7b7;font-weight: 450;">周一至周日 8:00-18:00</h3>
          </div>

        </div>
      </li>
    </ul>
  </div>
  <div class="clear"></div>

  <div class="footer_last">
    <div class="footer_last_top">
      <div style="display: flex; justify-content: center ;align-items: center;">
        <img src="@/assets/images/price.png" alt="" style="width: 50px;height: 50px; ">
        <span style="color: #eaeaea;height: 50px;font-size: 24px; line-height: 50px;">价格亲民</span>
      </div>
      <div style="display: flex; justify-content: center ;align-items: center;">
        <img src="@/assets/images/price.png" alt="" style="width: 50px;height: 50px; ">
        <span style="color: #eaeaea;height: 50px;font-size: 24px; line-height: 50px;">价格亲民</span>
      </div>
      <div style="display: flex; justify-content: center ;align-items: center;">
        <img src="@/assets/images/price.png" alt="" style="width: 50px;height: 50px; ">
        <span style="color: #eaeaea;height: 50px;font-size: 24px; line-height: 50px;">价格亲民</span>
      </div>
    </div>
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
      <p style="font-size: 12px;color: #5a5a5a;">CopyRight@YW</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer_last_bottom {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.footer_last_top {
  width: 90%;
  height: 250px;
  border-bottom: 1px solid #444444;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.footer_last {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scan_btn {
  width: 100px;
  height: 30px;
  background-color: #04af8a;
  margin-top: 10px;
  border: none;
  color: #6ef2d6;
}

.scan_content {
  width: 100px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  margin: 30px 5px;
}

.scan_img {
  width: 100px;
  height: 100px;
  display: flex;
}

.footer_font_icon {
  font-size: 40px;
  margin: 10px 0px;
  color: #5a5a5a;
}

.footer_font_icon:hover {
  color: $txtColor;
}

.footer_help_content {
  display: flex;
  justify-content: center;
}

.footer_help_content a {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dedede;
  width: 100px;
  height: 100px;
  margin: 30px 5px;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

.footer_help_title {
  margin-top: 80px;
  color: #a4a4a4;
  font-weight: 500;
}

.footer_help ul li {
  background-color: #fefefe;
  height: 350px;
  display: block;
  float: left;
  width: 25%;
  border-left: 1px solid rgb(235, 235, 235);
  text-align: center;
  /* justify-content: center; */
}

.clear {
  clear: both;
}

.footer_last {
  height: 350px;
  background-color: #2c2c2c;
  width: 100%;
}
</style>
