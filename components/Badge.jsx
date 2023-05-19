import Image from "next/image";
import Link from "next/link";

export default function Badge( props ) {
    const src = props.src;
    const link = props.link;

    return (
        <div className="h-10 w-10 bg-coral rounded-full flex justify-center items-center mx-5 hover:scale-110 duration-200">
            <a href={link} target="_blank">
                <Image src={src} width={45} height={45}/>
            </a>
        </div>
    )
}