import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureBlocks } from "@/components/FeatureBlocks";

export default function Platform() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
			<Navbar />
			{/* Hero Section */}
			<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
						Nuestra Plataforma
					</h1>
					<p className="text-xl text-gray-300 leading-relaxed">
						Feater es una plataforma VIVA, en constante evolución. Contamos con un equipo de desarrollo in house dedicado al mantenimiento y desarrollo de nuevas funcionalidades. Nuestro desafío es seguir construyendo una arquitectura minimalista, robusta, y eficiente. Mejorando exponencialmente la administración y visualización de contenidos audiovisuales de nuestros clientes.
					</p>
				</div>
			</section>

			{/* Feature Blocks Section */}
			<FeatureBlocks />

			<Footer />
		</div>
	);
}
