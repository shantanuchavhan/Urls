import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Terms = () => {
  const [terms, setTerms] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://urlsbackend-project.onrender.com/terms");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTerms(data.message);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-3 md:px-10 lg:px-20">
      <div className="text-center mt-2 flex flex-col gap-10">
        <h1 className="text-white m-0 font-[700] text-3xl">Terms</h1>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="mt-5">
              <button className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">
                Close and Go Back
              </button>
            </div>
            <div
              className="bg-white px-10 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31] rounded-md"
              style={{ borderRadius: "16px" }}
            >
              <p className='text-base'>
                {terms}
              </p>
            </div>

            <div className="mt-5">
              <button className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">
                Close and Go Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Terms;
