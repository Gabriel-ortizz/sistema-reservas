interface ButtonProps {
  children: React.ReactNode; // Pode ser qualquer conteúdo dentro do botão
  onClick: () => void; // Função chamada quando o botão for clicado
  variant?: "primary" | "secondary" | "danger"; // Definindo as variantes possíveis do botão
}

export function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded transition duration-300";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
