import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface KubernetesInfoProps {
  kubernetes: {
    identifier: string;
    fleetProvider: string;
    tenancy: string;
    dateCreated: string;
    status: string;
  };
}

export default function KubernetesInfo({ kubernetes }: KubernetesInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
          </svg>
          Kubernetes Fleet Info
        </CardTitle>
        <Button variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Identifier</span>
            <span className="text-sm text-blue-500">{kubernetes.identifier}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Fleet provider</span>
            <div className="flex items-center">
              <img src="/images/Kubernetes.jpg" alt="Kubernetes" className="h-6 w-6 mr-2" />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Tenancy</span>
            <span className="text-sm">{kubernetes.tenancy}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Date Created</span>
            <span className="text-sm">{kubernetes.dateCreated}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Status</span>
            <span className="text-sm font-medium text-green-600">{kubernetes.status}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}