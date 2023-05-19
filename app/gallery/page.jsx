import GlassCard from "@/components/GlassCard";
import ScreenLayout from "@/components/ScreenLayout";

export default function Gallery(){
    return (
        <ScreenLayout>
            <GlassCard width={"1/4"} height={"80"} padding={5}>
                <h2 className="font-black text-xl text-coral">Site Web <span className="text-yellow">!</span></h2>
                <p className="font-black text-sm">Conception de sites web sur mesure</p>
                <p className="font-black text-sm">Une communication constante tout au long du projet</p>
                <p className="font-black text-xs">Multiplatforme | Mobile | Tablette</p>
            </GlassCard>
            <GlassCard width={"1/4"} height={"80"} padding={5}>
                <h2 className="font-black text-xl text-coral">Application mobile <span className="text-yellow">!</span></h2>
                <p className="font-black text-sm">Une application mobile pour votre entreprise ? C'est possible !</p>
                <p className="font-black text-sm">Faisons évoluer votre business.</p>
                <p className="font-black text-xs">Voir plus.</p>
            </GlassCard>
            <GlassCard width={"1/4"} height={"80"} padding={5}>
                <h2 className="font-black text-2xl text-coral">Référencement <span className="text-yellow">!</span></h2>
                <p className="font-black text-sm">Vous voulez plus de trafic sur votre site ?</p>
                <p className="font-black text-sm">Faites un audit de SEO, et voyons ensemble ce qu'il est possible de faire.</p>
                <p className="font-black text-xs">SEO | Référencement | Trafic</p>
            </GlassCard>
        </ScreenLayout>
    )
}