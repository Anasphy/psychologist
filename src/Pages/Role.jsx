import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

const Role = () => {
  const { auth, logout } = useAuth()
  const {connexion} = useAuth()
  const [isClientHovered, setClientHovered] = useState(false);
  const [isPsychologistHovered, setPsychologistHovered] = useState(false);
  const [isAppeared, setAppeared] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    // Set the appeared state after a delay (e.g., 500ms)
    const delay = setTimeout(() => {
      setAppeared(true);
    }, 500);

    // Clear the timeout on component unmount or when appeared
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    // Animate letters one by one
    if (isAppeared && visibleLetters < 17) {
      const delay = setTimeout(() => {
        setVisibleLetters((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(delay);
    }
  }, [isAppeared, visibleLetters]);

  const buttonStyles = {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'transform 0.2s ease-in-out, opacity 0.5s ease-in-out',
  };

  const roleTextStyles = {
    marginTop: '14px',
    marginBottom: '40px',
    fontSize: '7xl',
    opacity: isAppeared ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const buttonContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
  };

  const roleText = "Select your role".slice(0, visibleLetters);

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

      <p className="text-orange-900 text-7xl" style={roleTextStyles}>
        {roleText}
      </p>
      <div className="grid grid-cols-2 gap-40 mt-28">
        <button
          className='bg-stone-400 text-orange-800 text-5xl'
          style={{
            ...buttonStyles,
            transform: isClientHovered ? 'scale(1.1)' : 'scale(1)',
            opacity: isAppeared ? 1 : 0,
          }}
          onMouseEnter={() => setClientHovered(true)}
          onMouseLeave={() => setClientHovered(false)}
        >
          <Link to="/New"> Client </Link>
        </button>
        <button
          className='bg-stone-400 text-orange-800 text-5xl'
          style={{
            ...buttonStyles,
            transform: isPsychologistHovered ? 'scale(1.1)' : 'scale(1)',
            opacity: isAppeared ? 1 : 0,
          }}
          onMouseEnter={() => setPsychologistHovered(true)}
          onMouseLeave={() => setPsychologistHovered(false)}
        >
          <Link to="/pro">Psychologist</Link>
        </button>
      </div>
    </div>
  );
};

export default Role;
