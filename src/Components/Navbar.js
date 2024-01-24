import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
    return (
        <div>
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Navbar</Link>
                       
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                              
                                 
                            <form class="d-flex">
                            <Link class="navbar-brand" to="/Registration">Registration</Link>
                            
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}

export default Navbar
