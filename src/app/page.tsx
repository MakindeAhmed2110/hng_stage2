"use client"
import Image from 'next/image'
import styles from './page.module.css'

import HomePage from './components/moviecard';
import MovieCard from './components/moviecard';

export default function Home() {


  return (
    <main className={styles.main}>
     <div className={styles.upper_content}>

         <nav>
           <div className={styles.logo}>
            <img src='../../tv.svg' alt='that'/>
            <label>MovieBox</label>
           </div>

           <form className={styles.form}>
            <input type='text' placeholder='What do you want to search'/>
            <img src='../../icon.svg' alt='this'/>
           </form>

           <div className={styles.navbar}>
            <a>Sign Up</a>
            <img src="../../Menu.png" alt='to'/>
           </div>

         </nav>

         <h3>
          John  Wick  3 : <br />
          Parabellum
         </h3>
         <p>
         John Wick is on the run after killing a member<br />
          of the international assassins' guild, and with<br />
           a $14 million price tag on his head, he is the<br />
          target of hit men and women everywhere.
         </p>

         <img src='../../Button.svg' className={styles.go} alt='for'/>
     </div>

      <MovieCard />

    </main>
  )
}
