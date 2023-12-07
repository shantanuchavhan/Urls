import React from 'react'
import { useEffect,useState } from 'react'

const Terms = () => {
  const [terms,setTerms]=useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://urlsbackend.onrender.com/terms");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTerms(data.message); // Assuming your server returns an object with a "message" property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div  className="px-20 ">
       <div className="text-center mt-2 flex flex-col gap-10">
        <h1 className="text-white m-0 font-[700] text-2xl">Terms</h1>
        <div className="mt-5"><button class="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">Close and Go Back</button>
        </div>
        <div className="bg-white px-10 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31] rounded-md" style={{ borderRadius: "16px" }}>
          <p>
            {terms}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur, reprehenderit repudiandae fugit, minima labore soluta facere blanditiis beatae eligendi consequatur deserunt neque nesciunt? Cupiditate enim exercitationem dignissimos eligendi obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci incidunt, odit impedit exercitationem quibusdam non nulla officiis, id recusandae eaque error? Ab mollitia hic explicabo, id amet, iure possimus nihil porro soluta vel saepe repellat placeat? Consequuntur reiciendis sequi enim perspiciatis labore molestias laudantium minus recusandae vitae, aspernatur distinctio provident iusto excepturi quis quos laborum debitis perferendis. Dolore, odit! Alias architecto, quae minus delectus quos esse provident vero, deserunt porro itaque, quisquam obcaecati molestias a optio voluptates corrupti eaque ad eius dignissimos nisi mollitia! Animi libero ipsum fugiat, in eaque nobis recusandae quisquam eligendi nostrum harum, optio voluptatibus, nesciunt facilis voluptatem. Error ex vero exercitationem quasi asperiores, voluptatibus delectus quisquam enim architecto ea amet optio. Fugit fugiat ad dignissimos quod non aperiam odit rerum obcaecati deleniti sit repellat, laboriosam culpa quasi id asperiores laudantium iure eaque velit ab. Odio dolor molestiae, in praesentium dignissimos assumenda eveniet laudantium ullam, asperiores suscipit provident adipisci, architecto tenetur ex laboriosam rerum vel vero? Voluptatibus cum consectetur accusantium error aliquid eum maiores, officiis labore nam? Non laborum, itaque veniam provident nobis nulla est quidem possimus dolorum. Quasi laudantium porro aspernatur dolor delectus est saepe, cum provident, dicta ratione officia doloremque! Ipsa corrupti aut, sequi, error ut corporis tenetur sit, eius dolore repellat provident facere. Odio sint itaque, quidem quisquam tempore fuga similique, sequi nihil sunt illum, doloribus magni! Atque adipisci, libero provident cupiditate rerum dicta suscipit animi eveniet et repellat facere, facilis in, magnam accusamus vitae fugit alias a quod praesentium aperiam veritatis. Eveniet ipsa quisquam asperiores eligendi culpa optio tempore maiores, rem voluptate amet quibusdam eum et, veritatis facere ea dignissimos nulla laborum doloribus deserunt tenetur aspernatur impedit ut molestias corrupti? Nisi, voluptates eius? Molestias, harum adipisci nobis neque nisi aliquid non iusto earum cumque, sunt quas vel unde eaque illo. Culpa explicabo nemo nulla quaerat amet vero reiciendis, alias libero eius officia eaque minima distinctio repellendus tempore autem! Placeat 
          </p>
        </div>
      </div>

    </div>
  )
}

export default Terms