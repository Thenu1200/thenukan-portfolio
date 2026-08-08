import IconButton from "./IconButton";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { iconSrc: "/icons/Home.svg", label: "Home", href: "/" },
    { iconSrc: "/icons/About.svg", label: "About me", href: "/about" },
    { iconSrc: "/icons/My Work.svg", label: "My Work", href: "/work" },
    { iconSrc: "/icons/Links.svg", label: "Links", href: "/links" },
    { iconSrc: "/icons/Contact.svg", label: "Contact", href: "/contact" },   
];

export default function Header() {
  return (
  <div className="flex gap-6 mt-2">
    {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="flex flex-col items-center w-8 md:w-13 lg:w-22">
            <div className="flex flex-col items-center w-10 md:w-22 lg:w-35">
                <Image 
                src={item.iconSrc} 
                alt={item.label} 
                width={20} 
                height={20} 
                className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20"/>
            </div>
        </Link>
        ))}
      </div>
  );
}