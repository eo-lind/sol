import React from "react";
import { PartyListForHome } from "./components/party/PartyList";
import { ReviewListForHome } from "./components/review/ReviewList";
import { ShowLoggedInProfile } from "./components/user/UserList"

export const Home = () => (
    <>
      <main>
          <div className="column"><PartyListForHome /></div>
          <div className="column"><ReviewListForHome /></div>
          <div className="column"><ShowLoggedInProfile /></div>
      </main>
    </>
)