import { PlusIcon } from '@heroicons/react/outline';

function Sidebar() {
  return (
    <nav className="mt-8 ">
      <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide ">
        Issues
      </h3>
      <div className="mt-2 -mx-3 space-y-1">
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-900">All</span>
          <span className="text-xs font-semibold text-gray-700">36</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">
            Assigned to me
          </span>
          <span className="text-xs font-semibold text-gray-700">2</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">
            Created by me
          </span>
          <span className="text-xs font-semibold text-gray-700">1</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">Archieve</span>
          <span className="text-xs font-semibold text-gray-700"></span>
        </a>
      </div>
      <h3 className="mt-8 text-xs font-semibold text-gray-600  uppercase tracking-wide ">
        tags
      </h3>
      <div className="mt-2 -mx-3">
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">Bug</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">
            Feature Request
          </span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">Marketing</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">v2.0</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">Enhancement</span>
        </a>
        <a
          href="#"
          className="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-700">Design</span>
        </a>
      </div>
      <button className="flex mt-2 py-2 px-2 text-gray-500 text-sm font-medium outline-none hover:bg-gray-200 hover:text-gray-600 rounded cursor-pointer">
        <PlusIcon className="h-5 w-5 " />
        New Project
      </button>
    </nav>
  );
}

export default Sidebar;
