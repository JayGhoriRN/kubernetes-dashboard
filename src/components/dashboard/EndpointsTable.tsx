import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface Endpoint {
  type: string;
  address: string;
  dnsRecord: string;
}

interface EndpointsTableProps {
  endpoints?: Endpoint[];
}

export default function EndpointsTable({
  endpoints: propEndpoints,
}: EndpointsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Default endpoints data matching the screenshot
  const defaultEndpoints: Endpoint[] = [
    {
      type: "prometheus",
      address:
        "prometheus-competitive-opossum.sahhub.fleet-manager.platformatory.io",
      dnsRecord:
        "a64a4668a8f9b8d19354b8c80b05a47-1888045592.us-east-1.elb.amazonaws.com",
    },
    {
      type: "loki",
      address: "loki-competitive-opossum.sahhub.fleet-manager.platformatory.io",
      dnsRecord:
        "a64a4668a8f9b8d19354b8c80b05a47-1888045592.us-east-1.elb.amazonaws.com",
    },
    {
      type: "bootstrap_server",
      address:
        "brief-galliform-bootstrap.sahhub.fleet-manager.platformatory.io:443",
      dnsRecord:
        "a8fd6da6c6c9354ae0a0c9dfaf1f47-1147938221.us-east-1.elb.amazonaws.com",
    },
    {
      type: "bootstrap_server_0",
      address: "brief-galliform-b0.sahhub.fleet-manager.platformatory.io:443",
      dnsRecord:
        "a8fd6da6c6c9354ae0a0c9dfaf1f47-1147938221.us-east-1.elb.amazonaws.com",
    },
    {
      type: "bootstrap_server_1",
      address: "brief-galliform-b1.sahhub.fleet-manager.platformatory.io:443",
      dnsRecord:
        "a8fd6da6c6c9354ae0a0c9dfaf1f47-1147938221.us-east-1.elb.amazonaws.com",
    },
    {
      type: "bootstrap_server_2",
      address: "brief-galliform-b2.sahhub.fleet-manager.platformatory.io:443",
      dnsRecord:
        "a8fd6da6c6c9354ae0a0c9dfaf1f47-1147938221.us-east-1.elb.amazonaws.com",
    },
    {
      type: "internal_bootstrap_server",
      address: "kafka-m-kafka-bootstrap.brief-galliform.svc.cluster.local:9092",
      dnsRecord: "",
    },
  ];

  const endpoints = propEndpoints || defaultEndpoints;

  // Filter endpoints based on search term
  const filteredEndpoints = endpoints.filter(
    (endpoint) =>
      endpoint.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      endpoint.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      endpoint.dnsRecord.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium flex items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-blue-500"
          >
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" x2="7" y1="2" y2="22"></line>
            <line x1="17" x2="17" y1="2" y2="22"></line>
            <line x1="2" x2="22" y1="12" y2="12"></line>
            <line x1="2" x2="7" y1="7" y2="7"></line>
            <line x1="2" x2="7" y1="17" y2="17"></line>
            <line x1="17" x2="22" y1="17" y2="17"></line>
            <line x1="17" x2="22" y1="7" y2="7"></line>
          </svg>
          Endpoints
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-end mb-3">
          <div className="relative">
            <Input
              placeholder="Search address"
              className="pl-8 h-8 text-xs w-48"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>

        {/* Scrollable table container */}
        <div className="rounded-md border">
          <div className="max-h-72 overflow-y-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-gray-50 z-10">
                <TableRow>
                  <TableHead className="w-[140px] text-xs font-medium text-gray-600 h-10 bg-gray-50">
                    Type
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 h-10 bg-gray-50">
                    Address
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 h-10 bg-gray-50">
                    DNS Record
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEndpoints.length > 0 ? (
                  filteredEndpoints.map((endpoint, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-gray-50 border-b border-gray-100"
                    >
                      <TableCell className="text-xs text-gray-800 py-3 px-4 font-medium">
                        {endpoint.type}
                      </TableCell>
                      <TableCell className="text-xs text-gray-700 py-3 px-4 max-w-sm break-all">
                        {endpoint.address}
                      </TableCell>
                      <TableCell className="text-xs text-gray-700 py-3 px-4 max-w-sm break-all">
                        {endpoint.dnsRecord || ""}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="h-16 text-center text-xs text-gray-500"
                    >
                      No endpoints found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Scroll indicator */}
          <div className="border-t bg-gray-50 px-4 py-2 flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-gray-400 h-1.5 rounded-full transition-all"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom button */}
        <div className="flex justify-end mt-4">
          <Button
            size="sm"
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-6 py-2 rounded"
          >
            Rest
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
