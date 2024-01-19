import { useEffect, useState } from "react"

const Body = () => {


  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437"
    );
    const json = await data.json();
    const newData = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    setResData(newData);
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className='text-lg grid grid-cols-2'>
          {resData.map((res) => (
            <div key={res.info.id} className="bg-red-100 flex m-4 w-auto p-2 rounded-md cursor-pointer border-2 hover:border-gray-400">
              <img
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + res.info.cloudinaryImageId}
                className="w-40 rounded-lg"
              />
              <div className="m-2">
                <h4 className="text-sm font-bold">  {res.info.name}  </h4>
                <div className="flex">
                  <p className="text-xs font-semibold my-2"> <span className="bg-blue-800 rounded-full">⭐</span>  {res.info.avgRating}  </p>
                  <span className="mx-2"> • </span>
                  <p className="text-xs font-semibold my-2"> {res.info.costForTwo}  </p>
                </div>
                <p className="text-xs my-2 font-medium">  {res.info.cuisines.join(", ")}  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body