'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Page() {
  // ユーザメニュー実装
  return (
    <>
      <div className="py-4">
        {/* tailwindはモバイルファーストなのでデフォルトモバイルとしてlgでPCようにカスタマイズする */}
        <div className="grid gap-4 lg:grid-cols-3">
          <CardWithForm title="プロジェクトの作成" description="プロジェクトを作成します。">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">名前</Label>
                  <Input id="name" placeholder="プレイスホルダー" />
                </div>
              </div>
            </form>
          </CardWithForm>
          <CardWithForm title="よくある質問" description="">
            <AccordionDemo />
          </CardWithForm>
          <CardWithForm title="カルーセル" description="カルーセル">
            {/* カルーセルは相対位置でボタンを表示するのでrelativeとなる親にずれる分だけpaddingを与える */}
            <div className="px-10">
              <CarouselDemo />
            </div>
          </CardWithForm>
        </div>
      </div>
    </>
  )
}

function CardWithForm({
  children,
  title,
  description,
}: {
  children: React.ReactNode
  title: string
  description: string
}) {
  return (
    // デフォルトだと幅があるが、コンポーネント自身に幅は持たせない設計として親から操作する
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function CarouselDemo() {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
