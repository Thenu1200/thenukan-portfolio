import Greeting from "./components/Greeting";
import Card from "./components/Card";
import IconButton from "./components/IconButton";

export default function Home() {
  return (
    <main className="hero-bg min-h-screen flex items-center justify-center py-12 px-4 md:px-12">
      <Card classAlignment="text-center">
      <Greeting name="Thenukan" tagline="I'm a developer" />
      <div className="flex md:gap-6 mt-6">
        <IconButton iconSrc="/icons/About.svg" label="About me" href="/about" />
        <IconButton iconSrc="/icons/My Work.svg" label="My work" href="/work" />
        <IconButton iconSrc="/icons/Links.svg" label="Links" href="/links" />
        <IconButton iconSrc="/icons/Contact.svg" label="Contact" href="/contact" />
      </div>
      </Card>
    </main>
  );
} 