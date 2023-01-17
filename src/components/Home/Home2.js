import React, { useEffect, useState } from "react";
import Cart from "../Cart";

const Home2 = () => {
  const [categories, setCategories] = useState([]);

    // data loaded to serve side
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 pl-3">
       {
                categories.map(topics =><Cart
                key={topics._id}
                topics={topics}
                >

                </Cart>)
       }
    </div>
  );
};

export default Home2;
