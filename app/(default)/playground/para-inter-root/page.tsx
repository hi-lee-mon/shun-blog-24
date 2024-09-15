import { getAllPokemons } from '@/app/(default)/playground/para-inter-root/data/pokemon'
import Link from 'next/link'

export default async function Page() {
  const pokemons = await getAllPokemons()

  return (
    <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="relative rounded-lg bg-slate-200 p-4">
          <h2 className="text-xl font-bold text-slate-600">
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
