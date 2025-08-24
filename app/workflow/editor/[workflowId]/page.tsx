import { db } from "@/db/drizzle";
import { getCurrentUser } from "@/server/users";
import React from "react";

async function EditorPage({ params }: { params: { workflowId: string } }) {
  const { currentUser } = await getCurrentUser();
  const { workflowId } = params;

  if (!currentUser) {
    return <div>Unauthorized</div>;
  }

  //   if (!workflow) {
  //     return <div>Workflow not found</div>;
  //   }

  return <div>Editor</div>;
}

export default EditorPage;
