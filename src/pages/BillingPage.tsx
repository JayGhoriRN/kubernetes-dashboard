import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function BillingPage() {
  const [startDate, setStartDate] = useState("Jun 1, 2025");
  const [endDate, setEndDate] = useState("Jun 17, 2025");

  const billingData = [
    {
      id: "clie-alive-unicorn",
      items: [
        { name: "Partitions (0.005 USD per partition)", unitCharge: 0.005, usage: 0, amount: "$0" },
        { name: "Storage (0.05 USD per GB)", unitCharge: 0.05, usage: 0, amount: "$0" },
        { name: "Ingress (0.015 USD per GB)", unitCharge: 0.015, usage: 0, amount: "$0" },
        { name: "Egress (0.035 USD per GB)", unitCharge: 0.035, usage: 0, amount: "$0" },
        { name: "ClusterHours (0.015 USD per hour)", unitCharge: 0.015, usage: 92, amount: "$1.38" },
      ],
      totalAmount: "$1.38",
    },
    {
      id: "clic-foolish-tapir",
      items: [
        { name: "ClusterHours (0.015 USD per hour)", unitCharge: 0.015, usage: 335, amount: "$5.02" },
      ],
      totalAmount: "$5.02",
    },
    {
      id: "strimzi-delighted-jellyfish",
      items: [
        { name: "ClusterHours (0.015 USD per hour)", unitCharge: 0.015, usage: 244, amount: "$3.66" },
      ],
      totalAmount: "$3.66",
    },
  ];

  const totalBilling = billingData.reduce(
    (sum, service) => sum + parseFloat(service.totalAmount.replace("$", "")),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="pl-14">
        <Header 
          title="Billing"
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Billing", path: "/billing" },
          ]} 
        />
        <main className="p-4">
          <div className="mb-6">
            <h1 className="text-2xl font-medium text-gray-800">Analysis</h1>
            
            <Tabs defaultValue="analysis" className="mt-4">
              <TabsList>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Acme Fleet</h2>
            
            <div className="bg-white p-4 rounded-md border border-gray-200 mb-4">
              <h3 className="text-sm font-medium mb-3">Filter by Date</h3>
              <div className="flex gap-4 items-center">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Start</label>
                  <Input 
                    type="text" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-40 h-8"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">End</label>
                  <Input 
                    type="text" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-40 h-8"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Estimated Charges (USD) excluding taxes</h3>
                <div className="text-2xl font-semibold">${totalBilling.toFixed(2)}</div>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Services</TableHead>
                    <TableHead className="w-1/4">Unit Charges in $</TableHead>
                    <TableHead className="w-1/4">Usage</TableHead>
                    <TableHead className="w-1/4 text-right">Amount ($)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {billingData.map((service, index) => (
                    <React.Fragment key={service.id}>
                      <TableRow className="bg-gray-50 hover:bg-gray-100">
                        <TableCell colSpan={3} className="font-medium flex items-center">
                          <button className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m18 15-6-6-6 6"/>
                            </svg>
                          </button>
                          {service.id}
                          {index === 0 && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          )}
                        </TableCell>
                        <TableCell className="text-right">{service.totalAmount}</TableCell>
                      </TableRow>
                      {service.items.map((item, itemIndex) => (
                        <TableRow key={`${service.id}-${itemIndex}`} className="bg-white">
                          <TableCell className="pl-10">{item.name}</TableCell>
                          <TableCell>{item.unitCharge.toFixed(3)}</TableCell>
                          <TableCell>{item.usage}</TableCell>
                          <TableCell className="text-right">{item.amount}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}