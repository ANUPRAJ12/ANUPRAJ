1. Overview
A multiplayer Tic-Tac-Toe game built with a React-based frontend and Nakama backend. The game supports real-time gameplay, matchmaking, and a leaderboard system for ranking players.

2. Features
Real-time multiplayer gameplay with server-authoritative logic.
Device-based authentication with JWT for secure user sessions.
Matchmaking for 1v1 game modes.
Real-time game state synchronization using WebSockets.
Leaderboard system to track player rankings.
Scalable deployment on Google Cloud.

4. Tech Stack
   
Frontend:
React (TypeScript)
TailwindCSS for styling

Backend:
Nakama with custom Go plugins
PostgreSQL for database

Deployment:
Docker and Kubernetes on Google Cloud
Communication:
WebSockets for real-time interaction
6. Setup and Installation
Prerequisites:
Docker and Docker Compose installed
Node.js and npm installed
Go programming language installed
Google Cloud SDK installed (for deployment)
