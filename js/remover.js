((glb,dl)=>{
    glb._audioEP = {};
    glb._audioEP.itag = {};
    glb._audioEP.btn = document.createElement('button');
    (document.querySelector('#buttons') || document.body).appendChild(glb._audioEP.btn);
    glb._audioEP.btn.innerText = 'mp3';
    glb._audioEP.btn.onclick = e=>{var t = glb._audioEP.itag[ Object.keys(glb._audioEP.itag).sort((a,b)=>a<b?1:-1)[0] ]; t && t.d()}
    (async(x,f,m,e,r,s)=>{
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
                (t=>(x.send=function(_,u){ t.call(this,_), this.addEventListener('load',_?f:m) }))(x.send)
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
        (_,x,i,t)=>{
            (x = _.target.responseURL, x.match(/mime=audio%2Fweb[am]/) && window.ytplayer && ytplayer.config && ytplayer.config.args && x.match(decodeURIComponent(ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[0].signatureCipher).split(/\?|&/).find(v=>v.match(/^id=/))) && (
                i = (location.href.split(/\?|&/).find(v=>v.match(/^v=/))||'').replace(/^v=/,''),
                t = x.match(/itag=(\d+?)&/)[1],

                x = x.replace(/(&range=)[0-9-]*?(&)/ig, '$10-99999999999999$2'),
                (document.querySelector('#buttons') || document.body).appendChild(glb._audioEP.btn),
                glb._audioEP.itag = glb._audioEP.id==i ? (glb._audioEP.itag || {}) : (glb._audioEP.id = i, {}),
                glb._audioEP.itag[t] = glb._audioEP.itag[t] || new dl(x,i,ytplayer.config.args.title)
            ))
        },
        _=>{try{_()}catch(e){}}
    )
})(
    this,
    class {
        constructor(u,i,t) {
            this.t = t||'sample', this.i = i, this.u = u, this.a = document.createElement('a')
        }
        async d() {
            confirm(`are you sure you want to download "${this.t}.mp3 (id: ${this.i})"?`) && (
                this.a.setAttribute('download', `${this.t}.mp3`),
                this.a.href = URL.createObjectURL(new Blob([await(await fetch(this.u)).arrayBuffer()],{type:'audio/mp3'})),
                this.a.click()
            )
        }
    }
)
