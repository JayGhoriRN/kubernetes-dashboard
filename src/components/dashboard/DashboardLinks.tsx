import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardLink {
  title: string;
  icon: JSX.Element;
}

interface DashboardLinksProps {
  links: DashboardLink[];
}

export default function DashboardLinks({ links }: DashboardLinksProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 !px-3 !py-5">
        <CardTitle className="text-sm font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <line x1="3" x2="21" y1="9" y2="9"></line>
            <line x1="3" x2="21" y1="15" y2="15"></line>
            <line x1="9" x2="9" y1="3" y2="21"></line>
            <line x1="15" x2="15" y1="3" y2="21"></line>
          </svg>
          Dashboards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1 flex-col">
          {links.map((link, index) => (
            <a 
              key={index}
              href="#" 
              className="flex items-center pl-2 pt-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
            >
              <span className="mr-3 text-blue-500">{link.icon}</span>
              <span className="text-sm text-blue-400">{link.title}</span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}