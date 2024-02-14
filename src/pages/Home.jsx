import { useEffect, useState } from "react";
import ProductItem from "../Components/ProductItem";
import Spinner from "../Components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);


  async function fetchProductData(){
      
    setLoading(true);
    try{
      
      const result = await fetch(API_URL);
      const data = await result.json();

      setItems(data);      

    }
    catch(error){
      alert('API CRASHED!!!');
      setItems([]);
    }
    setLoading(false);

  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return (
    <div>
      <div>
        {
          loading ? 
          (<Spinner />) : 
          (items.length === 0 ? 
            (
              <div className="flex justify-center items-center">
                <p>No Products Found</p>
              </div>
            )
             : 
            (
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
                  items.map( (item) => (
                    <ProductItem key={item.id} item={item} />
                  ))
                }
              </div>
            ) )
        }
      </div>
    </div>
  );
};

export default Home;
