import React from "react";

function Menu({ imgName, linkName, number, url, activeKey, tabIndex }) {
   
  return (
    <>
      <aside className="w-64" aria-label="Sidebar">
        <div className="py-1 pr-1  overflow-y-auto rounded ">
          <ul className="space-y-2">
            <li className={`hover:bg-light-gray p-2 px-3 rounded ${ activeKey === tabIndex && "bg-light-gray"} ${url==='user' && "mb-5"}`}>
              <a
                href={url}
                className="flex font-inter items-center text-base font-normal font-medium rounded-lg "
              >
                <img className="h-5 mr-1 w-6 h-6" src={imgName} alt="home" />
                <span className="ml-2">{linkName}</span>
                <span className="inline-flex items-center justify-center px-2 ml-16 text-sm font-medium rounded-full bg-[#F2F4F7] text-[#344054]">{number}</span>
              </a>
            </li>
            
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Menu;
