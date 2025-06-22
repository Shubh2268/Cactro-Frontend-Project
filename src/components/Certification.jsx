
const Certification = () => {
  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Certifications</h2>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl my-2 p-6 w-full max-w-4xl shadow-lg text-center">
        <h3 className="text-xl font-semibold text-pink-400 mb-1">Frontend Development Course</h3>
        <p className="text-gray-300">Offered by Relevel (Unacademy)</p>
        <p className="text-sm text-gray-400 mt-1">
          Duration: Dec 2021 - Sept 2022
        </p>
      </div>
    </section>
  );
};

export default Certification;
