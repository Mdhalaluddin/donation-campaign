const getStoredDonateCard =()=>{
    const storedDonateCard = localStorage.getItem('donate-card');
    if(storedDonateCard){
        return JSON.parse(storedDonateCard);
    }
    return [];
}

const saveDonateCard = id =>{
    const storedDonateCard = getStoredDonateCard();
    const exists = storedDonateCard.find(cardId => cardId === id);
    if(!exists){
        storedDonateCard.push(id);
        localStorage.setItem('donate-card', JSON.stringify (storedDonateCard));
    }
}
export { saveDonateCard, getStoredDonateCard}