# Minimal Telegram Bot

## Overview

The simplest possible OpenClaw configuration. A single AI agent on Telegram powered by Claude Sonnet — perfect for getting started quickly.

## Features

- **Instant Setup** — Copy, paste your keys, and deploy
- **Auto Language** — Responds in whatever language the user writes in
- **Conversation Memory** — Retains the last 10 messages for context
- **Low Token Usage** — Conservative 1024 max tokens keeps costs minimal

## Prerequisites

1. A Telegram account
2. An Anthropic API key ([console.anthropic.com](https://console.anthropic.com))

## Setup

1. Open [@BotFather](https://t.me/BotFather) on Telegram and create a new bot with `/newbot`
2. Copy the bot token BotFather gives you
3. Replace `YOUR_TELEGRAM_BOT_TOKEN` with your bot token
4. Replace `YOUR_ANTHROPIC_API_KEY` with your Anthropic API key
5. Deploy with OpenClaw: `openclaw deploy`

## Customization Tips

- Increase `max_tokens` for longer responses (costs more per message)
- Lower `temperature` (e.g., 0.3) for more factual, deterministic answers
- Raise `max_conversation_history` to remember more context (uses more tokens)
- Edit the `system_prompt` to give your bot a specific personality or role
