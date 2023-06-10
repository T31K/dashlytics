import Rodal from 'rodal';

import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { FaPlus, FaWrench } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
function MainNav() {
  const [addPageModal, setAddPageModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { pathname } = useLocation();
  const { logout } = useAuth0();

  return (
    <>
      <div
        className={`flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-200 text-gray-500 hidden bg-gray-50 md:flex ${
          pathname === '/new' ? '' : ''
        }`}
      >
        <Link
          className="flex items-center justify-center flex-shrink-0 w-full h-16"
          to="/"
        >
          <svg
            className="w-8 h-8 stroke-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </Link>
        <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg bg-gray-800">
          <AiOutlineDashboard className="text-2xl text-white" />
        </a>
        <a
          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg hover:bg-gray-800"
          onClick={() => setAddPageModal(true)}
        >
          <FaPlus className="text-xl " />
        </a>
        <a
          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded-lg hover:bg-gray-800"
          onClick={() => setLogoutModal(true)}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      <Rodal
        visible={addPageModal}
        onClose={() => setAddPageModal(false)}
      >
        <div className="h-[100%] pt-5">
          <div className="flex items-center justify-center">
            <FaWrench className="text-5xl bg-green-100 p-2 rounded-lg text-green-500" />
          </div>
          <div className="text-center font-semibold text-xl my-5 text-gray-800">Coming Soon!</div>
          <div className="flex items-center text-center justify-center  gap-3">
            We're working hard to let you <br />
            add more pages!
          </div>
        </div>
      </Rodal>
      <Rodal
        visible={logoutModal}
        onClose={() => setLogoutModal(false)}
      >
        <div className="h-[100%] pt-5">
          <div className="flex items-center justify-center">
            <RiLogoutCircleRLine className="text-5xl bg-red-100 p-2 rounded-lg text-red-500" />
          </div>
          <div className="text-center font-semibold text-xl my-5 text-gray-800">Logout?</div>
          <div className="flex items-center justify-center mt-[30px] gap-3">
            <button
              className="bg-gray-300 py-2 px-4 text-gray-900 rounded-lg font-medium"
              onClick={() => setLogoutModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-400 py-2 px-4 text-gray-900 rounded-lg font-medium"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </Rodal>
    </>
  );
}

export default MainNav;
