
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../../Utility/localStored";
import { Chart } from "react-google-charts";

const Statistics=()=>{
const totalAllCardData = useLoaderData();
  const totalAllCardLength = totalAllCardData.length;
  // console.log(totalAllCardLength);

  const localStoredSum = getStoredDonateCard()
  const localStoreLength = localStoredSum.length;
  // console.log(localStoreLength);
  const totalSum = totalAllCardLength - localStoreLength;


  const data = [
    ["Task", "Hours per Day"],
    ["Your Donation", totalSum],
    ["Total Donation", totalAllCardLength]
  ];


  return (
    <Chart chartType="PieChart"
    data={data}
    width={"100%"}
    height={"600px"} />
  );
}
export default Statistics;