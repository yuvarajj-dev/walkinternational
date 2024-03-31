import Accordian from './Accordian/Accordian';
import './App.css';
import Client from './Client_Section/Client';
import Couch from './Couching/Couch';
import Country from './Country/Country';
import Cource from './Courses/Cource';
import Feature from './Feature\'s/Feature';
import Footer from './Footer/Footer';
import Home from './Homepage/Home';
import Horizondal from './Horizondal Scroll/Horizondal';
import Navbar from './Navbar/Navbar';
import Num from './Num_Count/Num';
import Student from './Student-Section/Student';
import Test from './Testimoneal/Test';
import Trusted from './Trusted/Trusted';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Country />
      <Feature />
      <Student />
      <Cource />
      <Num />
      <Couch />
      <Test />
      <Client />
      {/* <Horizondal /> */}
      <Accordian />
      <Trusted />
      <Footer />
    </>
  );
}

export default App;
