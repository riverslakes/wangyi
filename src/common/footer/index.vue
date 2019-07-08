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
    height: 2rem;
    position: relative;
    top:.6rem;
}
.foot_n{
    width: 90%;
    height: .72rem;
    line-height: .72rem;
    border: 1px solid #ffffff;
    text-align: center;
    background: #e74c2e ;
    position: relative;
    top:.3rem;
    margin:0 auto;
    border-radius:6px;
}
.foot_n a{
    color: #ffffff;
}
.foot_m{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    position: relative;
    top:.86rem;
}
.foot_m ul{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
}
.foot_m ul li{
    margin-left: .56rem;
    font-size: .24rem
}
.foot_m ul li:nth-child(4){
    color: red
}
</style>
