export default function GlassCard({ children, width, height, padding }) {
    return (
        <div className={`m-3 rounded-3xl shadow backdrop-blur-sm p-${padding} flex flex-col justify-around w-${ width } h-${ height }`}>
          { children }
        </div>
    )
}