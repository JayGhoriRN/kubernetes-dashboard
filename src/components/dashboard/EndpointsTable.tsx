import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Endpoint {
  type: string;
  address: string;
  dnsRecord: string;
}

interface EndpointsTableProps {
  endpoints: Endpoint[];
}

export default function EndpointsTable({ endpoints }: EndpointsTableProps) {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
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
      <CardContent>
        <div className="flex justify-end mb-4">
          <div className="relative">
            <Input placeholder="Search address" className="pl-8" />
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
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>DNS Record</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {endpoints.length > 0 ? (
                endpoints.map((endpoint, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{endpoint.type}</TableCell>
                    <TableCell>{endpoint.address}</TableCell>
                    <TableCell>{endpoint.dnsRecord}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    No endpoints available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}