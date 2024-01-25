// src/components/Psy.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../Store/useAuth';


const containerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formContainerStyle = {
  maxWidth: '50%',
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

const Psy = () => {
  const { auth, logout } = useAuth()
  const {connexion} = useAuth()
  const [formData, setFormData] = useState({
    Doctor: '',
    Client: '',
    Session: '',
    SessionID: '',
  });

  const [formValid, setFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Doctor || !formData.Client || !formData.Session || !formData.SessionID) {
      setFormValid(false);
      return;
    }


     const res = await axios.post("http://localhost:4000/Psy/add", formData)
    console.log(res.data)
    // Perform any backend logic here (e.g., API call to save data)
  };

  return (
    <div style={{ backgroundImage: 'url(https://fondosmil.com/fondo/26766.jpg',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      height: 'screen',
      width: 'full',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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

      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit}>
            {!formValid && (
              <div style={errorStyle}>
                Please fill in all required fields.
              </div>
            )}

            <label className='text-orange-950 font-semibold text-xl' style={labelStyle}>
              Doctor:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Doctor"
                value={formData.Doctor}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter doctor's name"
                required
              />
            </label>

            <label className='text-orange-950 font-semibold text-xl' style={labelStyle}>
              Client:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Client"
                value={formData.Client}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter client's name"
                required
              />
            </label>

            <label className='text-orange-950 font-semibold text-xl' style={labelStyle}>
              Session:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="Session"
                value={formData.Session}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter session details"
                required
              />
            </label>

            <label className='text-orange-950 font-semibold text-xl' style={labelStyle}>
              Session ID:
              <input
                className='text-orange-900 font-semibold text-xl'
                type="text"
                name="SessionID"
                value={formData.SessionID}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter session ID"
                required
              />
            </label>

            <button className='flex items-center justify-center bg-stone-400 text-orange-900 font-semibold text-xl' type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Psy;
