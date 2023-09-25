import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateCard } from "../../../Utility/localStored";
// import './DonateCard.css'


const DonateCard = () => {
    const [phone, setPhone] = useState();
    const cards = useLoaderData();
    // console.log(cards)
    const { id } = useParams();
    const intId = parseInt(id);
    const card = cards.find(card => card.id === intId);
    console.log(card);
    const handleNotify = () => {
        saveDonateCard(intId);
        toast("You are a successfully donate!")
    };

    return (
        <section>
            <div className="container mx-auto grid justify-center mt-5 min-h-screen">
                <div className="hero">
                    <img className="min-h-[80vh]" src={card.img} alt="" />
                <div className="overlay">
                </div>
                </div>
                {/* to='/donation' */}
                <Link >
                <button onClick={handleNotify} className="-mt-20 btn-primary w-28">{card.Category} ${card.Price}</button>
                </Link>
                <ToastContainer />
                <h2 className="text-3xl font-bold">{card.Title}</h2>
                <p>{card.Description}</p>
            </div>
        </section>

    );
};

export default DonateCard;