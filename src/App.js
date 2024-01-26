import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Card from './components/card';
import IMG from './assets/img2.png';
// import Jokes from './components/jokes';

// import Contact from './components/contact';

function App() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Card 
        img = {IMG}
        rating = "5.0"
        reviewCount = {6}
        country = "Nigeria"
        title = "Live swimming lessons with Pezzyace"
        price = {136}
      />
      {/* <Contact 
        img= {IMG}
        name="James"
        phoneNumber="9389473894"
        email="james@djfk.com"
      />
      <Contact 
        img={IMG}
        name="Mather"
        phoneNumber="9898698"
        email="mather@foe.com"
      />
      <Contact 
        img={IMG}
        name="Umoh"
        phoneNumber="0984093094"
        email="umoh@gmail.com"
      />
      <Contact 
        img={IMG}
        name="Jessica"
        phoneNumber="093740974"
        email="jessica@gmail.com"
      /> */}
      {/* <Jokes 
        question="KNock Knock! Who's there?"
        answer="Your Dad"
        isPun = {true}
        upVotes = {170}
        downVotes = {2}

      />
      <Jokes 
        question="What did a bear say to a fish?"
        answer="Come and dry off"
        isPun = {false}
        upVotes = {123}
        downVotes = {2}
        comment = {
          [{
            firstCommenter: "it was a good comment", 
            secondCommenter: "He tried"
          }]
        }

      />
      <Jokes 
        answer="All black like chicken"
        isPun = {true}
        upVotes = {13}
        downVotes = {2}
        comment = {
          [{
            firstCommenter: "it was a good comment", 
            secondCommenter: "He tried"
          }]
        }
      />
      <Jokes 
        question="KNock Knock! Who's there?"
        answer="Your aunt"
        isPun = {true}
        upVotes = {123}
        downVotes = {26}
        comment = {
          [{
            firstCommenter: "it was a good comment", 
            secondCommenter: "He tried"
          }]
        }
      />
      <Jokes 
        question="KNock Knock! Who's there?"
        answer="Your babe"
        isPun = {false}
        upVotes = {153}
        downVotes = {2}
        comment = {[{
            firstCommenter: "it was a good comment", 
            secondCommenter: "He tried"}]}
      /> */}
    </div>
  );
}

export default App;
