# Discord Dev Team

## Overview

A multi-agent development team running on Discord. An orchestrator agent manages tasks and delegates coding work to a specialist coding agent — like having a pair programming buddy available 24/7.

## Features

- **Multi-Agent Architecture** — Orchestrator + coder work together seamlessly
- **Code Execution** — Run Python, JavaScript, and TypeScript in a sandbox
- **GitHub Integration** — Optional: connect to your repo for PRs and issues
- **Agent Handoff** — Orchestrator automatically routes coding tasks to the coder

## Prerequisites

1. A Discord server you administer
2. An Anthropic API key ([console.anthropic.com](https://console.anthropic.com))
3. (Optional) A GitHub personal access token for repo integration

## Setup

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application
2. Under "Bot", create a bot and copy the token
3. Enable "Message Content Intent" under Privileged Gateway Intents
4. Invite the bot to your server with appropriate permissions
5. Replace all placeholder values in the config (`YOUR_DISCORD_BOT_TOKEN`, `YOUR_DISCORD_GUILD_ID`, `YOUR_ANTHROPIC_API_KEY`)
6. (Optional) Set `github_integration.enabled` to `true` and add your GitHub token
7. Deploy with OpenClaw: `openclaw deploy`

## Customization Tips

- Add more specialist agents (e.g., a "reviewer" or "devops" agent) by adding entries to the `agents` array
- Adjust `temperature` — lower for the coder (precision), higher for the orchestrator (creativity)
- Enable GitHub integration to let agents create PRs and review code directly
