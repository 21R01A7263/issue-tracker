import prisma from "@/prisma/client";
import { Box, Button, Card, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { StatusBadge } from "@/app/components";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "../../components/Link";
import EditIssue from "./EditIssue";

interface Props {
  params: { id: string };
}

const IssueDetails = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) {
    notFound();
  }
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <div className="flex space-x-3 items-center">
          <StatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </div>
        <Card className="max-w-xl prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <EditIssue issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetails;
