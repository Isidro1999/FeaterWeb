import { motion } from "framer-motion";
import { Cloud, Database, Lock, Layers, MonitorSmartphone, BarChart3 } from "lucide-react";

type FeatureItem = {
	icon: React.ElementType;
	title: string;
	description: string;
};

const features: FeatureItem[] = [
	{
		icon: Cloud,
		title: "Infraestructura en la Nube",
		description:
			"Soluciones escalables y seguras construidas sobre infraestructura cloud de alto rendimiento.",
	},
	{
		icon: Database,
		title: "Gestión de Datos",
		description:
			"Almacenamiento, organización y procesamiento en tiempo real con herramientas diseñadas para decisiones ágiles.",
	},
	{
		icon: Lock,
		title: "Seguridad Primero",
		description:
			"Autenticación segura, encriptación de extremo a extremo y cumplimiento de estándares empresariales.",
	},
	{
		icon: Layers,
		title: "Integración y Escalabilidad",
		description:
			"Arquitectura modular lista para integrarse con APIs, SSO y servicios de terceros.",
	},
	{
		icon: MonitorSmartphone,
		title: "Experiencia de Usuario",
		description:
			"Interfaces intuitivas, veloces y adaptadas a los flujos de trabajo de cada cliente.",
	},
	{
		icon: BarChart3,
		title: "Analytics y Control",
		description:
			"Monitoreo en tiempo real del uso de la plataforma, métricas de interacción y rendimiento.",
	},
];

function Block({ item, index }: { item: FeatureItem; index: number }) {
	const Icon = item.icon;
	const isReversed = index % 2 === 1;

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
			className={
				"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
			}
		>
			<div
				className={
					`group relative overflow-hidden bg-black/60 backdrop-blur-sm rounded-3xl border border-bordeaux/30 hover:border-bordeaux-hover transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-bordeaux-hover/20` +
					" " +
					`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} items-center`
				}
			>
				{/* Fondo decorativo por bloque */}
				<motion.div
					aria-hidden
					className="absolute inset-0 pointer-events-none"
					initial={{ opacity: 0.15, y: 30 }}
					whileInView={{ opacity: 0.3, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="absolute -inset-24 bg-gradient-to-br from-bordeaux-dark/60 via-bordeaux/30 to-bordeaux-hover/40 blur-3xl" />
				</motion.div>

				{/* Icono / Ilustración */}
				<div className="w-full md:w-2/5 p-8 md:p-12 flex justify-center items-center">
					<motion.div
						className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-bordeaux/20 border border-bordeaux/40 flex items-center justify-center shadow-lg shadow-bordeaux/10"
						animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 0.98, 1] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
					>
						<Icon className="w-12 h-12 md:w-14 md:h-14 text-bordeaux-hover" />
					</motion.div>
				</div>

				{/* Contenido */}
				<div className="w-full md:w-3/5 p-8 md:p-12">
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
						{item.title}
					</h3>
					<p className="text-gray-300 text-lg leading-relaxed">
						{item.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export function FeatureBlocks() {
	return (
		<section className="bg-gradient-to-b from-black via-bordeaux-dark to-black py-12 md:py-20">
			{features.map((f, i) => (
				<Block key={f.title} item={f} index={i} />
				))}
		</section>
	);
}

