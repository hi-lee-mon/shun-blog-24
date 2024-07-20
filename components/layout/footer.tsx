
export default function Footer() {
  return (
    //  footerを画面下部に配置する場合、親要素のクラスに依存する。左記のクラスを親に設定すること。className="min-h-dvh flex flex-col"
    <footer className="border-t sticky top-full">
      <div className="h-16 container flex items-center">
        <p className="text-muted-foreground flex-1">&copy; shun 2024</p>
      </div>
    </footer>
  )
}
