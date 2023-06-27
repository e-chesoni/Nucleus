import Image from 'next/image'
import Head from 'next/head'

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
        </section>
        
        <section>

        </section>
      
      </main>
    </div>
    
  )
}
