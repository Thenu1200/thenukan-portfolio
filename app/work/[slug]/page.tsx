import Card from "../../components/Card";
import Header from "../../components/Header";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../components/mdx-components";
import Image from "next/image"
import { projects } from "../../../data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const filePath = path.join(process.cwd(), "content/projects", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="hero-bg min-h-screen flex items-center justify-center py-12 px-4 md:px-12">
      <Card classAlignment="text-left">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="order-2 md:order-1">
            <h1 className="text-cream text-6xl md:text-7xl lg:text-9xl leading-tight flex-1 min-w-0 text-center md:text-left" style={{ fontFamily: "Hanuman", fontWeight: 400 }}>
              {project?.projectName}
            </h1>
          </div>
          <div className="order-1 md:order-2">
            <Header />
          </div>
        </div>
        <div className="mt-8 text-cream max-w-6xl mx-auto" style={{ fontFamily: "Habibi" }}>
          <MDXRemote source={fileContent} components={mdxComponents} />
        </div>
      </Card>
    </main>
  );
}