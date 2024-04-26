import { CartCunter } from "@/components/shoping-cart/CartCunter";

export const metadata = {
	title: "Counter Page",
	description: "calculadora jeje",
};

export default function CounterPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full  h-full bg-red-200  ">
			<span>Productos del carrito</span>

			<CartCunter value={2} />
		</div>
	);
}
