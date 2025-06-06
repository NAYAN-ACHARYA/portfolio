export default function Header() {
  return (
    <header className="text-center py-4  text-gray-400">
      <div className="flex justify-center gap-x-30 text-lg font-medium">
        <div className="hover:text-white cursor-pointer"><a href='#about'>About</a></div>
        <div className="hover:text-white cursor-pointer"><a href='#projects'>Projects</a></div>
        <div className="hover:text-white cursor-pointer">Skills</div>
        <div className="hover:text-white cursor-pointer"><a href='#contact'>Contacts</a></div>
        <div className="hover:text-blue-400 cursor-pointer">Resume</div>
      </div>
    </header>
  );
}
