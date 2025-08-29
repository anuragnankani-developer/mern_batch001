import logo from './logo.svg';
import './App.css';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Mynavbar';
import Mynavbar from './Mynavbar';
import Header from './Header';
import { useState } from 'react';
import { First } from './First';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Second from './Second';
import MyMinComp from './MyMinComp';
import ParamsData from './ParamsData';
import SendParamData from './SendParamData';
import CompA from './propDrilling/CompA';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback';
import FirstsPage from './hooks/custom-hooks/FirstsPage';
import SecondPage from './hooks/custom-hooks/SecondPage';
import UseRef from './hooks/UseRef';
import UseReducer from './hooks/UseReducer';
// import navbar from './Navbar';
// import Navbar from './Navbar';
// import react,{useState} from 'react';


function App() {

  const [state, setState]= useState(10);
  const [data, setData] = useState("Shrey")

  const headingStyle={
    color:"blue",
    backgroundColor:"yellow",
    border:"1px solid green"
  }

  const increment=()=>{
      setState(state + 1)
      setData("aLOK")
  }

  let fname= "Shrey"
  let age = 20;

  
  return (
    <>
<div className="App" >
    {/* <First /> */}
    {/* <Footer /> */}
    <Router>

    <Routes>


      <Route exact path='/first' element={ <First />  }   />
      <Route exact path='/header/footer' element={ <Footer />  }  />
      <Route exact path='/second' element={ <Second /> } />
      <Route exact path='/myMinComp' element={ <MyMinComp /> } />
      <Route exact path='/compA' element={ <CompA /> } />
      <Route exact path='/useEffect' element={ <UseEffect /> } />
      <Route exact path='/useCallback' element={ <UseCallback /> } />
      <Route exact path='/firstPage' element={ <FirstsPage /> } />
      <Route exact path='/secondPage' element={ <SecondPage /> } />
      <Route exact path='/useRef' element={ <UseRef /> } />
      <Route exact path='/' element={ <UseReducer /> } />
      <Route exact path='/useMemo' element={ <UseMemo /> } />
      <Route exact path='/paramData' element={ <ParamsData /> } />
      <Route exact path='/sendParam/:designation/:name' element={ <SendParamData /> } />

    </Routes>

    </Router>

    </div>
    {/* <React.Fragment>
      
    </React.Fragment> */}
  
      {/* <Header />
    <div className="App" >
      
      {state} {data}
      <button onClick={increment} >Click to Increase</button>
      <button onClick={()=>setState(state - 1)} >Click to Decrease</button>
     <h1 style={{color:"red", backgroundColor:"blue", border:"2px solid"}} >Hello </h1>
     <h2 className='myClass' style={headingStyle} > I am heading two </h2>

      <div style={headingStyle}>
      hey i am div tagg
    </div>

    <h1> My name is  {fname} and age is {age}  </h1>
    </div>
   
   <Footer /> */}

    </>
    

  );
}

export default App;
