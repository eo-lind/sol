import React, { useState, useEffect } from "react"
import { RandomMovie } from "./components/movie/RandomMovie";
import { getRandomId } from "./modules/MovieManager";
import { PartyListForHome } from "./components/party/PartyList";
import { ReviewListForHome } from "./components/review/ReviewList";
import { ShowLoggedInProfile } from "./components/user/UserList"
import "./Home.css"

export const Home = () => {

  const [randomMovieId, setRandomMovieId] = useState(0);

  const refreshRandomMovie = () => {
    getRandomId().then(setRandomMovieId);
  };

  useEffect(() => {
    refreshRandomMovie();
  }, []);

  return (
    <>
      <section className="column-container">
          <div className="column1"><PartyListForHome /></div>
          <div className="column2"><ReviewListForHome /></div>
          <div className="column3"><ShowLoggedInProfile />
          
          <h1>Random Movie</h1>
      <button onClick={refreshRandomMovie}>Reload &#x27f3;</button>
      {
        randomMovieId && <RandomMovie movieId={randomMovieId} />
      }
    
          </div>
      </section>
    </>
  )
    
  }