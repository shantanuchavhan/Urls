
import React from 'react'

import { useState,useEffect } from "react"


const Us = () => {
  const [us,setUs]=useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://urlsbackend.onrender.com/us");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUs(data.message); // Assuming your server returns an object with a "message" property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div  className="px-3 md:px-10 lg:px-20">
       <div className="text-center mt-2 flex flex-col gap-10">
        <div className="mt-5"><button class="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">Close and Go Back</button>
        </div>
        <div className="bg-white px-10 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31] rounded-large" style={{ borderRadius: "16px" }}>
          <p>
          <p>
            {us}
            </p>
          </p>
        
        </div>
      </div>

    </div>
    
  )
}

export default Us