function Navbar() {
  return (
      <nav className="bg-[#111121] text-white py-4">
          <div className="align-center flex items-center justify-between ">
              <a href="/">
                <h2>Abdumajid</h2>
              </a>

              <div className="flex items-center gap-8">
                  <a href="#">About</a>
                  <a href="#">Skills</a>
                  <a href="#">Projects</a>
                  <a href="#">Experience</a>
                  <a href="#">Contact</a>
              </div>

              <button className="px-6 py-2 bg-[#7C3AED] text-white rounded-2xl">Hire Me</button>
          </div>
    </nav>
  )
}

export default Navbar