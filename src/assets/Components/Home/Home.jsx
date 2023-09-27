import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useState } from "react";
// import Card from "../Card/Card";


const Home = ({ setSearchData }) => {
    const cards = useLoaderData();
    const [allCategorys, setAllCategory] = useState(cards)
    const [allData, setAllData] = useState(cards)
    // console.log(donateCard);
    const hanldeSearch = val => {
        setAllData(val);
        val.preventDefault();
        if(val.length){
            const filterCampaigns = allCategorys.filter(
                (cards) => cards.Category.toLowerCase() === val.toLowerCase
            );if(filterCampaigns){
                setSearchData(filterCampaigns);
            }else{
                setAllCategory(allData)

            }
        }

    }

return (
    <div>
        <Banner hanldeSearch={hanldeSearch}></Banner>
        <Cards cards={allData}></Cards>
    </div>
);
}

export default Home;