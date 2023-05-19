import Link from "next/link"
import Image from "next/image"
import Vlogo from "../public/V-logo.svg"

export default function Header() {
    return (
        <header className="flex h-screen w-48 bg-grey flex-col font-Roboto">
            <div className="flex justify-center w-48 items-center flex-col text-white flex-1 p-5">
                <Image 
                    src={Vlogo}
                    alt="red V logo"
                    width={50}
                    height={50}
                />
                <h2 className="font-black">Valimp</h2>
                <h3 className="font-semibold">Mobile and Website</h3>
            </div>
            <div className="w-full text-white font-bold text-sm flex-2">
                <nav className="h-full">
                    <ul className="h-full flex flex-col items-center justify-center w-full p-4 space-y-4">
                        <li className="hover:text-coral hover:scale-110 ease-in-out duration-300 p-2">
                            <Link href="/">ACCUEIL</Link>
                        </li>
                        <li className="hover:text-coral hover:scale-110 ease-in-out duration-300 p-2">
                            <Link href="/gallery">ACTIVITE</Link>
                        </li>
                        <li className="hover:text-coral hover:scale-110 ease-in-out duration-300 p-2">
                            <Link href="/">PRIX</Link>
                        </li>
                        <li className="hover:text-coral hover:scale-110 ease-in-out duration-300 p-2">
                            <Link href="/">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-full text-lightGrey text-xs flex flex-col justify-center items-center flex-1">
                <h3 className="font-black">2023 - Copyright</h3>
                <h3 className="font-bold">Par Valentin Chauvet</h3>
            </div>
        </header>
    )
}