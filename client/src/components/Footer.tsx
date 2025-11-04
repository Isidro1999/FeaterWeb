import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function Footer() {
	const [email, setEmail] = useState("");
	const { toast } = useToast();

	const subscribeNewsletterMutation = useMutation({
		mutationFn: async (email: string) => {
			const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
			return response;
		},
		onSuccess: () => {
			toast({
				title: "¡Éxito!",
				description: "Te has suscrito a nuestro boletín",
			});
			setEmail("");
		},
		onError: (error: any) => {
			toast({
				title: "Suscripción Fallida",
				description: error.message || "Por favor, intentá de nuevo más tarde",
				variant: "destructive",
			});
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!email) {
			toast({
				title: "Correo electrónico requerido",
				description: "Por favor, ingresá tu dirección de correo electrónico",
				variant: "destructive",
			});
			return;
		}

		subscribeNewsletterMutation.mutate(email);
	};

	return (
		<footer className="bg-black border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Newsletter Section */}
				<div className="pt-4 mb-12">
					<div className="max-w-md mx-auto text-center">
						<h3 className="text-2xl font-bold text-white mb-2">Suscribite a Nuestro Boletín</h3>
						<p className="text-gray-400 mb-6">Recibí las últimas novedades y actualizaciones en tu bandeja de entrada</p>
						<form onSubmit={handleSubmit} className="flex gap-2">
							<Input
								type="email"
								placeholder="Ingresá tu correo electrónico"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={subscribeNewsletterMutation.isPending}
								className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-bordeaux-hover disabled:opacity-50"
								data-testid="input-newsletter-email"
							/>
							<Button
								type="submit"
								disabled={subscribeNewsletterMutation.isPending}
								className="bg-bordeaux hover:bg-bordeaux-hover text-white transition-all duration-300 disabled:opacity-50"
								data-testid="button-newsletter-submit"
							>
								{subscribeNewsletterMutation.isPending ? "Suscribiendo..." : "Suscribirse"}
							</Button>
						</form>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 pt-8 text-center">
					<p className="text-gray-400 text-sm">© {new Date().getFullYear()} FEATER. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
