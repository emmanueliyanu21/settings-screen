import React from "react";
import Home from "./../assets/icons/home.png";
import Dashboard from "./../assets/icons/bar-chart-2.png";
import Project from "./../assets/icons/3-layers.png";
import Task from "./../assets/icons/check-square.png";
import Reporting from "./../assets/icons/flag.png";
import Users from "./../assets/icons/users.png";
import Support from "./../assets/icons/life-buoy.png";
import Setting from "./../assets/icons/settings.png";
import Customer from "./../Image.png";
import Avatar from "./../assets/Avatar.png";
import LogoutButton from "./../assets/Icon.png";
import Logo from "./../Logomark.png";

function SideMenu() {
  const data = [
    { imgName: Home, linkName: "Home" },
    { imgName: Dashboard, linkName: "Dashboard" },
    { imgName: Project, linkName: "Projects" },
    { imgName: Task, linkName: "Task" },
    { imgName: Reporting, linkName: "Reporting" },
    { imgName: Users, linkName: "Users" },
    { imgName: Support, linkName: "Support" },
    { imgName: Setting, linkName: "Setting" },
  ];

  return (
    <div className="menu-sidebar border-r border-[#d0d5dd] bg-white">
      <div className="fixed h-screen scroll overflow-x-hidden overflow-y-scroll px-1">
        <div className="px-5 pb-5 pt-8">
          <img className="w-9/12" src={Logo} alt="Logo" />
        </div>
        <div className="searchbar pl-6">
          <input
            className="shadow-3xl border border-[#eaecf0] bg-white rounded-lg bg-white mb-5 py-2.5 px-5"
            placeholder="Search"
          />
        </div>
        <div className="sidemenu pl-6">
          <ul>
            {data.map((item, i) => (
              <li
                className="header-text hover:bg-light-gray hover:cursor-pointer font-inter flex pb-5 w-5 mb-1 leading-5 text-base font-medium not-italic"
                key={i}
              >
                <img className="h-5 mr-4" src={item.imgName} alt="home" />{" "}
                {item.linkName}
              </li>
            ))}
          </ul>
        </div>
        <div className="new-feature w-64 rounded-lg ml-2 mb-10 p-5 bg-[#F9FAFB]">
          <h2 className="text-color font-inter pb-2.5 leading-5 text-sm font-medium not-italic">
            New features available!
          </h2>
          <p className="w-52 grey-text font-inter pb-5 leading-5 text-sm font-normal not-italic">
            Check out the new dashboard view. Pages now load faster.{" "}
          </p>
          <img className="rounded mb-4" src={Customer} alt=""></img>
          <span className="deep-grey font-inter pr-2.5 leading-5 text-sm font-medium not-italic">
            Dismiss
          </span>
          <span className="font-inter pr-2.5 leading-5 text-sm font-medium not-italic">
            <a className="text-purple-color" href="/">
              What's New?
            </a>
          </span>
        </div>
        <hr className="w-64 text-[#EAECF0]"/>
        <div className="w-72 logout flex items-center justify-between p-5">
          <div>
            <img src={Avatar} alt=""></img>
          </div>
          <div>
            <h2 className="text-color font-inter leading-5 pb-1 text-sm not-italic font-medium">
              Olivia Rhye
            </h2>
            <p className="grey-text font-inter leading-5 text-sm not-italic font-normal">
              olivia@untitledui.com
            </p>
          </div>
          <div>
            <img src={LogoutButton} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
