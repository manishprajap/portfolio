"use client";
import { useEffect, useState, FormEvent } from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { EMAIL, PHONE, GITHUB, LINKEDIN, roles, stats, deliver, jobs, projects, skills, levels, education } from "@/lib/data";
import Image from "next/image";

const NAV = [
  ["work", "Experience"], ["projects", "Projects"], ["skills", "Skills"], ["education", "Education"], ["about", "About"], ["contact", "Contact"],
] as const;
const FILTERS = ["all", "live", "web", "mobile", "api"] as const;

function useTyper() {
  const [text, setText] = useState(roles[0]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let r = 0, c = roles[0].length, del = true, t: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (del) { c--; if (c <= 0) { del = false; r = (r + 1) % roles.length; c = 0; } }
      else { c++; if (c >= roles[r].length) { del = true; setText(roles[r]); t = setTimeout(tick, 1800); return; } }
      setText(roles[r].slice(0, c) || " ");
      t = setTimeout(tick, del ? 35 : 70);
    };
    t = setTimeout(tick, 2200);
    return () => clearTimeout(t);
  }, []);
  return text;
}

function CopyBtn({ value }: { value: string }) {
  const [label, setLabel] = useState("Copy");
  const flash = (m: string) => { setLabel(m); setTimeout(() => setLabel("Copy"), 1500); };
  return (
    <button className="copy" type="button" onClick={() => navigator.clipboard?.writeText(value).then(() => flash("Copied"), () => flash("Failed")) ?? flash("Failed")}>
      {label}
    </button>
  );
}

export default function Portfolio() {
  const role = useTyper();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const [active, setActive] = useState("");
  const [note, setNote] = useState("");
  const shown = projects.filter((p) => filter === "all" || p.cats.includes(filter));

  const toggleTheme = () => {
    const root = document.documentElement;
    const dark = root.getAttribute("data-theme") === "dark" || (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    root.setAttribute("data-theme", dark ? "light" : "dark");
  };

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-30% 0px -60% 0px" });
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();
    if (!g("first") || !g("email") || !g("message")) { setNote("Please fill in your first name, email and message."); return; }
    const name = `${g("first")} ${g("last")}`.trim();
    const body = `${g("message")}\n\n${name}\n${g("email")}${g("phone") ? "\n" + g("phone") : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + name)}&body=${encodeURIComponent(body)}`;
    setNote(`Your email app should open with the message ready to send. If nothing opens, write to ${EMAIL}.`);
  };

  return (
    <div className="wrap">
      <header className="top">
        <div className="bar">
          <a className="brand" href="#home"><span className="mono-badge">MP</span>Maneesh Prajapati</a>
          <nav aria-label="Sections">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>{label}</a>)}
            <button className="tbtn" type="button" aria-label="Switch colour theme" onClick={toggleTheme}>Theme</button>
          </nav>
        </div>
      </header>

      <main id="home">
        <div className="hero">
          <div>
            <p className="eyebrow">Hi, I&apos;m Maneesh · Lucknow, India</p>
            <h1>I build the <em>APIs</em> and apps behind multi-role platforms.</h1>
            <p className="typer" aria-live="off"><span className="p">&gt;</span><span id="role">{role}</span><span className="cur" aria-hidden="true" /></p>
            <p className="lede">3+ years with Laravel backends, token-based REST APIs and Next.js / Ionic React frontends. Five products are live today, from real estate to e-commerce.</p>
            <div className="cta">
              <a className="btn primary" href="#projects">See live projects</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
            <div className="social">
              <a href={GITHUB} target="_blank" rel="noopener" aria-label="GitHub profile"><GithubIcon /></a>
              <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn profile"><LinkedinIcon /></a>
            </div>
            <div className="facts"><span>Working at Aarnatech Xperts</span><span>3+ years</span><span>5 live products</span></div>
          </div>
          <div className="code" aria-label="Summary of Maneesh as an API response">
            <div className="code-head"><span>GET /api/developer/maneesh</span><b>200 OK</b></div>
            <pre>{`{
  `}<span className="k">&quot;role&quot;</span>{`: `}<span className="s">&quot;Full-Stack Developer&quot;</span>{`,
  `}<span className="k">&quot;experience_years&quot;</span>{`: `}<span className="n">3</span>{`,
  `}<span className="k">&quot;backend&quot;</span>{`: [`}<span className="s">&quot;PHP&quot;</span>{`, `}<span className="s">&quot;Laravel&quot;</span>{`],
  `}<span className="k">&quot;frontend&quot;</span>{`: [`}<span className="s">&quot;Next.js&quot;</span>{`, `}<span className="s">&quot;React&quot;</span>{`, `}<span className="s">&quot;Ionic&quot;</span>{`],
  `}<span className="k">&quot;auth&quot;</span>{`: [`}<span className="s">&quot;JWT&quot;</span>{`, `}<span className="s">&quot;RBAC&quot;</span>{`],
  `}<span className="k">&quot;live_projects&quot;</span>{`: `}<span className="n">5</span>{`,
  `}<span className="k">&quot;apis_built&quot;</span>{`: `}<span className="n">10</span>{`,
  `}<span className="k">&quot;monthly_users&quot;</span>{`: `}<span className="s">&quot;5k+&quot;</span>{`
}`}</pre>
          </div>
        </div>

        <section aria-labelledby="h-impact" style={{ paddingTop: 0, borderTop: 0 }}>
          <h2 id="h-impact" className="sr">Impact</h2>
          <div className="impact">{stats.map((s) => <div key={s.l}><strong>{s.v}</strong><p>{s.l}</p></div>)}</div>
        </section>

        <section aria-labelledby="h-do">
          <div className="sec-head"><h2 id="h-do">What I deliver</h2></div>
          <ul className="do">{deliver.map((d) => <li key={d.t}><h3>{d.t}</h3><p>{d.d}</p></li>)}</ul>
        </section>

        <section id="work" aria-labelledby="h-work">
          <div className="sec-head"><h2 id="h-work">Experience</h2><span>Dec 2021 – present</span></div>
          {jobs.map((j) => (
            <article key={j.when} className={`job ${j.current ? "main" : "minor"}`}>
              <div className="when">{j.when}</div>
              <div>
                <h3>{j.title}</h3>
                <p className="org">{j.org}</p>
                <ul>{j.points.map((p, i) => <li key={i}>{p[0]}{p[1] && <b>{p[1]}</b>}{p[2]}</li>)}</ul>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" aria-labelledby="h-proj">
          <div className="sec-head"><h2 id="h-proj">Projects</h2><span>{shown.length} {shown.length === 1 ? "project" : "projects"}</span></div>
          <div className="filters" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f[0].toUpperCase() + f.slice(1)}</button>
            ))}
          </div>
          <div className="grid">
            {shown.map((p) => (
              <article key={p.name} className="card">
                <h3>{p.name}{p.live && <span className="pill">Live</span>}</h3>
                <p>{p.desc}</p>
                {p.url && <a className="site" href={`https://${p.url}`} target="_blank" rel="noopener">{p.url}</a>}
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="more"><a className="btn ghost" href={GITHUB} target="_blank" rel="noopener">More projects on GitHub</a></div>
        </section>

        <section id="skills" aria-labelledby="h-skills">
          <div className="sec-head"><h2 id="h-skills">Skills</h2><span>Core stack highlighted</span></div>
          <dl className="skills">
            {skills.map((g) => (
              <div key={g.k}><dt>{g.k}</dt><dd>{g.items.map(([n, core]) => <span key={n} className={core ? "core" : undefined}>{n}</span>)}</dd></div>
            ))}
          </dl>
          <h3 className="sub-h">Comfort level</h3>
          <div className="levels">
            {levels.map(([n, v]) => (
              <div className="lvl" key={n}><span>{n}</span><div className="track"><div className="fill" style={{ width: `${v}%` }} /></div><small>{v}%</small></div>
            ))}
          </div>
        </section>

        <section id="education" aria-labelledby="h-edu">
          <div className="sec-head"><h2 id="h-edu">Education</h2><span>Hindi (native) · English (advanced)</span></div>
          <div className="degree">
            <div className="seal"><div>MCU<small>BHOPAL</small></div></div>
            <div className="deg-card">
              <div className="deg-top"><h3>MCU Bhopal</h3><span>2016 – 2019</span></div>
              <h4>Bachelor of Computer Applications (BCA) · 60%</h4>
              <p>Completed alongside a PHP Core &amp; PHP++ certificate from Training Basket (2019).</p>
            </div>
          </div>
          <ul className="edu">{education.map((e) => <li key={e.t}><span className="yr">{e.yr}</span><h3>{e.t}</h3><p>{e.p}</p></li>)}</ul>
        </section>

        <section id="about" aria-labelledby="h-about">
          <div className="about">
            <div className="about-photo">
              <Image src="/manish.jpeg" alt="Maneesh Prajapati" width={400} height={400} priority={false} />
            </div>
            <div>
              <div className="sec-head"><h2 id="h-about">About me</h2></div>
              <p className="about-t">Full-stack web developer with 3+ years of experience building Laravel backends, token-based REST APIs and Next.js / Ionic React frontends for multi-role platforms. I have delivered e-commerce, real estate, matrimony, MLM, medical imaging and business and charity platforms, with payment gateways, third-party APIs, role-based access control, database optimization and VPS deployment. At present I work at Aarnatech Xperts Solutions, Lucknow.</p>
              <div className="cta"><a className="btn ghost" href="/Maneesh_Prajapati_CV.pdf" target="_blank" rel="noopener">See my resume</a></div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="h-contact" style={{ borderTop: 0, paddingBottom: 0 }}>
          <div className="contact">
            <div>
              <h2 id="h-contact">Let&apos;s build something solid.</h2>
              <p className="sub">Open to backend and full-stack work with Laravel, Next.js and Ionic React.</p>
              <ul>
                <li><span className="lab">Email</span><span className="val">{EMAIL}</span><CopyBtn value={EMAIL} /></li>
                <li><span className="lab">Phone</span><span className="val">{PHONE}</span><CopyBtn value={PHONE} /></li>
                <li><span className="lab">LinkedIn</span><span className="val"><a href={LINKEDIN} target="_blank" rel="noopener">maneesh-prajapati-387866246</a></span></li>
                <li><span className="lab">GitHub</span><span className="val"><a href={GITHUB} target="_blank" rel="noopener">manishprajap</a></span></li>
                <li><span className="lab">Location</span><span className="val">Lucknow, India</span></li>
              </ul>
            </div>
            <form onSubmit={submit} noValidate>
              <h3 className="full">Leave a message</h3>
              <input name="first" placeholder="First name" autoComplete="given-name" aria-label="First name" required />
              <input name="last" placeholder="Last name (optional)" autoComplete="family-name" aria-label="Last name" />
              <input name="email" type="email" placeholder="Email" autoComplete="email" aria-label="Email" required />
              <input name="phone" type="tel" placeholder="Phone" autoComplete="tel" aria-label="Phone" />
              <textarea className="full" name="message" placeholder="Message" aria-label="Message" required />
              <div className="full"><button className="btn light" type="submit">Send message</button></div>
              <p className="fmsg full" role="status">{note}</p>
            </form>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Maneesh Prajapati</span><span>Laravel · Next.js · Ionic React</span></footer>
    </div>
  );
}
