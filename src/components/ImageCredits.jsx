import Link from 'next/link'

export function ImageCredits({ children, href, className = 'absolute bottom-0 left-0 pl-2 text-sm text-white'}) {

  return (
      <div className={className}>
        { children ? 'Bild: ' : '' }
        { href
            ? (<Link className="underline hover:no-underline" href={href} target="_blank">{children}</Link>)
            : (children)
        }
      </div>
  )
}