export default function GlassCard({ children, width, height }) {
    return (
        <div className={`rounded-3xl shadow backdrop-blur-sm p-16 flex flex-col justify-around w-${ width } h-${ height }`}>
          { children }
        </div>
    )
}