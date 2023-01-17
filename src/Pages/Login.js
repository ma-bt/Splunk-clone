import React from 'react'

export default function Login() {
    return (
        <>
            <section>
                <div className="log">
                    <div className="container ">
                        <div className="row mx-5 gap-3 ">
                            <div className="col-lg-7 bg-light my-5 log-1 shadow-lg   bg-body rounded ">
                                <div className='text-center pt-5 pb-5 '>
                                    <img src="https://www.splunk.com/content/dam/splunk-logo-dark.svg" className='' alt="" />
                                    <h5 className='fw-bold pt-3'>Splunk Account Login</h5>
                                </div>
                                <div className='p-4'>
                                    <form action="">
                                        <div>
                                            <label htmlFor="inputEmail4" className="form-label">Email or Username</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                            {/* <button type="button" class="btn ">Next</button> */}
                                        </div>
                                        <div class="col-lg-12 d-flex justify-content-center my-5">
                                        <button type="button" class="btn btn-light">Next</button> 
                                            
                                        </div>

                                    </form>
                                    <div className=' pb-4 border-bottom border-2'>
                                        <small>Forget your <a href="" className='text-decoration-none'>Password</a>  or <a href="" className='text-decoration-none'>username</a> ?</small>
                                    </div>
                                    <div className='py-4'>
                                        <small>Need to  <a href="" className='text-decoration-none'>sign up</a> for a splunk account?</small>
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-4 my-5">
                                <div className='bg-light p-4  shadow  bg-body   border border-2 mb-3'>
                                    <h6 className='fw-bold pb-2'> Splunk Cloud Services</h6>
                                    <small><a href="" className='text-decoration-none fw-bold ' style={{color:'#E8339B'}}>Product Login > </a></small>
                                </div>

                                <div className='bg-light p-4  shadow  bg-body   border border-2 mb-3'>
                                    <h6 className='fw-bold pb-2'> Splunk Observability Cloud</h6>
                                    <small>Splunk Infrastructure Monitoring, APM, Log Observer and RUM</small><br/>
                                    <small><a href="" className='text-decoration-none fw-bold ' style={{color:'#E8339B'}}>Product Login > </a></small>
                                </div>

                                <div className='bg-light p-4  shadow  bg-body   border border-2 mb-3'>
                                    <h6 className='fw-bold pb-2'> Splunk On-Call (formerly VictorOps)</h6>
                                    <small><a href="" className='text-decoration-none fw-bold ' style={{color:'#E8339B'}}>Product Login > </a></small>
                                </div>

                                <div className='bg-light p-4  shadow  bg-body   border border-2 mb-3'>
                                    <h6 className='fw-bold pb-2'> Splunk Synthetic Monitoring & Web Optimization (formerly Rigor)</h6>
                                    <small><a href="" className='text-decoration-none fw-bold ' style={{color:'#E8339B'}}>Synthetic Monitoring Product Login > </a></small><br/>
                                    <small><a href="" className='text-decoration-none fw-bold ' style={{color:'#E8339B'}}>Web Optimization Product Login > </a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
