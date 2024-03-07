import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoWissen from '@/images/clients/wissen-online/logo-light.svg'
import logoWissenDark from '@/images/clients/wissen-online/logo-dark.svg'
import logoVonGreyerzLight from '@/images/clients/von-greyerz/logo-light.svg'
import logoMatrix42 from '@/images/clients/matrix42/logo-light.svg'
import logoBasf from '@/images/clients/basf/logo-light.svg'
import logoOeschberghof from '@/images/clients/oeschberghof/logo-light.svg'

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import {Button} from "@/components/Button";

const clients = [
  ['VON GREYERZ', logoVonGreyerzLight],
  ['Wissen.Online', logoWissen],
  ['Matrix42', logoMatrix42],
  ['BASF', logoBasf],
  ['Öschberghof', logoOeschberghof],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Kunden, die unserer Expertise vertrauen
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn className="text-center">
                  <Image src={logo} alt={client} unoptimized className="inline-block" />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Migration von Alt nach Modern"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
         <p>
             Mit jahrelanger Erfahrung in der Softwareentwicklung und Migration bieten wir das Know-how,
             um selbst die komplexesten Legacy-Systeme erfolgreich zu modernisieren.
        </p>
          <p>
              Wir haben über die Jahre erfolgreich Projekte für viele Kunden - vom Kleinunternehmen
              bis hin zur börsennotierten Aktiengesellschaft - abgeschlossen und
              orientieren uns stets an den höchsten Qualitätsstandards.
          </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">
                    {caseStudy.date}
                  </span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Fallstudie</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Unsere Werte"
        title="Wir sind Qualitätsdienstleister und schaffen einfache Lösungen für Ihre Probleme."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
            Wir überführen Ihre bestehenden Anwendungen schrittweise in die moderne Technologielandschaft, um Ihnen effizientere, leistungsstärkere und zukunftssichere Lösungen zu bieten.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Qualitätsorientierte Migration">
                Wir verstehen, dass die Migration von Legacy-Anwendungen eine anspruchsvolle Aufgabe ist.
                Unsere erfahrenen Entwickler setzen auf bewährte Methoden und Best Practices, um sicherzustellen,
                dass Ihre Anwendungen nicht nur erfolgreich migriert werden, sondern auch eine deutliche
                Qualitätssteigerung erfahren.
                Dazu gehört, dass wir nicht nur stupide Featurewünsche abarbeiten sondern
                uns aktiv in Ihre Prozesse eindenken und Dinge hinterfragen.
                Eine Vielzahl von Folgeaufträgen zufriedener Kunden bestätigt diese Herangehensweise.
            </ListItem>
            <ListItem title="Lösungsorientiertes Denken">
                Wir verstehen uns nicht nur als Programmierer, sondern auch als Problemlöser und Berater.
                Wir haben bei der Migration stets Ihre Anforderungen im Blick und prüfen dabei, ob Ihre Systeme diese
                vollständig abdecken bzw. erarbeiten gemeinsam einen Plan zur Realisierung Ihrer Wünsche.<br/>
                Unser Ziel ist es, Ihre Softwareumgebung so zu transformieren, dass sie optimal zu Ihrer Unternehmensstrategie passt.
                Zur Verbesserung reicht es oft aus, Dinge zu ändern <strong className="font-semibold text-neutral-950">ohne</strong> alles neu zu machen!
            </ListItem>
            <ListItem title="Einfachheit der Lösung">
                Wir glauben an die Kraft der Einfachheit. Unsere Lösungen sind darauf ausgerichtet, Ihre Prozesse zu vereinfachen
                und die Effizienz zu steigern - ohne dabei jedem Trend hinterherzulaufen.
                Durch klare Architekturen und gut durchdachte Auswahl von Tools minimieren wir die Komplexität und optimieren die Performance,
                sodass Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </ListItem>
            <ListItem title="Agiles Projektmanagement">
                Unsere agile Vorgehensweise ermöglicht es uns, flexibel auf sich ändernde Anforderungen zu reagieren und gleichzeitig
                die Projektziele im Blick zu behalten.
                Durch regelmäßige Updates können Sie den Fortschritt der Entwicklung verfolgen und können damit direkten Einfluss auf den
                Projektverlauf nehmen. So stellen wir sicher, dass das Projekt stets im Zeit- und Kostenrahmen bleibt.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Wir sind ein Sotwareentwicklungsunternehmen mit Schwerpunkt Webtechnologien.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Legacy <span className="text-lime-600">→</span> State-of-The-Art.<br/>
            100% Made in Germany.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Wir sind Experten für Softwarelösungen und migrieren Ihre Altanwendung
            schrittweise zu neuen Technologien. <Link href="/kontakt" className="font-bold underline hover:no-underline">Let&apos;s do it!</Link>
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Wissen.Online', logo: logoWissenDark }}
      >
          Pronego hat sich als zuverlässiger Partner erwiesen, dem wir bedingungslos vertrauen und der stets dazu beiträgt, unsere Erwartungen zu übertreffen.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
