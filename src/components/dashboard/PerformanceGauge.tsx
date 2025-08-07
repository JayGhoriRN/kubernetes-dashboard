import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface PerformanceGaugeProps {
  title: string;
  value: string;
  maxValue: number;
}

export default function PerformanceGauge({
  title,
  value,
  maxValue,
}: PerformanceGaugeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw gauge background
    const centerX = canvas.width / 2;
    const centerY = canvas.height - 10;
    const radius = canvas.width / 2 - 10;

    // Draw gauge background arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#e5e7eb";
    ctx.stroke();

    // Draw gauge ticks
    for (let i = 0; i <= 30; i++) {
      const angle = Math.PI + (i / 30) * Math.PI;
      const x1 = centerX + (radius - 5) * Math.cos(angle);
      const y1 = centerY + (radius - 5) * Math.sin(angle);
      const x2 = centerX + (radius + 5) * Math.cos(angle);
      const y2 = centerY + (radius + 5) * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = i % 5 === 0 ? 2 : 1;
      ctx.strokeStyle = "#3b82f6";
      ctx.stroke();
    }

    // Draw needle
    const numericValue = parseInt(value) || 0;
    const valueRatio = numericValue / maxValue;
    const needleAngle = Math.PI + valueRatio * Math.PI;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + radius * 0.8 * Math.cos(needleAngle),
      centerY + radius * 0.8 * Math.sin(needleAngle)
    );
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#1f2937";
    ctx.stroke();

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#1f2937";
    ctx.fill();
  }, [value, maxValue]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center !px-4 !pt-3 !pb-0">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <div className="relative h-full">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            width="200"
            height="150"
          ></canvas>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-2xl font-semibold">
            {value}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
