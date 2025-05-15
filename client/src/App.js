// // import logo from './logo.svg';
// import {Routes,Route} from 'react-router-dom';
// import './App.css';
// import HomePage from './pages/HomePage';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Policy from './pages/Policy';
// import Pagenotfound from './pages/Pagenotfound';
// import Register from './pages/Auth/Register';
// import Login from './pages/Auth/Login';

// import 'react-toastify/dist/ReactToastify.css';
// import Dashboard from './user/Dashboard';
// import PrivateRoute from './components/Layout/Routes/private';
// import AdminRoute from './components/Layout/Routes/AdminRoute';
// import AdminDashBoard from './pages/Admin/AdminDashBoard';
// import CreateCategory from './pages/Admin/CreateCategory';
// import CreateProduct from './pages/Admin/CreateProduct';
// import CreateUser from './pages/Admin/CreateUser';


// //import layout 
// // import Layout from './components/Layout/Layout'
// function App() {
//   return (
//     //simply this code displays,what is inside layout component
// //     <div>
// //     <h1>layout</h1>
// // </div>
// // *************

// //like html tag->layout 
//           // <Layout>
//           //   <h1>e commerce app</h1>
//           // </Layout>

//           // <Layout>
//           //   <h1>e commerce app</h1>
//           // </Layout>
//     <div>
//       <Routes>
//         <Route path='/' element={<HomePage />} />

//         {/* <Route path='/dashboard' element={<PrivateRoute />}>
//           <Route path='' element={<Dashboard />} />
//         </Route> */}

//         {/* nested routes */}
//       <Route path="/dashboard" element={<PrivateRoute />}>
//       <Route path="user" element={<Dashboard/>}/>

//       </Route>

//       <Route path="/dashboard" element={<AdminRoute/>}>
//      <Route path="admin" element={<AdminDashBoard/>}/>
//      <Route path="/admin/create-category" element={<CreateCategory/>}/>
//      <Route path="admin/create-product" element={<CreateProduct/>}/>
//      <Route path="admin/users" element={<CreateUser/>}/>

// </Route>


//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/policy' element={<Policy />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/*' element={<Pagenotfound />} />
//       </Routes>
//     </div>
        
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './user/Dashboard';

// Admin Pages
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import CreateUser from './pages/Admin/CreateUser';

// Routes
import PrivateRoute from './components/Layout/Routes/private';
import AdminRoute from './components/Layout/Routes/AdminRoute';

// Toast Styles
import 'react-toastify/dist/ReactToastify.css';
import Orders from './user/Orders';
import Profile from './user/Profile';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* User Dashboard - Private Route */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile/>} />
        </Route>

        {/* Admin Dashboard - Admin Route */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashBoard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<CreateUser />} />
        </Route>

        {/* 404 Page */}
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
