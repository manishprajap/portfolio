import Image from "next/image";

/* Save your illustration as /public/recent-works.png */
export default function RecentWorks() {
  return (
    <div className="rw">
      <div className="rw-img">
        <Image src="/recent-works.png" alt="Illustration of a developer working at a desk" width={640} height={420} />
      </div>
      <div className="rw-text">
        <h2 id="h-proj">My Recent <span>Works</span></h2>
        <p>
          My work uses a wide variety of modern tools. My strongest experience is building Laravel REST APIs and
          Next.js / Ionic React apps for multi-role platforms, and taking them live on a VPS.
        </p>
      </div>
    </div>
  );
}