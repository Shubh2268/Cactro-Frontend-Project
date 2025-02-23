const TeamMood = () => {
  const team = [
    { name: "Andrea", role: "UX Junior", mood: "😊" },
    { name: "Alvaro", role: "Back-end Developer", mood: "😐" },
    { name: "Juan", role: "UX Senior", mood: "😊" },
    { name: "Jose", role: "Marketing", mood: "😐" },
    { name: "Maria", role: "UX Junior", mood: "😊" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg md:sticky md:top-4">
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">Team Mood</h2>
      <ul className="space-y-3">
        {team.map((member, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
            <span className="text-2xl">{member.mood}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMood;
