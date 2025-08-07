import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function BillingPage() {
  const [startDate, setStartDate] = useState("Jun 1, 2025");
  const [endDate, setEndDate] = useState("Jun 17, 2025");
  const [expandedServices, setExpandedServices] = useState<string[]>([
    "clie-alive-unicorn",
  ]);

  const toggleService = (serviceId: string) => {
    setExpandedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const billingData = [
    {
      id: "clie-alive-unicorn",
      items: [
        {
          name: "Partitions (0.005 USD per partition)",
          unitCharge: 0.005,
          usage: 0,
          amount: "$0",
        },
        {
          name: "Storage (0.05 USD per GB)",
          unitCharge: 0.05,
          usage: 0,
          amount: "$0",
        },
        {
          name: "Ingress (0.015 USD per GB)",
          unitCharge: 0.015,
          usage: 0,
          amount: "$0",
        },
        {
          name: "Egress (0.035 USD per GB)",
          unitCharge: 0.035,
          usage: 0,
          amount: "$0",
        },
        {
          name: "ClusterHours (0.015 USD per hour)",
          unitCharge: 0.015,
          usage: 92,
          amount: "$1.38",
        },
      ],
      totalAmount: "$1.38",
    },
    {
      id: "clic-foolish-tapir",
      items: [
        {
          name: "ClusterHours (0.015 USD per hour)",
          unitCharge: 0.015,
          usage: 335,
          amount: "$5.02",
        },
      ],
      totalAmount: "$5.02",
    },
    {
      id: "strimzi-delighted-jellyfish",
      items: [
        {
          name: "ClusterHours (0.015 USD per hour)",
          unitCharge: 0.015,
          usage: 244,
          amount: "$3.66",
        },
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
      <div className="pl-16">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Home</span>
              <span>›</span>
              <span>Billing</span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded px-3 py-1">
                <option>Organization</option>
                <option>Acme Fleet</option>
              </select>
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <main className="p-6">
          {/* Analysis Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-normal text-gray-900 mb-4">
              Analysis
            </h1>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button className="border-b-2 border-blue-500 py-2 px-1 text-sm font-medium text-blue-600">
                  Analysis
                </button>
                <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Invoices
                </button>
              </nav>
            </div>
          </div>

          {/* Acme Fleet Section */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Acme Fleet
            </h2>

            {/* Filter Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Filter by Date
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Start
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-32 h-8 text-xs pr-8"
                      />
                      <svg
                        className="absolute right-2 top-2 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      End
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-32 h-8 text-xs pr-8"
                      />
                      <svg
                        className="absolute right-2 top-2 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-900 font-medium">
                    Estimated Charges (USD) excluding taxes
                  </div>
                  <div className="text-2xl font-semibold text-gray-900">
                    ${totalBilling.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-xs font-medium text-gray-700 px-4 py-3">
                      Services
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-700 px-4 py-3">
                      Unit Charges in $
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-700 px-4 py-3">
                      Usage
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-700 px-4 py-3 text-right">
                      Amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {billingData.map((service) => (
                    <React.Fragment key={service.id}>
                      <TableRow className="bg-gray-50 hover:bg-gray-100 cursor-pointer border-t border-gray-200">
                        <TableCell
                          colSpan={3}
                          className="px-4 py-3 text-sm font-medium text-gray-900"
                          onClick={() => toggleService(service.id)}
                        >
                          <div className="flex items-center">
                            <button className="mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 text-gray-500 ${
                                  expandedServices.includes(service.id)
                                    ? "rotate-0"
                                    : "-rotate-90"
                                }`}
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                            <span>{service.id}</span>
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
                              className="ml-2 text-black"
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </div>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          {service.totalAmount}
                        </TableCell>
                      </TableRow>
                      {expandedServices.includes(service.id) &&
                        service.items.map((item, itemIndex) => (
                          <TableRow
                            key={`${service.id}-${itemIndex}`}
                            className="bg-white border-t border-gray-100"
                          >
                            <TableCell className="px-4 py-2 pl-12 text-xs text-gray-700">
                              {item.name}
                            </TableCell>
                            <TableCell className="px-4 py-2 text-xs text-gray-700">
                              {item.unitCharge.toFixed(3)}
                            </TableCell>
                            <TableCell className="px-4 py-2 text-xs text-gray-700">
                              {item.usage}
                            </TableCell>
                            <TableCell className="px-4 py-2 text-xs text-gray-700 text-right">
                              {item.amount}
                            </TableCell>
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
