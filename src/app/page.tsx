'use client';

import { useState, useEffect } from 'react';

const initialBoard = Array(9).fill(null);

export default function Home() {
  const [board, setBoard] = useState<(string | null)[]>(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [mode, setMode] = useState<'pvp' | 'ai'>('pvp');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    const win = calculateWinner(board);
    if (win) {
      setWinner(win);
      updateScores(win);

      if (mode === 'ai' && difficulty === 'hard' && win === 'X') {
        setTimeout(() => {
          setShowCongratulations(true);
        }, 300);
      } else {
        setTimeout(() => {
          alert(`🎉 Winner: ${win}`);
        }, 100);
      }
    } else if (board.every(Boolean)) {
      setWinner('Draw');
      setTimeout(() => {
        alert('😅 It\'s a draw!');
      }, 100);
    }

    // AI move
    if (mode === 'ai' && !isXNext && !win && !board.every(Boolean)) {
      const bestMove = findBestMove(board, difficulty);
      if (bestMove !== -1) {
        const newBoard = board.slice();
        newBoard[bestMove] = 'O';
        setTimeout(() => {
          setBoard(newBoard);
          setIsXNext(true);
        }, 500);
      }
    }
  }, [board, isXNext, mode, difficulty]);

  const handleClick = (index: number) => {
    if (board[index] || winner || (mode === 'ai' && !isXNext)) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMode = e.target.value as 'pvp' | 'ai';
    setMode(newMode);
    resetGame();
    setScoreX(0);
    setScoreO(0);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDifficulty = e.target.value as 'easy' | 'medium' | 'hard';
    setDifficulty(newDifficulty);
    resetGame();
    setScoreX(0);
    setScoreO(0);
  };

  const updateScores = (win: string) => {
    if (win === 'X') setScoreX(prev => prev + 1);
    if (win === 'O') setScoreO(prev => prev + 1);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Tic-Tac-Toe</h1>

      <div className="flex gap-4 mb-4">
        <select
          value={mode}
          onChange={handleModeChange}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="pvp">👥 2 Players</option>
          <option value="ai">🤖 Play vs AI</option>
        </select>

        {mode === 'ai' && (
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            className="p-2 rounded bg-gray-800 text-white"
          >
            <option value="easy">🐣 Easy</option>
            <option value="medium">🎯 Medium</option>
            <option value="hard">🧠 Hard</option>
          </select>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-24 h-24 text-3xl font-bold bg-gray-700 hover:bg-gray-600 flex items-center justify-center rounded"
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="mt-4 text-xl">
        {winner
          ? winner === 'Draw'
            ? '😅 It\'s a draw!'
            : `🎉 Winner: ${winner}`
          : `Next turn: ${isXNext ? 'X' : 'O'}`}
      </div>

      <div className="mt-2 text-lg">
        <p>⭐ X Score: {scoreX}</p>
        <p>⭐ O Score: {scoreO}</p>
        <p className="mt-2">
          {scoreX === scoreO
            ? '⚔️ It\'s a tie!'
            : scoreX > scoreO
            ? '🔥 X is leading!'
            : '🔥 O is leading!'}
        </p>
      </div>

      <button
        onClick={() => {
          resetGame();
          setShowCongratulations(false);
        }}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
      >
        Restart
      </button>

      {showCongratulations && (
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">🏆 Congratulations! You beat the AI on Hard mode! 🧠</h2>
          <video
            src="/Happy.mp4"
            controls
            autoPlay
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <button
            onClick={() => {
              resetGame();
              setShowCongratulations(false);
            }}
            className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white font-bold"
          >
            Play Again
          </button>
        </div>
      )}
    </main>
  );
}

// คำนวณผู้ชนะ
function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// หาการเดินที่ดีที่สุด
function findBestMove(board: (string | null)[], difficulty: 'easy' | 'medium' | 'hard') {
  if (difficulty === 'easy') {
    const available = board.map((cell, i) => cell === null ? i : -1).filter(i => i !== -1);
    return available[Math.floor(Math.random() * available.length)] ?? -1;
  }
  if (difficulty === 'medium') {
    return Math.random() < 0.5 ? minimaxMove(board) : randomMove(board);
  }
  // hard
  return minimaxMove(board);
}

function randomMove(board: (string | null)[]) {
  const available = board.map((cell, i) => cell === null ? i : -1).filter(i => i !== -1);
  return available[Math.floor(Math.random() * available.length)] ?? -1;
}

function minimaxMove(board: (string | null)[]) {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = 'O';
      const score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function minimax(board: (string | null)[], depth: number, isMaximizing: boolean): number {
  const winner = calculateWinner(board);
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (board.every(Boolean)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O';
        const score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'X';
        const score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}
