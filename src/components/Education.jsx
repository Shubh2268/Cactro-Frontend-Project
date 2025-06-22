
const education = [
    {
        college: 'DDU University, Gorakhpur',
        degree: `Bachelor's Degree in Arts`,
        year: 'Completed in 2019'
    },
    {
        college: 'UP State Board',
        degree: `Intermediate - Prestige Inter College`,
        year: 'Completed in 2016'
    },
    {
        college: 'UP State Board',
        degree: `High School - Prestige Inter College`,
        year: 'Completed in 2014'
    }
]

const Education = () => {
    return (
        <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Education</h2>

            {education.map(({ college, degree, year }, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl my-2 p-6 w-full max-w-4xl shadow-lg text-center">
                    <h3 className="text-2xl font-semibold text-pink-400 mb-2">{college}</h3>
                    <p className="text-gray-300">{degree}</p>
                    <p className="text-sm text-gray-400 mt-1">{year}</p>
                </div>
            ))}
        </section>
    );
};

export default Education;
