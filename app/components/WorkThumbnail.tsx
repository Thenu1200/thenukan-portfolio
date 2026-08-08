import Link from "next/link";
import Image from "next/image";

export default function WorkThumbnail({ 
    imageSrc,
    projectName,
    slug,
}: { 
    imageSrc?: string;
    projectName: string;
    slug: string;
}) {
    return (
        <Link href={`/work/${slug}`} className="flex flex-col gap-2 w-full">
            <div className="w-full aspect-[8/5] bg-blue rounded-sm overflow-hidden relative">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={projectName}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <p className="text-blue text-lg text-center text-2xl md:text-4xl lg:text-6xl" style={{ fontFamily: "Habibi" }}>
                { projectName }
            </p>
        </Link>
    );
}