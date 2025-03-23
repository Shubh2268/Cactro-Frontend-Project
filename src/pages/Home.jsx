import Navbar from "../components/Navbar";
import NotificationBar from "../components/NotificationBar";
import { FaGoogle } from "react-icons/fa";
import heroImage from '../assets/heroImage.png';
import bottomImage from '../assets/bottomImage.jpg';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <NotificationBar />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 md:mt-5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
                {/* Left Side - Text & Buttons */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Slack is where the future works
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Transform the way you work with one place for everyone and everything you need to get stuff done.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button className="bg-purple-900 text-white px-6 py-3 rounded font-medium">TRY FOR FREE</button>

                        <button className="flex items-center bg-blue-600 border text-white px-4 py-3 rounded font-medium">
                            <span className="text-black bg-white px-3 py-2 rounded flex items-center justify-center mr-2"><FaGoogle /></span> SIGN UP WITH GOOGLE
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="mt-10 md:mt-0">
                    <img src={heroImage} alt="Slack Chat UI" className="w-full max-w-lg rounded-lg" />
                </div>
            </section>

            {/* 🔹 Brand Logos Section */}
            <section className="max-w-7xl mx-auto px-6 py-7 md:py-12 flex flex-wrap items-center justify-center gap-8 md:gap-14">
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small@2x.png" alt="airbnb" className="h-5 md:h-8" />
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small@2x.png" alt="nasa" className="h-5 md:h-8" />
                <img src="https://a.slack-edge.com/9df734f/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small@2x.png" alt="uber" className="h-5 md:h-8" />
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small@2x.png" alt="target" className="h-5 md:h-8" />
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small@2x.png" alt="nyt" className="h-5 md:h-8" />
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small@2x.png" alt="etsy" className="h-5 md:h-8" />
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="mt-10 md:mt-0">
                    <img src={bottomImage} alt="Future Video Preview" className="w-full max-w-sm rounded-md shadow-lg" />
                </div>

                <div className="max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Now is your moment to build a better tomorrow
                    </h2>
                    <p className="text-gray-600 mt-4">
                        We've seen what the future can be. Now it's time to decide what it will be.
                    </p>
                    <button className="mt-6 text-purple-900 border-2 border-purple-900 px-6 py-2 rounded-md font-medium cursor-pointer">WATCH VIDEO</button>
                </div>

            </section>
        </div>
    );
};

export default Home;
