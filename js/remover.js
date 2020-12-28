((glb,dl,ads)=>{
    glb._audioEP = {};
    glb._audioEP.itag = {};

    var wrap = document.createElement('div');
    document.body.appendChild(wrap);
    wrap.classList.add('aep_wrap');

    glb._audioEP.btn = document.createElement('button');
    wrap.appendChild(glb._audioEP.btn);
    glb._audioEP.btn.innerText = 'mp3';
    glb._audioEP.btn.classList.add('aep_btn');

    var lab = document.createElement('label');
    wrap.appendChild(lab);
    lab.classList.add('aep_lab');

    glb._audioEP.cont_check = document.createElement('input');
    lab.appendChild(glb._audioEP.cont_check);
    glb._audioEP.cont_check.type = 'checkbox';

    var span = document.createElement('span');
    lab.appendChild(span);
    span.innerText = 'controller';

    glb._audioEP.cont = document.createElement('div');
    document.body.appendChild(glb._audioEP.cont);
    glb._audioEP.cont.classList.add('sc_log', 'sc_final');

    glb._audioEP.style = new CSSStyleSheet;
    glb._audioEP.style.replaceSync(`ytd-player-legacy-desktop-watch-ads-renderer {position: fixed;right: 9999rem;}.aep_wrap {background: #fff;bottom: 0;box-shadow: 1px 1px 3px #aaa;left: 0;padding: 0 1em 0 0;position: fixed;}.aep_lab {margin: 0 0 0 1em;}.aep_lab input {display: none;}.aep_lab input:checked + span::after {opacity: 1;transform: rotate(45deg) scale3d(1,1,1);}.aep_lab input:checked + span::before {border-color: #666;}.aep_lab span {box-sizing: border-box;cursor: pointer;display: inline-block;font-size: 14px;padding: 5px 0 5px 30px;position: relative;width: auto;}.aep_lab span::after {border-bottom: 3px solid #b01;border-right: 6px solid #b01;content: '';display: block;height: 20px;left: 7px;margin: -17px 0 0 0;opacity: 0;position: absolute;top: 50%;transform: rotate(45deg) translate3d(0,2px,0) scale3d(.7,.7,1);transition: all .2s ease-in-out;width: 9px;}.aep_lab span::before {background: #fff;box-shadow: 1px 1px 3px #aaa;content: '';display: block;height: 16px;left: 5px;margin: -9px 0 0 0;position: absolute;top: 50%;width: 16px;}.aep_btn {background: #065fd4;border: none!important;box-shadow: 0 0 3px #065fd4;color: #fff;cursor: pointer;font-size: 1.5em;font-weight: bold;outline: none!important;padding: .5em 1em;}.sc_log {animation: none;background: rgba(50,50,50,.75);bottom: 0;color: #fff;font-size: 1.3em;font-weight: bold;height: 3em;left: 0;margin: auto;max-width: 500px;opacity: 1;padding: .5em;pointer-events: none;position: fixed;right: 0;text-decoration: underline dotted;text-shadow: 1px 1px 3px #000;}.sc_log.sc_final {animation: sc_close .5s 2s ease both;opacity: 1;text-decoration: none;}@keyframes sc_close {0%,10% {opacity: 1;}90%,100% {opacity: 0;}}`);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, glb._audioEP.style];

    glb._audioEP.btn.onclick = e=>{
        var t = glb._audioEP.itag[ Object.keys(glb._audioEP.itag).sort((a,b)=>a<b?1:-1)[0] ];
        t && t.length==1 ? (t[0].d()) : (confirm(`Caution: ${t.length} audio files detected. Please check out each "file size" on next dialogs.`) && t.forEach(v=>v.d()));
    };

    document.addEventListener('fullscreenchange', e=>{
        wrap.style.display = document.fullscreenElement ? 'none' : 'block'
    });

    (async(x,f,m,e,r,s)=>{
        (await new Promise(r=>document.readyState=='complete'?r():window.addEventListener('load',r))),
        (r=(a,b,c,d)=>{
            return(b=a('video'))?(
                c = new f(glb._audioEP.cont,{
                    do:[
                        {name: 'controll', reg: /controll mode/i, key: true},
                        {name: 'backward', reg: /backward/i, key: true},
                        {name: 'forward', reg: /forward/i, key: true},
                        {name: 'repeat_', reg: /^repeat./i, key: true},
                        {name: 'repeat', reg: /^repeat$/i, key: false},
                        {name: 'initial', reg: /ab init|initial|restart/, key: false},
                        {name: 'pause', reg: /pause|stop/i, key: false},
                        {name: 'play', reg: /play|start/i, key: false},
                    ],
                    key:[
                        {name: 'sec', value: t=>((h,m,s)=>(t=t.replace(/(?:^| )(an|\d+?) hours?/,(_,a)=>(h=Number(a=='an'||!isNaN(a)&&a),' ')),t=t.replace(/(?:^| )(an|\d+?) min(?:utes?| |$)/,(_,a)=>(m=Number(a=='an'||!isNaN(a)&&a),' ')),t=t.replace(/(?:^| )(an|\d+?) sec(?:onds?| |$)/,(_,a)=>(s=Number(a=='an'||!isNaN(a)&&a),' ')),h*3600+m*60+s))(0,0,0)},
                        {name: 'bool', value: t=>(m=>m&&m[1])(t.match(/(on|off)/i))}
                    ],
                    command:{
                        controll: {
                            bool: (_,s)=>(s = s.toLowerCase(), s=='on'||(_audioEP.cont_check.checked = !1, _.stop()), ` [Controll mode: off]`)
                        },
                        seek: {
                            sec: (_,s)=>(b.currentTime = Number(s), ` [Seek to "${s}" seconds]`)
                        },
                        backward: {
                            sec: (_,s)=>(b.currentTime = b.currentTime - Number(s), ` [Seek backward "${s}" seconds]`)
                        },
                        forward: {
                            sec: (_,s)=>(b.currentTime = b.currentTime + Number(s), ` [Seek forward "${s}" seconds]`)
                        },
                        repeat_: {
                            bool: (_,s)=>(s = s.toLowerCase(), d = s=='on', ` [Repeat mode: ${s}]`)
                        },
                        repeat: (_)=>(d = true, ' [Repeat mode: on]'),
                        initial: (_)=>(b.currentTime = 0, ' [Seek to the begining]'),
                        pause: (_)=>(b.pause(), ' [Pause]'),
                        play: (_)=>(b.play(), ' [Play]')
                    }
                }),
                glb._audioEP.cont_check.addEventListener('change', e =>{
                    e.target.checked ? c.start() : c.stop()
                }),
                setInterval(()=>e(d=>(
                    (d=a('.ytp-ad-skip-button-slot button,.ytp-ad-overlay-close-button'))&&d.click()
                )),500),
                b.addEventListener('timeupdate',_=>{
                    e(()=>(
                        a('.ad-showing') ? (b.currentTime=b.duration) : (b.duration<=b.currentTime && d && (b.currentTime = 0, b.play()))
                    ))
                }),
                (t=>(x.send=function(_){t.call(this,_), _ || this.addEventListener('load',m)}))(x.send),
                (t=>(x.open=function(){(a=>a[1].match(ads) ? (console.log(`Blocked: "${a[1]}"`), this.abort && this.abort()) : t.call(this,...a))(arguments)}))(x.open)
            )
            :setTimeout(r,500,a)
        })(_=>document.querySelector(_))
    })(
        window.XMLHttpRequest.prototype,
        class {
            constructor(e,o) {
                this.r = new webkitSpeechRecognition;
                this.r.continuous = !0;
                this.r.interimResults = !0;
                this.r.lang = 'en-US';
                this.e = e;
                this.o = o;
            }
            start() {
                this.r.onresult = e => {
                    var s = [...e.results];
                    var t = s[s.length-1];
                    var q = {do:{s:''},key:{s:''}};
                    var a = t[0].transcript;
                    this.e.innerHTML = a;
                    this.e.classList[t.isFinal?'add':'remove']('sc_final');
                    if(t.isFinal) {
                        for(var d of this.o.do) {
                            var x = a.match(d.reg);
                            if(x) {
                                q.do.s = d.name;
                                d.key && (q.do.k = true);
                                break;
                            }
                        }
                        for(var k of this.o.key) {
                            var x = k.value(a);
                            if(x) {
                                q.key.s = k.name;
                                q.key.g = x;
                                break;
                            }
                        }
                        var c = this.o.command[q.do.s];
                        c && (
                            q.do.k
                                ? c[q.key.s] && (this.e.innerHTML += c[q.key.s](this,q.key.g))
                                : (this.e.innerHTML += c(this))
                        )
                    }
                }
                this.r.onend = e => e.target.start();
                this.r.start();
            }
            stop() {
                this.r.onend = null;
                this.r.stop();
            }
        },
        async(_,x,f,o,i,t,z)=>{
            (x = _.target.responseURL, x.match(/mime=audio%2Fweb[am]/) && (
                i = (location.href.split(/\?|&/).find(v=>v.match(/^v=/))||'').replace(/^v=/,''),
                i && (
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
    },
    new RegExp(
        [
            "doubleclick.net",
            "adservice.google.",
            "youtube.com/api/stats/ads",
            "&ad_type=",
            "&adurl=",
            "-pagead-id.",
            "doubleclick.com",
            "/ad_status.",
            "/api/ads/",
            "/googleads",
            "/pagead/gen_",
            "/pagead/lvz?",
            "/pubads.",
            "/pubads_",
            "/securepubads",
            "=adunit&",
            "googlesyndication.com",
            "innovid.com",
            "youtube.com/pagead/",
            "google.com/pagead/",
            "flashtalking.com",
            "googleadservices.com",
            "s0.2mdn.net/ads",
            "www.youtube.com/ptracking",
            "www.youtube.com/pagead",
            "www.youtube.com/get_midroll_"
        ].map(
            v=>`(${v})`
        ).join(
            '|'
        )
    )
)
