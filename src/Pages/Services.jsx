import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Store/useAuth';


const Services = () => {
  const { auth, logout } = useAuth()
  const {connexion} = useAuth()
  return (
    <div className=""   style={{backgroundImage: 'url(https://fondosmil.com/fondo/26766.jpg',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: 'screen',
    width: 'full',
    justifyContent: 'center',
    alignItems: 'center',}}>
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

    <div className='grid grid-cols-1 '>
        <h2 className="flex items-center justify-center font-bold text-pretty  text-9xl text-orange-900 uppercase lg:text-3xl m-10">
              Our Services
            </h2> 
        </div>


        <div class="p-4 mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <a class="mb-0 overflow-hidden text-center bg-stone-200 rounded shadow dark:bg-gray-700" href="#">
                    <div class="relative overflow-hidden h-72">
                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                            src="https://edit.sundayriley.com/wp-content/uploads/2020/10/first-therapy-session-sunday-edit-scaled.jpg" alt=""/>
                    </div>
                    <div class="relative z-20 p-8 -mt-16 ">
                        <img class="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                            src="https://edit.sundayriley.com/wp-content/uploads/2020/10/first-therapy-session-sunday-edit-scaled.jpg"
                            alt=""/>
                        
                        <h2 class="mb-3 text-2xl font-bold leading-9 text-orange-900 dark:text-white">
                            Individual therapy
                        </h2>
                        <p class="text-base text-left leading-7 text-orange-900">
                        Individual therapy, a personalized journey towards self-discovery, offers a unique space for introspection and healing. It provides a confidential environment where you can explore your thoughts, emotions, and challenges with undivided attention. The therapeutic alliance formed with your counselor fosters a deep connection, allowing for tailored guidance. Through individual therapy, you gain a profound understanding of your unique strengths and areas for growth. The process empowers you to navigate life's complexities, fostering resilience and promoting positive change. 
                        </p>
                        <button className='text-lg font-semibold bg-stone-400 text-orange-900 m-4'
  style={{
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  }}
>
<Link to="/Psycho">Book</Link>
</button>
                    </div>
                </a>
                <a class="mb-0 overflow-hidden text-center bg-stone-200 rounded shadow dark:bg-gray-700" href="#">
                    <div class="relative overflow-hidden h-72">
                        <img class="object-cover w-full min-h-72 transition-all hover:scale-110"
                            src="https://cdn5.vectorstock.com/i/1000x1000/24/44/group-therapy-in-circle-psychology-meeting-club-vector-44802444.jpg" alt=""/>
                    </div>
                    <div class="relative z-20 p-8 -mt-16 ">
                        <img class="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                            src="https://cdn5.vectorstock.com/i/1000x1000/24/44/group-therapy-in-circle-psychology-meeting-club-vector-44802444.jpg"
                            alt=""/>
                        
                        <h2 class="mb-3 text-2xl font-bold leading-9 text-orange-900 dark:text-white">
                            Group therapy
                        </h2>
                        <p class="text-base text-left leading-7 text-orange-900">
                        Group therapy is a transformative experience, fostering unity and shared understanding. It assures individuals that they are not alone in their struggles, providing a comforting support network. The dynamic allows for both giving and receiving support, contributing to improved well-being by releasing dopamine, the "feel good" chemical. Engaging with diverse group members helps you find your voice, articulate feelings, and gain confidence for positive changes. The variety of personalities and backgrounds enriches the experience, exposing you to different perspectives and effective coping strategies. 
                        </p>
                        <button className='text-lg font-semibold bg-stone-400 text-orange-900 m-4'
                          style={{
                          padding: '10px 20px',
                          fontSize: '16px',
                          border: 'none',
                          borderRadius: '20px',
                          cursor: 'pointer',
                                              }}
                                                    >
  <Link to="/Psycho">Book</Link>
</button>
                    </div>
                </a>
                
            </div>
        </div>  



    </div>
  )
}

export default Services