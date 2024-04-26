import Image from "next/image";
import { IoAccessibilitySharp } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { IoBrowsersSharp } from "react-icons/io5";
import { IoCalculator } from "react-icons/io5";
import { IoBaseballOutline } from "react-icons/io5";

const menuItems = [
	{ path: "/dashboard/main", icon: <IoBrowsersSharp size={40} />, title: "Dashboard", subtitle: "Visualizacion" },
	{ path: "/dashboard/counter", icon: <IoCalculator size={40} />, title: "Counter", subtitle: "Contador" },
	{ path: "/dashboard/pokemons", icon: <IoBaseballOutline size={40} />, title: "Pokemons", subtitle: "pokemones" },
	{ path: "/dashboard/favorites", icon: <IoBaseballOutline size={40} />, title: "Favorites", subtitle: "pokemons favoritos" },
];

export const Sidebar = () => {
	return (
		<div id="menu" style={{ width: 400 }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll">
			<div id="logo" className="my-4 px-6">
				<h1 className="text-lg md:text-2xl font-bold text-white flex items-center ">
					<IoAccessibilitySharp />
					<span className="ml-3">Dashboard</span>
				</h1>
				<p className="text-slate-500 text-sm">Manage your actions and activities</p>
			</div>
			<div id="profile" className="px-6 py-10">
				<p className="text-slate-500">Welcome back,</p>
				<a href="#" className="inline-flex space-x-2 items-center">
					<span>
						<Image width={50} height={50} className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt="" />
					</span>
					<span className="text-sm md:text-base font-bold">Edward Tompson</span>
				</a>
			</div>

			<div id="nav" className="w-full px-6">
				{menuItems.map((item, index) => (
					<SidebarMenuItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};
