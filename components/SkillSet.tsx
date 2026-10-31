import type { IconType } from "react-icons";
import {
  SiLaravel, SiPhp, SiCodeigniter, SiNextdotjs, SiReact, SiIonic, SiCapacitor, SiTypescript,
  SiJavascript, SiMysql, SiPostgresql, SiGit, SiGithub, SiBitbucket, SiPostman, SiBootstrap,
} from "react-icons/si";

/* [name, icon, brand colour]. No colour = follows the theme text colour (works in dark mode). */
const TECH: [string, IconType, string?][] = [
  ["Laravel", SiLaravel, "#FF2D20"], ["PHP", SiPhp, "#777BB4"], ["CodeIgniter", SiCodeigniter, "#EE4323"], ["Next.js", SiNextdotjs],
  ["React", SiReact, "#149ECA"], ["Ionic", SiIonic, "#3880FF"], ["Capacitor", SiCapacitor, "#119EFF"], ["TypeScript", SiTypescript, "#3178C6"],
  ["JavaScript", SiJavascript, "#E5C100"], ["MySQL", SiMysql, "#4479A1"], ["PostgreSQL", SiPostgresql, "#4169E1"], ["Git", SiGit, "#F05032"],
  ["GitHub", SiGithub], ["Bitbucket", SiBitbucket, "#0052CC"], ["Postman", SiPostman, "#FF6C37"], ["Bootstrap", SiBootstrap, "#7952B3"],
];

export default function SkillSet() {
  return (
    <>
      <div className="sec-head center"><h2 id="h-skills">Programming <span>SkillSet</span></h2></div>
      <ul className="tech-grid">
        {TECH.map(([name, Icon, color]) => (
          <li key={name} title={name}>
            <Icon aria-hidden="true" style={color ? { color } : undefined} />
            <span className="t-name">{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}