export default function GlassCard({ children }) {
    return (
        <div className={"rounded-3xl shadow backdrop-blur-sm p-16 flex flex-col justify-around"}>
          { children }
        </div>
    )
}