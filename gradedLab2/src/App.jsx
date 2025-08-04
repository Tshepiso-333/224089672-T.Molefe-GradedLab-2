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
          name="Satoru Gojo"
          title="honoured One"
          image={gojoImg}
          bio="Passionate about recruiting the best socerers in JJK history.  'Throughout the heavens and earth, I alone am the honoured One' "
        />
        <ProfileCard 
          name="Yuta Okotsu"
          title="Special Grade socerer"
          image={yutaImg}
          bio="Prodigy, one of only a few sorcerers to be classified as Special Grade, second only to satoru"
        />


        <ProfileCard 
          name="Yuji Itadori"
          title="A Grade socerer"
          image={yujiImg}
          bio="Driven by a desire to give others a “proper death,” I fight with conviction and heart.

"
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
          bio="Highly intelligent and quick-witted, I combines agility, electricity-based Nen techniques"
        />


        <ProfileCard 
          name="kisuke urahara"
          title=" Sensei"
          image={kisukeImg}
          bio="A former captain of the Soul Society’s 12th Division and the founder of the Shinigami Research Institute, I am a genius inventor and strategist."
        />
      </div>
    </div>
  );
}

export default App;
