<template>
    <div id="goLink">Go</div>
</template>

<script>
export default {
    mounted(){
    var goLink = document.getElementById("goLink");
   
    window.onscroll = computedDisplay;
    function computedDisplay() {
        var curTop = document.documentElement.scrollTop || document.body.scrollTop;
        var curHeight = 800;
        goLink.style.display = curTop > curHeight ? "block" : "none";
    }
    goLink.onclick = function () {
        
        this.style.display = "none";
        window.onscroll = null;

        var duration = 30, interval = 10, target = document.documentElement.scrollTop || document.body.scrollTop;
        var step = (target / duration) * interval;
    
        var timer = window.setInterval(function () {
            var curTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (curTop === 0) {
                window.clearInterval(timer);
                window.onscroll = computedDisplay;
                return;
            }
            curTop -= step;
            document.documentElement.scrollTop = curTop;
            document.body.scrollTop = curTop;
        }, interval)
    }
    }
}
</script>

<style>
   #goLink {
            display: none;
            position: fixed; /*说只要加了position，元素自己就变成了块状*/
            bottom: 1rem;
            right: 0.4rem;
            width: .8rem;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            background: #000;
            border-radius: 50%;
			font-size:.28rem;
			color:#FFF;
            
            opacity: 0.5;
            z-index: 10;
        }
        #goLink:hover {
            opacity: 1;
            filter: alpha(opacity=100);
        }
</style>
