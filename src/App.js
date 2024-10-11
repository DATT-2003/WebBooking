import React from 'react';
import './App.css';
import ContentHome from './home/ContentHome';
import Header from './home/MainPage'
import Footer from './footer/Footer';

function App() {
  const roomCardComponent1 = {
    title: "Luxury Redefined",
    description: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
    imageSrc: {
      filename: "roomImage.jpg"
    },
    size: {
      width: 300,
      height: 100
    }
  }
  const roomCardComponent2 = {
    title: "Luxury Redefined",
    description: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
    imageSrc: {
      filename: "beachImage.jpg"
    },
    size: {
      width: 300,
      height: 100
    }
  }

  return (

    <div>
      <Header />
      <ContentHome
        title={roomCardComponent1.title}
        description={roomCardComponent1.description}
        imageSrc={roomCardComponent1.imageSrc}
        size={roomCardComponent1.size}
      />
      <ContentHome
        title={roomCardComponent2.title}
        description={roomCardComponent2.description}
        imageSrc={roomCardComponent2.imageSrc}
        size={roomCardComponent2.size}
      />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Luxury Hotel</h1>
        </header>
        <Footer />
      </div>
    </div>
  );
}

export default App;
