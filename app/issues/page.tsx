import React from "react";
import { Table } from "@radix-ui/themes";
import Link from "../components/Link";
import prisma from "@/prisma/client";
import StatusBadge from "../components/StatusBadge";
import IssueActions from "./IssueActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  // await delay(2000);
  return (
    <div>
      <IssueActions />

      <Table.Root variant="surface" className="max-w-2xl">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell justify={"center"}>
              Issue
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell
              justify={"center"}
              className="hidden md:table-cell"
            >
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell
              justify={"center"}
              className="hidden md:table-cell"
            >
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell align="center">
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </Table.Cell>
              <Table.Cell align="center" className="hidden md:table-cell">
                <StatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell align="center" className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
