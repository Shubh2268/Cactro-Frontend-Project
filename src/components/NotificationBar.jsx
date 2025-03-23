import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NotificationBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-blue-600 text-white px-4 py-3 hidden md:flex justify-between items-center w-[95%] mt-24 mx-5 md:mx-10 p-5 rounded-full">
            <p className="text-sm md:text-base flex-1 text-center md:text-left">
                Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.{" "}
                <a href="#" className="underline font-semibold">Let's go</a>
            </p>

            <button onClick={() => setIsVisible(false)} className="ml-4 text-white hover:text-gray-300" > <IoClose className="text-2xl" /></button>
        </div>
    );
};

export default NotificationBar;
