import React, {useState} from 'react'
import Tab from './Tab'

function TabMenu({tabs, defaultKey}) {

const [activeKey, setActiveKey] = useState(defaultKey)


const handleTabChange = (key) => {
    if(tabs[key].content){
        setActiveKey(key)
    }
}

  return (
    <>
        <div className="overflow-x-auto tab">
          <div className="nav max-w-5xl mt-2.5 mb-10">
            <div className="w-[1000px]">
              {tabs.map((item, i) => (
                <Tab key={i} title={item.title} onSelect={()=> handleTabChange(i)} tabIndex = {i} activeKey={activeKey} />
              ))}
            </div>
          </div>
        </div>
        {tabs[activeKey].content}
    </>
  );
}

export default TabMenu