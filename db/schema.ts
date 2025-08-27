import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  activeOrganizationId: text("active_organization_id"),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const organization = pgTable("organization", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique(),
  logo: text("logo"),
  createdAt: timestamp("created_at").notNull(),
  metadata: text("metadata"),
});

export const organizationRelations = relations(organization, ({ many }) => ({
  members: many(member),
}));

export const role = pgEnum("role", ["member", "admin", "owner"]);

export const member = pgTable("member", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  role: text("role").default("member").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const memberRelations = relations(member, ({ one }) => ({
  organization: one(organization, {
    fields: [member.organizationId],
    references: [organization.id],
  }),
  user: one(user, {
    fields: [member.userId],
    references: [user.id],
  }),
}));

export const invitation = pgTable("invitation", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  role: text("role"),
  status: text("status").default("pending").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  inviterId: text("inviter_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const workflow = pgTable(
  "workflow",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    description: text("description"),

    definition: text("definition").default("{}"),
    executionPlan: text("executionPlan"),
    creditsCost: integer("credits_cost").default(0),

    cron: text("cron"),
    status: text("status").default("DRAFT").notNull(),

    lastRunAt: timestamp("last_run_at"),
    lastRunId: text("last_run_id"),
    lastRunStatus: text("last_run_status"),
    nextRunAt: timestamp("next_run_at"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [uniqueIndex("workflow_name_idx").on(table.userId, table.name)]
);

export type Workflow = typeof workflow.$inferSelect & {
  user: typeof user.$inferSelect;
};

export const workflowRelations = relations(workflow, ({ one, many }) => ({
  user: one(member, {
    fields: [workflow.userId],
    references: [member.id],
  }),
  executions: many(workflowExecution),
}));

export const workflowExecution = pgTable("workflow_execution", {
  id: text("id").primaryKey(),
  workflowId: text("workflow_id")
    .notNull()
    .references(() => workflow.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  trigger: text("trigger").notNull(),
  status: text("status"),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),
  definition: text("definition").default("{}"),

  creditsConsumed: integer("credits_consumed").default(0),
});

export const workflowExecutionRelations = relations(
  workflowExecution,
  ({ one, many }) => ({
    workflow: one(workflow, {
      fields: [workflowExecution.workflowId],
      references: [workflow.id],
    }),
    phases: many(executionPhase),
  })
);

export const executionPhase = pgTable("workflow_execution_phase", {
  id: text("id").primaryKey(),

  node: text("node"),
  name: text("name"),
  status: text("status"),
  number: integer("number"),

  inputs: text("inputs"),
  outputs: text("outputs"),
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),

  creditsConsumed: integer("credits_consumed").default(0),
  workflowExecutionId: text("workflow_execution_id")
    .notNull()
    .references(() => workflowExecution.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const executionPhaseRelations = relations(
  executionPhase,
  ({ one, many }) => ({
    execution: one(workflowExecution, {
      fields: [executionPhase.workflowExecutionId],
      references: [workflowExecution.id],
    }),
    logs: many(executionLog),
  })
);

export const executionLog = pgTable("execution_log", {
  id: text("id").primaryKey(),
  logLevel: text("log_level"),
  message: text("message"),
  timestamp: timestamp("timestamp").defaultNow(),

  executionPhaseId: text("execution_phase_id")
    .notNull()
    .references(() => executionPhase.id, { onDelete: "cascade" }),
});

export const executionLogRelations = relations(executionLog, ({ one }) => ({
  executionPhase: one(executionPhase, {
    fields: [executionLog.executionPhaseId],
    references: [executionPhase.id],
  }),
}));

export const schema = {
  user,
  session,
  account,
  verification,
  organization,
  member,
  invitation,
  organizationRelations,
  memberRelations,
  role,
  workflow,
  workflowRelations,
  executionLog,
  executionLogRelations,
  executionPhase,
  executionPhaseRelations,
};
