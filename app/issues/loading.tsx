import IssueActions from "./IssueActions";
import { Table } from "@radix-ui/themes";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  const issues = [1, 2, 3, 4];
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
            <Table.Row key={issue}>
              <Table.Cell align="center">
                <Skeleton />
              </Table.Cell>
              <Table.Cell align="center" className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell align="center" className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default loading;
