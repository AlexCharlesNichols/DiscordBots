Here’s a succinct but professional **README.md** you can use for your GitHub repository:

---

# NipBot 🎧🤖

A multipurpose Discord bot built using **Node.js** and **Discord.js**, designed for fun interactions, media playback, and automated responses.

## 🧠 Overview

**NipBot** is a custom-built Discord bot capable of:

* Responding to text commands with prefix `!` (e.g. `!help`, `!photo`, `!join`).
* Joining and interacting in **voice channels**, including playing local audio files and YouTube audio streams via **ytdl-core**.
* Reacting to messages, tagging detection, and sending humorous automated replies.
* Demonstrating basic command parsing, voice connection handling, and file/stream playback.

This project was created as a learning exercise in **Discord bot development**, event-driven programming, and working with external media libraries in Node.js.

## ⚙️ Commands

| Command                        | Description                                                     |
| ------------------------------ | --------------------------------------------------------------- |
| `!help [topic]`                | Provides help information.                                      |
| `!botfight`                    | Sends a playful message mocking another bot.                    |
| `!join`                        | Joins the user’s current voice channel and plays an audio file. |
| `!pause` / `!resume` / `!skip` | Controls the audio playback.                                    |
| `!oft`                         | Streams audio directly from a YouTube link.                     |
| `!photo`                       | Sends an image file from local storage.                         |

## 🧩 Technologies & Skills Used

* **JavaScript (Node.js)** – Core programming language.
* **Discord.js** – For managing Discord API interactions (messages, guilds, channels, voice connections).
* **ytdl-core** – For streaming YouTube audio in Discord voice channels.
* **Event-driven programming** – Handling asynchronous message and voice events.
* **Error handling & logging** – Managing dispatcher and connection events cleanly.
* **Basic bot architecture** – Command parsing, modular design, and maintaining state.

## 🚀 How to Run

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install discord.js ytdl-core
   ```
3. Replace the placeholder in `client.login("XXXX")` with your **bot token**.
4. Run the bot:

   ```bash
   node bot.js
   ```

## ⚠️ Notes

* This bot was originally created for personal use and experimentation with Discord APIs.
* Ensure you never commit your Discord bot token to version control.

---

Would you like me to make it sound more **professional** (like for a portfolio) or more **casual/fun** (like for a personal GitHub repo)? I can adapt the tone accordingly.
