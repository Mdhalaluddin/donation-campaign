import { useState } from "react";
// import Card from "../Card/Card";


const Banner = ({hanldeSearch}) => {
    const [searchData, setSearchData] = useState("")
    return (
        <section className=" bg-slate-50  container mx-auto">
            <div className="hero  min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/VTrz1Jt/environment-volunteer-concept-with-persons-holding-boxes-donations.jpg)' }}>
            <div className="hero-overlay bg-slate-100 bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:max-w-3xl">
                    <h1 className="mb-5 lg:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="">
                    <input className="text-black rounded-l-lg mt-5 p-2" type="text" placeholder="Search here...." onChange={(event)=> setSearchData(event.target.value)} />
                    <button onClick={()=> hanldeSearch(searchData)} className=" text-white p-2 rounded-r-lg bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;