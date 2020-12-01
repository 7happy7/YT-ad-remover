(async(x,f,e,r,s)=>{
    (await new Promise(r=>document.readyState=='complete'?r():window.addEventListener('load',r))),
    (r=(a,b,c)=>{
        return(b=a('video'))?(
            b.addEventListener('timeupdate',_=>{
                e(d=>(
                    (d=a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button'))&&d.click()
                )),
                e(c=>(
                    a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button')&&(b.currentTime=b.duration)
                ))
            }),
            (t=>(x.send=function(_){_&&f(),t.call(this,_)}))(x.send)
        )
        :setTimeout(r,500,a)
    })(_=>document.querySelector(_)),
    f()
})(
    XMLHttpRequest.prototype,
    (_,x)=>(
        (x=[...document.querySelectorAll('body *')].filter(e=>e.tagName.match(/ads?\-renderer$/i)).map(v=>v.tagName.toLowerCase()).join(',')),
        x&&((_=new CSSStyleSheet).replaceSync(
            `${x}{position:fixed;right:9999rem}`
        ),document.adoptedStyleSheets=[_],console.log(_)),
        _
    ),
    _=>{try{_()}catch(e){}}
)
