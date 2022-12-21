import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-info');
  //   document.body.classList.remove('bg-primary');
  // }

  const toggleMode = () => {
    // pass cls above 
    // remove all body classes and add new one
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    // in navbar, we pass null for dark/light mode, while we pass the required color for the active class
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode";
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "About Us"/> */}
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          {/* using just path="" will match the subroutes firstly and we will not be able
          to access our accuracte route. eg:
          /Home will match /Home/About firstly, so we will get this instead of /Home/About
          /Home/About */}
          <Route exact path='/about' element={
            <About mode={mode}/>
          } />
          {/* <Route path="/about">
            <About/>
          </Route> */}
          <Route exact path='/' element={
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          } />
          {/* <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route> */}
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
