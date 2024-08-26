import { getAllPokemons } from '@/app/(default)/playground/para-inter-root/data/pokemon'
import Link from 'next/link'

export default async function Page() {
  const pokemons = await getAllPokemons()

  return (
    <div className="grid grid-cols-4 gap-4 p-2">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="relative rounded-lg bg-slate-200 p-4">
          <h2 className="text-xl font-bold">
            {pokemon.name}
            <Link href={`/playground/para-inter-root/${pokemon.id}`} className="text-3xl">
              <span className="absolute inset-0"></span>
            </Link>
          </h2>
          <img
            src={pokemon.sprites.front_default}
            className="size-full object-cover"
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  )
}
