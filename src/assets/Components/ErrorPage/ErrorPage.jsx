import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-9xl text-center md:mt-48 font-extrabold text-cyan-800">Oops!</h2>
            <h2 className="text-3xl text-center mt-8 text-cyan-500">404-PAGE NOT FOUND</h2>
           <Link to='/'>
           <div className="grid justify-items-center mt-16">
            <button className="bg-red-400 rounded-xl btn grid justify-items-center">GO TO HOMEPAGE</button>
            </div>
           </Link>
        </div>
    );
};

export default ErrorPage;