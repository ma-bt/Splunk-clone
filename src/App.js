
//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Comp/Home';
import Data from './Data/Data';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import { Link } from 'react-router-dom';
import Signup from './Pages/Signup';

function App() {

  return (
    <>

      <div className="APP sticky-top">

        <nav className="navbar navbar-expand-lg  bg-white py-3 shadow-sm">
          <div className="container-fluid mx-4">
            <Link to="/Splunk-clone"  className="navbar-brand font-weight-bold d-block "><img src="https://www.splunk.com/content/dam/splunk-logo-dark.svg" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">

              <ul className="navbar-nav ">

                <li className="nav-item dropdown megamenu ms-3 fs-6 text-black fw-bold"><a id="megamneu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Products</a>
                  <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container">
                      <div className="row bg-white shadow   bg-body rounded border border-1 ">
                        <div className="col-lg-3 col-xl-4" style={{ background: '#F0F3F7' }}>

                          <div className="row pb-5" >

                            {Data.slice(0, 1).map((a, index) => (

                              <div className="col-lg-12 p-5" >
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>
                            ))}
                          </div>

                        </div>

                        <div className="col-lg-6 col-xl-8">
                          <div className="row pt-5 pb-5">

                            {Data.slice(0, 4).map((a, index) => (
                              <div className=" px-5 pb-4 ">
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>


                            ))}


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                <li className="nav-item dropdown megamenu ms-3 fs-6 text-black fw-bold"><a id="megamneu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Solutions</a>
                  <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container">
                      <div className="row bg-white rounded-0 m-0 shadow-sm">
                        <div className="col-lg-3 col-xl-4">

                          <div className="row pb-5" >

                            {Data.slice(0, 1).map((a, index) => (

                              <div className="col-lg-12 p-5" >
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>
                            ))}
                          </div>

                        </div>

                        <div className="col-lg-6 col-xl-8" style={{ background: '#F0F3F7' }}>
                          <div className="row pb-5" >

                            {Data.slice(0, 4).map((a, index) => (
                              <div className="col-lg-3 pt-5 px-3" >
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>


                            ))}


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                <li className="nav-item dropdown megamenu ms-3 fs-6 text-black fw-bold"><a id="megamneu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Why Splunk</a>
                  <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container">
                      <div className="row bg-white shadow   bg-body rounded border border-1 ">
                        <div className="col-lg-3 col-xl-4" style={{ background: '#F0F3F7' }}>

                          <div className="row pb-5" >

                            {Data.slice(0, 1).map((a, index) => (

                              <div className="col-lg-12 p-5" >
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>
                            ))}
                          </div>

                        </div>

                        <div className="col-lg-6 col-xl-8">
                          <div className="row pt-5 pb-5">

                            {Data.slice(0, 4).map((a, index) => (
                              <div className=" px-5 pb-4 ">
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>


                            ))}


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>



                <li className="nav-item dropdown megamenu ms-3 fs-6 text-black fw-bold"><a id="megamneu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Resources</a>
                  <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container">
                      <div className="row bg-white rounded-0 m-0 shadow-sm">
                        <div className="col-lg-3 col-xl-4">

                          <div className="row pb-5" >

                            {Data.slice(0, 1).map((a, index) => (

                              <div className="col-lg-12 p-5" >
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>
                            ))}
                          </div>

                        </div>

                        <div className="col-lg-6 col-xl-8" style={{ background: '#F0F3F7' }}>
                          <div className="row pb-5" >

                            {Data.slice(0, 4).map((a, index) => (
                              <div className="col-lg-3 pt-5 px-3" >
                                <h6 className="font-weight-bold text-uppercase">{a.title}</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="" className="nav-link text-small pb-0">{a.body}</a></li>
                                </ul>
                              </div>

                            ))}


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu ms-3 fs-6 text-black fw-bold d-lg-none d-sm-block"><Link  to="/login"   aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold ">Login</Link> </li>

                <li className="nav-item dropdown megamenu ms-3 fs-6 text-black fw-bold d-lg-none d-sm-block"><Link  to="/signup"   aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold ">Sign Up</Link> </li>


              </ul>

              <div className='nav-last  d-none d-lg-flex gap-2'>
                <div>
                <div className="dropdown">
                      <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Support
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Supprt Portal</a></li>
                        <li><a className="dropdown-item" href="#">Splunk Answers</a></li>
                        <li><a className="dropdown-item" href="#">Support Programs</a></li>
                        <li><a className="dropdown-item" href="#">System Status</a></li>
                        <li><a className="dropdown-item" href="#">Contact Us</a></li>
                      </ul>
                    </div>
                </div>

                <div><h5 className='pt-2'><i class="bi bi-search"></i></h5></div>
                <div> <div className="dropdown">
                      <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Language
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Nepali</a></li>
                        <li><a className="dropdown-item" href="#">Japanese</a></li>
                        <li><a className="dropdown-item" href="#">Spamis</a></li>
                        <li><a className="dropdown-item" href="#">Korean</a></li>
                        <li><a className="dropdown-item" href="#">Egyptian</a></li>
                      </ul>
                    </div></div>
                
                <div>
                <div className="dropdown">
                      <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign/Log in
                      </button>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/signup">Sign up </Link></li>
                        <li><Link className="dropdown-item" to="/login">Log in</Link></li>
                        
                      </ul>
                    </div>
                   
                </div>
                <div className='last-btn'>
                <button type="button" class="btn ">Free Splunk</button>
                </div>





              </div>
            </div>


          </div>

        </nav>

      </div>


      
      <Routes>
        <Route path="/Splunk-clone" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}


export default App;
