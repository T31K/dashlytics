import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MainHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-200 !bg-gray-50">
      <h1 className="text-lg font-medium">My Dashboard </h1>
      <button
        className="flex items-center justify-center p-3 ml-auto text-sm font-medium rounded-full hover:bg-gray-800"
        onClick={() => navigate('/new')}
      >
        <FaPlus />
      </button>

      <button className="hidden relative ml-2 text-sm focus:outline-none group">
        <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
        <div className="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex">
          <a
            className="w-full px-4 py-2 text-left hover:bg-gray-900"
            href="#"
          >
            Menu Item 1
          </a>
          <a
            className="w-full px-4 py-2 text-left hover:bg-gray-900"
            href="#"
          >
            Menu Item 2
          </a>
          <a
            className="w-full px-4 py-2 text-left hover:bg-gray-900"
            href="#"
          >
            Menu Item 3
          </a>
        </div>
      </button>
    </div>
  );
}

export default MainHeader;
