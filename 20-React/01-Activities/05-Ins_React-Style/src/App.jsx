import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />   
      {/* {Array.from(Array(5),)}          review notes and class  */}
      {/* "Header, Navbar, and Card" varible  will added the text values mutiple times when page is loaded */}
      {/* if listed multiple times more it will repeat the content in the "Card" */}
    </div>
  );
}

export default App;
