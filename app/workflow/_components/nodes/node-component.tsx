import { memo } from "react";

import { NodeProps } from "@xyflow/react";

import { Badge } from "@/components/ui/badge";
import { AppNodeData } from "@/types/app-node";
import { TaskRegistry } from "@/lib/task/registry";
import NodeCard from "./node-card";
import NodeHeader from "./node-header";

const DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE;

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  const nodeType = nodeData.type;
  const task = TaskRegistry[nodeType];

  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
      {DEV_MODE && <Badge>DEV :{props.id}</Badge>}
      <NodeHeader taskType={nodeType} nodeId={props.id} />
      {/* <NodeInputs>
        {task.inputs.map((input) => (
          <NodeInput key={input.name} input={input} nodeId={props.id} />
        ))}
      </NodeInputs>
      <NodeOutputs>
        {task.outputs.map((output) => (
          <NodeOutput key={output.name} output={output} />
        ))}
      </NodeOutputs> */}
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
