import Download from "./../../assets/icons/download-cloud.svg";

import Table from "../../components/Table";

import { Icon } from "@iconify/react";

import Card from "../../components/Card";

import Visa from "../../assets/visa-logo.png";

import Mastercard from "../../assets/Mastercard.png";

function Billing() {
    const cardData = [
        {
          imgData: Visa, textHeader: 'Visa ending in 1234', expiry: 'Expiry 06/2024', 
        },
        {
          imgData: Mastercard, textHeader: 'Visa ending in 1634', expiry: 'Expiry 06/2025',
        }
      ]
  return (
    <>
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
                  className="-mt-2 w-3.5 h-3.5 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer rounded-full focus:ring-0 text-[#53389E] "
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
                  className="-mt-2 w-3.5 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer h-3.5 rounded-full focus:ring-0 text-[#53389E]"
                />
              </div>
              <div >
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
            {
              cardData.map((item, i) => (
                <Card key={i} imgData={item.imgData} expiry={item.expiry} textHeader={item.textHeader}  />
              ))
            }
            <div className="mt-2.5 gap-2 flex items-center">
              <Icon
                icon="material-symbols:add"
                className="hover:cursor-pointer pr-1 text-dark-grey"
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
              <img  src={Download} alt="" />
              <span className="text-header-text font-inter font-medium text-sm not-italic">Download all</span>
            </button>
          </div>

          <Table />
        </div>
    </>
  )
}

export default Billing