export interface Template {
  slug: string;
  name: string;
  description: string;
  channels: string[];
  model: string;
  useCases: string[];
  tags: string[];
}

export const templates: Template[] = [
  {
    slug: "minimal-telegram",
    name: "Minimal Telegram Bot",
    description:
      "Simplest possible setup: single agent on Telegram powered by Claude Sonnet. Get started in under 5 minutes.",
    channels: ["Telegram"],
    model: "Claude Sonnet",
    useCases: ["chatbot", "assistant"],
    tags: ["beginner", "minimal", "telegram"],
  },
  {
    slug: "discord-dev-team",
    name: "Discord Dev Team",
    description:
      "Multi-agent dev team on Discord: a main orchestrator agent plus a dedicated coding agent for pair programming.",
    channels: ["Discord"],
    model: "Claude Sonnet",
    useCases: ["development", "coding", "team"],
    tags: ["multi-agent", "discord", "developer"],
  },
  {
    slug: "whatsapp-personal-assistant",
    name: "WhatsApp Personal Assistant",
    description:
      "Personal assistant on WhatsApp with reminders, web search, and calendar integration for everyday productivity.",
    channels: ["WhatsApp"],
    model: "Claude Sonnet",
    useCases: ["assistant", "productivity", "reminders"],
    tags: ["whatsapp", "personal", "productivity"],
  },
  {
    slug: "multi-channel-business",
    name: "Multi-Channel Business",
    description:
      "Sales and marketing agents deployed across Discord and Telegram for coordinated business operations.",
    channels: ["Discord", "Telegram"],
    model: "Claude Sonnet",
    useCases: ["sales", "marketing", "business"],
    tags: ["multi-channel", "business", "sales"],
  },
  {
    slug: "home-automation",
    name: "Home Automation Controller",
    description:
      "Smart home controller on WhatsApp and Telegram with device skills for lights, thermostat, and security.",
    channels: ["WhatsApp", "Telegram"],
    model: "Claude Haiku",
    useCases: ["smart-home", "iot", "automation"],
    tags: ["home", "iot", "automation"],
  },
  {
    slug: "privacy-first-local",
    name: "Privacy-First Local Setup",
    description:
      "Ollama-based local model with no cloud APIs. Maximum privacy for sensitive conversations and data.",
    channels: ["Telegram"],
    model: "Ollama (Local)",
    useCases: ["privacy", "local", "self-hosted"],
    tags: ["privacy", "local", "ollama"],
  },
];
