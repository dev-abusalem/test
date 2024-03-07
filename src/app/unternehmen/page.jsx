import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {GridList, GridListItem} from '@/components/GridList'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import {StatList, StatListItem} from '@/components/StatList'
import {loadArticles} from '@/lib/mdx'
import {GridPattern} from "@/components/GridPattern";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Unsere Stärken"
        title="Kosten sparen durch Innovation ohne Neuerfindung."
        invert
      >
        <p>
          Innovation ist nicht zwangsläufig definiert als Neuerfindung.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Kosteneffizienz" invert>
            Die Migration bestehender Software ist oft wirtschaftlicher,
            da sie vorhandene Ressourcen wiederverwendet und eine schrittweise Aktualisierung
            ermöglicht, was zu niedrigeren Gesamtkosten im Vergleich zur Neuentwicklung führt.
          </GridListItem>
          <GridListItem title="Zeiteffizienz" invert>
            Eine Migration ermöglicht es, die bestehende Funktionalität
            schrittweise zu verbessern, anstatt von Grund auf alles neu zu beginnen, was bei komplexen Systemen
            in der Regel auch nicht ohne weiteres möglich ist.
            Somit können Verbesserungen schneller ausgeliefert werden, und
            verkürzen die Zeit bis zur Rentabilität.
          </GridListItem>
          <GridListItem title="Benutzerakzeptanz und Kontinuität" invert>
            Schrittweise Migrationen erleichtert es den Benutzern, sich an neue Funktionen und
            Schnittstellen anzupassen, da sie nicht mit einer plötzlichen und umfassenden
            Veränderung konfrontiert werden.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
/*
const team = [
  {
    title: 'Leitung',
    people: [
      {
        name: 'Dr. Manuel Lamotte-Schubert',
        role: 'Inhaber / CEO',
        image: { src: imageManuel },
      }
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Jörn Velten',
        role: 'Web Developer, Teamleitung',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kenneth Ellersdorfer',
        role: 'Web Developer, Backend',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Malik Rieder',
        role: 'Web Developer, Frontend',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Jakob Lichter',
        role: 'in Ausbildung',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Sacha Weisgerber',
        role: 'in Ausbildung',
        image: { src: imageBlakeReid },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}
 */

export const metadata = {
  title: 'Unternehmen',
  description:
    'Wir glauben daran, dass es einfache Lösungen auch für komplexe Aufgabenstelungen gibt. Unser Ziel ist die für den Kunden bestmögliche und möglichst einfache Lösung.',
}


function Values() {
  return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
          <GridPattern
              className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-270}
          />
        </div>

        <SectionIntro
            eyebrow="Geschichte"
            title="Unser Weg bis heute"
        >
          <p>
            Gestartet zunächst als Ein-Mann-Unternehmen wurde schnell klar, dass die Arbeit nicht alleine
            bewältigt werden konnte. Heute besteht unser Entwickler-Team aus insgesamt 6 Mitarbeitern
            mit unterschiedlichen Schwerpunkten in den Bereichen Backend und Frontend.
          </p>
        </SectionIntro>

        <Container className="mt-24">
          <GridList>
            <GridListItem title="2008 - Die Geburtsstunde">
              Manuel Lamotte-Schubert gründet pronego parallel zu seiner Promotion am Max-Planck-Institut für Informatik. Ein visionäres Einzelunternehmen ist geboren.
            </GridListItem>
            <GridListItem title="2011 - Der erste Meilenstein">
              Anmietung eines Büroraums und Einstellung des ersten Mitarbeiters zur Unterstützung.<br/>
              Realisierung des ersten größeren Webportals: Ein Gutscheinportal
              ähnlich zu Groupon bestehend aus Frontend und umfangreichem Backend zur mehrsprachigen Planung und Verwaltung der Deals.
            </GridListItem>
            <GridListItem title="2012 - Neue Horizonte">
              Der Umzug in größere Büros in Saarlouis markierte einen weiteren Schritt in unserer Erfolgsgeschichte.
              Mit der Einstellung von Auszubildenden und neuen Teammitgliedern erweiterten wir unser Spektrum.
              Als fester Partner einer Marketing-Agentur in Saarlouis übernahmen wir die technische Realisierung, festigten
              unsere Position und setzten auf nachhaltige Zusammenarbeit.
            </GridListItem>
            <GridListItem title="2019 - Kontinuierliches Wachstum">
              Das stetige Wachstum erforderte erneut den Umzug in noch größere Büros, um Raum für unsere Ideen und Projekte zu schaffen.
            </GridListItem>
            <GridListItem title="2023 - Internationale Ausrichtung">
              Mit großer Freude verkünden wir unseren neuesten Erfolg: einen gewonnenen Kunden in Kanada und die Eröffnung
              unserer neuen Niederlassung, MLS Programming, in Florida, USA.
              Dieser Meilenstein stärkt nicht nur unsere internationale Präsenz, sondern unterstreicht auch unser Engagement, weltweit erstklassige Lösungen anzubieten.
            </GridListItem>
          </GridList>
        </Container>
      </div>
  )
}



export default async function Company() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Unternehmen" title="Individuelle Software zur Beschleunigung Ihrer Prozesse.">
        <p>
          Vom Online-Datingportal bis hin zum Abrechnungssystem für Reha-Leistungen mit Krankenkassen -
          wir finden für jedes Projekt die optimale Lösung.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Wir haben uns darauf spezialisiert, gemäß dem Motto <strong className="font-semibold text-neutral-950">Innovation ohne Neuerfindung</strong> bestehende
            (Web-)Anwendungen mit Hilfe moderner(er) Technologien zu optimieren und zu migrieren.
            So können Sie Ihre Software erfolgreich
            in die Zukunft führen und stets auf dem neuesten Stand halten.
            <br/>
            Wir nutzen unsere langjährige Erfahrung, um gezielt neue Technologien in Ihrer Software einzusetzen
            und somit eine Verbesserung der Bedienung und der Rentabilität zu bewirken.
            Damit können Sie Ihre Software dem stetigen Wandel anpassen und sich dadurch im weltweiten Wettbewerb
            abgrenzen und hervorheben.
          </p>

        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2008" label="Gegründet" />
          <StatListItem value="100+" label="Zufriedene Kunden" />
          <StatListItem value="600+" label="Erledigte Jobs" />
        </StatList>
      </Container>

      <Culture />

      <Values />



      {/*
      <Team />


        <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        readMoreText="Weiterlesen"
        pages={blogArticles}
      />
      */}

      <ContactSection />
    </>
  )
}