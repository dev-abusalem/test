import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Link from "next/link";
import {Button} from "@/components/Button";
import clsx from "clsx";

export function StatList({ children, ...props }) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  )
}

export function StatListItem({ label, value, href, linkText }) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-base text-neutral-600">
          {label}
          {href && (
              <Button
                  href={href}
                  aria-label={`Read more: ${label}`}
                  className="ml-2 py-2.5"
              >
                  {linkText}
              </Button>
          )}

      </dt>
      <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
          <nobr>{value}</nobr>
      </dd>
    </Border>
  )
}
