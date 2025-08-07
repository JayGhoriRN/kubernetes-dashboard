import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Index() {
  const clusters = [
    {
      id: "intellectual-mongoose",
      name: "Intellectual Mongoose",
      status: "Healthy",
      version: "3.8.0",
      lastUpdated: "2025-06-17",
    },
    {
      id: "playful-gazelle",
      name: "Playful Gazelle",
      status: "Healthy",
      version: "3.8.0",
      lastUpdated: "2025-06-15",
    },
    {
      id: "cosmic-turtle",
      name: "Cosmic Turtle",
      status: "Warning",
      version: "3.7.2",
      lastUpdated: "2025-06-10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="pl-14">
        <Header title="Dashboard" />
        <main className="p-4">
          <div className="mb-6">
            <h1 className="text-2xl font-medium text-gray-800">Welcome to Kafka Fleet Manager</h1>
            <p className="text-gray-600 mt-2">
              Manage and monitor your Kafka clusters effectively
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Your Clusters</h2>
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Create Cluster
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clusters.map((cluster) => (
                <Link to={`/clusters/${cluster.id}`} key={cluster.id}>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{cluster.name}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          cluster.status === "Healthy"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {cluster.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Version: {cluster.version}</p>
                      <p>Last Updated: {cluster.lastUpdated}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Quick Actions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-blue-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Dashboard</h3>
                    <p className="text-sm text-gray-500">View system overview</p>
                  </div>
                </div>
              </Card>

              <Link to="/billing">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-green-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
                        <path d="M12 18v2"></path>
                        <path d="M12 4v2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Billing</h3>
                      <p className="text-sm text-gray-500">Manage your billing</p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-purple-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Settings</h3>
                    <p className="text-sm text-gray-500">Configure your account</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}