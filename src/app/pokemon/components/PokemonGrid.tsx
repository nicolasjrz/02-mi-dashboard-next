import { SimplePokemon } from "@/app/interfaces/pokemon/simple-pokemon"
import Image from "next/image"
import { PokemonCard } from "./PokemonCard"

interface Props {
  pokemons:SimplePokemon[]
}



export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {
        pokemons.map((pokemon,index)=>(

           <div className="flex flex-col items-center justify-center" key={index}>
            {/* <Image  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width={100} height={100} alt={""} />
            <p>{pokemon.name}</p> */}
            <PokemonCard pokemon={pokemon}/>
           </div>
        ))
    }
   </div>
  )
}
