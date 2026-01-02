import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentCases = [
  {
    id: 1,
    caseNumber: "CIV-2024-2341",
    title: "Contract Breach - ABC Corp vs. XYZ Ltd",
    status: "in-progress",
    judge: "Justice Sharma",
    nextHearing: "Jan 15, 2025",
  },
  {
    id: 2,
    caseNumber: "CRM-2024-1892",
    title: "Financial Fraud Investigation",
    status: "pending",
    judge: "Unassigned",
    nextHearing: "Pending",
  },
  {
    id: 3,
    caseNumber: "FAM-2024-2567",
    title: "Divorce Settlement - Kumar",
    status: "resolved",
    judge: "Justice Patel",
    nextHearing: "Closed",
  },
  {
    id: 4,
    caseNumber: "CIV-2024-2298",
    title: "Land Acquisition Dispute",
    status: "in-progress",
    judge: "Justice Reddy",
    nextHearing: "Jan 18, 2025",
  },
  {
    id: 5,
    caseNumber: "LAB-2024-0891",
    title: "Wrongful Termination Claim",
    status: "pending",
    judge: "Justice Singh",
    nextHearing: "Jan 20, 2025",
  },
];

const statusStyles = {
  "pending": "bg-warning/10 text-warning border-warning/20",
  "in-progress": "bg-primary/10 text-primary border-primary/20",
  "resolved": "bg-success/10 text-success border-success/20",
};

export function RecentCases() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Cases</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Case No.</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Title</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Judge</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Next Hearing</th>
              </tr>
            </thead>
            <tbody>
              {recentCases.map((caseItem) => (
                <tr 
                  key={caseItem.id} 
                  className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-4">
                    <span className="font-mono text-sm text-primary font-medium">
                      {caseItem.caseNumber}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-foreground max-w-[200px] truncate block">
                      {caseItem.title}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge 
                      variant="outline" 
                      className={statusStyles[caseItem.status as keyof typeof statusStyles]}
                    >
                      {caseItem.status.replace("-", " ")}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {caseItem.judge}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {caseItem.nextHearing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
