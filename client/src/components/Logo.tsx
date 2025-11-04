import { Link } from "wouter";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ 
  className = "", 
  size = "md", 
  showText = true
}: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl", 
    lg: "text-4xl"
  };

  const iconSizes = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 }
  };

  const currentSize = iconSizes[size];

  return (
    <Link 
      href="/"
      className={`font-bold text-white hover:text-bordeaux-hover transition-colors duration-300 ${sizeClasses[size]} ${className}`}
      data-testid="link-logo"
    >
      <div className="flex items-center space-x-2">
        {/* Logo SVG con solo cheurones */}
        <svg 
          width={currentSize.width} 
          height={currentSize.height} 
          viewBox="0 0 50 40" 
          className="flex-shrink-0"
        >
          {/* Fondo negro */}
          <rect width="50" height="40" fill="black" />
          
          {/* Cheurones (>>>) */}
          <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Primer cheurón */}
            <path d="M8 12 L16 20 L8 28" />
            {/* Segundo cheurón */}
            <path d="M18 12 L26 20 L18 28" />
            {/* Tercer cheurón */}
            <path d="M28 12 L36 20 L28 28" />
          </g>
        </svg>
      </div>
    </Link>
  );
}
