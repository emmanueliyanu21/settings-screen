import { useState } from "react";

function Card({ imgData, textHeader, expiry }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div
        className={`card border hover:cursor-pointer hover:border-[purple] hover:border-dotted border-[#eaecf0] max-w-screen-md gap-5 bg-white rounded-lg flex mb-2.5 bg-white p-3 hover:transition-all ${
          selected && "bg-[#F9F5FF] border border-[#D6BBFB]"
        } }`}
        onClick={() => setSelected(!selected)}
      >
        <div>
          <img
            className="border border-[#eaecf0] bg-white rounded p-2.5 bg-white"
            src={imgData}
            alt=""
          ></img>
        </div>
        <div className="w-[100%]">
          <div className="flex justify-between items-center">
            <h2
              className={`text-dark-text-grey font-inter pb-0 leading-5 text-sm font-medium not-italic ${
                selected && "text-[#53389E]"
              }`}
            >
              {textHeader}
            </h2>
            <input
              type="checkbox"
              className="-mt-2 w-3.5 pt-1 hover:border-purple-color hover:bg-light-purple-color hover:cursor-pointer h-3.5 rounded-full focus:ring-0 checked:bg-primary"
              checked={selected}
              readOnly
            />
          </div>

          <p
            className={`text-grey-text font-inter pb-1.5 text-sm not-italic ${
              selected && "text-[#7F56D9]"
            } `}
          >
            {expiry}
          </p>
          <p>
            <span
              className={`text-deep-grey pr-1 text-sm font-medium not-italic font-inter ${
                selected && "text-[#9E77ED]"
              }`}
            >
              Set as default
            </span>{" "}
            <span className="text-sm text-[#6941C6] font-medium font-inter not-italic">
              Edit
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
