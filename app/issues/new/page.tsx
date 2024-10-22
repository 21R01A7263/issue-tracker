"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const NewIssue = () => {
  return (
    <div className="max-w-lg space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <SimpleMDE placeholder="MarkDown Description"></SimpleMDE>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
