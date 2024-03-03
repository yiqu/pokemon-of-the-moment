/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

function PokemonNowHeight() {
  const { ok, height } = useLoaderData<typeof loader>();

  return (
    <div>
      height: { height }
    </div>
  )
}

export default PokemonNowHeight;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const randomNumberBetweenOneAndTen = 1;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberBetweenOneAndTen}`);
  const pokemonData: Pokemon = await pokemon.json();

  return json({
    ok: true,
    height: pokemonData.height
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