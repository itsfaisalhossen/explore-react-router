import { use } from "react";
import { CartContext } from "../Providers/CartContext";

const Cart = () => {
  const contextValues = use(CartContext);
  const { cart } = contextValues;

  return (
    <div>
      <h3 className="text-xl font-medium text-center my-8">
        This is cart Page
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {cart.map((cItem) => (
          <div key={cItem.id} className=" ">
            <img
              className="w-full h-[200px] object-cover rounded-xl"
              src={cItem.image}
              alt=""
            />
            <h3 className="text-xl font-medium mt-2">{cItem.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
