"use client";

import React, { useEffect } from "react";
import { SimpleWidget } from "./SimpleWidget";
import { IoBaseballOutline, IoCalculator, IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store/store";

interface Widget {
	label: string;
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	url: string;
}

const widgets: Widget[] = [
	{
		label: "10",
		title: "contador",
		subtitle: "contador secuencial",
		icon: <IoCalculator size={40} />,
		url: "/dashboard/counter",
	},
	{
		label: "10",
		title: "pokemones",
		subtitle: "lista de pokemones",
		icon: <IoBaseballOutline size={40} />,
		url: "/dashboard/pokemons",
	},
	{
		label: "10",
		title: "favoritos",
		subtitle: "lista de pokemones favoritos",
		icon: <IoBaseballOutline size={40} />,
		url: "/dashboard/favorites",
	},
];

export const WidgetGrid = () => {
	const count = useAppSelector((state) => state.counter.count);

	return (
		<div className="flex flex-wrap p-2 justify-center items-center">
			<SimpleWidget label={"contador"} title={`${count}`} subtitle={"cantidad"} icon={<IoCartOutline size={40} />} Url={"/dashboard/counter"} />
			<SimpleWidget label={"Pokemones favoritos"} title={`${count}`} subtitle={"cantidad"} icon={<IoBaseballOutline size={40} />} Url={"/dashboard/favorites"} />
		</div>
	);
};
