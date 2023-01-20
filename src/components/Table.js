import React from "react";
import Download from "./../assets/icons/download-cloud.png";
import { Icon } from '@iconify/react';

import UserImage from '../assets/avatar/avatargroup.png'
import UserImage1 from '../assets/avatar/avatargroup1.png'
import UserImage2 from '../assets/avatar/avatargroup2.png'
import UserImage3 from '../assets/avatar/avatargroup3.png'
import UserImage4 from '../assets/avatar/avatargroup4.png'
import UserImage5 from '../assets/avatar/avatargroup5.png'
import UserImage6 from '../assets/avatar/avatargroup6.png'
import UserImage7 from '../assets/avatar/avatargroup3.png'

function Table() {
  const data = [
    {
      id: 1,
      productName: "Basic Plan – Dec 2022",
      amount: 10,
      date: "Dec 1, 2022",
      status: "paid",
      users: UserImage
    },
    {
      id: 2,
      productName: "Basic Plan – Nov 2022",
      amount: 10,
      date: "Nov 1, 2022",
      status: "paid",
      users: UserImage1
    },
    {
      id: 3,
      productName: "Basic Plan – Oct 2022",
      amount: 10,
      date: "Oct 1, 2022",
      status: "paid",
      users: UserImage2
    },
    {
      id: 4,
      productName: "Basic Plan – Sept 2022",
      amount: 10,
      date: "Sept 1, 2022",
      status: "paid",
      users: UserImage3
    },
    {
      id: 5,
      productName: "Basic Plan – Aug 2022",
      amount: 10,
      date: "Aug 1, 2022",
      status: "paid",
      users: UserImage4
    },
    {
      id: 6,
      productName: "Basic Plan – Jul 2022",
      amount: 10,
      date: "Jul 1, 2022",
      status: "paid",
      users: UserImage5
    },
    {
      id: 7,
      productName: "Basic Plan – Jun 2022",
      amount: 10,
      date: "Jun 1, 2022",
      status: "paid",
      users: UserImage6
    },
    {
      id: 8,
      productName: "Basic Plan – May 2022",
      amount: 10,
      date: "May 1, 2022",
      status: "paid",
      users: UserImage7
    },
  ];

  return (
    <div >
      <div className="max-w-6xl mx-auto ">
        <div className="relative overflow-x-auto border border-[#EAECF0] shadow-3xl sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-deep-grey font-inter border-b border-[#EAECF0] font-medium bg-gray-50 transparent dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 hover:cursor-pointer h-4 hover:border-purple-color hover:bg-light-purple-color text-purple-color bg-gray-100 border-gray-300 rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Invoice
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Users on plan
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only"></span>
                </th>
              </tr>
            </thead>
            {data &&
              data.map((item, index) => (
                <tbody key={index}>
                  <tr
                    className="bg-white hover:cursor-pointer border-b border-[#EAECF0] text-sm white hover:bg-gray-50 dark:hover:bg-bgcolor"
                    
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 hover:cursor-pointer h-4 hover:border-purple-color hover:bg-light-purple-color text-purple-color bg-gray-100 border-gray-300 rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-sm text-text-color whitespace-nowrap"
                    >
                      {item.productName}
                    </th>
                    <td className="px-6 py-4 text-deep-grey font-inter font-medium whitespace-nowrap">USD ${item.amount}.00</td>
                    <td className="px-6 py-4 text-deep-grey font-inter font-medium whitespace-nowrap">{item.date}</td>
                    <td className="px-6 py-4 green ">
                      <span className="bg-[#ECFDF3] flex items-center w-20 h-7 font-medium font-inter p-2 text-[#027A48] rounded-full">
                      <Icon icon="material-symbols:check-small-rounded" width="24" height="24" />
                        {item.status}</span>
                      </td>
                    <td className="px-6 py-4">
                      <img src={item.users} alt="" />
                      </td>
                    <td className="px-6 py-4 text-right">
                      <img width={16} height={16} src={Download} alt="" />
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
