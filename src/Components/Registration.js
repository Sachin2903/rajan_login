import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const api = "http://localhost:8080/user/master/add"
function Registration() {
  const [formData, setFormData] = useState({
    company_code: "",
    user_id: "",
    password: "",
    email_id: "",
    contact_details: "",
    type_of_users: ""
  })
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  async function RegisterUser(e) {
    e.preventDefault()
    let isvalid = true;
    let validationErrors = {}
    if (formData.company_code === "" || formData.company_code === null) {
      isvalid = false;
      validationErrors.company_code = "companycode is required"
    }
    if (formData.user_id === "" || formData.user_id === null) {
      isvalid = false;
      validationErrors.user_id = "userid is required"
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password is required"
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password length is alteast 6 characters"
    }
    if (formData.email_id === "" || formData.email_id === null) {
      isvalid = false;
      validationErrors.email_id = "email_id is required"
    }
    setErrors(validationErrors)
    setValid(isvalid)
    console.log(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      await axios.post(api, formData)
        .then(result => alert("Successfully registered"))
        .catch(err => alert("Fail To Register"))

    }else{
      alert("Check your fields")
    }
    
  }

  return (

    <>

      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Create an account<br></br><br></br>
                    </h2>

                    <form onSubmit={RegisterUser} >

                      <div class="form-outline mb-4"
                      >

                        <input type="text" name="company_code" value={formData.company_code} id="form3Example1cg" class="form-control form-control-lg" onChange={handleInput} />
                        <label class="form-label" for="form3Example1cg">company_code</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" name="user_id" value={formData.user_id} id="form3Example3cg" class="form-control form-control-lg" onChange={handleInput} />
                        <label class="form-label" for="form3Example3cg">user_id</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" name="password" value={formData.password} id="form3Example4cg" class="form-control form-control-lg" onChange={handleInput} />
                        <label class="form-label" for="form3Example4cg">Password</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" name="email_id" value={formData.email_id} id="form3Example4cg" class="form-control form-control-lg" onChange={handleInput} />
                        <label class="form-label" for="form3Example4cg">email_id</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="contact" name="contact_details" value={formData.contact_details} id="form3Example4cdg" class="form-control form-control-lg" onChange={handleInput} />

                        <label class="form-label" for="form3Example4cdg">contact_details</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" name="type_of_users" value={formData.type_of_users} id="form3Example4cdg" class="form-control form-control-lg" onChange={handleInput} />
                        <label class="form-label" for="form3Example4cdg">type_of_users</label>
                      </div>

                      {/* <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

                      <div class="d-flex justify-content-center">
                        <button type="submit"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Have already an account?<Link to="/Login">Login</Link>
                      </p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Registration;
