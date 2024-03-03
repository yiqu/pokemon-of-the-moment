/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteLoaderData } from "@remix-run/react";


function PokemonNowLanding() {
  const payload: any = useRouteLoaderData("routes/potd.now");
  console.log(payload)

  return (
    <div style={ { marginTop: '12px' } }>
      Pokedex ID: { payload.payload.id }
    </div>
  )
}

export default PokemonNowLanding;
