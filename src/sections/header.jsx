import { Drawer } from "antd";
import { useEffect, useState } from "react";

const navbar = [
  { title: "Date", id: "date" },
  { title: "Couple", id: "couple" },
  { title: "Story", id: "story" },
  { title: "Events", id: "events" },
  { title: "Wishes", id: "wishes" },
  { title: "Gallery", id: "gallery" },
];

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    setIsOpen(false);
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed shadow-lg top-0 left-0 w-full z-50 text-white transition-all duration-300 ${
        isScrolled ? "bg-primary" : "bg-[#0000001f]"
      }`}
    >
      <nav className="border-gray-200 px-4 md:px-6 py-4 lg:py-5">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          <a
            className="navbar-brand font-great-vibes text-2xl lg:text-3xl"
            href="#"
          >
            Huy <i className="fi flaticon-spring ml-1" /> Như
          </a>

          <div className="flex justify-between items-center">
            <Drawer
              onClose={onClose}
              open={isOpen}
              title={
                <p className="navbar-brand font-great-vibes text-primary! text-2xl! text-center">
                  Huy <i className="fi flaticon-spring ml-1" /> Như
                </p>
              }
              closeIcon={
                <span className="p-2 text-sm bg-primary text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              }
            >
              <ul className="flex flex-col font-medium md:flex-row md:space-x-8">
                {navbar.map(({ id, title }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`block py-2 pl-4 text-sm border-b border-gray-100 ${
                        activeId === id ? "text-primary!" : "text-text!"
                      }`}
                      onClick={(e) => handleScroll(e, id)}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#send-wishes"
                className="block w-1/2 text-white! bg-primary! font-medium rounded-lg text-sm px-4 py-2 mt-4 mx-auto text-center md:hidden"
                onClick={(e) => handleScroll(e, "send-wishes")}
              >
                Gửi lời chúc
              </a>
            </Drawer>

            <ul className="hidden md:flex font-medium space-x-8 mr-16">
              {navbar.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block font-bold uppercase hover:text-primary ${
                      activeId === id ? "text-primary" : "text-white"
                    }`}
                    onClick={(e) => handleScroll(e, id)}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center md:order-2">
              <a
                href="#send-wishes"
                className={`${isScrolled ? "text-paragraph" : "text-text"} bg-white hover:opacity-80 transition-opacity focus:ring-4 focus:ring-primary font-medium rounded-lg px-4 md:px-5 py-2 md:py-2.5 mr-2`}
                onClick={(e) => handleScroll(e, "send-wishes")}
              >
                Gửi lời chúc
              </a>

              <button
                type="button"
                onClick={showDrawer}
                className="inline-flex items-center p-2 ml-1 text-sm bg-gray-100 text-text rounded-full md:hidden hover:bg-primary hover:text-white focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
