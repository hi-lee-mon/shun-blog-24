import { getPokemon } from '@/app/(default)/playground/para-inter-root/data/pokemon'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Link from 'next/link'

// /para-inter-root/[id]のリクエストが来た時にインターセプトして以下が表示される
// イメージだと以下の同階層のセグメントをインターセプトするのでフォルダ名の括弧が(.)になる。
// /para-inter-root       /   [id]/page.tsx
// /para-inter-root/@modal/(.)[id]/page.tsx
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const pokemon = await getPokemon(id)

  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{pokemon.name}</DialogTitle>
          <DialogDescription>xxx</DialogDescription>
        </DialogHeader>
        <div key={pokemon.id} className="rounded-lg bg-slate-200 p-4">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            className="size-full object-cover"
            alt={pokemon.name}
          />
        </div>
        <DialogFooter className="sm:justify-start">
          <Button asChild variant="outline">
            <Link href="/playground/para-inter-root">戻る</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
