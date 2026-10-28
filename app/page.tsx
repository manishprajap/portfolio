"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Typed role animation
    const roles = ['Laravel Backend Developer','REST API Engineer','Next.js and Ionic React Developer','Full-Stack Web Developer'];
    const el = document.getElementById('role');
    if(!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let r=0,c=roles[0].length,del=true;
    const tick = () => {
      if(del){ c--; if(c<=0){ del=false; r=(r+1)%roles.length; c=0 } }
      else { c++; if(c>=roles[r].length){ del=true; if(el) el.textContent=roles[r]; return setTimeout(tick,1800) } }
      if(el) el.textContent=roles[r].slice(0,c)||' ';
      setTimeout(tick,del?35:70);
    };
    setTimeout(tick,2200);
  }, []);

  const projects = [
    { name: "101acres", pill:"Live", cat:"live web mobile", desc:"Real estate platform with property listings and nearby search.", link:"https://101acres.com", tags:["Next.js","Ionic React"] },
    { name: "Eliteweds", pill:"Live", cat:"live web mobile", desc:"Matrimony platform for web and mobile.", link:"https://eliteweds.com", tags:["Next.js","Ionic React"] },
    { name: "Shriecom", pill:"Live", cat:"live web mobile", desc:"E-commerce platform with online payments.", link:"https://shriecom.in", tags:["Laravel","React Ionic"] },
    { name: "Eybos", pill:"Live", cat:"live web", desc:"Business and charity platform with payments, donations and role-based dashboards.", link:"#", tags:["Laravel","RBAC","Payments"] },
    { name: "Yama", pill:"Live", cat:"live api", desc:"MLM backend with commission and network logic, delivered as REST APIs.", link:"#", tags:["Laravel","REST APIs"] },
    { name: "DICOM Imaging App", pill:"", cat:"mobile api", desc:"Cloud medical imaging with a DICOM viewer, image upload and Orthanc integration.", link:"#", tags:["Laravel","Ionic React","Capacitor","Orthanc"] },
    { name: "Aarnexai", pill:"", cat:"web mobile", desc:"AI-focused platform with social account connect and analytics.", link:"https://aarnexai.com", tags:["Next.js","Ionic React"] },
    { name: "Torah Nuggets", pill:"", cat:"api", desc:"Backend APIs for a content publishing platform.", link:"#", tags:["Laravel","REST APIs"] },
  ];

  const filtered = projects.filter(p => filter==="all" || p.cat.split(" ").includes(filter));

  const toggleTheme = () => {
    const next = theme==="dark"?"light":"dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const copy = (id:string) => {
    const t = document.getElementById(id)?.textContent || "";
    navigator.clipboard.writeText(t);
  };

  return (
    <div className="wrap">
      <header className="top">
        <div className="bar">
          <a className="brand" href="#home"><span className="mono-badge">MP</span>Maneesh Prajapati</a>
          <nav>
            <a href="#work">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <button className="tbtn" onClick={toggleTheme} type="button">Theme</button>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* HERO - same as your HTML */}
        <div className="hero">
          <div>
            <p className="eyebrow">Hi, I'm Maneesh · Lucknow, India</p>
            <h1>I build the <em>APIs</em> and apps behind multi-role platforms.</h1>
            <p className="typer"><span className="p">&gt;</span><span id="role">Laravel Backend Developer</span><span className="cur"></span></p>
            <p className="lede">3+ years with Laravel backends, token-based REST APIs and Next.js / Ionic React frontends. Five products are live today, from real estate to e-commerce.</p>
            <div className="cta">
              <a className="btn primary" href="#projects">See live projects</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
            {/* Social + facts same */}
            <div className="facts"><span>Working at Aarnatech Xperts</span><span>3+ years</span><span>5 live products</span></div>
          </div>
          <div className="code">
            <div className="code-head"><span>GET /api/developer/maneesh</span><b>200 OK</b></div>
            <pre>{`{
  "role": "Full-Stack Developer",
  "experience_years": 3,
  "backend": ["PHP", "Laravel"],
  "frontend": ["Next.js", "React", "Ionic"],
  "live_projects": 5
}`}</pre>
          </div>
        </div>

        {/* IMPACT */}
        <section style={{paddingTop:0, borderTop:0}}>
          <div className="impact">
            <div><strong>30%</strong><p>Faster feature delivery</p></div>
            <div><strong>40%</strong><p>Faster database queries</p></div>
            <div><strong>10</strong><p>Secure REST APIs</p></div>
            <div><strong>5k+</strong><p>Monthly active users</p></div>
          </div>
        </section>

        {/* PROJECTS WITH FILTER */}
        <section id="projects">
          <div className="sec-head"><h2>Projects</h2><span>{filtered.length} projects</span></div>
          <div className="filters">
            {["all","live","web","mobile","api"].map(f=>(
              <button key={f} data-f={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f.charAt(0).toUpperCase()+f.slice(1)}</button>
            ))}
          </div>
          <div className="grid" id="grid">
            {filtered.map((p,i)=>(
              <article key={i} className="card" data-cat={p.cat}>
                <h3>{p.name} {p.pill && <span className="pill">{p.pill}</span>}</h3>
                <p>{p.desc}</p>
                {p.link!=="#" && <a className="site" href={p.link} target="_blank">{p.link.replace('https://','')}</a>}
                <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{borderTop:0, paddingBottom:0}}>
          <div className="contact">
            <div><h2>Let's build something solid.</h2><p className="sub">Open to backend and full-stack work with Laravel, Next.js and Ionic React.</p></div>
            <ul>
              <li><span className="lab">Email</span><span className="val" id="v-email">manishprajapati8533@gmail.com</span><button className="copy" onClick={()=>copy('v-email')}>Copy</button></li>
              <li><span className="lab">Phone</span><span className="val" id="v-phone">+91 7521024187</span><button className="copy" onClick={()=>copy('v-phone')}>Copy</button></li>
              <li><span className="lab">GitHub</span><span className="val"><a href="https://github.com/manishprajap" target="_blank" style={{color:'#fff'}}>manishprajap</a></span></li>
              <li><span className="lab">LinkedIn</span><span className="val"><a href="https://www.linkedin.com/in/maneesh-prajapati-387866246" target="_blank" style={{color:'#fff'}}>maneesh-prajapati-387866246</a></span></li>
            </ul>
          </div>
        </section>
      </main>
      <footer><span>Maneesh Prajapati</span><span>Laravel · Next.js · Ionic React</span></footer>
    </div>
  );
}