import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast  from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css"
import { useAuth } from '../../context/user';

//this page helps in suceessful get of data

const Login = () => {

  // create state to hold values

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [auth,setauth]=useAuth()

  const navigate=useNavigate()

//added last after forms onsubmit=handle submit
  //here prevents page refresh after page form is clicked ot submit

  const handleSubmit=async(e)=>{
         e.preventDefault();

         try{
           const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
            {email,password}
        );
       if(res.data.success){
        toast.success(res.data && res.data.message);
        setauth({
          ...auth,
          user:res.data.user,
          token:res.data.token
          
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate('/')
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
             <h4>Login form </h4>


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


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Login