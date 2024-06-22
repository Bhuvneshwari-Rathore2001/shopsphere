import { useState } from 'react';
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const user = { _id: '', role: '' };
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    setIsOpen(false);
  };
  return (
    <nav className='flex justify-end gap-5 items-center px-4 py-5 shadow-custom bg-white'>
      <Link
        to={'/'}
        className='text-[rgb(46,46,46) text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
        onClick={() => setIsOpen(false)}
      >
        HOME
      </Link>
      <Link
        to={'/search'}
        className='text-[rgb(46,46,46)] text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
        onClick={() => setIsOpen(false)}
      >
        <FaSearch />
      </Link>
      <Link
        to={'/cart'}
        className='text-[rgb(46,46,46)] text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
        onClick={() => setIsOpen(false)}
      >
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <div className='relative text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog
            open={isOpen}
            className='absolute -bottom-36 px-2 py-6 -left-28 w-28 shadow-[0_1.5px_20.5px_-4px_#dddddd]'
          >
            <div className='flex flex-col items-center gap-3'>
              {user.role === 'admin' && (
                <Link
                  to='/admin/dashboard'
                  onClick={() => setIsOpen(false)}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
                >
                  Admin
                </Link>
              )}

              <Link
                to='/orders'
                onClick={() => setIsOpen(false)}
                className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
              >
                Orders
              </Link>
              <button
                onClick={logoutHandler}
                className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
              >
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </div>
      ) : (
        <Link to={'/login'}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
