import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'

export default function Page() {
  return (
    <div className="container py-4">
      <div className="relative space-x-5 rounded-md border p-8 shadow">
        <div className="aspect-video bg-muted"></div>
        <div className="mt-4 flex flex-col gap-4">
          <h2>
            <Link href="/" className="text-3xl">
              記事タイトル
              <span className="absolute inset-0"></span>
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sequi repellat ex
            doloremque illum in saepe, sint quaerat, mollitia asperiores beatae nam atque distinctio
            eius doloribus voluptatum sapiente obcaecati repellendus! Consequatur omnis expedita
            magni saepe eligendi ipsa modi ipsam iste sint, error asperiores vel. Totam deserunt in
            enim mollitia quae natus! Molestiae inventore voluptatem molestias consequatur totam
            tenetur at pariatur?
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="z-10" asChild>
              <Link href="/playground">タグ1</Link>
            </Button>
            <Button variant="outline" className="z-10" asChild>
              <Link href="/playground">タグ2</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
