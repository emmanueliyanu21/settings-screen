import Billing from "./Billing";
import TabMenu from "../../components/TabMenu/TabMenu";

const Settings = () => {

  const settingsData = [
    { title: "My details", content: <div>My Details</div>},
    { title: "Profile", content: <div>Profile</div> },
    { title: "Password", content: <div>Password</div>},
    { title: "Team", content: <div>Team</div>},
    { title: "Plan", content: <div>Plan</div>},
    { title: "Billing", content: <Billing/>},
    { title: "Notification", content: <div>Notification</div>},
    { title: "Integration", content: <div>Integration</div>},
    { title: "API", content: <div>API</div>}, 
  ];

  return (
    <>
      <div className="wrapper min-h-screen bgcolor bg-white pt-8 pb-12 px-8 bg-light-gray">
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
