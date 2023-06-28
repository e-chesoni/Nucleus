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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elaine Chesoni Portfolio</title>
      </Head>
      <main className='px-10 bg-gradient-to-b from-slate-900 to-orange-800'>
        <section>
          <NavBar />
        </section>
        
        <div><p>Begin /&gt;</p></div>

        <section className='min-h-screen grid content-center'>
            
            <div className='grid content-center '>
              <h2>Hi, my name is Elaine Chesoni</h2>
              <div className='flex space-x-1'>
                <p>I design and develop</p><p>Embedded Systems</p>
              </div>
            </div>
            <div><p>Let me show you...</p></div>
        </section>
          
        <section>
          <div>
            <div className="shadow-lg p-10 rounded-xl my-10 flex-1">
              <h1>Controls</h1>
              <h2 className='text-center'>Magneto</h2>
              <div className='text-center'>
                <h5>What?</h5>
                <p>Pokem ipsum dolor sit amet Poison Sting Misty Raichu Elekid make it double Mineral Badge.</p>
                <h5>How?</h5>
                <p>Ice Klinklang S.S. Anne Palkia grumpy old man who needs coffee Igglybuff the enemy Pokemon fainted.</p>
                <h5>Why?</h5>
                <p>S.S. Anne Dig Ash Ketchum Skarmory Cryogonal Weedle Snivy.</p>
              </div>
              <div>
                <Image 
                  className="rounded-lg object-cover"
                  height={500}
                  width={500}
                  src={magneto} 
                  alt={''}/>
              </div>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10 flex-1'>
              <h1>Embedded Systems</h1>
              <h2 className='text-center'>Bem-0</h2>
              <div className='text-center'>
                <h5>What?</h5>
                <p>Hydro Pump you're not wearing shorts Blizzard Slowking searching far and wide Burnt Berry Ninetales.</p>
                <h5>How?</h5>
                <p>Boulder Badge Grumpig Rotom Hippowdon Ninjask Flamethrower Muk.</p>
                <h5>Why?</h5>
                <p>Misty Pachirisu Dragon Zangoose Skorupi Armaldo Manectric.</p>
              </div>
              <div>
                <Image 
                  className="rounded-lg object-cover"
                  height={500}
                  width={500}
                  src={bemo} 
                  alt={''}/>
              </div>
              </div>
          </div>
          
        </section>
        <section className='text-5xl flex justify-center gap-16 py-3'>
          <FaGithubSquare />
          <FaLinkedin />
          <FaYoutubeSquare />
        </section>
      
      </main>
    </div>
    
  )
}
