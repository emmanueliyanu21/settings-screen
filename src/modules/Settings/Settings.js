import Table from "../../components/Table";

import Visa from "../../assets/visa-logo.png";

import Mastercard from "../../assets/Mastercard.png";

import Download from "./../../assets/icons/download-cloud.png";

import { Icon } from "@iconify/react";

const Settings = () => {
  const data = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notification",
    "Integration",
    "API",
  ];
  return (
    <>
      <div className="wrapper bgcolor bg-white pt-8 pb-12 px-8 bg-light-gray">
        <div className="header">
          <h2 className="text-text-color font-inter font-medium text-3xl pb-1 not-italic">
            Settings
          </h2>
          <p className="text-grey-text font-inter not-italic pb-5 text-base font-normal">
            Manage your team and preferences here.
          </p>
        </div>
        <div className="overflow-x-auto this">
          <div className="nav max-w-5xl mt-2.5 mb-10">
            <div className="w-[1000px]">
              {data.map((item, i) => (
                <span
                  key={i}
                  className="header-text first:rounded-l-lg last:rounded-r-lg border border-[#d0d5dd] bg-white font-inter py-2.5 px-4 leading-5 text-sm font-medium not-italic "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="body-content border-b border-[#EAECF0] mb-6 pb-5">
          <h2 className="text-text-color font-inter pb-1 leading-7 font-medium not-italic">
            Payment method
          </h2>
          <p className="text-grey-text font-inter leading-5 text-sm font-normal not-italic">
            Update your billing details and address.
          </p>
        </div>
        <div className="grid grid-cols-[30%_70%] body-content2 border-b border-[#EAECF0] gap-5 grid pb-5 mb-5">
          <div>
            <h2 className="text-header-text font-inter leading-5 text-sm not-italic">
              Contact email
            </h2>
            <p className="text-grey-text font-inter leading-5 text-sm not-italic">
              Where should invoices be sent?
            </p>
          </div>
          <div>
            <div className="MailDetails flex ">
              <div className="pr-3">
                <input
                  type="checkbox"
                  className="-mt-2 w-3.5 h-3.5 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer rounded-full focus:ring-0"
                />
              </div>
              <div>
                <div className="firstN1 pb-5">
                  <h2 className="text-header-text font-inter font-medium leading-5 leading-5 text-sm not-italic">
                    Send to my account email
                  </h2>
                  <p className="leading-5 text-dark-grey font-inter text-sm font-normal not-italic">
                    olivia@untitledui.com
                  </p>
                </div>
              </div>
            </div>
            <div className="MailDetails flex">
              <div className="pr-3">
                <input
                  type="checkbox"
                  className="-mt-2 w-3.5 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer h-3.5 rounded-full focus:ring-0"
                />
              </div>
              <div>
                <h2 className="text-header-text text-sm font-inter font-medium not-italic">
                  Send to an alternative email
                </h2>
                <div className="mail-details shadow-3xl border border-[#d0d5dd] white items-center rounded-lg w-[450px] max-w-lg mt-2.5 flex bg-white pt-2 pb-2 pr-5 pl-3">
                  <Icon
                    icon="ic:round-mail-outline"
                    className="pr-2 text-[#667085]"
                    width="28"
                    height="28"
                  />
                  <span className="text-color font-inter leading-6 text-base font-normal not-italic">
                    billing@untitledui.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[30%_70%] body-content2  gap-5 grid pb-5 mb-5">
          <div>
            <h2 className="text-header-text font-inter leading-5 text-sm font-medium">
              Card details
            </h2>
            <p className="font-inter leading-5 text-dark-grey text-sm font-normal">
              Select default payment method.
            </p>
          </div>
          <div>
            <div className="card border hover:cursor-pointer hover:border-[purple] hover:border-dotted border-[#eaecf0] max-w-screen-md gap-5 bg-white rounded-lg flex mb-2.5 bg-white p-4">
              <div>
                <img
                  className="border border-[#eaecf0] bg-white rounded p-2.5 bg-white"
                  src={Visa}
                  alt=""
                ></img>
              </div>
              <div>
                <h2 className="text-dark-text-grey font-inter pb-0 leading-5 text-sm font-medium not-italic">
                  Visa ending in 1234
                </h2>
                <p className="text-grey-text font-inter pb-1.5 text-sm not-italic">
                  Expiry 06/2024
                </p>
                <p>
                  <span className="text-deep-grey pr-1 text-sm font-medium not-italic font-inter">
                    Set as default
                  </span>{" "}
                  <span className="text-sm text-[purple] font-medium font-inter not-italic">
                    Edit
                  </span>
                </p>
              </div>
            </div>
            <div className="card border hover:cursor-pointer hover:border-[purple] hover:border-dotted border-[#eaecf0] max-w-screen-md gap-5 bg-white rounded-lg flex bg-white p-4">
              <div>
                <img
                  className="border border-[#eaecf0] bg-white rounded p-2.5 bg-white"
                  src={Mastercard}
                  alt=""
                ></img>
              </div>
              <div>
                <h2 className="text-dark-text-grey pb-0 font-inter leading-5 text-sm font-medium not-italic">
                  Visa ending in 1234
                </h2>
                <p className="text-grey-text font-inter pb-1.5 font-normal text-sm not-italic">
                  Expiry 06/2024
                </p>
                <p className="text-sm text-">
                  <span className="text-deep-grey pr-1 text-sm font-medium not-italic font-inter">
                    Set as default
                  </span>{" "}
                  <span className="text-sm text-[purple] font-medium font-inter not-italic">
                    Edit
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-2.5 gap-2 flex items-center">
              <Icon
                icon="material-symbols:add"
                className="pr-1 text-dark-grey"
                width="28"
                height="28"
              />
              <span className="-ml-1 text-sm font-inter not-italic  text-dark-grey">
                Add new payment method
              </span>
            </div>
          </div>
        </div>
        <div className="body-content">
          <div className="flex justify-between mb-5 items-center">
            <h2 className="font-medium font-inter not-italic text-lg text-text-color">
              Billing history
            </h2>
            <button className="shadow-3xl border border-[#d0d5dd] px-4 py-2 rounded flex items-center gap-2">
              <img width={16} height={16} src={Download} alt="" />
              <span className="text-header-text font-inter font-medium text-sm not-italic">Download all</span>
            </button>
          </div>

          <Table />
        </div>
      </div>
    </>
  );
};

export { Settings };
