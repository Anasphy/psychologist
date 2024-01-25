import React from 'react'
import { Link } from 'react-router-dom'
import WordChanger from './WordChanger'
import { useAuth } from '../Store/useAuth';


const Home = () => {
  const { auth, logout } = useAuth()
  const {connexion} = useAuth()
  return (
    <div className=""   style={{backgroundImage: '',
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

          <div className=' grid grid-cols-2 m-10 gap-2 '>
            <div   className="object-cover w-full bg-center bg-cover h-svh"   style={{backgroundImage: 'url(https://th.bing.com/th/id/R.d0b0feb559371740d319edb75d170a5e?rik=ojXI9bCAk9haIw&riu=http%3a%2f%2fwww.10wallpaper.com%2fwallpaper%2fmedium%2f1411%2fEminem_Rum_Island_Dunes_trail-Windows_10_HD_Wallpaper_medium.jpg&ehk=F4EIQjppbsReUc%2fRimHYBBJ%2bRqSxXSzY1MGayl%2ff4B8%3d&risl=&pid=ImgRaw&r=0)',}}>
            <div className="flex items-center justify-center w-full h-full bg-slate-200 bg-opacity-30">
             <div className="text-center flex flex-col gap-7 mb-16">
              <h1 className="text-2xl font-semibold text-orange-900 uppercase lg:text-3xl m-12 p-10">
              “Of all the roads you traveled, the journey back to yourself is the most magnificent.”
             </h1>
              <h2 className="text-2xl font-serif text-orange-950">
              Control your life by opening to your mental health
              </h2>
              <div className='grid grid-cols-1 justify-center items-center py-16 px-48'>
              <button className='text-lg font-semibold bg-stone-400 text-orange-900'
  style={{
    padding: '10px 5px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  }}
>
<Link to="/Role">SIGN UP</Link>
</button>

              </div>
            </div>
          </div>
          
          </div>


          <div className="flex flex-col  justify-center bg-orange-900 bg-opacity-50 w-full h-svh  object-cover bg-center bg-cover"   style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/beige-background-with-white-background-pink-background_10126-1943.jpg',}}> 
               <div class="justify-center ">
                <div class="mb-44 text-center">
                <h1 class="text-3xl font-bold capitalize text-orange-900"> Our Perfect Team </h1>
               </div>
           
              
            </div>


            <h2 className="flex items-center justify-center text-2xl font-semibold text-orange-900 uppercase lg:text-3xl mb-28">
              <WordChanger> </WordChanger>
            </h2> 
            <button className='text-lg font-semibold bg-stone-400 text-orange-900 mx-36'
               style={{
              padding: '10px 5px',
               fontSize: '16px',
               border: 'none',
               borderRadius: '20px',
               cursor: 'pointer',  }}>
              <Link to="/Psycho">CONSULT OUR PSYCHOLOGISTS</Link>
</button>
            </div>
            
        </div>
       
        <div>

        </div>
        <div className='grid grid-cols-1 '>
        <h2 className="flex items-center justify-center font-bold text-pretty  text-9xl text-orange-900 uppercase lg:text-3xl m-10">
              <Link to="/Services"> We offer </Link>
            </h2> 
        </div>


        <div class="p-4 mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <Link to="/Services">
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
                        
                    </div>
                </a>
                </Link>
                <Link to="/Services">
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
                        
                    </div>
                </a>
                </Link>
            </div>
        </div>  








        <div className="justify-center flex-1 px-4 py-4 lg:py-7 md:px-7">
  <div className="relative py-40 bg-center h-max w-auto " style={{backgroundImage: 'url(https://fondosmil.com/fondo/26766.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
    <div className="mx-auto text-left ">
      <h2 className="flex flex-wrap items-center justify-center text-4xl font-bold tracking-wide text-orange-950 my-7 dark:text-orange-700 md:text-6xl">
        Available Sessions
      </h2>
      <p className="mb-8 text-center font-medium text-orange-800 dark:text-orange-900 md:text-lg">
        Check our available sessions or book one
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <button className="inline-flex items-center px-4 py-2 my-4 font-semibold text-orange-800 bg-transparent border border-800 rounded-3xl hover:bg-white hover:text-black">
          <span> <Link to="/Offer">Find out more</Link></span>
          
        </button>
      </div>
    </div>
    <div className="absolute left-44 items-center justify-center hidden px-4 transform -translate-y-1/2 xl:-translate-x-1/2 lg:inline-flex top-1/2">
      <img src="https://static.vecteezy.com/system/resources/previews/002/591/938/large_2x/therapist-patient-talking-vector.jpg" className="object-cover border-4 w-52 h-52 xl:w-80 xl:h-80 rounded-3xl border-gray-50" alt="background" />
    </div>
  </div>
</div>









<div className="relative p-10" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.DKl0OwjXEchsjOKQpNDfcAHaEK?rs=1&pid=ImgDetMain)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
  <div className="grid grid-cols-3 pb-10">
    <div className="">
      <h2 className="pb-2 text-xl font-bold text-orange-950">About Company</h2>
      <div className="w-16 mb-4 border-b-2 border-orange-900"></div>
      <p className="text-base font-bold leading-6 text-black lg:w-64">
        Your PSYCHOLOGIST
      </p>
      <p className="text-base font-bold leading-6 text-black lg:w-64"> We connect patients with psychologist and help you get better in your life</p>
    </div>

    <div className=''>
      <h2 className="pb-2 text-xl font-bold text-orange-950">Quick Links</h2>
      <div className="w-full px-4 mb-11 lg:mb-0">
        <ul>
          <li><Link to="/" className="text-black block font-bold w-full">Home</Link></li>
          <li><Link to="/Services" className="text-black font-bold block w-full">Our services</Link></li>
        </ul>
      </div>
    </div>

    <div className=''>
      <h2 className="pb-2 text-xl font-bold text-orange-950">Features</h2>
      <div className="w-full px-4 mb-11 lg:mb-0">
        <ul>
          <li><Link to="/Client" className="text-black font-bold block w-full">Register</Link></li>
          <li><Link to="/Offer" className="text-black font-bold block w-full">Available sessions</Link></li>
          <li><Link to="/Booking" className="text-black font-bold block w-full">Book an appointment</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center text-orange-950 relative z-10 pt-7 pr-6">
    <span>© Copyright 2024. All Rights Reserved</span>
  </div>
</div>



























</div>





  
  )
}

export default Home