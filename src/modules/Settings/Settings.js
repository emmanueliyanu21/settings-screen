import Table from "../../components/Table";

import Mail from "../../mail.png";
import Plus from "../../assets/plus.png";
import Visa from "../../assets/visa-logo.png";
import Mastercard from "../../assets/Mastercard.png";

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
          <h2 className="text-color font-inter font-medium text-3xl pb-1 not-italic">
            Settings
          </h2>
          <p className="grey-text font-inter not-italic pb-5 text-base font-normal">
            Manage your team and preferences here.
          </p>
        </div>
        <div className="overflow-x-auto this">
          <div className="nav max-w-5xl mt-2.5 mb-10">
            <div className="w-full">
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
          <h2 className="text-color font-inter pb-1.5 leading-7 font-medium not-italic">
            Payment method
          </h2>
          <p className="grey-text font-inter leading-5 text-sm font-normal not-italic">
            Update your billing details and address.
          </p>
        </div>
        <div className="grid grid-cols-[30%_70%] body-content2 border-b border-[#EAECF0] gap-5 grid pb-5 mb-5">
          <div>
            <h2 className="header-text leading-5leading-5 text-sm not-italic">
              Contact email
            </h2>
            <p className="grey-text leading-5 text-sm not-italic">
              Where should invoices be sent?
            </p>
          </div>
          <div>
            <div className="MailDetails flex ">
              <div className="pr-3">
                <input
                  type="checkbox"
                  className="-mt-1 w-3.5 h-3.5 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer rounded-full focus:ring-0"
                />
              </div>
              <div>
                <div className="firstN1 pb-5">
                  <h2 className="leading-5leading-5 text-sm not-italic">
                    Send to my account email
                  </h2>
                  <p className="leading-5 text-sm font-normal not-italic">
                    olivia@untitledui.com
                  </p>
                </div>
              </div>
            </div>
            <div className="MailDetails flex">
              <div className="pr-3">
                <input
                  type="checkbox"
                  className="-mt-1 w-3.5 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer h-3.5 rounded-full focus:ring-0"
                />
              </div>
              <div>
                <h2>Send to an alternative email</h2>
                <div className="shadow-3xl border border-[#d0d5dd] white items-center rounded-lg w-96 max-w-lg mt-2.5 flex bg-white pt-2.5 pb-3 pr-5 pl-3">
                  <img className="w-7 h-5 pr-2" src={Mail} alt=""></img>
                  <span className="text-color font-inter leading-6 text-base font-normal not-italic">
                    billing@untitledui.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[30%_70%] body-content2 border-b border-[#EAECF0] gap-5 grid pb-5 mb-5">
          <div>
            <h2 className="header-text font-inter leading-5 text-lg font-medium">
              Card details
            </h2>
            <p className="font-inter leading-5 font-normal">
              Select default payment method.
            </p>
          </div>
          <div>
            <div className="card border border-[#eaecf0] max-w-screen-md gap-5 bg-white rounded-lg flex mb-2.5 bg-white p-5">
              <div>
                <img
                  className="border border-[#eaecf0] bg-white rounded p-2.5 bg-white"
                  src={Visa}
                  alt=""
                ></img>
              </div>
              <div>
                <h2 className="dark-text-grey font-inter pb-1 leading-5 text-sm font-medium not-italic">
                  Visa ending in 1234
                </h2>
                <p className="grey-text font-inter pb-2.5 text-sm not-italic">
                  Expiry 06/2024
                </p>
                <p>
                  Set as default <span>Edit</span>
                </p>
              </div>
            </div>
            <div className="card border border-[#eaecf0] max-w-screen-md gap-5 bg-white rounded-lg flex bg-white p-5">
              <div>
                <img
                  className="border border-[#eaecf0] bg-white rounded p-2.5 bg-white"
                  src={Mastercard}
                  alt=""
                ></img>
              </div>
              <div>
                <h2 className="dark-text-grey pb-1 font-inter leading-5 text-sm font-medium not-italic">
                  Visa ending in 1234
                </h2>
                <p className="pb-2.5 font-normal text-sm not-italic">
                  Expiry 06/2024
                </p>
                <p>
                  Set as default <span>Edit</span>
                </p>
              </div>
            </div>
            <div className="mt-2.5 gap-2 flex items-center">
              <img className="h-5" src={Plus} alt=""></img>
              Add new payment method
            </div>
          </div>
        </div>
        <div className="body-content">
          <h2 className="font-medium not-italic">Billing history</h2>
          <Table />
        </div>
      </div>
    </>
  )
}

export {Settings}