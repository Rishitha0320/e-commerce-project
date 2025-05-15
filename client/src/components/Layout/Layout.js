import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import {Helmet} from "react-helmet";

import  { Toaster } from 'react-hot-toast';
  import 'react-toastify/dist/ReactToastify.css';

// const Layout = (props) => { //can be used
const Layout = ({children,title,description,keywords,author}) => { 
  return (
    <div>
        {/* <h1>layout</h1>  */}
        {/* //oru component */}

 <Helmet>
                <meta charSet="utf-8" />
          
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />


                <title>{title}</title>
             
            </Helmet>


            {/* before header */}
          <Header/>

        {/* //inside main , all children is passed */}
         <main style={{minHeight:'70vh'}}>
           <Toaster />
        {children}
        {/* can also write as {children} , in const Layout = (children) */}
        </main>
      <Footer/>  
    </div>
  );
};

Layout.defaultProps ={
  title: 'E-commerce best app',
  description: 'Mern Stack project',
  keywords: 'mern , react,node,mongo db',
}

export default Layout;