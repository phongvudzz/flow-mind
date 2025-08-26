import z from "zod";

export const socialProviders = z.enum([
  "google",
  "github",
  "facebook",
  "apple",
  "microsoft",
  "linkedin",
  "slack",
  "discord",
  "twitter",
  "twitch",
  "youtube",
  "instagram",
  "whatsapp",
  "telegram",
  "vimeo",
  "tiktok",
]);

export type SocialProvider = z.infer<typeof socialProviders>;
