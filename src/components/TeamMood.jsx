const teamMembers = [
  { name: "Andrea", role: "UX Junior", image: "https://randomuser.me/api/portraits/women/2.jpg", mood: "😊", moodPosition: "70%" },
  { name: "Alvaro", role: "Back-end Developer", image: "https://randomuser.me/api/portraits/men/32.jpg", mood: "😐", moodPosition: "50%" },
  { name: "Juan", role: "UX Senior", image: "https://randomuser.me/api/portraits/men/86.jpg", mood: "😊", moodPosition: "80%" },
  { name: "Jose", role: "Marketing", image: "https://randomuser.me/api/portraits/men/77.jpg", mood: "🙂", moodPosition: "40%" },
  { name: "Maria", role: "UX Junior", image: "https://randomuser.me/api/portraits/women/76.jpg", mood: "😊", moodPosition: "75%" },
];

const TeamMood = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full md:max-w-xs lg:w-72 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Team Mood</h2>
      <div className="space-y-4 flex-grow">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col space-y-2">

            {/* Profile Info */}
            <div className="flex items-center gap-3">
              <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <p className="font-semibold text-gray-600">{member.name}</p>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>

            {/* Mood Bar */}
            <div className="relative w-full h-1 bg-gray-300 rounded-full my-2">
              <span className="absolute text-xl" style={{
                  left: member.moodPosition,
                  transform: "translateX(-50%)",
                  top: "-14px",
                }}
              > {member.mood} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMood;
