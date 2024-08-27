export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose mx-auto dark:prose-invert [&_a:hover]:underline [&_a]:no-underline">
      {children}
    </div>
  )
}
