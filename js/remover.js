window.addEventListener("load",function() {
    (async function _f(){
        var a=(v)=>document.querySelector(v);
        var b=a("video");
        if(!b){
            return setTimeout(_f, 500);
        }
        b.ontimeupdate=()=>{
            try{
                var d=a(".ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button");
                if(d){
                    d.click();
                }
            }catch(e){}
            try{
                var c=a(".ad-showing");
                var e=b.duration;
                if(c){
                    b.currentTime=e;
                }
            }catch(e){}
        }
    })();
});
