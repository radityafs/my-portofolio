export default function NavBar() {
  return (
    <nav className="container mx-auto dark:text-white flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-20 my-4 lg:my-8">
      <a href="/" className="text-2xl font-bold">
        Raditya
      </a>
      <div className="flex space-x-8 items-center">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/articles">Articles</a>
        <a href="/about">About</a>
      </div>

      <a
        href="/contact"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        Contact Me
      </a>
    </nav>
  );
}
