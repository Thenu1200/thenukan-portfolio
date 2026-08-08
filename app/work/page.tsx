"use client";

import Card from "../components/Card";
import Header from "../components/Header"
import IconButton from "../components/IconButton"
import WorkThumbnail from "../components/WorkThumbnail"
import { useState } from "react";
import Image from "next/image";
import { projects } from "../../data/projects";

const PROJECTS_PER_PAGE = 6;

export default function Work() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (page - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  return (
    <main className="hero-bg min-h-screen flex items-center justify-center py-12 px-4 md:px-12">
      <Card classAlignment="text-left">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="order-2 md:order-1">
            <h1 className="text-cream text-6xl md:text-7xl lg:text-9xl leading-tight flex-1 min-w-0" style={{ fontFamily: "Hanuman", fontWeight: 400 }}>
              My work
            </h1>
          </div>
          <div className="order-1 md:order-2">
            <Header />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-4">
            {currentProjects.map((project) => (
              <WorkThumbnail 
              key={project.slug} 
              projectName={project.projectName} 
              slug={project.slug}
              imageSrc={project.imageSrc} 
              />
            ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
          >
           <Image src="/icons/Backward.svg" alt="Previous page" width={64} height={64} />
          </button>

          <p className="text-green text-2xl md:text-4xl lg:text-6xl" style={{ fontFamily: "Habibi" }}>
            Page {page}/{totalPages}
          </p>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
          >
           <Image src="/icons/Forward.svg" alt="Next page" width={64} height={64} />
          </button>
        </div>
      </Card>
    </main>
  );
}