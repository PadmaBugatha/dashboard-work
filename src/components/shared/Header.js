import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const navigatetoPage = (givenPath) => {
    navigate(`/${givenPath}`);
  };
  return (
    <div className="h-16 px-4 flex items-center border-gray-200 justify-between">
      <div className="flex-1 relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search Patients"
          className="text-sm focus:outline-none active:outline-none border h-10 pl-11 pr-4 w-full rounded-3xl shadow-sm"
        />
      </div>
      <div className="flex items-center gap-3 ml-4 mr-2">
        <button
          onClick={() => navigatetoPage("appointment")}
          className="bg-indigo-900 text-white py-2 px-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-800"
        >
          Make an Appointment
        </button>
        <button
          onClick={() => navigatetoPage("patient")}
          className="bg-indigo-900 text-white  py-2 px-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-800"
        >
          Add Patient
        </button>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-full p-1.5 text-white bg-indigo-900 hover:text-opacity-70 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
