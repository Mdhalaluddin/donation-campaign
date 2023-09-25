import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateCard } from "../../../Utility/localStored";



const DonateCard = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const card = cards.find(card => card.id === intId);
    const handleNotify = () => {
        saveDonateCard(intId);
        toast("You are a successfully donate!")
    };
    const {   Card_bg, Text_button_bg} =cards;

    return (
        <section >
            <div style={{background: Card_bg}} className="container mx-auto grid justify-center mt-5 min-h-screen">
                <div className="hero">
                    <img className="min-h-[80vh]" src={card.img} alt="" />
                <div className="overlay">
                </div>
                </div>
                <Link >
                <button style={{background: Text_button_bg}} onClick={handleNotify} className="-mt-20 btn-primary w-28">{card.Category} ${card.Price}</button>
                </Link>
                <ToastContainer />
                <h2 style={{color: Text_button_bg}} className="text-3xl font-bold">{card.Title}</h2>
                <p>{card.Description}</p>
            </div>
        </section>
    );
};

export default DonateCard;