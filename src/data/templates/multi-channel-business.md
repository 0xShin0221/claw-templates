# Multi-Channel Business

## Overview

Deploy sales and marketing agents across Discord and Telegram simultaneously. Both agents share CRM data and coordinate to provide a unified business presence across channels.

## Features

- **Multi-Channel** — Same agents operate on both Discord and Telegram
- **Sales Agent** — Lead qualification, demo scheduling, and follow-ups
- **Marketing Agent** — Content creation, community engagement, and campaign support
- **CRM Integration** — Notion-based CRM to track leads and conversations
- **Auto Routing** — Incoming messages are automatically routed to the right agent

## Prerequisites

1. A Discord server and a Telegram account
2. An Anthropic API key ([console.anthropic.com](https://console.anthropic.com))
3. (Optional) A Notion API key and database for CRM

## Setup

1. Create a Discord bot in the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a Telegram bot via [@BotFather](https://t.me/BotFather)
3. Replace all `YOUR_*` placeholder values in the config
4. (Optional) Create a Notion database for your CRM and add the credentials
5. Create an `./email_templates` directory with your email templates
6. Deploy with OpenClaw: `openclaw deploy`

## Customization Tips

- Add more channels (e.g., WhatsApp) by extending the `channels` array
- Adjust `temperature` — lower for sales (professional), higher for marketing (creative)
- Set `agent_routing` to `"manual"` if you want to control which agent handles what
- Add more agents (e.g., a support agent) by extending the `agents` array
