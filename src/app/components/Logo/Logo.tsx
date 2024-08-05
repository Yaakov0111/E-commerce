// Archivo: components/Logo.tsx
import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex flex-col items-center ">
			<div className="relative w-28 h-28">
				<Image
					src="/image.png"
					alt="Logo"
					layout="fill"
					objectFit="contain"
					priority
				/>
			</div>
		</div>
	);
};

export default Logo;
