"use client";
import React from "react";
import { Workflow } from "@/types";
import { ReactFlowProvider } from "@xyflow/react";
import TaskMenu from "./task-menu";
import FlowEditor from "../flow-editor";

type EditorProps = {
  workflow: Workflow;
};

const Editor = ({ workflow }: EditorProps) => {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div>Toolbar</div>
        <section className="flex h-full overflow-auto">
          <TaskMenu />
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
