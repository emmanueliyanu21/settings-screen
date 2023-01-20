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
import Menu from "./Menu";
import MobileNav from '../assets/icons/nav.png'
import { Icon } from "@iconify/react";

function SideMenu() {
  const data = [
    { imgName: Home, linkName: "Home", url: "home" },
    { imgName: Dashboard, linkName: "Dashboard", number: 10, url: "dashboard" },
    { imgName: Project, linkName: "Projects", url: "project" },
    { imgName: Task, linkName: "Task", url: "task" },
    { imgName: Reporting, linkName: "Reporting", url: "reporting" },
    { imgName: Users, linkName: "Users", url: "user"  },
    { imgName: Support, linkName: "Support", url: "support" },
    { imgName: Setting, linkName: "Setting", url: "setting" },
  ];

  const bodydata = {
    feature: 'New features available!',
    text: 'Check out the new dashboard view. Pages now load faster.'
  }

  return (
    <>
      <div className="menu-sidebar border-r border-[#d0d5dd] bg-white">
      <div className="fixed h-screen scroll overflow-x-hidden overflow-y-scroll px-1">
        <div className="px-5 pb-3 pt-8">
          <img className="w-40" width={20} src={Logo} alt="Logo" />
        </div>
        <div className="searchbar pl-6">
          <input
            className="shadow-3xl border border-[#eaecf0] bg-white rounded-lg bg-white mb-5 py-2.5 px-5 w-[231px]"
            placeholder="Search"
          />
        </div>
        <div className="sidemenu pl-3">
          <ul>
            {data.map((item, i) => (
              <Menu
                key={i}
                imgName={item.imgName}
                url={item.url}
                linkName={item.linkName}
                number={item.number}
              />
            ))}
          </ul>
        </div>
        <div className="new-feature w-64 rounded-lg ml-2 mb-10 p-5 bg-[#F9FAFB]">
          <h2 className="text-color font-inter pb-2.5 leading-5 text-sm font-medium not-italic">
            {bodydata.feature}
          </h2>
          <p className="w-52 grey-text font-inter pb-5 leading-5 text-sm font-normal not-italic">
            {bodydata.text}
          </p>
          <img className="rounded mb-6" src={Customer} alt=""></img>
          <Icon
                    icon="material-symbols:play-circle"
                    className="pr-2 text-blur-white -mt-20 ml-2 opacity-50 hover: hover:cursor-pointer hover:opacity-100 "
                    width="64"
                    height="64"
                  />
          <span className="deep-grey font-inter mt-3 pr-2.5 leading-5 text-sm font-medium not-italic hover:opacity-50 hover:cursor-pointer">
            Dismiss
          </span>
          <span className="hover:text-[#653cc5] font-inter pr-2.5 mt-3 leading-5 text-sm font-medium not-italic">
            <a className="text-purple-color" href="/">
              What's New?
            </a>
          </span>
        </div>
        <hr className="w-64 text-[#EAECF0]" />
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
          <div className="hover:bg-light-gray rounded-lg">
            <img
              className="hover:cursor-pointer  p-1"
              src={LogoutButton}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile hidden">
        <div className="px-5 pb-5 pt-8 flex justify-between items-center">
          <img className="w-44 hover:cursor-pointer" src={Logo} alt="Logo" />
          <img className=" hover:cursor-pointer" src={MobileNav} alt="Logo" />
        </div>
        <div>
      </div>
      </div>
    </>
    
  );
}

export default SideMenu;
