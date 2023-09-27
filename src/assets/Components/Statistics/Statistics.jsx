import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../../Utility/localStored";
import { useState } from "react";



const options = {
};
const Statistics = () => {
    // const cards = useLoaderData();
    const [allCardData, setAllCardData]= useState()
    const [donateLocalCardData, setDonateLocalCardData] = useState()

    const totalAllCardData = useLoaderData();
    const totalAllCardLength = totalAllCardData.length;
    console.log(totalAllCardLength);
    setAllCardData(totalAllCardLength);

        const localStoredSum = getStoredDonateCard()
        const localStoreLength = localStoredSum.length;
        console.log(localStoreLength);
        setDonateLocalCardData(localStoreLength);
   
    const data = [
        [ "Task", "Hours per Day"],
        [ "Total Donation",  `${setAllCardData}`],
        [ "Your Donation", `${setDonateLocalCardData}` ],
    ];
    return (
        <Chart chartType="PieChart"
        data={data}
        options={options}
        width={"120%"}
        height={"500px"} />

    );
};

export default Statistics;


