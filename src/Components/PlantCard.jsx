import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-base-100 rounded-xl w-full flex flex-col justify-between shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={plant.image}
          alt="Shoes"
        />
      </figure>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{plant.name}</h3>
          <h4 className="card-title">$ {plant.price}</h4>
        </div>
        <p>{plant.description}</p>
        <Link
          state={plant}
          to={`/Plant-Details/${plant.id}`}
          className="btn btn-neutral w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
export default PlantCard;
