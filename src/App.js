import React from "react";
import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";
import Cardsection from "./component/Cardsection";
import About from "./component/About";
import Service from "./component/Service";
import Director from "./component/Director";
import Team from "./component/Team";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Cardsection />
      <About />
      <Service />
      <Director />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
