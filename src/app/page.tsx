import Image from 'next/image'
import Head from 'next/head'
import {
  FaGithubSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import magneto from "../assets/magneto.jpeg";
import bemo from "../assets/bemo.jpeg";

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';


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
        <Projects/>
        <About/>
        <Contact/>
        <section className='text-5xl flex justify-center gap-16 py-3'>
          <FaGithubSquare/>
          <FaLinkedin/>
          <FaYoutubeSquare/>
        </section>
      
      </main>
    </div>
    
  )
}
