# Netherlands Quiz

A small, client-side quiz app built with vanilla JavaScript, HTML, and CSS. This project serves as a learning exercise for web development fundamentals.

Answer image-backed questions about the Netherlands, track your score in real-time, and save your progress in `localStorage` so you can refresh without losing answers. Finish strong to see a celebratory cat animation!

## Features

- Single-page quiz flow with welcome, questions, and results
- 12 curated questions with images and multiple-choice answers
- Real-time score display and disabled answers after selection
- Progress persistence using `localStorage` (resume after refresh)
- Final results screen with a fun cat animation for high scores
- Clean separation of concerns: data, pages (handlers), and views (renderers)
- Prettier configured for consistent formatting

## Quick Start

1) Clone the repo.   
3) Serve the app from the project root with any static server (modules need http/https, not `file://`), e.g. VS Code/IDE Live Server
4) Open `http://localhost:5000` (or the port your server prints).

## How To Play

1. Open the app and press "Start quiz".
2. For each question, click one answer. The correct answer highlights; buttons disable.
3. Your score displays in the bottom bar and updates as you go.
4. Click "Next" to continue. After the last question, see your final score.
5. If you scored ≥ 80%, enjoy a happy-cat animation. Otherwise, you’ll see an encouraging message.
6. Click "Restart Quiz" to reset progress and start over.

Progress is saved automatically. You can close or refresh the tab and resume where you left off.

## Project Structure
```
index.html           # Entry point loading /src/app.js as ES module
public/              # Static assets and global styles
  └─ style.css       # Layout, themes, cat/welcome styling
src/
  ├─ app.js          # App bootstrap: load saved progress, show welcome page
  ├─ constants.js    # Shared DOM ids/asset URLs
  ├─ data.js         # Quiz data, scores, and localStorage helpers
  ├─ pages/          # Page controllers (welcome, question flow, final result)
  └─ views/          # Pure render helpers that return DOM elements
DEV_README.md        # Original HackYourFuture starter notes/backlog ideas
```


## License

MIT — see `LICENSE` for details.

## Acknowledgements

This project is based on the HackYourFuture Browsers module starter structure and adapted for a Netherlands-themed quiz.
