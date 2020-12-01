(async(x,f,e,r,s)=>{
    (await new Promise(r=>document.readyState=='complete'?r():window.addEventListener('load',r))),
    (r=(a,b,c)=>{
        return(b=a('video'))?(
            b.addEventListener('ontimeupdate',_=>{
                e(d=>(
                    (d=a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button'))&&d.click()
                )),
                e(c=>(
                    a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button')&&(b.currentTime=b.duration)
                ))
            }),
            (t=>(x.send=function(_){_&&f(s),t.call(this,_)}))(x.send)
        )
        :setTimeout(r.bind(this,a),500)
    })(_=>document.querySelector(_)),
    f(s)
})(
    XMLHttpRequest.prototype,
    _=>(
        (s=_||new CSSStyleSheet).replaceSync(
            `${[...document.querySelectorAll('body *')].filter(e=>e.tagName.match(/ads?\-renderer$/i)).map(v=>v.tagName.toLowerCase()).join(',')}{position:fixed;right:9999rem}`
        ),
        document.adoptedStyleSheets=[s]
    ),
    _=>{try{_()}catch(e){}}
)
