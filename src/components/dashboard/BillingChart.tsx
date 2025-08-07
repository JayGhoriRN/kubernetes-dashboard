import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface BillingChartProps {
  data: {
    month: string;
    amount: number;
  }[];
}

export default function BillingChart({ data }: BillingChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxAmount = Math.max(...data.map(item => item.amount));
    const paddingBottom = 25; // Space for labels
    const paddingLeft = 30; // Space for y-axis labels
    const barWidth = 40;
    const barSpacing = 20;
    const chartHeight = canvas.height - paddingBottom;
    const chartWidth = canvas.width - paddingLeft;
    
    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(paddingLeft, 0);
    ctx.lineTo(paddingLeft, chartHeight);
    ctx.strokeStyle = '#e5e7eb';
    ctx.stroke();
    
    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(paddingLeft, chartHeight);
    ctx.lineTo(canvas.width, chartHeight);
    ctx.strokeStyle = '#e5e7eb';
    ctx.stroke();
    
    // Draw y-axis labels and horizontal grid lines
    const ySteps = 4;
    for (let i = 0; i <= ySteps; i++) {
      const y = chartHeight - (i * (chartHeight / ySteps));
      const value = (i * maxAmount / ySteps).toFixed(1);
      
      // Grid line
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(canvas.width, y);
      ctx.strokeStyle = '#f3f4f6';
      ctx.stroke();
      
      // Y-axis label
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(value, paddingLeft - 5, y + 3);
    }
    
    // Draw bars
    data.forEach((item, index) => {
      const x = paddingLeft + (index * (barWidth + barSpacing)) + barSpacing;
      const barHeight = (item.amount / maxAmount) * chartHeight;
      const y = chartHeight - barHeight;
      
      // Bar
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // X-axis label
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(item.month, x + barWidth / 2, chartHeight + 15);
    });

  }, [data]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
            <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
            <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
            <path d="M2 7a5 5 0 0 1 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
            <path d="M12 7a5 5 0 0 1 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
          </svg>
          Billing
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
        <div className="flex items-center justify-center mb-2">
          <div className="h-4 w-4 bg-sky-400 rounded-sm mr-2"></div>
          <span className="text-xs text-gray-500">June 2025 Billing (USD)</span>
        </div>
        <div className="h-40">
          <canvas ref={canvasRef} width="300" height="160"></canvas>
        </div>
      </CardContent>
    </Card>
  );
}