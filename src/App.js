import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, LoginForm } from "./views";
import Footer from "./components/Footer";
const App =() => {


  return (
    <div className="App">
        <Router>
        <nav className="navbar navbar-expand-xs navbar-dark navbar-fixed">
            <div className="container">
                <Link className="navbar-brand text-white" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.124 98.124" fill="#fff" height="30px"><defs/><path d="M92.727 63.157c-1.18.547-1.137 3.172-2.958 5.723-2.335 3.269-5.874 3.521-8.086 1.787-9.121-7.152 9.048-38.204-3.79-43.623-13.135-5.544-22.26 11.128-29.646 23.812 2.374-13.763 9.587-29.608-2.922-34.795-10.969-4.548-25.861 14.91-34.874 40.42C10.6 44.244-.282 46.935.006 49.915c.187 1.92 3.188 10.692 2.729 28.473-.063 2.54 6.558 7.064 9.139 1.93 4.027-8.011 14.521-38.48 28.534-53.359-3.496 17.824-5.229 38.386-5.052 50.746.036 2.479 6.223 7.084 9.434 1.696 3.388-5.684 13.339-30.289 27.707-42.675-5.425 18.34-8.897 38.096 2.855 44.085 11.896 6.062 21.64-3.554 22.698-11.067.521-3.704-1.759-8.238-5.323-6.587z"/></svg>
                    </Link>
                    <div className="headerButton">
                        <input type="text" className="form-control form-control-sm" placeholder="Search here..."/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Beranda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login Form
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/kalkulator">
                                Kalkulator
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


           <div className="container AppContainer">
               <Switch>
                   <Route exact path="/">
                     <Home/>
                   </Route>
                   <Route exact path="/login">
                       <LoginForm/>
                   </Route>
                   <Route exact path="/kalkulator">
                       ini adalah kalkulator
                   </Route>
               </Switch>

            <Footer/>
           </div>
       </Router>


    </div>
  );
}

export default App;
