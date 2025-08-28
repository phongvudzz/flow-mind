"use client";
import React from "react";
import { Workflow } from "@/types";
import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Edge,
  FitViewOptions,
} from "@xyflow/react";
import { AppNode } from "@/types/app-node";
import { NodeType } from "@/types/node";
import NodeComponent from "./_components/nodes/node-component";
import { TaskType } from "@/types/task";

type FlowEditorProps = {
  workflow: Workflow;
};

const initialNodes: AppNode[] = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: {
      type: TaskType.LAUNCH_BROWSER,
      inputs: {},
      outputs: {},
    },
    type: "input",
  },
  {
    id: "n2",
    position: { x: 100, y: 100 },
    data: {
      type: TaskType.LAUNCH_BROWSER,
      inputs: {},
      outputs: {},
    },
    type: "output",
  },
];

const initialEdges: Edge[] = [];

const snapGrid: [number, number] = [50, 50];

const fitViewOptions: FitViewOptions = {
  padding: 1,
};

const nodeTypes = {
  [NodeType.NODE]: NodeComponent,
};

const FlowEditor = ({ workflow }: FlowEditorProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        fitView
        snapToGrid
        snapGrid={snapGrid}
        fitViewOptions={fitViewOptions}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls position="top-left" />
        <MiniMap />
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
