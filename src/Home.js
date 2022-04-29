import React from "react";
import { PartyListForHome } from "./components/party/PartyList";
import { ReviewListForHome } from "./components/review/ReviewList";
import { ShowLoggedInProfile } from "./components/user/UserList"
import "./Home.css"

export const Home = () => (
    <>
      <section className="column-container">
          <div className="column1"><PartyListForHome /></div>
          <div className="column2"><ReviewListForHome /></div>
          <div className="column3"><ShowLoggedInProfile /></div>
      </section>
    </>
)