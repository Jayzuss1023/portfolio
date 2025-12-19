import type {
  ColorScheme,
  StartScreenPrompt,
  ThemeOption,
} from "@openai/chatkit-react";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? ";";
