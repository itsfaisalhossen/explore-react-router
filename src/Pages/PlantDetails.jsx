import { use } from "react";
import { useLocation } from "react-router";
import { CartContext } from "../Providers/CartContext";

const PlantDetails = () => {
  const location = useLocation();
  const { name, description, category, price, image } = location.state || {};
  const contextValue = use(CartContext);
  const { setCart } = contextValue;

  // console.log(contextValue);
  // const { data } = useLoaderData();
  // const { name, description, category, price, image } = data.plants;
  // const { id } = useParams();
  // const [plants, setPlants] = useState({});
  // useEffect(() => {
  //   // fetch data using axios
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
  //     setPlants(data.data.plants)
  //   )
  //   .then((res) => res.json())
  //   .then((data) => setPlants(data?.plants));
  // }, [id]);

  return (
    <div className="max-w-4xl mx-auto px-10 my-10">
      <div className=" card-side bg-base-100 shadow-sm">
        <figure className="h-[300px]">
          <img
            className="rounded-2xl h-full w-full object-cover"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="p-4">
          <div>
            <div className="ntext-2xl flex justify-between my-10 font-medium">
              <h2 className="card-title">Name: {name}</h2>
              <p>Price: ${price}</p>
            </div>
            <p className="font-medium mb-2">Category: {category}</p>
          </div>
          <p className="mb-6">{description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setCart((prev) => [...prev, location.state])}
              className="btn btn-neutral w-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlantDetails;
