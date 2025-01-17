import { IProduct } from "@/interfaces/IProducts";

export const productsToPreLoad: IProduct[] = [
	{
		id: 1,
		name: "iPhone 11",
		price: 699,
		description:
			"Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
		image:
			"https://www.clevercel.co/cdn/shop/files/iPhone-11_White_Front_1_1200x.jpg?v=1712360008",
		categoryId: 1,
		stock: 10,
	},
	{
		id: 2,
		name: "MacBook Air",
		price: 999,
		description:
			"Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
		image:
			"https://www.compudemano.com/wp-content/uploads/2022/10/apple-macbook-air-13%E2%80%B3-256gb-m1-2021-gris-espacial-1.png",
		categoryId: 2,
		stock: 10,
	},
	{
		id: 3,
		name: "iPad Pro",
		price: 799,
		description:
			"Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
		image:
			"https://tiendasishop.com/media/catalog/product/i/p/ipad_pro_wi-fi_12-9_in_6th_generation_silver_pdp_image_position-1b_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
		categoryId: 3,
		stock: 10,
	},
	{
		id: 4,
		name: "Apple Watch Series 6",
		price: 399,
		description:
			"Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
		image:
			"https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-stainless-steel-gold-case_09152020_inline.jpg.large.jpg",
		categoryId: 4,
		stock: 10,
	},
	{
		id: 5,
		name: "AirPods Pro",
		price: 249,
		description:
			"Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
		image:
			"https://www.phonelectrics.com/cdn/shop/products/AirpodsPro2-2_1200x1200.jpg?v=1670285493",
		categoryId: 5,
		stock: 10,
	},
	{
		id: 6,
		name: "HomePod mini",
		price: 99,
		description:
			"Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
		image:
			"https://i5.walmartimages.com/seo/HomePod-mini-Space-Gray_a459dd61-0761-440a-b03e-e2358e18298f.dcb3247f449438eb2c6c67301a40c6b8.jpeg",
		categoryId: 6,
		stock: 10,
	},
];
