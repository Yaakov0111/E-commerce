// Archivo: components/Logo.tsx
import Image from "next/image";

const LogoCart = () => {
	return (
		<div className="flex flex-col items-center space-y-2">
			<div className="relative w-36 h-16">
				<Image
					src="/LogoCart.png"
					alt="Logo Carrito"
					layout="fill"
					objectFit="contain"
					priority
				/>
			</div>
		</div>
	);
};

export default LogoCart;
