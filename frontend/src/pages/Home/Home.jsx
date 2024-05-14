import "./Home.css";
import AppDownload from "../../component/AppDownload/AppDownload";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import Header from "../../component/Header/Header";
import React, { useState } from "react";

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu catrgory={category} setCategory={setCategory} />
            <FoodDisplay category = {category}/>
            <AppDownload/>
        </div>
    )
}

export default Home
