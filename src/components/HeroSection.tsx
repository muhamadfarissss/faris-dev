function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white" id="hero">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="w-40 h-40 rounded-full shadow-lg mb-6"
      />
      <h2 className="text-4xl font-bold mb-2">Hi, I'm MuhamadFaris</h2>
      <p className="text-lg text-gray-600 mb-6">A passionate Software Engineer 🚀</p>
      <a 
        href="#contact" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </section>
  )
}

export default HeroSection
