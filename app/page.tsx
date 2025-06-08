"use client";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Skills from "@/components/Skills";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface ContactItemProps {
  icon: ReactNode;
  href: string;
  label: string;
  color: "blue" | "pink"; // restrict colors to the ones you use
}
export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10 pt-40 yscroll-smooth">
        {/* Hero Section */}
        <motion.section
          className="mt-8 px-4 sm:mt-20 md:mt-40 overflow-x-hidden scroll-mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-3xl mx-auto">
            <div className="wave-up-down text-amber-50 text-2xl sm:text-3xl md:text-[2.7rem] font-semibold mb-4 text-center">
              Hi, I&apos;m Nayan Acharya
            </div>

            <div className="text-gray-400 text-base sm:text-lg md:text-[1.3rem] break-words leading-relaxed text-justify">
              I&apos;m a software developer with a strong interest in Full-Stack Development and Software Architecture. As a student and an enthusiastic learner, I enjoy building scalable web applications, experimenting with modern technologies, and exploring how intelligent systems work.
              <br />
              <br />
              I&apos;m currently working on personal and open-source projects that challenge my thinking and push me to grow. Let&apos;s connect and chat about systems, development, or anything in between!
            </div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          className="mt-12 sm:mt-20 md:mt-32 px-2 sm:px-4 scroll-mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>
            <div className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              I&apos;m a Computer Science undergraduate at{" "}
              <span className="text-white font-medium">IIIT Jabalpur</span>, graduating in 2027, currently with a{" "}
              <span className="text-white font-medium">9.2 CGPA</span>. I&apos;m passionate about{" "}
              <span className="text-white">Data Structures, Algorithms</span>, and building scalable applications using the{" "}
              <span className="text-white">MERN stack</span>.
              <br />
              <br />
              I&apos;m a <span className="text-white">2⭐ CodeChef</span> rated coder and hold the{" "}
              <span className="text-white">Pupil</span> rank on Codeforces. I&apos;ve solved over{" "}
              <span className="text-white">200 problems on LeetCode</span>, constantly improving my problem-solving skills.
              <br />
              <br />
              I enjoy turning ideas into code and pushing my limits through projects and competitive programming challenges.
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mt-20 scroll-mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="mt-40 px-2 sm:px-4 scroll-mt-32"
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            <ProjectCard
              title="Hospital Appointment Booking"
              description="A MERN-based hospital appointment booking system with an admin panel to approve appointments and manage doctors across various specialties. Patients can easily book appointments with doctors across different domains. Admins can manage all appointments and control doctor data via a secure dashboard."
              link="https://github.com/NAYAN-ACHARYA/hospital-patient"
              liveDemo="https://hospital-patient.onrender.com/"
              image="/hospital.png"
            />

            <ProjectCard
              title="Chat App"
              description="A real-time chat app built with MERN and Socket.IO. Users can personally message any logged-in user with instant delivery powered by WebSockets. The app includes secure authentication and message storage using MongoDB."
              link="https://github.com/NAYAN-ACHARYA/chat-app--deployed"
              liveDemo="https://chat-app-deployed-j920.onrender.com/"
              image="/chat.png"
            />

            <ProjectCard
              title="Blog Platform"
              description="A full-featured blog app using MERN and Cloudinary. Users can upload images, write blogs, edit their content, and view others' posts. Cloudinary integration ensures smooth media handling and storage."
              link="https://github.com/NAYAN-ACHARYA/blog-app"
              liveDemo="https://blog-app-0459.onrender.com"
              image="/blog.png"
            />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mt-35 mb-30 px-4 py-12 bg-[#111827]/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 max-w-3xl mx-auto scroll-mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-10 text-center">
            Get in Touch
          </h2>

          <div className="space-y-6 text-gray-300 text-base sm:text-lg">
            {/* Email */}
            <ContactItem
              icon={<Mail className="text-blue-400" size={22} />}
              href="mailto:nayannomm@gmail.com"
              label="nayannomm@gmail.com"
              color="blue"
            />

            {/* GitHub */}
            <ContactItem
              icon={<Github className="text-blue-400" size={22} />}
              href="https://github.com/NAYAN-ACHARYA"
              label="GitHub"
              color="blue"
            />

            {/* LinkedIn */}
            <ContactItem
              icon={<Linkedin className="text-blue-400" size={22} />}
              href="https://www.linkedin.com/in/nayan-acharya-173a32226/"
              label="LinkedIn"
              color="blue"
            />

            {/* Instagram */}
            <ContactItem
              icon={<Instagram className="text-pink-400" size={22} />}
              href="https://www.instagram.com/nayan_2626?utm_source=qr&igsh=YjJ5amR5bjNvbTFq"
              label="Instagram"
              color="pink"
            />
          </div>
        </motion.section>
      </main>
    </>
  );
}

function ContactItem({ icon, href, label, color }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#1f2937] transition-all group">
      <div className={`bg-${color}-500/20 p-2 rounded-full group-hover:bg-${color}-500/30`}>
        <div className="group-hover:scale-110 transition-transform">{icon}</div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${color}-400 underline hover:text-${color}-300 transition-colors`}
      >
        {label}
      </a>
    </div>
  );
}
