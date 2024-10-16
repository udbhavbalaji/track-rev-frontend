import { navbarItems } from "@data/navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='py-8 z-20 top-0 left-0 bg-black text-red-600 font-titleFont'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex items-center h-6 sm:h-9 mr-3 self-center text-4xl font-semibold font-wideFont'>
          <Link to='/' className='hover:text-red-700'>
            TR
          </Link>
        </div>
        <div>
          <ul className='inline-flex text-sm font-medium'>
            {navbarItems.map((item, index) => (
              <li key={index} className='mx-4 my-2'>
                {item.linkType === "route" ? (
                  <Link to={item.link} className='hover:text-red-700'>
                    {item.title}
                  </Link>
                ) : (
                  <a href={item.link} className='hover:text-red-700'>
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
