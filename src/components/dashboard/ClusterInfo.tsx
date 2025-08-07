import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ClusterInfoProps {
  cluster: {
    id: string;
    sku: string;
    organization: string;
    dateCreated: string;
    dateModified: string;
    infrastructure: string;
    version: string;
    status: string;
  };
}

export default function ClusterInfo({ cluster }: ClusterInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 !px-3 !py-3">
        <CardTitle className="text-sm font-medium flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
          </svg> */}
          <img src={"/images/cloudicon.png"} width={20} height={20} className="mr-2" />
          Cluster Info
        </CardTitle>
        <Button variant="ghost" size="icon">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg> */}
          <img src={"/images/optionicon.svg"} width={16} height={16} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Cluster ID</span>
            <span className="text-sm">{cluster.id}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">SKU</span>
            <span className="text-sm">{cluster.sku}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Organization</span>
            <span className="text-sm">{cluster.organization}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Date Created</span>
            <span className="text-sm">{cluster.dateCreated}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Date Modified</span>
            <span className="text-sm">{cluster.dateModified}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Infrastructure</span>
            <span className="text-sm">{cluster.infrastructure}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Version</span>
            <span className="text-sm">{cluster.version}</span>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <span className="text-sm text-gray-500">Status</span>
            <span className="text-sm font-medium">{cluster.status}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}