(async(x,f,e,r,s)=>{
    (await new Promise(r=>document.readyState=='complete'?r():window.addEventListener('load',r))),
    (r=(a,b,c)=>{
        return(b=a('video'))?(
            b.addEventListener('timeupdate',_=>{
                e(d=>(
                    (d=a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button'))&&d.click()
                )),
                e(c=>(
                    a('.ad-showing')&&(b.currentTime=b.duration)
                ))
            }),
            (t=>(x.send=function(_){t.call(this,_), _&&this.addEventListener('load',f)}))(x.send)
        )
        :setTimeout(r,500,a)
    })(_=>document.querySelector(_)),
    f()
})(
    window.XMLHttpRequest.prototype,
    (_,x)=>(
        (x=[...document.querySelectorAll('body *')].filter(e=>e.tagName.match(/[^a-z]ads?\-renderer$/i)).map((v,i,a)=>(v.tagName.toLowerCase())).join(',')),
        x&&((_=new CSSStyleSheet).replaceSync(
            `${x}{position:fixed;right:9999rem}`
        ),document.adoptedStyleSheets=[_]),
        console.log('<f>',_,x||'null')
    ),
    _=>{try{_()}catch(e){}}
)
