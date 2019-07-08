<template>
    <div>
        <div id="foot">
            <div class="foot_n">
                <a href="#">下载网易云阅读客户端</a>
            </div>

            <div class="foot_m">
                <ul>
                    <li>客户端</li>
                    <li>帮助</li>
                    <li>反馈</li>
                    <li>触屏幕</li>
                    <li>电脑版</li>
                </ul>
                <p>网易公司版权99999999</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"footer"
}
</script>

<style>
#foot{
    width: 100%;
    height: 2.4rem;

}
.foot_n{
    width: 90%;
    height: .72rem;
    line-height: .72rem;
    border: 1px solid #ffffff;
    text-align: center;
    background: #e74c2e ;
    margin:0 auto;
    border-radius:6px;
}
.foot_n a{
    color: #ffffff;
}
.foot_m{
  width: 6.68rem;
  margin-top: 0.4rem;
}
.foot_m ul{
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.foot_m ul li{
    margin-left: .56rem;
    font-size: .24rem
}
.foot_m ul li:nth-child(4){
    color: red
}
.foot_m P{
    font-size: 0.28rem;
    color: #bbb;
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 6.68rem;
    margin: auto;
    margin-top: 0.2rem;
}
</style>
