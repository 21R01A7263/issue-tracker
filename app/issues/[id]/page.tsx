import prisma from "@/prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import StatusBadge from "../../components/StatusBadge";
import delay from "delay";
interface Props {
  params: { id: string };
}

const IssueDetails = async ({ params }: Props) => {
  // if (typeof params.id !== "number") {
  //   notFound();
  // }
  await delay(2000);

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <Heading>{issue.title}</Heading>
      <div className="flex space-x-3 items-center">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="max-w-xl prose">
        <ReactMarkdown>{issue.status}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
