export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="container py-2">
      <main>
        {/* /para-inter-rootへのリクエストで以下2つが並列で表示される */}
        <div className="bg-green-200">
          {/* /para-inter-root/@modal/page.tsx */}
          {modal}
        </div>
        <div className="bg-red-200">
          {/* /para-inter-root/page.tsx */}
          {children}
        </div>
      </main>
    </div>
  )
}
