 import React from 'react';
import { FaSpotify, FaSearch } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";

function App() {
  return (
    <div className="bg-black  text-white p-2">

    
      <header className="flex flex-wrap items-center gap-5 p-3">
        <h1 className="text-4xl text-green-500 cursor-pointer">
          <FaSpotify />
        </h1>

        <h1 className="text-3xl cursor-pointer">
          <MdHomeFilled />
        </h1>

        <div className="flex items-center bg-[#242424] rounded-full px-4 py-3 w-full max-w-xs">
          <FaSearch className="text-gray-300 mr-3" />
          <input
            type="text"
            placeholder="Mahsulotlarni toping"
            className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
          />
        </div>

        <div className="flex flex-wrap items-center gap-50  ">
          <p className="text-gray-400 cursor-pointer ">Premium</p>
          <p className="text-gray-400 cursor-pointer ">Support</p>
          <p className="text-gray-400 cursor-pointer ">Download</p>
        </div>

        <div className="flex items-center gap-4 ml-auto  text-sm">
          <h1 className="text-gray-400 cursor-pointer ">
            Sign up
          </h1>

          <h1 className="bg-white text-black px-5 py-3 rounded-full cursor-pointer ">
            Login in
          </h1>
        </div>
      </header>

      
      <main className="flex flex-col md:flex-row gap-2 mt-2">

      
        <aside className="bg-[#121212] rounded-lg  w-full md:w-[350px] p-4 min-h-[calc(100vh-100px)]">

          <div className="mb-8">
            <h2 className="">Your Library</h2>
          </div>

          <div className="bg-[#202020] rounded-lg p-4 mb-5">
            <h3 className=" text-sm mb-2">
              Create your first playlist
            </h3>

            <p className="text-sm mb-5">
              It's easy, we'll help you
            </p>

            <button className="bg-white text-black  text-sm px-4 py-2  ">
              Create playlist
            </button>
          </div>

          <div className="bg-[#202020] rounded-lg p-4">
            <h3 className=" text-sm mb-2">
              Let's find some podcasts to follow
            </h3>

            <p className="text-sm mb-5">
              We'll keep you updated on new episodes
            </p>

            <button className="bg-white text-black text-sm px-4 py-2 rounded-full ">
              Browse podcasts
            </button>
          </div>

          <footer className="pt-10 pb-3">
            <div className="flex flex-wrap gap-4 text-[11px] text-gray-400">
              <a href="#" className="">Legal</a>
              <a href="#" className="">Privacy Policy</a>
              <a href="#" className="">Cookies</a>
              <a href="#" className="">Accessibility</a>
        
            </div>
            <a  href="#" className='relative top-84 text-[#121212] ' >pas</a>
          </footer>

        </aside>

       
        <section className="bg-[#121212] rounded-lg flex-1 p-5 min-h-[500px]">
          <h2 className="text-2xl  mb-5">
            Good evening
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="">       <img
    src="https://images.openai.com/static-rsc-4/2PtVEHUs11v6jODOARAbkJTUenUxxEDqgxzI4-Q9sbLN5yQ2eu_AlXcwpTnlRue3JcuTrOsmOYaPHZhLlnKsKCbVDYRVlhPF3O9wDkUN4YXEmW3qWYYWeQ6ClqoLxAt6mMTIc3ngy9OxRXVP0Xbk9-pUXDOXxjBTR-rIySbniwrrXgcuUd7lpV6xiSlGpCgh?purpose=fullsize"
    alt="Spotify track cover"
    className="w-full aspect-square object-cover rounded-lg"
  />
</h3>
            </div>
 <div className="bg-[#202020]  rounded-lg p-5 cursor-pointer ">
              <h3 className="">
                       <img
    src="https://images.openai.com/static-rsc-4/ADX0mu4qF39UOKw2A6CuLQVKkp_ht7S-AWxyZLmnhJx8oFcmEyk4TCySimr1Wz_M-rf2RMDXidgEdyHfXSHzEgTIhh0JPN9aahAGvc1OLFITIElB2uanxzk1bVC_tic4VvX1B0FB4vWAqXzbMQ_4fkJSuZr3fSpnxwY6jYyodU41njND-GgkwFwXv7C9owAq?purpose=fullsize"
    alt="Spotify track cover"
    className="w-full aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>

            <div className="bg-[#202020]  rounded-lg p-5 cursor-pointer ">
              <h3 className="font-bold">
                 <img
    src="https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0228d55b4f69945a6ed269574c"
    alt="Spotify track cover"
    className="w-full aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>
          </div>
          <h2 className="text-2xl  mb-5">
            Popular artist
          </h2>
          <div className="meni flex gap-10">
         <div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer ">
              <h3 className=" ">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVV_O6ovEAllfYuQYB_dPxJC8JX6rwPiy7whhzUwYYVA&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>








             <div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="font-bold">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhh4_Lg2WQU5uviyLVTo5RNZVMDkys2I8t2Xpv-zjmA&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>




             <div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="font-bold">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJ8nX5f1SCOBdC7pzp0aBS4lrzzutbftmV1_vpTrOBA&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>






                <div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="font-bold">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZgd2i65nX40R8mmHx0vXqXze7ZLvEmT0wfcVcYLRgw&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>






               <div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="font-bold">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hm2MaCTL1dZbRYqQFor2tbXoDqYq5JeIBN3qapQQ4w&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>








<div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="font-bold">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0doJnMRCTLzPFRrJmw6X9t2poyqHNbQINpdGEqYaXg&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>
















            <div className="rounded-449 w-48 h-48 bg-[#202020]  rounded-lg p-5 cursor-pointer transition">
              <h3 className="font-bold">
                 <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6I4rQbN5sDqIhH4EQRVKt7fCyEPE4zIZ3aehurtwuDA&s=10"
    alt="Spotify track cover"
    className="  aspect-square object-cover rounded-lg"
  />

              </h3>
            </div>
            </div>
        </section>

      </main>
    </div>
  );
}

export default App;