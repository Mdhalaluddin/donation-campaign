import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useState } from "react";
import Card from "../Card/Card";


const Home = ({setSearchData}) => {
    const cards = useLoaderData();
    const [allData, setAllData] = useState(cards)
    // console.log(donateCard);
    const hanldeSearch = text => {
        cards.filter(Category => Category.Category.toLowerCase().inc)
        setAllData(text);
    }
    return (
        <div>
            <Banner hanldeSearch={hanldeSearch}></Banner>
            <Cards cards={allData}></Cards>
        </div>
    );
};

export default Home;