import { TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { LaunchBrowserTask } from "./launch-browser-task";
import { PageToHtmlTask } from "./page-to-html-task";
import { ExtractTextFromElementTask } from "./extract-text-from-element-task";
import { FillInputTask } from "./fill-input-task";
import { ClickElementTask } from "./click-element-task";
import { WaitForElementTask } from "./wait-for-element-task";
import { DeliverViaWebhookTask } from "./deliver-via-webhook-task";
import { ReadPropertyFromJsonTask } from "./read-property-from-json-task";
import { AddPropertyToJsonTask } from "./add-property-to-json-task";
import { NavigateUrlTask } from "./navigate-url-task";
import { ScrollToElementTask } from "./scroll-to-element-task";
import { ExtractDataWithAITask } from "./extract-data-with-AI-task";

type TaskRegistry = { [K in TaskType]: WorkflowTask & { type: K } };

export const TaskRegistry: TaskRegistry = {
  [TaskType.LAUNCH_BROWSER]: LaunchBrowserTask,
  [TaskType.PAGE_TO_HTML]: PageToHtmlTask,
  [TaskType.EXTRACT_TEXT_FROM_ELEMENT]: ExtractTextFromElementTask,
  [TaskType.FILL_INPUT]: FillInputTask,
  [TaskType.CLICK_ELEMENT]: ClickElementTask,
  [TaskType.WAIT_FOR_ELEMENT]: WaitForElementTask,
  [TaskType.DELIVER_VIA_WEBHOOK]: DeliverViaWebhookTask,
  [TaskType.EXTRACT_DATA_WITH_AI]: ExtractDataWithAITask,
  [TaskType.READ_PROPERTY_FROM_JSON]: ReadPropertyFromJsonTask,
  [TaskType.ADD_PROPERTY_TO_JSON]: AddPropertyToJsonTask,
  [TaskType.NAVIGATE_URL]: NavigateUrlTask,
  [TaskType.SCROLL_TO_ELEMENT]: ScrollToElementTask,
};
