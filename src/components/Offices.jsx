import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Saarlouis" invert={invert}>
          pronego
            <br/>
            Provinzialstraße 92
          <br />
          667640 Saarlouis, Deutschland
        </Office>
      </li>
      <li>
        <Office name="Orlando" invert={invert}>
            MLS Programming Inc.
            <br/>
            1317 Edgewater Dr #6667
          <br />
            Orlando, FL 32804, United States
        </Office>
      </li>
    </ul>
  )
}
