import PlantCard from "../Components/PlantCard";
import { useLoaderData } from "react-router";

const Home = () => {
  const { plants } = useLoaderData();
  // const [plants, setPlants] = useState([]);
  // useEffect(() => {
  //   fetch(`https://openapi.programming-hero.com/api/plants`)
  //     .then((res) => res.json())
  //     .then((data) => setPlants(data?.plants));
  // }, []);
  return (
    <div className="">
      <p className="text-3xl font-medium text-center my-10">
        Wellcome plants World {plants.length}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};
export default Home;
