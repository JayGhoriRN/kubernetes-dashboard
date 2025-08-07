import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showOrgDropdown?: boolean;
  breadcrumbs?: Array<{
    label: string;
    path: string;
  }>;
}

export default function Header({
  title,
  subtitle,
  showOrgDropdown = true,
  breadcrumbs = [],
}: HeaderProps) {
  return (
    <header className="flex flex-col justify-between items-center pt-3 border-b border-gray-200 bg-white">
      <div className="flex justify-between w-full px-4">
        <div className="flex flex-col pl-4">
          <h2 className="text-lg font-medium">Kafka Fleet Manager</h2>
          <span className="text-xs text-gray-500 self-end ">
            by Platformatory
          </span>
        </div>
        <div className="flex items-center gap-3">
          {showOrgDropdown && (
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Organization</span>
              <Select defaultValue="acme-fleet">
                <SelectTrigger className="w-[180px] h-8">
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acme-fleet">Acme Fleet</SelectItem>
                  <SelectItem value="platform-team">Platform Team</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-100 border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Button>
        </div>
      </div>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center text-sm mt-1 ml-2 p-2 border border-solid border-gray-300 w-full rounded-sm pl-4">
          <Link to="/" className="text-blue-500 hover:text-blue-700 text-xs">
            Home
          </Link>
          {breadcrumbs.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-1 text-gray-400 text-lg">›</span>
              <Link
                to={item.path}
                className="text-blue-500 hover:text-blue-700 text-xs"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
