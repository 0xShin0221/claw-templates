# WhatsApp Personal Assistant

## Overview

A full-featured personal assistant on WhatsApp. Set reminders, search the web, manage your calendar, and take notes — all from the app you already use every day.

## Features

- **Reminders** — Set, list, and manage up to 100 reminders with timezone support
- **Web Search** — Real-time web search powered by Tavily for quick answers
- **Calendar** — Google Calendar integration to check, create, and manage events
- **Note Taking** — Quick notes stored locally for shopping lists, ideas, etc.
- **Auto Language** — Responds in whatever language you write in

## Prerequisites

1. A WhatsApp Business account with API access ([Meta for Developers](https://developers.facebook.com))
2. An Anthropic API key ([console.anthropic.com](https://console.anthropic.com))
3. (Optional) A Tavily API key for web search ([tavily.com](https://tavily.com))
4. (Optional) Google Cloud credentials for calendar integration

## Setup

1. Set up a WhatsApp Business API app in Meta for Developers
2. Configure the webhook URL to point to your OpenClaw deployment
3. Replace all `YOUR_*` placeholder values in the config
4. (Optional) Set up Google Calendar credentials and place at `./google_credentials.json`
5. Deploy with OpenClaw: `openclaw deploy`

## Customization Tips

- Change `timezone` in the reminder config to your local timezone (e.g., "America/New_York")
- Disable skills you don't need by setting `enabled` to `false`
- Increase `max_conversation_history` for better context in longer conversations
- Replace the web search provider if you prefer a different search API
