import Image from 'next/image'
import Head from 'next/head'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import magneto from "../../public/magneto.jpeg";
import bemo from "../../public/bemo.jpeg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elaine Chesoni Portfolio</title>
      </Head>
      <main className='px-10 bg-gradient-to-b from-slate-900 to-orange-800'>
        <section className='min-h-screen'>
          <nav className='p-10 flex justify-between'>
            <h1>Home</h1>
            <ul className='flex items-center'>
              <li className='px-4'>Professional</li>
              <li className='px-4'>Fun</li>
              <li className='px-4'>Resume</li>
            </ul>
          </nav>
          <div><p>Begin /&gt;</p></div>
          <div>
            <h2>Hi, my name is Elaine Chesoni</h2>
            <div className='flex space-x-1'>
              <p>I design and develop</p><p>Embedded Systems</p>
            </div>
          </div>
          <div><p>Let me show you...</p></div>
        </section>
          
        <section>
          <h1>Controls</h1>
          <h2>Magneto</h2>
          <div>
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
              src={magneto} 
              alt={''}/>
          </div>
        </section>

        <section>
          <h1>Embedded Systems</h1>
          <h2>Bem-0</h2>
          <div>
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
              src={bemo} 
              alt={''}/>
          </div>
        </section>
        <section className='text-5xl flex justify-center gap-16 py-3'>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillYoutube />
        </section>
      
      </main>
    </div>
    
  )
}
