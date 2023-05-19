import Badge from "@/components/Badge";
import GlassCard from "@/components/GlassCard";
import ScreenLayout from "@/components/ScreenLayout";

export default function Home() {
  return (
    <ScreenLayout>
      <div className="h-screen w-3/5 flex flex-col justify-center">

        <GlassCard>
          <p className="font-black text-6xl mb-3">Bonjour <span className="text-coral">!</span></p>
          <h1 className="font-black text-2xl">Je suis Valimp,</h1>
          <h2 className="font-black text-2xl text-yellow">Développeur web et mobile</h2>

          <div className="w-full flex justify-end">
            <Badge src='../svg/github.svg' link="https://github.com/Valimp" />
            <Badge src='../svg/linkedin.svg' link="https://www.linkedin.com/in/valentin-chauvet-702788232/" />
          </div>
        </GlassCard>

      </div>
    </ScreenLayout>
  )
}