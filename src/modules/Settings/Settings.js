import Billing from "./Billing";
import TabMenu from "../../components/TabMenu";

const Settings = () => {

  const settingsData = [
    { title: "My details"},
    { title: "Profile" },
    { title: "Password"},
    { title: "Team"},
    { title: "Plan"},
    { title: "Billing", content: <Billing/>},
    { title: "Notification"},
    { title: "Integration"},
    { title: "API"}, 
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
        <TabMenu tabs={settingsData} defaultKey = {5} />
      </div>
    </>
  );
};

export { Settings };
