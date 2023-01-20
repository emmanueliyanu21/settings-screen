import React, {useState} from "react";

function Menu({ items }) {

const [activeKey, setActiveKey] = useState(7);

   
  return (
    <>
      <aside className="w-64" aria-label="Sidebar">
        <div className="py-1 pr-1  overflow-y-auto rounded ">
          <ul className="space-y-2">
            {items.map(({imgName, linkName, number, url}, index) => (
              <li className={`hover:bg-light-gray p-2 px-3 rounded ${ activeKey === index && "bg-light-gray"} ${url==='user' && "mb-5"}`} onClick={() => setActiveKey(index)}>
              <a
                href={url}
                className="flex font-inter items-center text-base font-normal font-medium rounded-lg "
              >
                <img className="h-5 mr-1 w-6 h-6" src={imgName} alt="home" />
                <div className="flex justify-between w-[100%]">
                <div className="ml-2">{linkName}</div>
                {number ? 
                <div className="inline-flex items-center justify-center px-2 text-sm font-medium rounded-full bg-[#F2F4F7] text-[#344054]">{number}</div> 
                :
                ""
                }
                </div>
              </a>
            </li>
            ))}
            
            
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Menu;
