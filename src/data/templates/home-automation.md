# Home Automation Controller

## Overview

Control your smart home devices via WhatsApp or Telegram. Uses Claude Haiku for fast, low-cost responses — perfect for quick device commands that need instant feedback.

## Features

- **Device Control** — Lights, thermostat, locks, and cameras via natural language
- **Home Assistant** — Integrates with Home Assistant for broad device support
- **Dual Channel** — Control from WhatsApp or Telegram, whichever is convenient
- **Fast Responses** — Claude Haiku ensures sub-second response times
- **Scheduling** — Set automations like "turn off lights at 11pm"
- **Safety Confirmations** — Asks before executing sensitive actions (e.g., unlocking doors)

## Prerequisites

1. A running Home Assistant instance ([home-assistant.io](https://www.home-assistant.io))
2. An Anthropic API key ([console.anthropic.com](https://console.anthropic.com))
3. At least one messaging channel set up (Telegram and/or WhatsApp)

## Setup

1. In Home Assistant, create a long-lived access token (Profile > Security > Long-Lived Access Tokens)
2. Create your messaging bot(s) — Telegram via BotFather, WhatsApp via Meta for Developers
3. Replace all `YOUR_*` placeholder values in the config
4. Update the `devices` array with your actual Home Assistant entity IDs
5. Deploy with OpenClaw: `openclaw deploy`

## Customization Tips

- Add more devices to the `devices` array — use your Home Assistant entity IDs
- Set `timezone` to your local timezone for scheduling automations
- Lower `max_conversation_history` (already set to 5) since home commands rarely need context
- Upgrade to Claude Sonnet if you want more complex reasoning (e.g., energy optimization suggestions)
