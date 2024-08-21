export const IconLinkItem = ({
  logo,
  href,
  linkText,
}: {
  logo: JSX.Element
  href: string
  linkText: string
}) => {
  return (
    <li className="transition-all hover:underline">
      <a href={href} target="_blank" rel="noreferrer" className="flex gap-2">
        {logo}
        {linkText}
      </a>
    </li>
  )
}
