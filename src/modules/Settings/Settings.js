import Tab from "../../components/Tab";
import Billing from "./Billing";

const Settings = () => {

  const settingsData = [
    { title: "My details", url: '/my-details' },
    { title: "Profile", url: '/profile' },
    { title: "Password", url: 'password'},
    { title: "Team", url: 'team'},
    { title: "Plan", url: 'plan'},
    { title: "Billing", url: 'billing', status: 'isActive'},
    { title: "Notification", url: 'notification'},
    { title: "Integration", url: 'integration'},
    { title: "API", url: 'api'}, 
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
        <div className="overflow-x-auto tab">
          <div className="nav max-w-5xl mt-2.5 mb-10">
            <div className="w-[1000px]">
              {settingsData.map((item, i) => (
                <Tab key={i} url={item.url} title={item.title} status={item.status} />
              ))}
            </div>
          </div>
        </div>
        
        <Billing />
      </div>
    </>
  );
};

export { Settings };
