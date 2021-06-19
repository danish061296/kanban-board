import {
  PlusIcon,
  SearchIcon,
  BellIcon,
  MenuIcon,
  ViewBoardsIcon,
} from '@heroicons/react/outline';
function Header() {
  return (
    <header className="px-5">
      <div className="flex justify-between items-center py-3 border-b border-gray-200 ">
        <div className="flex-1">
          <div className="relative max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pl-2">
              <SearchIcon className="h-5 w-5 text-gray-600" />
            </span>
            <input
              className="block w-full outline-none rounded-md border border-gray-400 py-2 text-sm pl-10 pr-4 text-gray-900 placeholder-gray-600"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className=" outline-none py-2 px-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <BellIcon className="h-6 w-6 text-gray-500 " />
          </button>
          <button className="outline-none ">
            <img
              className="h-9 w-9 rounded-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
              src="https://media-exp3.licdn.com/dms/image/C4D03AQFj98kwRWcTwg/profile-displayphoto-shrink_400_400/0/1622754156023?e=1629331200&v=beta&t=tP8Yqfqxq_Rwq78HtGteJCBBGiWNx6ileJd_Xry6KP8"
              alt="profile-avatar"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
            All Issues
          </h2>
          <div className="flex items-center ml-6">
            <img
              className="h-6 w-6 -ml-2 rounded-full object-cover ring ring-white ring-offset-1 transition duration-100 ease-in-out transform hover:scale-110 "
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="profile-1"
            />
            <img
              className="h-6 w-6 rounded-full object-cover ring ring-white ring-offset-1 transition duration-100 ease-in-out transform hover:scale-110"
              src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="profile-2"
            />
            <img
              className="h-6 w-6 rounded-full object-cover ring ring-white ring-offset-1 transition duration-100 ease-in-out transform hover:scale-110"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="profile-3"
            />
            <img
              className="h-6 w-6 rounded-full object-cover ring ring-white ring-offset-1 transition duration-100 ease-in-out transform hover:scale-110"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="profile-4"
            />
          </div>
        </div>
        <div className="flex space-x-3">
          <span className="inline-flex border bg-gray-200 rounded-md py-1 px-2 space-x-2 cursor-pointer hover:bg-gray-300">
            <button>
              <MenuIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="bg-white rounded-md px-1 shadow-md">
              <ViewBoardsIcon className="h-6 w-6 text-gray-600" />
            </button>
          </span>
          <button className="flex  py-2 px-2 text-white text-sm font-medium outline-none bg-gray-800 hover:bg-gray-200 hover:text-gray-800  rounded cursor-pointer">
            <PlusIcon className="h-5 w-5 " />
            New Issue
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
