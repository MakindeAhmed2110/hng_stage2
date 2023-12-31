// For gettting movies details correctly
//Movie details page

"use client"

import React, { useState, useEffect } from 'react';
import styles from '../../moviedetails.module.css';
import Image from 'next/image';

const MovieDetailsPage: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState(null);
<<<<<<< HEAD
=======

  
>>>>>>> a05ce396e5dabb4e0c4fe73f60e5ea9609050201

   //Api Integration below

  useEffect(() => {
    const fetchMovieDetails = async () => {
      // Use the id directly from the file name
      const id = window.location.pathname.split('/').pop(); // Get the id from the URL

      if (id) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=903c5cda1d547795877add187ce12937`);


<<<<<<< HEAD
      
=======
       
>>>>>>> a05ce396e5dabb4e0c4fe73f60e5ea9609050201
        const data = await response.json();
        setMovieDetails(data);
      }
    };

    
   

    fetchMovieDetails();
  }, []);

  

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const releaseYear = new Date(movieDetails.release_date).getFullYear();


  return (
    <div className={styles.maint}>
        <div className={styles.others}>
          <div className={styles.logo}>
            <img src='../../tv.svg' alt='ghj'/>
            <label>MovieBox</label>
           </div>

           <ul>
            <li>
                <img src='../../Home.svg' alt='soso'/>
                <label>Home</label>
            </li>
            <li className={styles.movy}>
                <img src='../../Movie Projector.png' alt='yol'/>
                <label>Movies</label>

            </li>
            <li >
                <img src='../../Tv Show.svg' alt='yolla'/>
                <label>TV Series</label>
            </li>
            <li>
                <img src='../../Calendar.svg' alt='this' />
                <label>Upcoming</label>
            </li>
           </ul>

           <div className={styles.quizzes}>
              <span className={styles.quiz1}>
              Play movie quizes and earn free tickets
              </span><br />
              <span className={styles.quiz}>
              50k people are playing now
              </span>
              
              <button>Start Playing</button>
           </div>

           <div className={styles.logout}>
            <img src='../../Logout.svg' alt='aoo'/>
            <label>Logout</label>
           </div>
        </div>

      <div className='poster'>
  
      <img src='../../movie.svg' alt={movieDetails.title} className={styles.movy_image}/>
      
    <main>

    <div className={styles.data}>
        <div className={styles.data1}>
      <h1 data-testid="movie-title" className={styles.details} data-testid='movie-title' >{movieDetails.title}</h1>•
      <p data-testid="movie-release-date" className={styles.release} data-testid='movie-release-date'> {movieDetails.release_date}</p>
      •<p data-testid="movie-runtime" className={styles.runtime} data-testid='movie-runtime'> {movieDetails.runtime} minutes</p>•

      <button>Action</button>
      <button>Drama</button>
      </div>
      <p data-testid="movie-overview" className={styles.overview} data-testid='movie-overview'>Overview: {movieDetails.overview}</p>

      <ul>
        <li>Director: <span>Joseph Kosinski</span></li>
        <li>Writers :  <span>Jim Cash, Jack Epps Jr, Peter Craig</span></li>
        <li>Stars :  <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></li>
        <img src='../../last.svg' alt='gh'/>
      </ul>
      </div>
     
     <div className={styles.collection}>
      <img src='../../ratebutton.svg.svg' alt='gh'/>
      <img src='../../otherss.svg' alt='gh'/>
     </div>

    </main>
     
      </div>

    </div>

  );
};

export default MovieDetailsPage;
