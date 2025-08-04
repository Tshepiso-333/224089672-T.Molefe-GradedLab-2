import React from "react";
import ProfileCard from "./components/ProfileCard";
import './App.css';
import gojoImg from './assets/gojo.jpeg'
import yutaImg from './assets/yuta.jpeg'
import tojiImg from './assets/toji.jpeg'
import kisukeImg from './assets/kisuke.jpeg'
import killuaImg from './assets/killua.jpeg'
import yujiImg from './assets/yuji.jpeg'


function App() {
  return (
    <div className="app">
      <h1>Our Team</h1>
      <div className="cards-container">
        <ProfileCard 
          name="Satoro Gojo"
          title="honoured One"
          image={gojoImg}
          bio="Passionate about recruiting the best socerers in JJK history"
        />
        <ProfileCard 
          name="Yuta Okotsu"
          title="Special Grade socerer"
          image={yutaImg}
          bio="Specializes in building scalable server architectures and database optimization. Always ready to tackle complex challenges."
        />


        <ProfileCard 
          name="Yuji Itadori"
          title="A Grade socerer"
          image={yujiImg}
          bio="Passionate about creating user-friendly interfaces and modern web experiences. Contact: sarah@company.com"
        />

        <ProfileCard 
          name="Toji fushiguro"
          title=" Sorcerer Killer"
          image={tojiImg}
          bio="Cant use curse energy but kills sorcerer for a living"
        />

        <ProfileCard 
          name="Killua"
          title=" aura farmer"
          image={killuaImg}
          bio="Passionate about creating user-friendly interfaces and modern web experiences. Contact: sarah@company.com"
        />


        <ProfileCard 
          name="kisuke urahara"
          title=" Heavenly Restrictions"
          image={kisukeImg}
          bio="Passionate about creating user-friendly interfaces and modern web experiences. Contact: sarah@company.com"
        />
      </div>
    </div>
  );
}

export default App;
