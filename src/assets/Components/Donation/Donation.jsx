import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../../Utility/localStored";


const Donation = () => {
    const cards = useLoaderData();

    const [donateCard, setDonateCard] = useState([]);
    const [cardLength, setCardLength] = useState(4);

    useEffect(() => {
        const storedCardIds = getStoredDonateCard();
        if (cards.length > 0) {
            const cardsDonate = cards.filter(card => storedCardIds.includes(card.id))
            // console.log(cardsDonate, cards, storedCardIds);
            setDonateCard(cardsDonate);
        }
    }, []);
    
    return (
        <>
            <div className="grid grid-cols-2 gap-4 container mx-auto mt-20 mb-7">
                {
                    donateCard.slice(0, cardLength).map(card => <div key={card.id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={card.img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <div className="card-actions justify-start px-2 bg-slate-100">
                                <button className=" btn btn-xs">{card.Category}</button>
                            </div>
                            <h2 className="text-2xl font-semibold">{card.Title}</h2>
                            <h3 className="text-md font-semibold"><span>$</span>{card.Price}</h3>
                            <div className="card-actions justify-start mt-3">
                                <button onClick={() => setCardLength(cards.length)} className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <nav className={cardLength === cards.length && 'hidden'}>
                <div className="card-actions justify-center">
                    <button onClick={()=>setCardLength(cards.length)}
                    className="btn bg-[#009444] my-5 text-white">Show all</button>
                </div>
            </nav>


        </>

    );
};

export default Donation;