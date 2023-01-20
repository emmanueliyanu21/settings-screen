import { Settings } from "../Settings/index";

import SideMenu from "../../components/Menu/SideMenu";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[22%_90%] container grid">
      <SideMenu />
      <Settings />
    </div>
  )
}

export { Dashboard }
