import './App.css';
import Couch from './Couching/Couch';
import Country from './Country/Country';
import Cource from './Courses/Cource';
import Feature from './Feature\'s/Feature';
import Home from './Homepage/Home';
import Navbar from './Navbar/Navbar';
import Num from './Num_Count/Num';
import Student from './Student-Section/Student';


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
    </>
  );
}

export default App;
