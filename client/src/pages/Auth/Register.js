import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast  from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css"


const Register = () => {
  // create state to hold values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

const navigate=useNavigate()



  //added last after forms onsubmit=handle submit
  //here prevents page refresh after page form is clicked ot submit

  const handleSubmit=async(e)=>{
         e.preventDefault();

         try{
           const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
            {name,email,password,phone,address}
        );
       if(res.data.success){
        toast.success(res.data && res.data.message)
        navigate('/login')
       }
       else{
        toast.success(res.data.message)
       }

         }catch(error){
            console.log(error)
            toast.error('something went wrong')
         }
        //  console.log(name,email,password,phone,address)
        // toast.success('register success ful')
  }

  console.log("API",process.env.REACT_APP_API);

  return (
    <Layout title="Register - E-commerce">
        <div className="form-container">
        <form onSubmit={handleSubmit}>
             <h4>Register form </h4>
          <div className="mb-3">
            {/* <label htmlFor="inputName" className="form-label">Name</label> */}
            <input
              type="text"
              id="inputName"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone No</label>
            <input
              type="text"
              id="inputPhone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input
              type="text"
              id="inputAddress"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
