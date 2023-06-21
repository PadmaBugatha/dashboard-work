import React from "react";

const BillingOverview = ({ user }) => {
  return (
    <div className="m-6">
      <div className=" border rounded-2xl border-gray-400">
        <div className="flex justify-between mb-2">
          <div>
            <h2 className="text-lg font-semibold ml-4 mt-4">Billing Details</h2>
          </div>
          <div>
            <button className="px-4 py-2 mr-4 mt-4 rounded-2xl bg-indigo-900 text-white ">
              Print Bill
            </button>
          </div>
        </div>
        <div>
          <table className="bg-gray-100 text-sm table-auto block">
            <thead>
              <tr className="m-4">
                <td className="m-1 pl-9 pr-3">Patient Name</td>
                <td className="m-1 pl-9 pr-1">Age/Gender</td>
                <td className="m-1 pl-9 pr-4">Bill No</td>
                <td className="m-1 pl-9 pr-1">Date/Time</td>
                <td className="m-1 pl-9 pr-1">Receipt No</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="pl-9 pr-1">{user.name}</th>
                <th className="pl-9 pr-1">{`${user.age}/${user.gender}`}</th>
                <th className="pl-9 pr-1">012345678</th>
                <th className="pl-9 pr-1">21/06/2023 05:00 AM </th>
                <th className="pl-9 pr-1">011297876242</th>
              </tr>
            </tbody>
          </table>
        </div>
      
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="mt-2 inline-block min-w-full text-base font-semibold sm:mt-2 lg:mt-2">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className=" border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-base font-bold text-gray-900 px-6 pt-3 text-left"
                      >
                        Sr.no
                      </th>
                      <th
                        scope="col"
                        className="text-base font-bold text-gray-900 px-6 pt-3 text-left"
                      >
                        Service Name
                      </th>
                      <th
                        scope="col"
                        className="text-base font-bold text-gray-900 px-6 pt-3 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-base font-bold text-gray-900 px-6 pt-3 text-left"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="text-base font-bold text-gray-900 px-6 pt-3 text-left"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Consultation
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        500
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        500
                      </td>
                    </tr>
                    <tr className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        X-Ray
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        1500
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3000
                      </td>
                    </tr>
                    <tr className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                      <td
                        colSpan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      ></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                    </tr>
                    <tr className=" transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                    </tr>
                    <tr className=" transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                      <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-gray-200">
                    <tr>
                      <td colSpan="5">Mobile Number</td>
                      <td>9199999999</td>
                    </tr>
                    <tr>
                      <td colSpan="5">Tax</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td colSpan="5">Discount</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td colSpan="5">Total Amount </td>
                      <td>3750</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingOverview;
