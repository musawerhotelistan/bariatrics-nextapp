import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
      if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      onClick={handleScroll}
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-secondary"
    >
      {title}
    </Link>
  );
};

export default NavLink;
