import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateCard } from "../../../Utility/localStored";
import './DonateCard.css'



const DonateCard = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const card = cards.find(card => card.id === intId);
    const { Text_button_bg } = card;
    const handleNotify = () => {
        toast("You are a successfully donate!")
        saveDonateCard(intId);        
    };


    return (
        <section >
            <div className="container mx-auto  grid justify-center mt-5 min-h-screen">
                <div className=" card card-compact bg-slate-200 ">
                    <img className="w-full" src={card.img} alt="" />
                    <div className="overlay w-full">
                        <Link >
                            <button style={{ background: Text_button_bg }} onClick={handleNotify} className="-mt-20 btn btn-primary ">{card.Category} ${card.Price}</button>
                        </Link>
                    </div>
                    <h2 className="text-3xl font-bold mt-8 p-3 ">{card.Title}</h2>
                    <p className=" px-3">{card.Description}</p>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default DonateCard;