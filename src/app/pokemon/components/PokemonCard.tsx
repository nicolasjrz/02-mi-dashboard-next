import Link from "next/link";
import { SimplePokemon } from "../../interfaces/pokemon/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon;

	return (
		<div className="mx-auto right-0 mt-2 w-60">
			<div className="bg-white rounded overflow-hidden shadow-lg">
				<div className="text-center p-6 bg-gray-800 border-b">
					{/* <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg> */}
					<div className="bg-black flex justify-center ">
						<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={300} height={300} alt={"jeje"} />
					</div>
					<p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
					{/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
					<div className="mt-5">
						<Link href={`/dashboard/pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
							Mas informacion
						</Link>
					</div>
				</div>
				<div className="flex justify-center  border-b">
					<Link href={`/dashboard/main`} className="px-4 py-2 hover:bg-gray-100 flex">
						<div className="text-red-600">
							<IoHeartOutline />
						</div>
						<div className="pl-3">
							<p className="text-sm font-medium text-gray-800 leading-none">No es favorito</p>
							<p className="text-xs text-gray-500">View your campaigns</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
