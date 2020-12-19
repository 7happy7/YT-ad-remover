((glb,dl)=>{
    glb._audioEP = {};
    glb._audioEP.itag = {};
    glb._audioEP.btn = document.createElement('button');
    document.body.appendChild(glb._audioEP.btn);
    glb._audioEP.btn.innerText = 'mp3';
    glb._audioEP.btn.setAttribute('style','background:#065fd4;color:#fff;font-size:1.5em;font-weight:bold;position:fixed;bottom:0;left:0;outline: none!important;padding: .5em 1em;border: none!important;box-shadow: 0 0 3px #065fd4;cursor: pointer;');
    glb._audioEP.btn.onclick = e=>{
        var t = glb._audioEP.itag[ Object.keys(glb._audioEP.itag).sort((a,b)=>a<b?1:-1)[0] ];
        t && t.length==1 ? (t[0].d()) : (confirm(`Caution: ${t.length} audio files detected. Please check out each "file size" on next dialogs.`) && t.forEach(v=>v.d()));
    }
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
        async(_,x,f,o,i,t,z)=>{
            (x = _.target.responseURL, x.match(/mime=audio%2Fweb[am]/) && (
                (i = (location.href.split(/\?|&/).find(v=>v.match(/^v=/))||'').replace(/^v=/,'')) && (
                    f = await fetch(`/get_video_info?video_id=${i}`),
                    o = {},
                    decodeURIComponent(await f.text()).match(/.+?=.*?(&|$)/g).forEach(v=>(m=>(o[m[1]]=(t=>{try{return JSON.parse(t)}catch(e){return t}})(m[2])))(v.match(/(.+?)=(.*?)(?:&|$)/))),
                    t = x.match(/itag=(\d+?)&/)[1],
                    x = x.replace(/(&range=)[0-9-]*?(&)/ig, '$10-999999999999999$2'),
                    glb._audioEP.itag = glb._audioEP.id==i ? (glb._audioEP.itag || {}) : (glb._audioEP.id = i, {}),
                    glb._audioEP.itag[t] = glb._audioEP.itag[t] || [],
                    o.player_response && (z = new dl(x,i,o.player_response.videoDetails.title)),
                    z && (glb._audioEP.itag[t].find(v=>v.u.match( z.u.match(/(id=.+?)&/)[1] )) || glb._audioEP.itag[t].push(z))
                )
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
            var b = new Blob([await(await fetch(this.u)).arrayBuffer()],{type:'audio/mp3'});
            confirm(`Do you want to download "${this.t}.mp3"?\n(file size: ${(b.size/1024).toLocaleString()} kb)`) && (
                this.a.setAttribute('download', `${this.t}.mp3`),
                this.a.href = URL.createObjectURL(b),
                this.a.click()
            )
        }
    }
)
