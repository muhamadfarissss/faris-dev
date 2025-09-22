function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#education" className="hover:text-blue-600">Education</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#hobbies" className="hover:text-blue-600">Hobbies</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
