import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

const Session = () => {
  const [sessions, setSessions] = useState([]);
  const {connexion} = useAuth()
  useEffect(() => {
    const { auth, logout } = useAuth()

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/Booking/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error(error);
        // Handle the error, for example, redirect to an error page
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className=''
      style={{
        background: 'linear-gradient(to bottom, #e5e7eb, #8B4513)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        height: 'screen',
        width: 'full',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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


      <div className=''>
        <h1 className='text-center text-3xl font-bold text-orange-900 mb-28'>Session Information</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16 container mx-auto'>
          {sessions.map((session) => (
            <div key={session._id} className='bg-stone-300 p-8 rounded-lg shadow-lg mb-8'>
              <h2 className='text-2xl text-orange-800 font-semibold mb-4'>{session.Doctor}</h2>
              <p className='text-gray-600 mb-4'>{session.Client}</p>
              <p className='text-gray-700 mb-4'>{session.Session}</p>
              <p className='text-gray-700 mb-4'>{session.Date}</p>
              <p className='text-gray-700 mb-4'>{session.Hour}</p>
              <p className='text-gray-800 text-lg mb-4'>{session.Status}</p>
              <Link
                to="/Call"
                className='text-orange-700 hover:underline block'
              >
                Join
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Session;
