import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from '@/constants';
import Button from "./Button";


const Navbar = () => {
  return (
    <nav className="flex justify-around max-container padding-container relative z-30 py-5 border-b-2 mb-12">
        <Link href="/">
            <p className="flex justify-center items-center font-bold text-3xl uppercase font-sans relative">
                <span className="z-40 text-slate-500">jiel<span className="text-orange-600 uppercase">ko</span></span>
                <span className="p-8 bg-yellow-300 absolute z-10 rounded-full"/>
            </p>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key}
                        className="regular-16 text-green-600 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                    {link.label}
                </Link>
            ))} 
        </ul>

        <div className="lg:flexCenter hidden">
            <Button type="button" title="Login" 
            icon="/user.svg" variant="btn_dark_green"/>
        </div>

    </nav>
  )
}

export default Navbar