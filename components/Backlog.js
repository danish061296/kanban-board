import { ChatAltIcon } from '@heroicons/react/outline';
function Backlog() {
  return (
    <main className="p-3 flex ">
      <div className="p-2 w-80  bg-gray-100 rounded-md overflow-auto shadow">
        <h3 className=" text-md font-medium text-gray-900">Backlog</h3>
        <ul className="mt-2 space-y-2 ">
          <li className="block p-5 rounded-md shadow bg-white  ">
            <div className="flex ">
              <a className="hover:underline" href="#">
                Add discount code to checkout page
              </a>
              <img
                className="h-6 w-6 rounded-full ml-3"
                src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="profile-1"
              />
            </div>

            <div className="flex justify-between mt-2 items-center justify-center">
              <p className="text-gray-600 text-sm">Sep 14</p>
              <div className="flex space-x-2 bg-green-100 rounded-md px-2 py-1 text-sm">
                <p className="text-green-600 font-bold ">•</p>
                <p className="text-green-800 font-semibold ">Feature Request</p>
              </div>
            </div>
          </li>
          <li className="block p-5 rounded-md shadow bg-white  ">
            <div className="flex ">
              <a className="hover:underline" href="#">
                Provide documentation on integrations
              </a>
              <img
                className="h-6 w-6 rounded-full ml-3"
                src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="profile-1"
              />
            </div>

            <div className="flex justify-between mt-2 items-center justify-center">
              <p className="text-gray-600 text-sm">Sep 14</p>
            </div>
          </li>
          <li className="block p-5 rounded-md shadow bg-white  ">
            <div className="flex ">
              <a className="hover:underline" href="#">
                Design shopping cart dropdown
              </a>
              <img
                className="h-6 w-6 rounded-full ml-3"
                src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="profile-1"
              />
            </div>

            <div className="flex justify-between mt-2 items-center justify-center">
              <p className="text-gray-600 text-sm">Sep 14</p>
              <ChatAltIcon className="h-6 w-6 text-gray-400 ml-auto" />

              <div className="flex space-x-2 bg-purple-100 rounded-md px-2 py-1 text-sm ml-2">
                <p className="text-purple-600 font-bold ">•</p>
                <p className="text-purple-800 font-semibold ">Design</p>
              </div>
            </div>
          </li>
          <li className="block p-5 rounded-md shadow bg-white  ">
            <div className="flex ">
              <a className="hover:underline" href="#">
                Add discount code to checkout page
              </a>
              <img
                className="h-6 w-6 rounded-full ml-3"
                src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="profile-1"
              />
            </div>

            <div className="flex justify-between mt-2 items-center justify-center">
              <p className="text-gray-600 text-sm">Sep 14</p>

              <div className="flex space-x-2 bg-green-100 rounded-md px-2 py-1 text-sm">
                <p className="text-green-600 font-bold ">•</p>
                <p className="text-green-800 font-semibold ">Feature Request</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sm ring ring-gray-200 text-gray-500 bg-white shadow rounded px-1 ">
                  +2
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>

    // <main className="p-3 flex ">
    //   <div className="p-2 w-80 w-3/4 bg-gray-100 rounded-md ">
    //     <h3 className=" text-md font-medium text-gray-900">Backlog</h3>
    //     <ul className="mt-2 space-y-2 ">
    //       <li className="block p-5 rounded-md shadow bg-white  ">
    //         <div className="flex ">
    //           <a className="hover:underline" href="#">
    //             Add discount code to checkout page
    //           </a>
    //           <img
    //             className="h-6 w-6 rounded-full ml-3"
    //             src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    //             alt="profile-1"
    //           />
    //         </div>

    //         <div className="flex justify-between mt-2 items-center justify-center">
    //           <p className="text-gray-600 text-sm">Sep 14</p>
    //           <div className="flex space-x-2 bg-green-100 rounded-md px-2 py-1 text-sm">
    //             <p className="text-green-600 font-bold ">•</p>
    //             <p className="text-green-800 font-semibold ">Feature Request</p>
    //           </div>
    //         </div>
    //       </li>
    //       <li className="block p-5 rounded-md shadow bg-white  ">
    //         <div className="flex ">
    //           <a className="hover:underline" href="#">
    //             Provide documentation on integrations
    //           </a>
    //           <img
    //             className="h-6 w-6 rounded-full ml-3"
    //             src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    //             alt="profile-1"
    //           />
    //         </div>

    //         <div className="flex justify-between mt-2 items-center justify-center">
    //           <p className="text-gray-600 text-sm">Sep 14</p>
    //         </div>
    //       </li>
    //       <li className="block p-5 rounded-md shadow bg-white  ">
    //         <div className="flex ">
    //           <a className="hover:underline" href="#">
    //             Design shopping cart dropdown
    //           </a>
    //           <img
    //             className="h-6 w-6 rounded-full ml-3"
    //             src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    //             alt="profile-1"
    //           />
    //         </div>

    //         <div className="flex justify-between mt-2 items-center justify-center">
    //           <p className="text-gray-600 text-sm">Sep 14</p>
    //           <ChatAltIcon className="h-6 w-6 text-gray-400 ml-auto" />

    //           <div className="flex space-x-2 bg-purple-100 rounded-md px-2 py-1 text-sm ml-2">
    //             <p className="text-purple-600 font-bold ">•</p>
    //             <p className="text-purple-800 font-semibold ">Design</p>
    //           </div>
    //         </div>
    //       </li>
    //       <li className="block p-5 rounded-md shadow bg-white  ">
    //         <div className="flex ">
    //           <a className="hover:underline" href="#">
    //             Add discount code to checkout page
    //           </a>
    //           <img
    //             className="h-6 w-6 rounded-full ml-3"
    //             src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    //             alt="profile-1"
    //           />
    //         </div>

    //         <div className="flex justify-between mt-2 items-center justify-center">
    //           <p className="text-gray-600 text-sm">Sep 14</p>

    //           <div className="flex space-x-2 bg-green-100 rounded-md px-2 py-1 text-sm">
    //             <p className="text-green-600 font-bold ">•</p>
    //             <p className="text-green-800 font-semibold ">Feature Request</p>
    //           </div>
    //           <div className="flex justify-center items-center">
    //             <p className="text-sm ring ring-gray-200 text-gray-500 bg-white shadow rounded px-1 ">
    //               +1
    //             </p>
    //           </div>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </main>
  );
}

export default Backlog;
