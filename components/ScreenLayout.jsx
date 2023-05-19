export default function ScreenLayout({ children }){
    return (
        <div className="text-white h-screen w-full bg-home bg-cover flex flex-row justify-center items-center">
            { children }
        </div>
    )
}