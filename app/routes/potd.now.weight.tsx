/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

function PokemonNowWeight() {
  const { ok, weight } = useLoaderData<typeof loader>();


  return (
    <div>
      weight: { weight }
    </div>
  )
}

export default PokemonNowWeight;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const randomNumberBetweenOneAndTen = 1;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberBetweenOneAndTen}`);
  const pokemonData: Pokemon = await pokemon.json();

  return json({
    ok: true,
    weight: pokemonData.weight
  });
}

interface Pokemon {
  name: string;
  id: number;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
}