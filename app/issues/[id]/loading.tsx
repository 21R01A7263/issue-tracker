import { Box, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetails = () => {
  return (
    <Box className="space-y-4">
      <Skeleton width="10rem" />
      <div className="flex space-x-3 items-center">
        <Skeleton width="4rem" />
        <Skeleton width="5rem" />
      </div>
      <Card className="max-w-xl prose">
        <Skeleton width="15rem" />
      </Card>
    </Box>
  );
};

export default IssueDetails;
