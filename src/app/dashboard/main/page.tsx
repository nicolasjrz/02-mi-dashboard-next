import { WidgetGrid } from "@/components/widget/WidgetGrid";

export default function MainPage() {
	return (
		<div className="text-black p-2">
			<h1 className="mt-2 text-2xl">Dashboard</h1>

			<WidgetGrid />
		</div>
	);
}
