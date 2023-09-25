import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id, img, Category, Title, Category_bg}=card;
    return (
        
            <Link to ={`/cards/${id}`}>
            <div className="card card-compact  bg-base-100 shadow-xl bg-{Category_bg}">
                <figure className=""><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="justify-start">
                    <button className="rounded-full px-3 text-lg bg-gray-100">{Category}</button>
                    </div>
                    <h2 className="card-title">{Title}</h2>
                </div>
            </div>
            </Link>
    );
};

Card.propTypes = {
    card: PropTypes.string
  };

export default Card;