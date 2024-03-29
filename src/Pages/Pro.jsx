import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

const containerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formContainerStyle = {
  maxWidth: '100%',
  width: '100%',
  padding: '20px',
  borderRadius: '10px',
};

const labelStyle = {
  display: 'block',
  margin: '12px',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  borderRadius: '8px',
  background: 'transparent',
};

const buttonStyle = {
  width: '50%',
  margin: 'auto',
  marginTop: '18px',
  padding: '12px 16px',
  borderRadius: '12px',
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
  marginTop: '10px',
};

const Pro = () => {
  const { auth, logout } = useAuth()
  const {connexion} = useAuth()
  const [formData, setFormData] = useState({
    Name: '',
    LastName: '',
    Email: '',
    Phone: '',
    City: '',
    Role: 'Psychologist',
    Description: '',
    Speciality: '',
    Password: '',
  });

  const [formValid, setFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
        !formData.Name || 
        !formData.LastName || 
        !formData.Email || 
        !formData.Phone || 
        !formData.City || 
        !formData.Role ||
        !formData.Description || 
        !formData.Speciality || 
        !formData.Password 
      ) {
        setFormValid(false);
        return;
      }

    const res = await axios.post("https://psychoaoi.onrender.com/Psychologist/add", formData).then
    ((res)=>{
      console.log(res.data)
      alert('Register done!')
    }).catch((err)=>alert(err));
  };

  

  return (
    <div>
    <div className="navbar text-orange-900">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-orange-900 bg-white rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Services">Our services</Link></li>
        <li><Link to="/Psycho">Our Psychologists</Link></li>
        <li><Link to="/Role">Sign up</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-2xl"><Link to="/">Your PSYCHOLOGIST</Link></a>
  </div>
  <div className="navbar-end flex gap-8">
    {/* Existing buttons */}
    
    {/* New login button with profile emoji */}
    {
    auth.isAuth ?
    <div className='flex flex-row items-center gap-3' >
    <p className='text-lg font-semibold'> Hello {auth.user?.Name} </p>
    <button onClick={logout} className=" btn btn-ghost btn-circle rounded-full text-lg">
      Logout 
    </button>
    </div>
    :
    <button className=" btn btn-ghost btn-circle rounded-full text-lg">
      <Link to="/Ilogin">Login</Link> 
    </button>
    }
  </div>
</div>

      <div className='bg-gray-100 shadow-lg dark:bg-gray-900 max-w-3xl px-1 mx-auto lg:px-6'>
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit}>
            {!formValid && (
              <div style={errorStyle}>
                Please fill in all required fields.
              </div>
            )}
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Name:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your name"
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              LastName:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your last name"
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Email:
              <input
                className='text-orange-800 font-semibold text-xl'
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your email"
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Phone:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="tel"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              City:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your city"
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Role:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Role"
                value={formData.Role}
                readOnly
                style={inputStyle}
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Description:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your description"
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Speciality:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Speciality"
                value={formData.Speciality}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your speciality"
                required
              />
            </label>
            <label className='text-orange-800 font-semibold text-xl' style={labelStyle}>
              Password:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your password"
                required
              />
            </label>
            <button className='flex items-center justify-center bg-stone-400 text-orange-900 font-semibold text-xl' type="submit" style={buttonStyle}>
              <Link>Create Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pro;
