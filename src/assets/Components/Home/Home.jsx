import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useState } from "react";


const Home = () => {
    const cards = useLoaderData();
    const [allData, setAllData] = useState(cards)
    // console.log(donateCard);
    const hanldeSearch = text => {
        cards.filter((text) => {
            if (allData === '') {
                return cards;
            } else if (cards.Category.toLowerCase().includes(cards.toLowerCase())) {
                return cards;
            }
        })
        // setAllData(cards)

    }
    return (
        <div>
            <Banner hanldeSearch={hanldeSearch}></Banner>
            <Cards cards={allData}></Cards>
        </div>
    );
};

export default Home;