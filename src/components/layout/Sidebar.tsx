import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const sidebarIcons = [
  {
    id: "home",
    path: "/",
    icon: <HomeIcon />,
    label: "Home",
  },
  {
    id: "clusters",
    path: "/clusters/intellectual-mongoose",
    icon: <ClustersIcon />,
    label: "Clusters",
  },
  {
    id: "infrastructure",
    path: "/infrastructure",
    icon: <InfrastructureIcon />,
    label: "Infrastructure",
  },
  {
    id: "monitoring",
    path: "/monitoring",
    icon: <MonitoringIcon />,
    label: "Monitoring",
  },
  {
    id: "metrics",
    path: "/metrics",
    icon: <MetricsIcon />,
    label: "Metrics",
  },
  {
    id: "activity",
    path: "/activity",
    icon: <ActivityIcon />,
    label: "Activity",
  },
  {
    id: "settings",
    path: "/settings",
    icon: <SettingsIcon />,
    label: "Settings",
  },
];

const bottomIcons = [
  {
    id: "terminal",
    path: "/terminal",
    icon: <TerminalIcon />,
    label: "Terminal",
  },
  {
    id: "billing",
    path: "/billing",
    icon: <BillingIcon />,
    label: "Billing",
  },
  {
    id: "profile",
    path: "/profile",
    icon: <ProfileIcon />,
    label: "Profile",
  },
];

export default function Sidebar() {
  const location = useLocation();

  // Check if current path matches or is a child of the sidebar item path
  const isActiveRoute = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-sm">
      {/* Logo/Brand section */}
      <div className="flex items-center justify-center py-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex-1 flex flex-col items-center py-3 space-y-1">
        {sidebarIcons.map((item) => {
          const isActive = isActiveRoute(item.path);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "relative w-12 h-12 rounded flex items-center justify-center transition-all duration-200 group",
                isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
              title={item.label}
            >
              <div
                className={cn(
                  "transition-all duration-200",
                  isActive ? "scale-100" : "group-hover:scale-105"
                )}
              >
                {item.icon}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom navigation */}
      <div className="flex flex-col items-center py-3 space-y-1 border-t border-gray-200">
        {bottomIcons.map((item) => {
          const isActive = isActiveRoute(item.path);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "relative w-12 h-12 rounded flex items-center justify-center transition-all duration-200 group",
                isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
              title={item.label}
            >
              <div
                className={cn(
                  "transition-all duration-200",
                  isActive ? "scale-100" : "group-hover:scale-105"
                )}
              >
                {item.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Updated icon components with consistent styling
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function ClustersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="6" height="6" rx="1"></rect>
      <rect x="16" y="3" width="6" height="6" rx="1"></rect>
      <rect x="2" y="15" width="6" height="6" rx="1"></rect>
      <rect x="16" y="15" width="6" height="6" rx="1"></rect>
      <path d="M8 6h8"></path>
      <path d="M8 18h8"></path>
      <path d="M12 9v6"></path>
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  );
}

function MetricsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" x2="20" y1="19" y2="19"></line>
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
    </svg>
  );
}

function BillingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="14" rx="2"></rect>
      <line x1="2" y1="10" x2="22" y2="10"></line>
    </svg>
  );
}
