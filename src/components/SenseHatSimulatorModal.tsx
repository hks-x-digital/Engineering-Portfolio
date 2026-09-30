import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  RotateCcw,
  Cpu,
  ExternalLink,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CornerDownLeft,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SenseHatSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Cell = 'X' | 'O' | null;

export const SenseHatSimulatorModal: React.FC<SenseHatSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [aiMode, setAiMode] = useState<'intelligent' | 'weak'>('intelligent');
  const [status, setStatus] = useState<string>('Your turn (Player X · Red LEDs)');
  const [selectedCell, setSelectedCell] = useState<number>(4); // center cell
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [aiScore, setAiScore] = useState<number>(0);
  const [ties, setTies] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      // Joystick simulation
      if (e.key === 'ArrowUp') setSelectedCell((prev) => (prev >= 3 ? prev - 3 : prev));
      if (e.key === 'ArrowDown') setSelectedCell((prev) => (prev <= 5 ? prev + 3 : prev));
      if (e.key === 'ArrowLeft') setSelectedCell((prev) => (prev % 3 !== 0 ? prev - 1 : prev));
      if (e.key === 'ArrowRight') setSelectedCell((prev) => (prev % 3 !== 2 ? prev + 1 : prev));
      if (e.key === 'Enter' || e.key === ' ') {
        handleCellClick(selectedCell);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedCell, board, isPlayerTurn]);

  if (!isOpen) return null;

  // Check winner
  const checkWinner = (squares: Cell[]): { winner: Cell; line: number[] | null } => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    if (squares.every((sq) => sq !== null)) {
      return { winner: null, line: null }; // Draw
    }
    return { winner: null, line: null };
  };

  // Minimax Algorithm Implementation
  const minimax = (squares: Cell[], depth: number, isMaximizing: boolean): number => {
    const winResult = checkWinner(squares);
    if (winResult.winner === 'O') return 10 - depth;
    if (winResult.winner === 'X') return depth - 10;
    if (squares.every((s) => s !== null)) return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O';
          const evaluation = minimax(squares, depth + 1, false);
          squares[i] = null;
          maxEval = Math.max(maxEval, evaluation);
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X';
          const evaluation = minimax(squares, depth + 1, true);
          squares[i] = null;
          minEval = Math.min(minEval, evaluation);
        }
      }
      return minEval;
    }
  };

  const getBestMove = (squares: Cell[]): number => {
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O';
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const getWeakMove = (squares: Cell[]): number => {
    const available = squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val): val is number => val !== null);
    if (available.length === 0) return -1;
    return available[Math.floor(Math.random() * available.length)];
  };

  const handleCellClick = (index: number) => {
    if (board[index] || !isPlayerTurn) return;
    const { winner } = checkWinner(board);
    if (winner) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setSelectedCell(index);

    const check = checkWinner(newBoard);
    if (check.winner === 'X') {
      setStatus('Player X Won!');
      setPlayerScore((prev) => prev + 1);
      return;
    }

    if (newBoard.every((s) => s !== null)) {
      setStatus('Game Draw!');
      setTies((prev) => prev + 1);
      return;
    }

    // AI Turn
    setIsPlayerTurn(false);
    setStatus(`SenseHAT AI thinking (${aiMode === 'intelligent' ? 'Minimax AI' : 'Weak AI'})...`);

    setTimeout(() => {
      const aiMove = aiMode === 'intelligent' ? getBestMove(newBoard) : getWeakMove(newBoard);
      if (aiMove !== -1) {
        newBoard[aiMove] = 'O';
        setBoard([...newBoard]);
        setSelectedCell(aiMove);

        const aiCheck = checkWinner(newBoard);
        if (aiCheck.winner === 'O') {
          setStatus('AI (O) Won!');
          setAiScore((prev) => prev + 1);
        } else if (newBoard.every((s) => s !== null)) {
          setStatus('Game Draw!');
          setTies((prev) => prev + 1);
        } else {
          setIsPlayerTurn(true);
          setStatus('Your turn (Player X · Red LEDs)');
        }
      }
    }, 400);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setStatus('Your turn (Player X · Red LEDs)');
    setSelectedCell(4);
  };

  // Convert 3x3 tic tac toe into an 8x8 LED matrix mapping
  const renderSenseHatLedGrid = () => {
    // 8x8 LED matrix representation
    const matrix: { color: string; label: string }[][] = Array(8)
      .fill(null)
      .map(() => Array(8).fill({ color: '#18181b', label: '' }));

    // Grid divider lines (white/dim gold LEDs)
    for (let i = 0; i < 8; i++) {
      matrix[2][i] = { color: '#3f3f46', label: '' };
      matrix[5][i] = { color: '#3f3f46', label: '' };
      matrix[i][2] = { color: '#3f3f46', label: '' };
      matrix[i][5] = { color: '#3f3f46', label: '' };
    }

    // Map 3x3 cells into 2x2 LED clusters on the 8x8 grid
    const cellOrigins = [
      { r: 0, c: 0 },
      { r: 0, c: 3 },
      { r: 0, c: 6 },
      { r: 3, c: 0 },
      { r: 3, c: 3 },
      { r: 3, c: 6 },
      { r: 6, c: 0 },
      { r: 6, c: 3 },
      { r: 6, c: 6 },
    ];

    cellOrigins.forEach((origin, idx) => {
      const cellVal = board[idx];
      const isSelected = selectedCell === idx;

      for (let dr = 0; dr < 2; dr++) {
        for (let dc = 0; dc < 2; dc++) {
          const r = origin.r + dr;
          const c = origin.c + dc;

          if (cellVal === 'X') {
            matrix[r][c] = { color: '#dc2626', label: 'X' }; // Bold dark red LEDs for player
          } else if (cellVal === 'O') {
            matrix[r][c] = { color: '#fbbf24', label: 'O' }; // Gold LEDs for AI
          } else if (isSelected) {
            matrix[r][c] = { color: '#52525b', label: '' }; // Selected cursor
          }
        }
      }
    });

    return (
      <div className="grid grid-cols-8 gap-1.5 p-4 bg-zinc-950 rounded-2xl border border-white/10 shadow-inner">
        {matrix.map((row, rIdx) =>
          row.map((led, cIdx) => (
            <div
              key={`${rIdx}-${cIdx}`}
              className="w-5 h-5 sm:w-7 sm:h-7 rounded-sm flex items-center justify-center transition-all duration-150"
              style={{
                backgroundColor: led.color,
                boxShadow:
                  led.color === '#dc2626'
                    ? '0 0 10px rgba(220,38,38,0.9)'
                    : led.color === '#fbbf24'
                    ? '0 0 10px rgba(251,191,36,0.9)'
                    : 'none',
              }}
            />
          ))
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-950/40 text-red-500 border border-red-800/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code">
                <span className="text-amber-400 font-semibold uppercase">Raspberry Pi Sense HAT</span>
                <span className="text-zinc-600">·</span>
                <span className="text-emerald-400">8x8 RGB LED Matrix</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white font-display">
                Tic-Tac-Toe Embedded Simulator
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Mode Switcher & Score */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-950 border border-white/10">
            <div>
              <p className="text-[11px] font-mono-code text-zinc-500 uppercase">AI Mode</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => {
                    setAiMode('intelligent');
                    resetGame();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                    aiMode === 'intelligent'
                      ? 'bg-amber-400 text-zinc-950 shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Intelligent AI (Minimax)
                </button>
                <button
                  onClick={() => {
                    setAiMode('weak');
                    resetGame();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                    aiMode === 'weak'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Weak AI (Heuristic)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono-code">
              <div>
                <span className="text-zinc-500 block text-[10px]">PLAYER (X)</span>
                <span className="font-bold text-red-500 text-base">{playerScore}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-zinc-500 block text-[10px]">TIES</span>
                <span className="font-bold text-white text-base">{ties}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-zinc-500 block text-[10px]">AI (O)</span>
                <span className="font-bold text-amber-400 text-base">{aiScore}</span>
              </div>
            </div>
          </div>

          {/* Interactive Matrix Display & Joystick Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* 8x8 SenseHAT LED Matrix */}
            <div className="flex flex-col items-center">
              <p className="text-xs font-mono-code text-zinc-400 mb-2">
                Simulated 8x8 RGB Sense HAT Framebuffer
              </p>
              {renderSenseHatLedGrid()}
              <p className="text-xs font-mono-code text-amber-400 mt-3 font-semibold">
                {status}
              </p>
            </div>

            {/* Standard 3x3 Board & Controls */}
            <div className="space-y-4">
              <p className="text-xs font-mono-code text-zinc-400">
                Click a square or use keyboard arrows + Enter:
              </p>

              <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                {board.map((cell, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    disabled={!isPlayerTurn || cell !== null}
                    className={`aspect-square rounded-xl text-xl sm:text-2xl font-bold font-mono-code flex items-center justify-center transition-all ${
                      selectedCell === idx
                        ? 'border-2 border-amber-400 ring-2 ring-amber-400/20'
                        : 'border border-white/10'
                    } ${
                      cell === 'X'
                        ? 'bg-red-950/40 text-red-400 border-red-800/40'
                        : cell === 'O'
                        ? 'bg-amber-400/20 text-amber-400'
                        : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-600'
                    }`}
                  >
                    {cell || ''}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={resetGame}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono-code font-bold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-white/10 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Match</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Details Footer */}
          <div className="p-4 rounded-xl bg-black border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-code text-zinc-400">
            <div>
              <span className="text-white font-semibold">Project Feature:</span> Move validation, score tracking, Weak AI & Minimax AI across Java & Python.
            </div>
            <a
              href={PERSONAL_INFO.googleDriveFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>View Project Files in Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
