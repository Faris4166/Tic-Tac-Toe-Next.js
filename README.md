<img src = "https://raw.githubusercontent.com/Faris4166/Simple-Checklist-Application-in-Python/refs/heads/main/BG.jpg">

# Tic-Tac-Toe Next.js Application 🕹️

This is a simple Tic-Tac-Toe game built with Next.js, allowing users to play against another human player (2 Players 👥) or an AI (Play vs AI 🤖) with adjustable difficulty levels.

## Features ✨

-   Interactive 3x3 game board.
-   Turn-based gameplay with clear indication of the next player.
-   Automatic winner detection and draw checking.
-   Two game modes:
    -   **2 Players:** Play against another human. 👥
    -   **Play vs AI:** Challenge the computer. 🤖
-   AI difficulty levels:
    -   Easy: Random moves. 🐣
    -   Medium: Mix of random and optimal moves. 🎯
    -   Hard: Uses the Minimax algorithm for the best possible moves. 🧠
-   Score tracking for both players (X and O). ⭐
-   Game reset functionality. 🔄
-   Congratulatory message and video upon defeating the Hard difficulty AI. 🎉🏆

## Technologies Used 🛠️

-   [Next.js](https://nextjs.org/): A React framework for building web applications.
-   [React](https://react.dev/): A JavaScript library for building user interfaces.
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.

## Getting Started 🚀

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000` to play the game.

## Code Explanation 💡

Let's break down the code for this Tic-Tac-Toe game built with Next.js:

-   `'use client';`: This directive marks the component to run on the client-side, enabling interactive features. 🔑

-   `import { useState, useEffect } from 'react';`: Imports essential React Hooks for managing component state (`useState`) and side effects (`useEffect`). ⚛️

-   `const initialBoard = Array(9).fill(null);`: Initializes the game board as an array with 9 null values, representing empty cells. 🧱

-   `export default function Home() { ... }`: Defines the main `Home` functional component for the game page. 🏠

-   `const [board, setBoard] = useState<(string | null)[]>(initialBoard);`: Manages the game board's state, holding 'X', 'O', or null for each cell. 🕹️

-   `const [isXNext, setIsXNext] = useState(true);`: Tracks whose turn it is (true for X, false for O). 🔄

-   `const [winner, setWinner] = useState<string | null>(null);`: Stores the winner ('X', 'O', 'Draw', or null if the game is ongoing). 🏆

-   `const [mode, setMode] = useState<'pvp' | 'ai'>('pvp');`: Determines the game mode: 'pvp' (2 players) or 'ai' (vs AI). Defaults to 'pvp'. 🎮

-   `const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');`: Sets the AI's difficulty level, defaulting to 'easy'. 🤔

-   `const [scoreX, setScoreX] = useState(0);` and `const [scoreO, setScoreO] = useState(0);`: Keep track of the scores for players X and O. 🔢

-   `const [showCongratulations, setShowCongratulations] = useState(false);`: Controls the display of the congratulatory message for winning against the hard AI. 🎉

-   `useEffect(() => { ... }, [board, isXNext, mode, difficulty]);`: Handles side effects like checking for a winner, a draw, and triggering the AI's move based on changes in relevant state. 👂

-   `const handleClick = (index: number) => { ... };`: Function called when a player clicks a board cell, updating the board and switching turns. 🖱️

-   `const resetGame = () => { ... };`: Resets the game state to its initial values. 🔄

-   `const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => { ... };`: Updates the game mode and resets the game. 🕹️

-   `const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => { ... };`: Updates the AI difficulty and resets the game. 🤔

-   `const updateScores = (win: string) => { ... };`: Increments the score of the winning player. 🏆

-   The `return (...)` statement renders the game's UI using JSX. 🎨

-   `function calculateWinner(squares: (string | null)[]) { ... }`: Checks the board for a winner based on winning lines. 🧠

-   `function findBestMove(board: (string | null)[], difficulty: 'easy' | 'medium' | 'hard') { ... }`: Determines the AI's move based on the selected difficulty level. 🤖

-   `function randomMove(board: (string | null)[]) { ... }`: AI helper function to select a random empty cell. 🎲

-   `function minimaxMove(board: (string | null)[]) { ... }`: Implements the Minimax algorithm to find the optimal move for the AI. 🧠

-   `function minimax(board: (string | null)[], depth: number, isMaximizing: boolean): number { ... }`: The core recursive function of the Minimax algorithm, evaluating board states. 🧐

## Try it out! 🎉

You can play the live demo here: [https://tic-tac-toe-next-js-opal.vercel.app/](https://tic-tac-toe-next-js-opal.vercel.app/) 🕹️

---
# Tic-Tac-Toe Next.js Application 🕹️

This is a simple Tic-Tac-Toe game สร้างด้วย Next.js, allowing users to play against another human player (ผู้เล่น 2 คน 👥) or an AI (เล่นกับคอมพิวเตอร์ 🤖) with ปรับระดับความยาก (adjustable difficulty levels).

## ฟีเจอร์หลัก (Key Features) ✨

-   กระดานเกมแบบ 3x3 ที่โต้ตอบได้ (Interactive 3x3 game board).
-   การเล่นแบบสลับตา พร้อมแสดงตาเดินของผู้เล่นถัดไปอย่างชัดเจน (Turn-based gameplay with clear indication of the next player).
-   ระบบตรวจจับผู้ชนะอัตโนมัติ และตรวจสอบเมื่อเสมอ (Automatic winner detection and draw checking).
-   สองโหมดการเล่น (Two game modes):
    -   **ผู้เล่น 2 คน (2 Players):** เล่นกับเพื่อนของคุณ (Play against another human). 👥
    -   **เล่นกับ AI (Play vs AI):** ท้าทายคอมพิวเตอร์ (Challenge the computer). 🤖
-   ระดับความยากของ AI (AI difficulty levels):
    -   ง่าย (Easy): เดินแบบสุ่ม (Random moves). 🐣
    -   ปานกลาง (Medium): ผสมผสานการเดินแบบสุ่มและแบบมีเหตุผล (Mix of random and optimal moves). 🎯
    -   ยาก (Hard): ใช้ Algorithm Minimax เพื่อหาการเดินที่ดีที่สุด (Uses the Minimax algorithm for the best possible moves). 🧠
-   การนับคะแนนของผู้เล่นแต่ละคน (Score tracking for both players (X and O)). ⭐
-   ฟังก์ชันรีเซ็ตเกม (Game reset functionality). 🔄
-   ข้อความแสดงความยินดีและวิดีโอเมื่อชนะ AI ในระดับยาก (Congratulatory message and video upon defeating the Hard difficulty AI). 🎉🏆

## เทคโนโลยีที่ใช้ (Technologies Used) 🛠️

-   [Next.js](https://nextjs.org/): A React framework สำหรับสร้างเว็บแอปพลิเคชัน (for building web applications).
-   [React](https://react.dev/): A JavaScript library สำหรับสร้าง User Interface (for building user interfaces).
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework สำหรับการจัดสไตล์ (for styling).

## วิธีการเริ่มต้น (Getting Started) 🚀

1.  **Clone repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **ติดตั้ง dependencies:**
    ```bash
    npm install
    # หรือ (or)
    yarn install
    # หรือ (or)
    pnpm install
    ```

3.  **รัน development server:**
    ```bash
    npm run dev
    # หรือ (or)
    yarn dev
    # หรือ (or)
    pnpm dev
    ```

    เปิด browser ของคุณและไปที่ `http://localhost:3000` เพื่อเล่นเกม (Open your browser and navigate to `http://localhost:3000` to play the game).

## คำอธิบายโค้ด (Code Explanation) 💡

มาดูหลักการทำงานของโค้ด Tic-Tac-Toe บน Next.js ตัวนี้กันครับ (Let's take a look at how this Tic-Tac-Toe code works on Next.js):

-   `'use client';`: Directive นี้สำคัญสำหรับ Next.js App Router, บอกว่าโค้ดนี้จะทำงานฝั่ง Client (This directive is important for Next.js App Router, indicating that this code will run on the client-side). 🔑

-   `import { useState, useEffect } from 'react';`: นำเข้า React Hooks หลักสำหรับจัดการ State และ Side Effects ใน Component (Imports the main React Hooks for managing State and Side Effects in the Component). ⚛️

-   `const initialBoard = Array(9).fill(null);`: สร้าง Array เริ่มต้นสำหรับกระดานเกม 9 ช่อง (Creates the initial 9-cell game board Array). 🧱

-   `export default function Home() { ... }`: Component หลักของหน้าแรก (The main component for the homepage). 🏠

-   `const [board, setBoard] = useState<(string | null)[]>(initialBoard);`: State สำหรับสถานะของกระดานเกม (State for the game board's status). 🕹️

-   `const [isXNext, setIsXNext] = useState(true);`: State บอกว่าเป็นตาของ X หรือ O (State indicating whose turn it is, X or O). 🔄

-   `const [winner, setWinner] = useState<string | null>(null);`: State เก็บผลลัพธ์ผู้ชนะ (State storing the winner result). 🏆

-   `const [mode, setMode] = useState<'pvp' | 'ai'>('pvp');`: State เลือกว่าเล่น 2 คน หรือเล่นกับ AI (State selecting between 2-player or AI mode). 🎮

-   `const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');`: State เลือกระดับความยากของ AI (State selecting the AI difficulty level). 🤔

-   `const [scoreX, setScoreX] = useState(0);` และ `const [scoreO, setScoreO] = useState(0);`: State เก็บคะแนนของผู้เล่น (State storing player scores). 🔢

-   `const [showCongratulations, setShowCongratulations] = useState(false);`: State ควบคุมการแสดงข้อความยินดีเมื่อชนะ AI ยาก (State controlling the display of the congratulatory message upon defeating hard AI). 🎉

-   `useEffect(() => { ... }, [board, isXNext, mode, difficulty]);`: Hook ที่จัดการการตรวจสอบผู้ชนะ, การเสมอ, และการเดินของ AI เมื่อ State เปลี่ยน (Hook that handles winner checking, draws, and AI moves when State changes). 👂

-   `const handleClick = (index: number) => { ... };`: ฟังก์ชันเมื่อคลิกที่ช่องบนกระดาน (Function when a board cell is clicked). 🖱️

-   `const resetGame = () => { ... };`: ฟังก์ชันรีเซ็ตเกม (Function to reset the game). 🔄

-   `const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => { ... };`: ฟังก์ชันเมื่อเปลี่ยนโหมดการเล่น (Function when the game mode is changed). 🕹️

-   `const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => { ... };`: ฟังก์ชันเมื่อเปลี่ยนระดับความยาก AI (Function when the AI difficulty is changed). 🤔

-   `const updateScores = (win: string) => { ... };`: ฟังก์ชันอัปเดตคะแนน (Function to update scores). 🏆

-   ส่วน `return (...)` คือ JSX ที่แสดงผล UI ของเกม (The `return (...)` section is the JSX that renders the game's UI). 🎨

-   `function calculateWinner(squares: (string | null)[]) { ... }`: ฟังก์ชันตรวจสอบผู้ชนะ (Function to check for a winner). 🧠

-   `function findBestMove(board: (string | null)[], difficulty: 'easy' | 'medium' | 'hard') { ... }`: ฟังก์ชันกำหนดการเดินที่ดีที่สุดของ AI ตามระดับความยาก (Function to determine the AI's best move based on difficulty). 🤖

-   `function randomMove(board: (string | null)[]) { ... }`: ฟังก์ชันให้ AI เดินแบบสุ่ม (Function for the AI to make a random move). 🎲

-   `function minimaxMove(board: (string | null)[]) { ... }`: ฟังก์ชันใช้ Algorithm Minimax เพื่อหาการเดินที่ดีที่สุดของ AI (Function using the Minimax Algorithm to find the AI's best move). 🧠

-   `function minimax(board: (string | null)[], depth: number, isMaximizing: boolean): number { ... }`: ฟังก์ชันหลักของ Algorithm Minimax ทำงานแบบ Recursive เพื่อประเมินผลลัพธ์ของแต่ละสถานะของกระดาน (The core function of the Minimax Algorithm, working recursively to evaluate the outcome of each board state). 🧐

## ลองเล่นเลย! (Try it out!) 🎉

คุณสามารถลองเล่น Demo ได้ที่นี่ (You can play the live demo here): [https://tic-tac-toe-next-js-opal.vercel.app/](https://tic-tac-toe-next-js-opal.vercel.app/) 🕹️

---

<div align="center">
  <img src = "https://img.wattpad.com/22301acde3c46698593e6458d9820a635007a2ff/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f504436434c6a6b647975704f76773d3d2d313033343631393235372e313636386366316462363436366566393835393235383231333637342e676966">
</div>


