import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn} from '@/components/FadeIn'
import {GridList, GridListItem} from '@/components/GridList'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import {StylizedImage} from '@/components/StylizedImage'
import {TagList, TagListItem} from '@/components/TagList'
import imageConsulting from '@/images/consult.webp'
import imageResult from '@/images/thumbup.webp'
import imageCodeanalysis from '@/images/codeanalysis.webp'
import {StatList, StatListItem} from "@/components/StatList";
import { List, ListItem } from '@/components/List'
import {GridPattern} from "@/components/GridPattern";


function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}


function About() {
  return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
            eyebrow="Meine Werte"
            title="Prinzipien"
            invert
        >
          {/*<p>
            Die Grundpfeiler unserer Arbeit sind Einfachheit, Qualität und Kundenzufriedenheit.
          </p>*/}
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem title="Langjährige Berufserfahrung" invert>
                In einer schnelllebigen Zeit stehe ich für Verlässlichkeit, Erfahrung und tiefgreifendem Fachwissen durch
                nachgewiesene Expertenkenntnisse.
                Dies belegt mein kontinuierlicher Weg in der Informatik mit diversen Abschlüssen bis hin zur Promotion.
                In zahlreichen Projekten seit 2000 habe ich Softwarelösungen entwickelt und dabei wertvolle
                Erfahrungen gesammelt, auf die ich als Gutachter zurückgreifen kann.
            </GridListItem>
            <GridListItem title="Unabhängig und unparteiisch" invert>
                Dies garantiert Ihnen die Freiheit, im Rahmen einer Beratung die optimale Lösung für Ihre IT-Herausforderungen zu wählen.
                Verlassen Sie sich auf meine neutrale und objektive Position als Experte für individuelle Software-Lösungen, egal ob Neuentwicklung
                oder zur Bewertung im Schadensfall.
            </GridListItem>
            <GridListItem title="Komplexität verständlich" invert>
                Dank meiner Erfahrung als Tutor an der renommierten Universität des Saarlandes während meiner Promotionszeit, verfüge ich über die Fähigkeit,
                komplexe Zusammenhänge verständlich für jedermann zu erklären.
                Profitieren Sie von meiner Expertise, um auch anspruchsvollste Themen leicht zugänglich zu machen.
            </GridListItem>
          </GridList>
        </Container>
      </div>
  )
}


function Prologue() {
    return (
        <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
            <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
                <GridPattern
                    className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                    yOffset={-270}
                />
            </div>
            <SectionIntro
                title="Wofür ein Gutachter?"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    In der heutigen Zeit sind wir vermehrt mit Streitfällen konfrontiert, bei denen komplexe
                    Softwareprodukte und Softwareanpassungen in umfangreichen IT-Projekten eine zentrale Rolle spielen.
                    Diese Konflikte betreffen oft nicht erfüllte Anforderungen, unvollständige oder fehlerhafte Spezifikationen,
                    oder schlicht die mangelhafte Ausführung des Auftrags in IT-Projekten.
                </p>
                <p>
                    Wenn Anwälte, Mandanten oder sonstige Parteien aufgrund mangelnden technischen Fachwissens nicht angemessen reagieren können,
                    helfe ich mit meiner Expertise als Sachverständiger aus, um die Argumente sachlich zu überprüfen und sie mit den
                    vorgebrachten Gegebenheiten zu vergleichen.
                </p>
            </SectionIntro>
        </div>
    )
}

function One() {
  return (
    <Section title="Vorbereitung und Recherche" image={{ src: imageConsulting, shape: 3, licenseText: '© pronego 2024', 'licenseColor': 'text-black' }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
            Sie nehmen unverbindlich Kontakt auf, z.B. telefonisch, per E-Mail oder auch persönlich.
            Die erste Phase beginnt - sofern nicht bereits durch ein Gericht vorgegeben - mit der Klärung
            der Fragestellung und Intention. Hierbei wird der Untersuchungsgegenstand
            definiert, die Ziele des Gutachtens festgelegt und die Methodik definiert und schriftlich festgehalten.
            Im Anschluss erhalten Sie ein Angebot und in der Folge werden bei Beauftragung
            ein Vertrag erstellt sowie Fristen und Vergütung geklärt.
            Ebenso erfolgt die Vereinbarung einer oder ggf. mehrerer Ortstermine.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Einsatzgebiete
      </h3>
      <TagList className="mt-4">
          <TagListItem>Gerichtsgutachten</TagListItem>
          <TagListItem>Beweissicherungsgutachten</TagListItem>
          <TagListItem>Parteigutachten/Privatgutachten</TagListItem>
          <TagListItem>Versicherungsgutachten</TagListItem>
          <TagListItem>Schadensgutachten</TagListItem>
          <TagListItem>Wertgutachten</TagListItem>
          <TagListItem>Schiedsgutachten</TagListItem>
      </TagList>
    </Section>
  )
}

function Two() {
    // Bild: Image by rawpixel.com on Freepik
    // , licenseLink: 'https://www.freepik.com/free-photo/business-brainstorming-graph-chart-report-data-concept_2991594.htm'
  return (
      <Section title="Analyse und Bewertung" image={{
          src: imageCodeanalysis,
          licenseText: 'Image by Freepik',
          'licenseLink': 'https://www.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_38669459.htm'
      }}>
          <div className="space-y-6 text-base text-neutral-600">
              <p>
                  In der zweiten Phase erfolgt die Analyse und Bewertung der gesammelten Daten und Informationen.
                  Im Rahmen der Analyse erfolgt gegegebenfalls auch die Vereinbarung einer oder mehrerer Ortstermine.
                  Im Anschluss werden geeignete Analysemethoden und -techniken angewendet, um Zusammenhänge, Trends oder
                  Muster
                  zu identifizieren.
              </p>
              <p>
                  Bei einer Webanwendung gehören hierzu beispielsweise die Bereiche Programmierung,
                  Datenbank(-struktur), Schnittstellen und die
                  Webanwendungssicherheit, ebenso wie die Einhaltung von gesetzlichen Bestimmungen wie DSGVO oder
                  PCI-DSS bei Online-Shops.
              </p>
              <p>
                  Die Ergebnisse werden kritisch bewertet und im Kontext der Zielsetzung des
                  Gutachtens in eine zeitliche und sachliche Reihenfolge gebracht.
                  Es werden auch mögliche Unsicherheiten oder Limitationen der Analyse reflektiert.
              </p>
          </div>

          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
              Stichwörter
          </h3>
          <TagList className="mt-4">
              <TagListItem>Analyse</TagListItem>
              <TagListItem>Recherche</TagListItem>
              <TagListItem>Literatur</TagListItem>
              <TagListItem>Ortstermin</TagListItem>
              <TagListItem>Auswertung</TagListItem>
              <TagListItem>Sachliche Auflistung</TagListItem>
              <TagListItem>Plausibilitätsprüfung</TagListItem>
          </TagList>

          {/*<Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>*/}
      </Section>
  )
}

function Three() {
    return (
        <Section title="Erstellung und Präsentation des Gutachtens"
                 image={{src: imageResult, shape: 1, licenseText: '© pronego, 2024', licenseColor: 'text-black'}}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
            Die letzte Phase beginnt mit der Erstellung des Gutachtens.
            Die Ergebnisse werden strukturiert und formuliert, um auch fachlichen Laien den Sachverhalt verständlich zu erläutern.
            Ein solches Gutachten entsteht dabei üblicherweise nicht in einem &ldquo;Guss&rdquo;, sondern wird schrittweise erstellt, um dadurch
            eine objektive Betrachtung zu erreichen, ob alle Aspekte vollständig und plausibel sind.

            Zur besseren Verständlichkeit werden ebenfalls visuelle Darstellungen wie Grafiken und Tabellen eingesetzt.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Bestandteile dieser Phase
      </h3>
      <List className="mt-8">
        <ListItem title="Schriftliche Ausarbeitung">
          Zusammentragen und Bewerten aller relevanten Informationen, Recherchen und Erkenntnisse sowie Erstellung des Gutachten-Dokuments.
        </ListItem>
        <ListItem title="Endkontrolle">
            Prüfen von Berechnungsergebnissen, Vollständigkeit und Plausibilität sowie Einhaltung formaler Kriterien.
        </ListItem>
        <ListItem title="Übergabe des Berichts">
            Bereitstellung des Gutachtens fristgerecht inkl. Honorarrechnung mit Dokumentation der Übergabe.
            Je nach Vereinbarung erfolgt die Bereitstellung im Papierformat in entsprechender Exemplarzahl
            oder auch elektronisch.
        </ListItem>
        <ListItem title="(Optional) Erstattung und Beantwortung von Fragen">
            Inbesondere im Kontext eines gerichtlichen Gutachtens wird das Gutachten oftmals vor Gericht
            erstattet und ggf. auftauchende Fragen geklärt. Die Erstattung ist üblicherweise
            jedoch nicht Teil der Erstellungsleistung und wird daher gesondert abgerechnet.
        </ListItem>
      </List>
    </Section>
  )
}



export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Gutachter() {
  return (
    <>
      <PageIntro eyebrow="IT-Sachverständiger" title="Dr. Manuel Lamotte-Schubert">
        <p>
          Mit langjähriger Erfahrung als Softwareentwickler im Webbereich
            mit eigenem Softwareunternehmen sowie fundierter Ausbildung in Informatik
            mit Abschluss Dr.-Ing. biete ich
            im IT-Bereich meine Leistungen als unabhängiger
            IT-Gutachter an.
        </p>
      </PageIntro>


      <Container className="mt-16">
        <StatList>
          <StatListItem value="20+" label="Jahre Berufserfahrung" />
          <StatListItem value="Dr.-Ing." label="Akadem. Titel" />
            {/*<StatListItem value="DEKRA" label="Zertifiziert" />*/}
        </StatList>
      </Container>


      <About />


      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Prologue />

          <SectionIntro
              eyebrow=""
              title="Ablauf der Gutachtenerstellung"
          >
          </SectionIntro>
        <One />
        <Two />
        <Three />
      </div>

      <ContactSection teaserText="Bei welchem Projekt darf ich Sie beraten?" />
    </>
  )
}
