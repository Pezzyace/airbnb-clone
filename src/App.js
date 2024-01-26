import './App.css';
// import Nav from './components/nav';
// import Hero from './components/hero';
// import Card from './components/card';
import Contact from './components/contact';

function App() {
  return (
    <div className="contacts">
      {/* <Nav />
      <Hero /> */}
      {/* <Card /> */}
      <Contact 
        img="../assets/img2.png"
        name="James"
        phoneNumber="9389473894"
        email="james@djfk.com"
      />
      <Contact 
        img="../assets/img2.png"
        name="Mather"
        phoneNumber="9898698"
        email="mather@foe.com"
      />
      <Contact 
        img="../assets/img2.png"
        name="Umoh"
        phoneNumber="0984093094"
        email="umoh@gmail.com"
      />
      <Contact 
        img="../assets/img2.png"
        name="Jessica"
        phoneNumber="093740974"
        email="jessica@gmail.com"
      />
    </div>
  );
}
export default App;
