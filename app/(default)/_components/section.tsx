export const Section = ({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) => {
  return (
    <section className={className}>
      <h2 className="inline-block	 border-b-2 text-xl font-bold">{title}</h2>
      <div className="p-4">{children}</div>
    </section>
  )
}
