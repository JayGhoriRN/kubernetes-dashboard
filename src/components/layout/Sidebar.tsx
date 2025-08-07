import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const sidebarIcons = [
  { id: "home", path: "/", icon: <HomeIcon /> },
  { id: "settings", path: "/settings", icon: <SettingsIcon /> },
  { id: "clusters", path: "/clusters", icon: <ClustersIcon /> },
  { id: "infrastructure", path: "/infrastructure", icon: <InfrastructureIcon /> },
  { id: "monitoring", path: "/monitoring", icon: <MonitoringIcon /> },
  { id: "metrics", path: "/metrics", icon: <MetricsIcon /> },
  { id: "activity", path: "/activity", icon: <ActivityIcon /> }
];

const bottomIcons = [
  { id: "upgrade", path: "/upgrade", icon: <UpgradeIcon /> },
  { id: "terminal", path: "/terminal", icon: <TerminalIcon /> },
  { id: "profile", path: "/profile", icon: <ProfileIcon /> }
];

export default function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="w-14 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0">
      <div className="flex-1 flex flex-col items-center py-4 space-y-4">
        {sidebarIcons.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={cn(
              "p-2 rounded-md hover:bg-blue-50 transition-colors",
              location.pathname === item.path ? "text-blue-500" : "text-gray-500"
            )}
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center py-4 space-y-4 border-t border-gray-200">
        {bottomIcons.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={cn(
              "p-2 rounded-md hover:bg-blue-50 transition-colors",
              location.pathname === item.path ? "text-blue-500" : "text-gray-500"
            )}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Icon components
function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function ClustersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="8" rx="1"></rect>
      <rect x="14" y="2" width="8" height="8" rx="1"></rect>
      <rect x="2" y="14" width="8" height="8" rx="1"></rect>
      <rect x="14" y="14" width="8" height="8" rx="1"></rect>
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
      <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
      <path d="M18 14V10"></path>
      <path d="M18 2v2"></path>
      <path d="M18 20v2"></path>
      <rect x="2" y="9.5" width="20" height="5" rx="0.5"></rect>
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
    </svg>
  );
}

function MetricsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  );
}

function UpgradeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4"></path>
      <path d="M12 18v4"></path>
      <path d="M4.93 4.93 7.76 7.76"></path>
      <path d="M16.24 16.24 19.07 19.07"></path>
      <path d="M2 12h4"></path>
      <path d="M18 12h4"></path>
      <path d="M4.93 19.07 7.76 16.24"></path>
      <path d="M16.24 7.76 19.07 4.93"></path>
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" x2="20" y1="19" y2="19"></line>
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
    </svg>
  );
}