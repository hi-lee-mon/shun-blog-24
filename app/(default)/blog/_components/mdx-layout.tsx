export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose mx-auto dark:prose-invert  [&_a:hover]:underline [&_a]:no-underline">
      {children}
    </div>
  )
}
