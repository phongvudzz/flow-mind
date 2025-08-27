import { db } from "@/db/drizzle";
import { getCurrentUser } from "@/server/users";
import React from "react";
import Editor from "../../_components/editor";

async function EditorPage({ params }: { params: { workflowId: string } }) {
  const { currentUser } = await getCurrentUser();
  const { workflowId } = params;

  if (!currentUser) {
    return <div>Unauthorized</div>;
  }

  //   if (!workflow) {
  //     return <div>Workflow not found</div>;
  //   }

  return <Editor workflow={{} as any} />;
}

export default EditorPage;
