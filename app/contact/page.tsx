"use client";

import Card from "../components/Card";
import Header from "../components/Header";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
  return (
    <main className="hero-bg min-h-screen flex items-center justify-center py-12 px-4 md:px-12">
      <Card classAlignment="text-left">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
        <div className="order-2 md:order-1">
            <h1 className="text-cream text-6xl md:text-7xl lg:text-9xl leading-tight flex-1 min-w-0 text-center md:text-left" style={{ fontFamily: "Hanuman", fontWeight: 400 }}>
            Contact
            </h1>
        </div>
        <div className="order-1 md:order-2">
            <Header />
        </div>
        </div>
        <div className="mt-8 flex flex-col max-w-md md:max-w-xl lg:max-w-3xl">
            <label className="text-green text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: "Habibi" }}>
                Full name:
            </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent text-cream text-2xl md:text-3xl lg:text-4xl border-b border-b-2 md:border-b-2 lg:border-b-4 px-1 py-2 outline-none w-full focus:border-b-4" style={{ fontFamily: "Habibi" }}
            />
        </div>
         <div className="mt-8 flex flex-col max-w-md md:max-w-xl lg:max-w-3xl">
            <label className="text-green text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: "Habibi" }}>
                Email:
            </label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-cream text-2xl md:text-3xl lg:text-4xl border-b border-b-2 md:border-b-2 lg:border-b-4 px-1 py-2 outline-none w-full focus:border-b-4" style={{ fontFamily: "Habibi" }}
            />
        </div>
        <div className="mt-4 flex flex-col max-w-md md:max-w-xl lg:max-w-4xl gap-3">
            <label className="text-cream text-lg md:text-xl lg:text-3xl" style={{ fontFamily: "Habibi" }}>
                Message:
            </label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="bg-cream text-black text-lg md:text-xl lg:text-3xl rounded-md px-2 py-2 outline-none w-full resize-none"
                style={{ fontFamily: "Habibi" }}
            />
        </div>
        <button
            onClick={() => {
                console.log({ name, email, message });
                alert(`Thanks ${name}! Your message has been noted.`);
            }}
            className="mt-6 bg-cream text-card px-6 py-2 rounded-full text-xl md:text-2xl lg:text-3xl hover:opacity-90 transition"
            style={{ fontFamily: "Habibi" }}
            >
            Submit
        </button>
      </Card>
    </main>
  );
}