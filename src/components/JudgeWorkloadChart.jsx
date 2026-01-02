import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Justice Sharma", active: 28, completed: 45 },
  { name: "Justice Patel", active: 22, completed: 52 },
  { name: "Justice Kumar", active: 35, completed: 38 },
  { name: "Justice Reddy", active: 18, completed: 61 },
  { name: "Justice Singh", active: 31, completed: 42 },
  { name: "Justice Gupta", active: 25, completed: 48 },
];

export function JudgeWorkloadChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Judge Workload Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
              <XAxis 
                type="number" 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
                width={100}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="active" fill="hsl(221, 83%, 53%)" radius={[0, 4, 4, 0]} name="Active Cases" />
              <Bar dataKey="completed" fill="hsl(142, 76%, 36%)" radius={[0, 4, 4, 0]} name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-primary" />
            <span className="text-muted-foreground">Active Cases</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-success" />
            <span className="text-muted-foreground">Completed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
