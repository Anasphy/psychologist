import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Store/useAuth';


const ILogin = () => {
    const { auth, logout } = useAuth()
    const {connexion} = useAuth()
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

            <div class="max-w-6xl px-1 mx-auto lg:px-6 " >
                <div class="flex flex-col items-center h-full justify-center md:flex-row">
                    <div class="flex flex-wrap items-center  bg-gray-100 shadow-lg dark:bg-gray-900 my-7 ">
                        <div class="relative hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
                            <div class="absolute inset-0 z-10 bg-gray-700 opacity-50"> </div>
                            <img src="https://i.postimg.cc/XJBZvxHp/first.jpg" alt=""
                                class="relative inset-0 object-cover w-full h-2/4" />
                            <div class="absolute left-0 z-10 top-10 lg:top-40">
                                <div class="p-14">
                                    <h2 class="text-4xl font-bold text-gray-300 lg:text-5xl "><span class="text-orange-800">
                                        Hello! </span>welcome to our community</h2>
                                    <p class="text-lg font-medium text-gray-300 py-7">
                                        Start the processes of your own healing</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7" >
                            <div class="px-6 text-left">
                                <h2
                                    class="text-3xl font-semibold leading-tight text-orange-900 my-7 md:text-4xl pb-7 dark:text-orange-400 ">
                                    Select your role
                                </h2>
                                <div className='flex flex-col items-start justify-center gap-8 w-full'>
  <Link to="/Login" className='flex-grow'>
    <button className='btn btn-lg bg-stone-400 text-orange-800 border-none font-semibold w-full' style={{ width: '100%' }}>
      Client
    </button>
  </Link>

  <Link to="/PLogin" className='flex-grow'>
    <button className='btn btn-lg bg-stone-400 text-orange-800 border-none font-semibold w-full' style={{ width: '100%' }}>
      Psychologist
    </button>
  </Link>
</div>
                        {/* Need an account link */}
                        <p className="mt-14">Need an account?</p>
                                    <a href="#" className="font-semibold text-orange-800 hover:text-orange-900">
                                        <Link to="/Role">
                                            <p>Create an account</p>
                                        </Link>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ILogin