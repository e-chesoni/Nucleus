import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import FadeInOnScrollDefault from '@/components/detail/FadeInOnScrollDefault';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elaine Chesoni Portfolio</title>
      </Head>
      <main className='bg-main-top'>
        <div>
          <NavBar/>
          <div className="heading-spacer"></div>
          <section className="design-section">
            <div className="timeline">
              <div className="mt-2 timeline-circle"></div>
              <div className="mt-4 timeline-middle"></div>
              <div className="timeline-component timeline-content">
                <div className="timeline-text-container"><p>&lt;Begin/&gt;</p></div>
                  <Hero/>
              </div>
            </div>
          </section>

          <section className="design-section">
            {/* For spacing at the top of timeline section */}
            <div className="timeline">
              <div className="timeline-component timeline-content">
                <div className='timeline-spacer pt-4'></div>
              </div>
            </div>
            {/* Projects */}
            <div className="timeline m-0 p-0">
              <div className="mt-1.5 timeline-circle"></div>
              <div className="timeline-component timeline-content m-0 p-0">
                <div className="timeline-text-container pt-0"><p>&lt;Projects/&gt;</p></div>
              </div>
            </div>
            <div>
              <Projects/>
            </div>
          </section>

          <section className="design-section">
            {/* For spacing at the top of timeline section */}
            <div className="timeline">
              <div className="timeline-component timeline-content">
                <div className='py-3'></div>
              </div>
            </div>
            {/* About */}
            <div className="timeline">
              <div className="mt-1.5 timeline-circle"></div>
              <div className="mt-4 timeline-middle"></div>
              <div className="timeline-component timeline-content">
                <div className="timeline-text-container"><p>&lt;About/&gt;</p></div>
                <About/>
              </div>
            </div>
          </section>

          <section className="design-section">
            {/* For spacing at the top of timeline section */}
            <div className="timeline">
              <div className="timeline-middle"></div>
              <div className="timeline-component timeline-content">
                <div className='py-3'></div>
              </div>
            </div>
            {/* Contact */}
            <div className="timeline">
              <div className="mt-1.5 timeline-circle"></div>
              <div className="timeline-component timeline-content">
                <div className="timeline-text-container"><p>&lt;Contact/&gt;</p></div>
                <Contact/>
              </div>
            </div>
          </section>

        </div>
        <Footer/>
      </main>
    </div>
  )
}
