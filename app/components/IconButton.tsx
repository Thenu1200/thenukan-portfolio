import Link from "next/link";
import Image from "next/image";

export default function IconButton({ 
    iconSrc,
    label, 
    href,
}: { 
    iconSrc: string;
    label: string;
    href: string;
}) {
    return (
        <Link href={href} className="flex flex-col items-center w-20 md:w-42 lg:w-70">
            <div className="flex flex-col items-center w-20 md:w-42 lg:w-70">
                <div>
                    <Image 
                    src={iconSrc} 
                    alt={label} 
                    width={50} 
                    height={50} 
                    className="w-15 h-15 md:w-25 md:h-25 lg:w-35 lg:h-35"/>
                </div>
                <p className="text-green text-2xl md:text-4xl lg:text-6xl mt-2 text-center" style={{ fontFamily: "Habibi" }}>{label}</p>
                </div>
        </Link>
    );
}