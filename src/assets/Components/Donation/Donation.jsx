import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../../Utility/localStored";


const Donation = () => {
    const cards = useLoaderData();
    // console.log(cards);
    // console.log(cardLength);

    const [donateCard, setDonateCard] = useState([]);
    // const [cardLength, setCardLength] = useState(4);
    const [donateLength, setDonateLength] = useState(4);
    // const { Card_bg, Text_button_bg}= cards;
    // console.log(setDonateCard);

    useEffect(() => {
        const storedCardIds = getStoredDonateCard();
        if (cards.length > 0) {
            const cardsDonate = cards.filter(card => storedCardIds.includes(card.id))
            // console.log(cardsDonate, cards, storedCardIds);
            const total = cardsDonate.reduce((preValue, currentItem) => preValue + currentItem.Price, 0);
            console.log(total);
            setDonateCard(cardsDonate);
        }
    }, [cards]);

    return (
        <>
            <div className="grid lg:grid-cols-2 gap-4 container mx-auto mt-20 mb-7">
                {
                    donateCard.slice(0, donateLength).map(card => <div style={{ background: card.Card_bg }} key={card.id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-full h-full" src={card.img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <div className="">
                                <button style={{ background: card.Card_bg }} className="btn-xs btn">{card.Category}</button>
                            </div>
                            <h2 style={{ color: card.Text_button_bg }} className="text-2xl font-semibold">{card.Title}</h2>
                            <h3 style={{ color: card.Text_button_bg }} className="text-xl font-semibold"><span>$</span>{card.Price}</h3>
                            <div className="card-actions justify-start my-3 ">
                                <button style={{ background: card.Text_button_bg }} className="btn text-white">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* className={donateCard === cards.length && "hidden"} */}
            {/* onClick={() => setCardLength(cards.length)} */}
            <nav className="card-actions justify-center">
                <div className={donateLength === cards.length && 'hidden'} >
                    <button onClick={()=>setDonateLength(cards.length)}
                        className="btn bg-[#009444] my-5 text-white">Show all</button>
                </div>
            </nav>
        </>

    );
};

export default Donation;