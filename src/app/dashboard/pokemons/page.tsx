import { PokemonResponse } from "@/app/interfaces/pokemon/pokemon-response"
import { SimplePokemon } from "@/app/interfaces/pokemon/simple-pokemon"
import { PokemonGrid } from "@/app/pokemon/components/PokemonGrid"
import Image from "next/image"
import { off } from "process"


const getPokemons = async (limit=100, offset=0):Promise<SimplePokemon[]>=>{
    const data:PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
       res => res.json() 
    )

    const pokemons = data.results.map(pokemon=>({
        id:pokemon.url.split("/").at(-2)!,
        name:pokemon.name,
    }))

    //throw new Error()
    
    return pokemons
}


export default  async function PokemonsPage() {

    const pokemons = await getPokemons()


  return (
    <div className=" flex flex-col ">
     
            <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
