import { useLoaderData } from "react-router";

const PlantDetails = () => {
  const { data } = useLoaderData();

  // const { id } = useParams();
  // const [plants, setPlants] = useState({});

  // useEffect(() => {
  //   // fetch data using axios
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
  //     setPlants(data.data.plants)
  //   );
  //   .then((res) => res.json())
  //   .then((data) => setPlants(data?.plants));
  // }, [id]);

  const { name, description, category, price, image } = data.plants;

  return (
    <div className="w-4xl mx-auto px-10 my-10">
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
            <button className="btn btn-primary w-xs">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlantDetails;
