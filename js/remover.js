(async(x,f,e,r,s)=>{
    (await new Promise(r=>document.readyState=='complete'?r():window.addEventListener('load',r))),
    (r=(a,b)=>{
        return(b=a('video'))?(
            b.addEventListener('timeupdate',_=>{
                e(d=>(
                    (d=a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button'))&&d.click()
                )),
                e(_=>(
                    a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button')&&(b.currentTime=b.duration)
                ))
            }),
            (t=>(x.send=function(_){_&&f(s),t.call(this,_)}))(x.send)
        )
        :setTimeout(r,350,a)
    })(s=>document.querySelector(s)),
    f(s)
})(
    XMLHttpRequest.prototype,
    c=>(
        (s=c||new CSSStyleSheet).replaceSync(
            `${[...document.querySelectorAll('body *')].filter(e=>e.tagName.match(/ads?\-renderer$/i)).map(v=>v.tagName.toLowerCase()).join(',')}{position:fixed;right:9999rem}`
        ),
        document.adoptedStyleSheets=[s]
    ),
    f=>{try{f()}catch(e){}}
)
