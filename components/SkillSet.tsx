import type { IconType } from "react-icons";
import {
  SiLaravel, SiPhp, SiCodeigniter, SiNextdotjs, SiReact, SiIonic, SiCapacitor, SiTypescript,
  SiJavascript, SiMysql, SiPostgresql, SiGit, SiGithub, SiBitbucket, SiPostman, SiBootstrap,
} from "react-icons/si";

const TECH: [string, IconType][] = [
  ["Laravel", SiLaravel], ["PHP", SiPhp], ["CodeIgniter", SiCodeigniter], ["Next.js", SiNextdotjs],
  ["React", SiReact], ["Ionic React", SiIonic], ["Capacitor", SiCapacitor], ["TypeScript", SiTypescript],
  ["JavaScript", SiJavascript], ["MySQL", SiMysql], ["PostgreSQL", SiPostgresql], ["Git", SiGit],
  ["GitHub", SiGithub], ["Bitbucket", SiBitbucket], ["Postman", SiPostman], ["Bootstrap", SiBootstrap],
];

export default function SkillSet() {
  return (
    <>
      <div className="sec-head center"><h2 id="h-skills">Programming <span>SkillSet</span></h2></div>
      <ul className="tech-grid">
        {TECH.map(([name, Icon]) => (
          <li key={name} title={name}>
            <Icon aria-hidden="true" size={72} />
            <span className="sr">{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}