import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

const Psycho = () => {
  const { auth, logout } = useAuth()
  const {connexion} = useAuth()
  const { id } = useParams(); // Use the useParams hook to get the 'id' parameter
  const [psychologist, setPsychologist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://psychoaoi.onrender.com/Psychologist/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPsychologist(data);
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
        <h1 className='text-center text-3xl font-bold text-orange-900 mb-28'>Our Perfect Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16 container mx-auto'>
          {psychologist.map((p) => (
            <div key={p.id} className='bg-stone-300 p-8 rounded-lg shadow-lg mb-8'>
              <h2 className='text-2xl text-orange-800 font-semibold mb-4'>{`${p.Name} ${p.LastName}`}</h2>
              <p className='text-gray-500 mb-4'>{p.City}</p>
              <p className='text-orange-700 mb-4'>{p.Speciality}</p>
              <p className='text-gray-800 text-lg mb-4'>{p.Description}</p>
              <Link
                to={"/Booking/"+p._id}
                className='text-orange-900 hover:underline block'
              >
                Book an appointment
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Psycho;
