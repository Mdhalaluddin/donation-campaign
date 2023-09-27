
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../../Utility/localStored";
// import { saveDonateCard } from "../../../Utility/localStored";
var total = 100;
var totalLocalStoreSum = 100;


const data = [
    ["Task", "Hours per Day"],
    ["Total Donation",  100],
    ["Your Donation", 100 ],
];
const options = {
};
const Statistics = () => {
    const cards = useLoaderData();
    const total = cards.reduce((preValue, currentItem) => preValue + currentItem.Price, 0);
            console.log(total);
    console.log(cards)
    useEffect(()=>{
        const localStoredSum = getStoredDonateCard()
        const cardsDonate = cards.filter(card => localStoredSum.includes(card.id))
        const totalLocalStoreSum = cardsDonate.reduce((preValue, currentItem) => preValue + currentItem.Price, 0);
            console.log(totalLocalStoreSum);
    },[cards]);
    return (
        <Chart chartType="PieChart"
        data={data}
        options={options}
        // total ={100}
        // totalLocalStoreSum = {100}
        // position ={'button'}
        width={"120%"}
        height={"500px"} />

    );
};

export default Statistics;