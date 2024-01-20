import { IMG_URL } from "../utils/constants"

const FoodCard = (props) => {
  const { data } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    totalRatingsString,
    sla
  } = data?.info;

  return (
    <div className="bg-red-100 flex flex-col m-4 w-56 p-2 rounded-md cursor-pointer border-2 hover:border-gray-400">
      <img src={IMG_URL + cloudinaryImageId} className="rounded-lg" />

      <div className="m-2">
        <h4 className="text-sm font-bold h-10">  {name}  </h4>
        <p className="text-base font-bold text-white my-2 bg-orange-400 rounded-full w-fit py-1 px-2 hover:bg-orange-500"> {costForTwo}  </p>
        <div className="flex items-center">
          <p className="text-xs font-bold mr-1 my-2"> <span className="bg-blue-800 rounded-full">⭐</span>  {avgRating} </p>
          <p className="text-xs font-semibold my-2"> {totalRatingsString}  </p>
          <span className="mx-2"> • </span>
          <p className="text-xs font-semibold my-2"> {sla.slaString}  </p>
        </div>
        <p className="text-xs my-2 text-gray-600 font-medium">  {cuisines.join(", ")}  </p>
      </div>

    </div>

  )
}

export default FoodCard