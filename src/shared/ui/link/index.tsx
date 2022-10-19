//import modules
import { Link as RLink } from "react-router-dom"

interface LinkProps {
    url: string
    children: React.ReactNode
    className?: string
}

export const Link = ({ url, children, className }: LinkProps) => (
  <RLink to={url} className={className}>
    {children}
  </RLink>
)