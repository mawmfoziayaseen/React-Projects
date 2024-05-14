import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import React, { useContext } from "react";
import StoreContext from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food_display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return;
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;