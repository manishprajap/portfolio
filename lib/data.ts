export const EMAIL = "manishprajapati8533@gmail.com";
export const PHONE = "+91 7521024187";
export const GITHUB = "https://github.com/manishprajap";
export const LINKEDIN = "https://www.linkedin.com/in/maneesh-prajapati-387866246";

export const roles = [
  "Laravel Backend Developer",
  "REST API Engineer",
  "Next.js and Ionic React Developer",
  "Full-Stack Web Developer",
];

export const stats = [
  { v: "30%", l: "Faster feature delivery" },
  { v: "40%", l: "Faster database queries" },
  { v: "10", l: "Secure REST APIs for web and mobile" },
  { v: "5k+", l: "Monthly active users on the backends I built" },
];

export const deliver = [
  { t: "REST APIs", d: "Token-based Laravel APIs, documented and ready for mobile and web." },
  { t: "Role-based dashboards", d: "Authentication and RBAC for admin, staff and public users." },
  { t: "Payments and integrations", d: "Payment gateways, webhooks and third-party APIs." },
  { t: "Deployment", d: "VPS setup, releases through Git, and database tuning." },
];

export const jobs = [
  {
    when: "Aug 2024 – Present", title: "Web Developer", org: "Aarnatech Xperts Solutions, Lucknow", current: true,
    points: [
      ["Build and optimize ", "Laravel backend modules", " with shorter turnaround per feature"],
      ["Design ", "secure token-based REST APIs", " used by mobile and web apps"],
      ["Redesign schemas and queries to ", "scale with user load", ""],
      ["Own ", "VPS setup and deployments", " with Git, GitHub and Bitbucket"],
      ["Integrate ", "payment gateways", " and third-party APIs"],
    ],
  },
  {
    when: "Jun 2022 – May 2023", title: "Web Developer", org: "Lookupit Solutions Pvt. Ltd., Lucknow", current: false,
    points: [
      ["Built admin dashboards, CRM features and automation modules", "", ""],
      ["Implemented authentication and ", "RBAC", " for client apps"],
      ["Handled deployment, bug fixing and performance tuning", "", ""],
    ],
  },
  {
    when: "Dec 2021 – Mar 2022", title: "Junior Web Developer", org: "Nevina Infotech Pvt. Ltd., Lucknow", current: false,
    points: [
      ["Developed backend features and APIs in PHP / Laravel", "", ""],
      ["Fixed bugs, improved UI, took part in code reviews", "", ""],
    ],
  },
];

export type Project = { name: string; desc: string; cats: string[]; live?: boolean; url?: string; tags: string[] };
export const projects: Project[] = [
  { name: "101acres", desc: "Real estate platform with property listings and nearby search.", cats: ["live", "web", "mobile"], live: true, url: "101acres.com", tags: ["Next.js", "Ionic React"] },
  { name: "Eliteweds", desc: "Matrimony platform for web and mobile.", cats: ["live", "web", "mobile"], live: true, url: "eliteweds.com", tags: ["Next.js", "Ionic React"] },
  { name: "Shriecom", desc: "E-commerce platform with online payments.", cats: ["live", "web", "mobile"], live: true, url: "shriecom.in", tags: ["Laravel", "React Ionic"] },
  { name: "Eybos", desc: "Business and charity platform with payments, donations and role-based dashboards.", cats: ["live", "web"], live: true, url: "eybos.uk", tags: ["Laravel", "RBAC", "Payments"] },
  { name: "Yama", desc: "MLM backend with commission and network logic, delivered as REST APIs.", cats: ["live", "api"], live: true, tags: ["Laravel", "REST APIs"] },
  { name: "Plenty Music", desc: "UK sheet music platform with downloadable scores and accompaniments, a credit system, QR code generation and flipbook creation for ebooks.", cats: ["live", "web"], live: true, url: "plentymusic.uk", tags: ["CodeIgniter", "QR Code", "Flipbook"] },
  { name: "Lookupit Solutions", desc: "Company website with services, portfolio, client feedback and blog sections.", cats: ["live", "web"], live: true, url: "lookupitsolutions.com", tags: ["Web", "Company site"] },
  { name: "DICOM Imaging App", desc: "Cloud medical imaging with a DICOM viewer, image upload and Orthanc integration.", cats: ["mobile", "api"], tags: ["Laravel", "Ionic React", "Capacitor", "Orthanc"] },
  { name: "Aarnexai", desc: "AI-focused platform with social account connect and analytics.", cats: ["web", "mobile"],live: true, url: "aarnexai.com/", tags: ["Next.js", "Ionic React"] },
  { name: "Torah Nuggets", desc: "Backend APIs for a content publishing platform.", cats: ["api"], tags: ["Laravel", "REST APIs"] },
];

export const skills: { k: string; items: [string, boolean][] }[] = [
  { k: "Backend", items: [["PHP", true], ["Laravel", true], ["CodeIgniter", false], ["Eloquent", false], ["REST APIs", true], ["Queues", false], ["Cron jobs", false], ["Webhooks", false]] },
  { k: "Frontend", items: [["React", true], ["Next.js", true], ["Ionic React", true], ["TypeScript", false], ["JavaScript", false], ["Blade", false], ["Bootstrap", false], ["HTML5", false], ["CSS3", false], ["jQuery", false]] },
  { k: "Mobile", items: [["Ionic React", false], ["Capacitor", false]] },
  { k: "Database", items: [["MySQL", true], ["PostgreSQL", false]] },
  { k: "Security", items: [["JWT", true], ["RBAC", true], ["Payment gateways", false], ["Third-party APIs", false], ["DICOM / Orthanc", false]] },
  { k: "Tools", items: [["Git", false], ["GitHub", false], ["Bitbucket", false], ["VPS", false], ["Postman", false], ["VS Code", false]] },
];

export const levels = [
  ["Laravel / PHP", 90], ["REST APIs", 90], ["MySQL", 80], ["Next.js / React", 75], ["Ionic / Capacitor", 75], ["Git / VPS deploy", 75],
] as [string, number][];

export const education = [
  { yr: "2016 – 2019", t: "BCA", p: "MCU Bhopal · 60%" },
  { yr: "2019", t: "PHP Core & PHP++", p: "Training Basket · Certificate" },
  { yr: "2016", t: "Class XII", p: "UP Board · 63%" },
  { yr: "2014", t: "Class X", p: "UP Board · 74.5%" },
];