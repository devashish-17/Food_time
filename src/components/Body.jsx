import FoodCard from "./FoodCard"
import { useEffect, useState } from "react"
import { SWIGGY_URL } from "../utils/constants"

const Body = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    const newData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResData(newData);
  }

  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-center h-12 my-2">
        <div className="bg-orange-500 w-1/3 rounded-full flex items-center justify-center">
          <input className="outline-none border-gray-400 w-[91%] h-11 px-4 rounded-full" type="text" placeholder="Search..." />
          <button className="px-2 text-xl"> 🔍 </button>
        </div>
      </div>

      

      {/* Food Card */}
      <div className="grid grid-cols-5 mx-12 items-center ">
        {resData.map((res) => <FoodCard key={res.info.id} data={res} /> )}
      </div>

    </>
  )
}

export default Body