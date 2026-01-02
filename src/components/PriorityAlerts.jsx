import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    caseNumber: "CIV-2024-1847",
    title: "Property Dispute - Sharma vs. State",
    priority: "critical",
    daysOverdue: 15,
    court: "District Court",
  },
  {
    id: 2,
    caseNumber: "CRM-2024-0923",
    title: "Fraud Case - Investigation Pending",
    priority: "high",
    daysOverdue: 8,
    court: "Sessions Court",
  },
  {
    id: 3,
    caseNumber: "FAM-2024-2156",
    title: "Custody Hearing - Urgent Review",
    priority: "high",
    daysOverdue: 5,
    court: "Family Court",
  },
  {
    id: 4,
    caseNumber: "LAB-2024-0678",
    title: "Labor Dispute - Final Hearing Due",
    priority: "medium",
    daysOverdue: 3,
    court: "Labor Court",
  },
];

const priorityColors = {
  critical: "bg-destructive text-destructive-foreground",
  high: "bg-warning text-warning-foreground",
  medium: "bg-info text-info-foreground",
};

export function PriorityAlerts() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <CardTitle className="text-lg font-semibold">Priority Alerts</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-primary font-medium">
                    {alert.caseNumber}
                  </span>
                  <Badge 
                    className={priorityColors[alert.priority as keyof typeof priorityColors]}
                    variant="secondary"
                  >
                    {alert.priority}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-foreground truncate">
                  {alert.title}
                </p>
                <p className="text-xs text-muted-foreground">{alert.court}</p>
              </div>
              <div className="flex items-center gap-1 text-destructive shrink-0">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{alert.daysOverdue}d</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
