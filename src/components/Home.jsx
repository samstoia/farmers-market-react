import React from "react";
import MarketSchedule from "./MarketSchedule";
import AvailableProduce from "./AvailableProduce";
import { Link } from 'react-router-dom';

function Home(){

  
  
  return (
    <div>
      <div>
        <MarketSchedule/>
      </div>
      <div>
        <AvailableProduce/>
      </div>
      <Link to='/about'>About Us</Link>
    </div>
  );
}

export default Home;