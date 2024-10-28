import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const StatusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  OPEN: { label: "Open", color: "red" },
  CLOSED: { label: "Closed", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
};

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={StatusMap[status].color}>{StatusMap[status].label}</Badge>
  );
};

export default StatusBadge;
