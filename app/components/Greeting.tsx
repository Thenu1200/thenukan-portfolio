export default function Greeting({ name, tagline }: { name: string; tagline: string}) {
  return (
  <div>
    <h1 className="text-blue text-6xl md:text-7xl lg:text-9xl leading-tight" style={{ fontFamily: "Hanuman", fontWeight: 100 }}>
        Hello,<br /> <span className="text-cream" style={{ fontWeight: 400 }}>I'm {name}</span>
        </h1>
    <p className="text-green text-2xl md:text-4xl lg:text-6xl" style={{ fontFamily: "Habibi" }}>
        {tagline}
        </p>
  </div>
  );
}