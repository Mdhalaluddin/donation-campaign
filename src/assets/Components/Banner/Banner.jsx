

const Banner = () => {
    return (
        <section className=" bg-slate-50  container mx-auto">
            <div className="hero bg-cover min-h-[600px] w-[1520px]" style={{ backgroundImage: 'url(https://i.ibb.co/VTrz1Jt/environment-volunteer-concept-with-persons-holding-boxes-donations.jpg)' }}>
            <div className="hero-overlay bg-slate-100 bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="">
                    <input className="bg-white rounded-l-lg mt-5 p-2" type="text" placeholder="Search here...." />
                    <button className=" text-white p-2 rounded-r-lg bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;