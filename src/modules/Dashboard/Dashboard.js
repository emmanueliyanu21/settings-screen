import { Settings } from "../Settings/index";

import SideMenu from "../../components/SideMenu";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[22%_88%] container w-full grid">
      <SideMenu />
      <Settings />
    </div>
  )
}

export { Dashboard }