/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

function ProfilePhotos() {
  const { ok, payload } = useLoaderData<typeof loader>();

  return (
    <div>
      <h3>{ payload.name } !</h3>
      <div>
        { payload.sprites.front_default && <img src={ payload.sprites.front_default } alt={ payload.name } /> }
      </div>
      <div>
        { payload.sprites.back_default && <img src={ payload.sprites.back_default } alt={ payload.name } /> }
      </div>
      <div style={ { display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '12px' } }>
        <div>
          ID
        </div>
        <Link to="weight">
          Weight Info
        </Link>
        <Link to="height">
          Height Info
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ProfilePhotos;

//https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const randomNumberBetweenOneAndTen = 1;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberBetweenOneAndTen}`);
  const pokemonData: Pokemon = await pokemon.json();

  return json({
    ok: true,
    payload: pokemonData
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