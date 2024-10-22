export const IconLinkGroup = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-4">{children}</ul>
}

export const IconLinkGroupItem = ({
  logo,
  href,
  linkText,
}: {
  logo: JSX.Element
  href: string
  linkText: string
}) => {
  return (
    <li className="w-fit transition-all hover:underline">
      <a href={href} target="_blank" rel="noreferrer" className="flex gap-2">
        {logo}
        {linkText}
      </a>
    </li>
  )
}
