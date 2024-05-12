import React, { useRef, useEffect } from "react";

interface Navlink {
  title: string;
  path: string;
}

const Header = ({ navlinks }: { navlinks: Navlink[] }) => {
  const navRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("bg-primary-white-offwhite", "shadow-md", "w-full");
      } else {
        nav.classList.remove(
          "bg-primary-white-offwhite",
          "shadow-md",
          "w-full"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 mt-6 z-50 w-full">
      <header
        ref={navRef}
        className="w-[85%] mx-auto transition-all duration-300"
      >
        <nav className="flex justify-between items-center h-16">
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </div>
          <ul className="flex space-x-4 mr-4">
            {navlinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.path}
                  className="italic hover:text-gray-500 transition-all duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
