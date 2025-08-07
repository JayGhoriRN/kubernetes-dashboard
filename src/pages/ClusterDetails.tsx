import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ClusterInfo from "@/components/dashboard/ClusterInfo";
import KubernetesInfo from "@/components/dashboard/KubernetesInfo";
import PerformanceGauge from "@/components/dashboard/PerformanceGauge";
import DashboardLinks from "@/components/dashboard/DashboardLinks";
import Actions from "@/components/dashboard/Actions";
import EndpointsTable from "@/components/dashboard/EndpointsTable";
import BillingChart from "@/components/dashboard/BillingChart";

export default function ClusterDetails() {
  const { id } = useParams<{ id: string }>();

  const clusterData = {
    id: "9a02fc10-21f02-45b9-a0f1-2ff9bbde8d61",
    sku: "STRIMZI/Shared",
    organization: "acme",
    dateCreated: "Jan 17, 2025, 11:53 AM",
    dateModified: "Jan 17, 2025, 12:05 PM",
    infrastructure: "different-aardwolf",
    version: "3.8.0",
    status: "Healthy",
  };

  const kubernetesData = {
    identifier: "different-aardwolf",
    fleetProvider: "kubernetes",
    tenancy: "Shared",
    dateCreated: "Jan 17, 2025, 10:13 AM",
    status: "Healthy",
  };

  const dashboardLinks = [
    {
      title: "Cluster Health",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "Kraft Metrics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      title: "Strimzi Kafka Logs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
  ];

  const endpoints: Array<{type: string; address: string; dnsRecord: string;}> = [];

  const billingData = [
    { month: "Jan", amount: 0.3 },
    { month: "Feb", amount: 0.4 },
    { month: "Mar", amount: 0.5 },
    { month: "Apr", amount: 0.4 },
    { month: "May", amount: 0.5 },
    { month: "Jun", amount: 0.6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="pl-14">
        <Header 
          title="Intellectual-Mongoose" 
          breadcrumbs={[
            { label: "Clusters", path: "/clusters" },
            { label: "Intellectual-Mongoose", path: `/clusters/${id}` },
          ]} 
        />
        <main className="p-4">
          <div className="mb-6">
            <h1 className="text-2xl font-medium text-gray-800">Intellectual-Mongoose</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <ClusterInfo cluster={clusterData} />
            <div className="col-span-2">
              <div>
                <h2 className="text-md font-medium mb-3 flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                  Performance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PerformanceGauge title="Production" value="0 B/s" maxValue={100} />
                  <PerformanceGauge title="Consumption" value="0 B/s" maxValue={100} />
                  <PerformanceGauge title="Partitions" value="50" maxValue={100} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <KubernetesInfo kubernetes={kubernetesData} />
            <DashboardLinks links={dashboardLinks} />
            <Actions />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <BillingChart data={billingData} />
            <EndpointsTable endpoints={endpoints} />
          </div>
        </main>
      </div>
    </div>
  );
}