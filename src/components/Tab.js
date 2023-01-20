
function Tab({ url, title, status }) {
  return (
    <>
      <span className={`header-text first:rounded-l-lg last:rounded-r-lg border border-[#d0d5dd] bg-white font-inter py-2.5 px-4 leading-5 text-sm font-medium not-italic hover:cursor-pointer hover:bg-light-gray ${ status && "bg-light-gray"} `} id={url}>
      {title}</span>
    </>
  );
}

export default Tab;
