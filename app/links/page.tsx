import Card from "../components/Card";
import Header from "../components/Header"
import IconButton from "../components/IconButton"

export default function Links() {
  return (
    <main className="hero-bg min-h-screen flex items-center justify-center py-12 px-4 md:px-12">
      <Card classAlignment="text-left">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="order-2 md:order-1">
            <h1 className="text-cream text-6xl md:text-7xl lg:text-9xl leading-tight flex-1 min-w-0 text-center md:text-left" style={{ fontFamily: "Hanuman", fontWeight: 400 }}>
              Links
            </h1>
          </div>
          <div className="order-1 md:order-2">
            <Header />
          </div>
        </div>
        <div className="flex gap-8 mt-6 justify-center">
            <IconButton iconSrc="/icons/Linkedin.svg" label="LinkedIn" href="https://www.linkedin.com/in/thenukan-velvelicham/" />
            <IconButton iconSrc="/icons/Instagram.svg" label="Instagram" href="https://www.instagram.com/thenu.v/" />
            <IconButton iconSrc="/icons/Github.svg" label="Github" href="https://github.com/Thenu1200/" />
        </div>
      </Card>
    </main>
  );
}