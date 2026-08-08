import Card from "../components/Card";
import Header from "../components/Header"
import Image from "next/image";

export default function Home() {
  return (
    <main className="hero-bg min-h-screen flex items-center justify-center py-12 px-4 md:px-12">
      <Card classAlignment="text-left">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="order-2 md:order-1">
            <h1 className="text-cream text-6xl md:text-7xl lg:text-9xl leading-tight flex-1 min-w-0 text-center md:text-left" style={{ fontFamily: "Hanuman", fontWeight: 400 }}>
              About me
            </h1>
          </div>
          <div className="order-1 md:order-2">
            <Header />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-6 items-center md:items-start">
          <div className="order-2 md:order-2">
            <p className="text-green text-2xl md:text-3xl lg:text-5xl max-w-3xl max-h-96 md:max-h-96 lg:max-h-160 overflow-y-auto" style={{ fontFamily: "Habibi" }}>
              My name is <span className="text-blue">Thenukan Velvelicham</span>. I am a 23 year old developer from Canada living in Japan.
              I currently hold a <span className="text-blue">bachelors degree in computer science</span> from Wilfrid Laurier University.
              My hobbies include enjoying games and anime culture, exploring new foods, and learning fun new skills!
              I want to do meaningful work that helps me improve my skills by providing new challenges for me to face.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/photos/AboutPortrait.svg"
              alt="Photo of the handsome looking Thenukan Velvelicham"
              width={50}
              height={50}
              className="w-[40vw] max-w-xs md:w-[30vw] md:max-w-sm h-auto"
            />
          </div>
        </div>
                
      </Card>
    </main>
  );
} 