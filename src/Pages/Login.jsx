import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Store/useAuth';

const Login = () => {
    const { auth, logout } = useAuth()

    const {connexion} = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email);
      
        try {
          // Make Axios request to your authentication endpoint
          const response = await axios.post('https://psychoaoi.onrender.com/client/email', {
            Email: email, // Assuming your server expects 'email' in the request body
          });
      
          // Handle successful login (you may want to redirect the user or update state)
          console.log('Login successful:', response);
          connexion(response.data)
          alert('Login successful');
          navigate('/');
        } catch (error) {
          // Handle login error (show an error message or redirect to an error page)
          console.error('Login failed:', error.message);
          alert('Login failed');
        }
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
                                    Login to your account
                                </h2>
                                <form  onSubmit={handleLogin} className="mt-6">
                                    {/* Email input */}
                                    <div>
                                        <label htmlFor="email" className="text-orange-800 dark:text-orange-300">
                                            Email:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    {/* Password input */}
                                    <div className="mt-6">
                                        <div>
                                            <label htmlFor="password" className="pb-4 mb-2 text-orange-800 dark:text-orange-300">
                                                Password:
                                            </label>
                                            <div className="relative flex items-center mt-2">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                                    placeholder="Enter password"
                                                />
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    className="absolute right-0 mr-3 dark:text-gray-50"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    {/* Your eye icon SVG code */}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Forgot password link */}
                                    <div className="mt-4 text-right">
                                        <a href="#" className="text-sm font-semibold text-orange-900 dark:text-yellow-300 hover:underline">
                                            Forgot password?
                                        </a>
                                    </div>

                                    {/* Login button */}
                                    <button
                                        className="w-full px-4 py-3 mt-4 font-semibold text-orange-800 bg-stone-400 rounded-lg hover:text-yellow-600"
                                        type="submit"
                                    >
                                        LOGIN
                                    </button>

                                    {/* Need an account link */}
                                    <p className="mt-4">Need an account?</p>
                                    <a href="#" className="font-semibold text-orange-800 hover:text-orange-900">
                                        <Link to="/Role">
                                            <p>Create an account</p>
                                        </Link>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;