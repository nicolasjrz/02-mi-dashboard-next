import { PokemonGrid } from "@/components/pokemons/PokemonGrid";

export default async function FavoritesPage() {
	return (
		<div className=" flex flex-col ">
			<PokemonGrid pokemons={[]} />
		</div>
	);
}
