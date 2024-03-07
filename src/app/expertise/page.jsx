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
        eyebrow="Unsere Mentalität"
        title="Die richtige Balance zwischen Kosten und Nutzen."
        invert
      >
        <p>
          Die Grundpfeiler unserer Arbeit sind Einfachheit, Qualität und Kundenzufriedenheit.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Einfachheit" invert>
            Wir überwinden die Komplexität durch Einfachheit in unseren Lösungen. Klingt einfach, ist
            aber höchst anspruchsvoll und fordert einen Blick über den Tellerand hinaus aufs große Ganze.
          </GridListItem>
          <GridListItem title="Qualität" invert>
            Wir wollen das Rad nicht neu erfinden, sondern bestehende Lösungen so transformieren,
            dass ein aktuelles, hochwertiges Ergebnis mit besserer Performance
            entsteht.
          </GridListItem>
          <GridListItem title="Kundenzufriedenheit" invert>
            Wir fordern uns immer wieder heraus, die Erwartungen unserer Kunden zu übertreffen und
            stellen Ihren Erfolg und das Ziel als großes Ganze in den Vordergrund.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Expertise',
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
            eyebrow="Womit wir arbeiten"
            title="Technologien"
        >
          <p>
            Gerade bei etwas älterer Software gibt es im Hinblick auf Migration nicht nur die Lösung, alles neu zu entwickeln.
            Wir schlagen passende <strong className="font-semibold text-neutral-950">neue</strong> und <strong
              className="font-semibold text-neutral-950">moderne Technologien</strong> zielgerichtet nach
            Eignung vor um z.B. bestimmte Aspekte
            einer Anwendung wie die Benutzererfahrung zu verbessern oder Performanceoptimierungen zu erreichen.
            Hierbei beraten wir Sie hinsichtlich der Vor- und Nachteile einer Lösung und rüsten
            Ihre Anwendung im Anschluss entsprechend auf.
            {/*Dementsprechend ist das nachfolgende Listung bei Weitem nicht vollständig und dient nur als grobe Übersicht
            einiger zentraler Tools, mit denen wir häufig arbeiten.*/}
          </p>
        </SectionIntro>

        <Container className="mt-24">
          <GridList>
            <GridListItem title="Laravel">
              Laravel ist ein modernes, leistungsstarkes und einfach zu nutzendes PHP-Webframework mit eleganter Syntax, MVC-Architektur und nützlichen Funktionen
              wie Eloquent ORM und der Artisan-Befehlszeile, das die Entwicklung moderner Webanwendungen erleichtert.
            </GridListItem>
            <GridListItem title="Vue.js">
              Vue.js ist ein JavaScript-Framework für die Entwicklung von interaktiven Benutzeroberflächen. Mit reaktiver Datenbindung und einer
              flexiblen Komponentenstruktur ermöglicht es die einfache Integration insbesondere in bestehende Projekte und bietet eine
              effiziente Lösung zur Verbesserung der Benutzerfahrung in Ihrer Webanwendung.
            </GridListItem>
            <GridListItem title="Vite">
              Vite ist ein schnelles, schlankes Build-Tool für moderne Webanwendungen. Als Entwicklungs-Tool optimiert es die Entwicklungszeit durch
              schnelle Build-Geschwindigkeiten und native ES-Module. Vite eignet sich besonders gut für Vue.js-Projekte, bietet jedoch auch Unterstützung für andere Frameworks.
            </GridListItem>
            <GridListItem title="Kohana & CodeIgniter">
              Kohana und CodeIgniter sind beide etwas ältere PHP-Webframeworks, die sich auf einfache Nutzung und klare Strukturen konzentrieren und noch
              in vielen älteren Projekten eingesetzt werden und nicht ohne weiteres ausgetauscht werden können.
              CodeIgniter ist bekannt für seine Einfachheit und Flexibilität, während Kohana eine erweiterte Version mit zusätzlichen Funktionen darstellt.
            </GridListItem>
            <GridListItem title="WordPress">
              WordPress wurde ursprünglich als Blog-System entwickelt. Mittlerweile hat es sich weiterentwickelt zu einem vielseitigen und weit
              verbreiteten System zur Verwaltung von Webseiten mit unzähligen Plugins.
              Statistisch betrachtet werden <strong className="font-semibold text-neutral-950">mehr als 42.7% aller Webseiten im Internet</strong> mit WordPress betrieben.
            </GridListItem>
            <GridListItem title="Contao">
              Contao ist ein freies Content-Management-System für kleine bis große Websites und gerade im deutschsprachigen Raum sehr beliebt.
              Besonders im Hinblick auf Sicherheit punktet Contao aufgrund hervorragender Struktur und geringerer Verbreitung (letzteres im Vergleich zu WordPress).
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
      <PageIntro eyebrow="Expertise" title="Wir sind Lösungsfinder für komplexe Probleme.">
        <p>
          Wir glauben daran, dass es einfache (Software-)Lösungen auch für komplexere Aufgabenstellungen gibt.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Wir betrachten unsere Arbeit nicht bloß als Dienstleistung, sondern identifizieren
            uns mit Ihrem Projekt als Partner. Mit einer kritischen, doch stets konstruktiven Denkweise
            stellen wir die passenden Fragen und haben dabei immer das übergeordnete Ziel im Fokus:
            die für den Kunden <strong>bestmögliche</strong> und dabei möglichst <strong>einfache</strong> Lösung umzusetzen.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="15+" label="Jahre Erfahrung" />
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