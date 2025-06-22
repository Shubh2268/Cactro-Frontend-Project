
const skills = {
    programming: [
        "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git", "GitHub"
    ],
    tools: [
        "Figma", "Canva", "Photoshop","Slack", "Postman", "Bootstrap", "Material UI"
    ]
};

const SkillCard = ({ title, list }) => (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-500 ease-in">
        <h3 className="text-xl font-semibold mb-4 text-pink-400">{title}</h3>
        <ul className="flex flex-wrap gap-2 text-sm text-white">
            {list.map((item, index) => (
                <li key={index} className="px-3 py-1 bg-gray-700 rounded-md hover:bg-pink-500 transition">{item}</li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Skills</h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                <SkillCard title="Programming" list={skills.programming} />
                <SkillCard title="Tools & Platforms" list={skills.tools} />
            </div>
        </section>
    );
};

export default Skills;
