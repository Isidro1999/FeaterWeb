import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

type Article = {
	icon?: React.ElementType;
	imageSrc?: string;
	category: string;
	title: string;
	description: string;
};

export function Knowledge() {
	const { ref, isVisible } = useScrollAnimation();

	const articles: Article[] = [
		{
			imageSrc: "/img1.jpg",
			category: "Tendencias de la Industria",
			title:
				"El Futuro de los CMS Audiovisuales: Integración, IA y Automatización",
			description:
				"Descubrí cómo la inteligencia artificial y la automatización están redefiniendo la gestión de contenido digital, mejorando la búsqueda, el etiquetado y la distribución de materiales en plataformas multimedia.",
		},
		{
			imageSrc:
				"/img2.jpg",
			category: "Mejores Prácticas",
			title:
				"Estrategias para una Gestión Inteligente del Contenido Audiovisual",
			description:
				"Aprendé cómo optimizar el flujo de trabajo de tu organización: desde la carga y clasificación automática de materiales hasta la analítica avanzada y el control de usuarios en tiempo real.",
		},
	];

	return (
		<section
			ref={ref as React.RefObject<HTMLElement>}
			className="py-24 bg-gradient-to-b from-black to-bordeaux-dark"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 transition-all duration-700 ease-out ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
					}`}
				>
					<h2
						className="text-4xl sm:text-5xl font-bold text-white mb-6"
						data-testid="text-knowledge-title"
					>
						Innovación que Transforma la Gestión Audiovisual
					</h2>
					
					<p
						className="text-xl text-gray-300 max-w-3xl mx-auto"
						data-testid="text-knowledge-subtitle"
					>
						Explorá cómo la tecnología, la automatización y la inteligencia artificial redefinen la forma en que las marcas crean, organizan y distribuyen contenido.
					</p>
				</div>

				<div
					className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ease-out ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
					}`}
				>
					{articles.map((article, index) => {
						const Icon = article.icon as any;
						return (
							<Card
								key={article.title}
								className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden group cursor-pointer"
								data-testid={`card-article-${index}`}
							>
								<div className="relative h-64 overflow-hidden bg-gradient-to-br from-bordeaux-dark to-black">
									{/* Imagen o Ícono centrado */}
									{article.imageSrc ? (
										<img
											src={article.imageSrc}
											alt={article.title}
											className="absolute inset-0 w-full h-full object-cover object-center opacity-70 scale-105 group-hover:scale-110 transition-transform duration-700"
										/>
									) : Icon ? (
										<div className="absolute inset-0 flex items-center justify-center">
											<Icon className="w-32 h-32 text-bordeaux-hover/30" />
										</div>
									) : null}

									{/* Overlay degradado para legibilidad */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
									<div className="absolute bottom-4 left-4">
										<span className="text-xs font-semibold text-bordeaux-hover uppercase tracking-wide">
											{article.category}
										</span>
									</div>
								</div>
								
								<CardContent className="p-6">
									<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bordeaux-hover transition-colors duration-300">
										{article.title}
									</h3>
									<p className="text-gray-300 leading-relaxed">
										{article.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
