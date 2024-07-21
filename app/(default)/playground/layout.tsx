export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-2">
      <main>{children}</main>
    </div>
  )
}
