
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", 11],
    ["Your Donation", 7],
];
const options = {
};
const Statistics = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <Chart chartType="PieChart"
        data={data}
        options={options}
        width={"120%"}
        height={"500px"} />

    );
};

export default Statistics;