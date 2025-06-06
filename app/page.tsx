import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <Header />

      {/* Hero Section */}
      <section className="mt-8 px-4 sm:mt-20 md:mt-40 overflow-x-hidden">
  <div className="w-full max-w-3xl mx-auto">
    <div className="wave-up-down text-amber-50 text-2xl sm:text-3xl md:text-[2.7rem] font-semibold mb-4 text-center">
      Hi, I'm Nayan Acharya
    </div>

    <div className="text-gray-400 text-base sm:text-lg md:text-[1.3rem] break-words leading-relaxed text-justify">
      I'm a software developer with a strong interest in Full-Stack Development and Software Architecture. As a student and an enthusiastic learner, I enjoy building scalable web applications, experimenting with modern technologies, and exploring how intelligent systems work.
      <br /><br />
      I'm currently working on personal and open-source projects that challenge my thinking and push me to grow.
      Let's connect and chat about systems, development, or anything in between!
    </div>
  </div>
</section>


      {/* About Me Section */}
      <section id="about" className="mt-12 sm:mt-20 md:mt-32 px-2 sm:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Me
          </div>
          <div className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            I'm a Computer Science undergraduate at <span className="text-white font-medium">IIIT Jabalpur</span>, graduating in 2027,currently with a <span className="text-white font-medium">9.2 CGPA</span>. I'm passionate about <span className="text-white">Data Structures, Algorithms</span>, and building scalable applications using the <span className="text-white">MERN stack</span>.
            <br /><br />
            I’m a <span className="text-white">2⭐ CodeChef</span> rated coder and hold the <span className="text-white">Pupil</span> rank on Codeforces. I've solved over <span className="text-white">200 problems on LeetCode</span>, constantly improving my problem-solving skills.
            <br /><br />
            I enjoy turning ideas into code and pushing my limits through projects and competitive programming challenges.
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-16 px-2 sm:px-4" id='projects'>
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Chat App"
            description="A real-time chat app built with MERN and Socket.IO"
            link="https://github.com/nayan/chat-app"
          />
          <ProjectCard
            title="Blog Platform"
            description="A full-featured blog app using MERN and Cloudinary"
            link="https://github.com/nayan/blog-platform"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 px-2 sm:px-4" id='contact'>
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">Contact</h2>
        <p className="text-gray-300 mb-2">
          Email: <a className="text-blue-400 underline" href="mailto:nayannomm@gmail.com">nayannomm@gmail.com</a>
        </p>
        <p className="text-gray-300">
          GitHub: <a className="text-blue-400 underline" href="https://github.com/nayan" target="_blank" rel="noopener noreferrer">github.com/nayan</a>
        </p>
      </section>
    </main>
  )
}
