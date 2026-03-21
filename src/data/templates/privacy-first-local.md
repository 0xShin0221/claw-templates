# Privacy-First Local Setup

## Overview

Run your AI assistant entirely on local hardware using Ollama. No cloud APIs, no data leaving your network, no API keys to manage (except Telegram). Perfect for sensitive conversations and privacy-conscious users.

## Features

- **Fully Local AI** — Ollama runs the model on your own machine
- **No Cloud APIs** — Zero data sent to external AI providers
- **Encrypted Notes** — Local note-taking with optional encryption
- **File Search** — Search through local documents without uploading them
- **No Telemetry** — All tracking and telemetry disabled
- **Local Data Retention** — Conversation history stays on your machine

## Prerequisites

1. [Ollama](https://ollama.com) installed and running locally
2. Sufficient hardware (8GB+ RAM for llama3.1:8b, 16GB+ recommended)
3. A Telegram account (the only external service used)

## Setup

1. Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh`
2. Pull the model: `ollama pull llama3.1:8b`
3. Create a Telegram bot via [@BotFather](https://t.me/BotFather)
4. Replace `YOUR_TELEGRAM_BOT_TOKEN` with your bot token
5. (Optional) Generate an encryption key: `openssl rand -base64 32 > ./encryption.key`
6. Deploy with OpenClaw: `openclaw deploy`

## Customization Tips

- Swap `llama3.1:8b` for a larger model (e.g., `llama3.1:70b`) if your hardware supports it
- Increase `response_timeout` for larger models that take longer to generate
- Add more directories to `file_search.directories` to search across your documents
- The only network traffic is Telegram messages — use a VPN for additional privacy
- Consider running Telegram via Tor for maximum anonymity
