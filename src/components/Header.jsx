
const Header = () => {
    return (
        <header className="min-h-fit bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center text-center p-6">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Shubham Tiwari</h1>

            <p className="text-xl md:text-2xl text-gray-200">Frontend Developer</p>

            <div className="flex gap-4 mt-6 flex-wrap justify-center">
                <a href="https://shubham-01.netlify.app" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition" target="_blank">Portfolio</a>

                <a href="https://github.com/Shubh2268" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition" target="_blank">GitHub</a>

                <a href="http://linkedin.com/in/shubham-tiwari-954095207" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition" target="_blank"> LinkedIn</a>
            </div>
        </header>
    );
};

export default Header;
