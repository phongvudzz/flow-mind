import {
  account,
  executionLog,
  executionPhase,
  invitation,
  member,
  organization,
  role,
  session,
  user,
  verification,
  workflow,
  workflowExecution,
} from "@/db/schema";

export type User = typeof user.$inferSelect;
export type Session = typeof session.$inferSelect;
export type Account = typeof account.$inferSelect;
export type Verification = typeof verification.$inferSelect;
export type Organization = typeof organization.$inferSelect;
export type Role = (typeof role.enumValues)[number];
export type Member = typeof member.$inferSelect & User;
export type Invitation = typeof invitation.$inferSelect;
export type Workflow = typeof workflow.$inferSelect & User;
export type WorkflowExecution = typeof workflowExecution.$inferSelect;
export type ExecutionPhase = typeof executionPhase.$inferSelect;
export type ExecutionLog = typeof executionLog.$inferSelect;
