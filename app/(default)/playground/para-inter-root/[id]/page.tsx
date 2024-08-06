import { getPokemon } from '@/app/(default)/playground/para-inter-root/data/pokemon'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const pokemon = await getPokemon(id)
  return (
    <div className="container">
      <Button asChild variant="outline">
        <Link href="/playground/para-inter-root">戻る</Link>
      </Button>
      <div key={pokemon.id} className="rounded-lg bg-slate-200 p-4">
        <h2 className="text-xl font-bold">{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          className="size-full object-cover"
          alt={pokemon.name}
        />
      </div>
    </div>
  )
}
