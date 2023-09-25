import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className="container mx-auto grid lg:grid-cols-4 gap-4 md:mt-16 mt-10">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        
    );
};
Cards.propTypes = {
    cards: PropTypes.func
  };

export default Cards;