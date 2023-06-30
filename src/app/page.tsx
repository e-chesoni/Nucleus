import Image from 'next/image'
import Head from 'next/head'
import magneto from "../assets/magneto.jpeg";
import bemo from "../assets/bemo.jpeg";

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elaine Chesoni Portfolio</title>
      </Head>
      <main className='bg-gradient-to-b from-slate-900 to-orange-800'>
        <NavBar/>

        <div className='timeline'></div>
        <Hero/>
        {/* <Projects/> */}
        {/* <About/> */}
        {/* <Contact/> */}

        <section className='design-section'>
          <div className='timeline'>
            <div className='timeline-middle'>
              <div className='timeline-circle'></div>
            </div>
            <div className='timeline-component timeline-content shadow-lg'>
              <h3>First Component</h3>
              <p>some text</p>
            </div>
            <div className='timeline-empty'>
            </div>
            <div className='timeline-middle'>
              <div className='timeline-circle'></div>
            </div>
            <div className='timeline-empty'>
            </div>
            <div className='timeline-empty'>
            </div>
            <div className='timeline-middle'>
              <div className='timeline-circle'></div>
            </div>
            <div className='timeline-component timeline-content shadow-lg'>
              <h3>Second Component</h3>
              <p>some more text</p>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </div>
    
  )
}
