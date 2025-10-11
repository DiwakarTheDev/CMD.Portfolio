import { useState, useRef, useEffect } from "react";
import { TerminalWindow } from "./TerminalWindow";
import { CommandLine } from "./CommandLine";
import { OutputLine } from "./OutputLine";
import { processCommand } from "@/lib/commands";

export interface TerminalLine {
  id: number;
  type: "command" | "output" | "error";
  content: string | React.ReactNode;
  command?: string;
}

const INITIAL_LINES: TerminalLine[] = [
  {
    id: 0,
    type: "output",
    content: "Welcome to Diwakar's Portfolio Terminal v1.0.0",
  },
  {
    id: 1,
    type: "output",
    content: 'Type "help" to see available commands.',
  },
];

export const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim();
    
    if (!trimmedCommand) return;

    // Add command to history
    setCommandHistory((prev) => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    // Add command line
    const newCommandLine: TerminalLine = {
      id: Date.now(),
      type: "command",
      content: trimmedCommand,
      command: trimmedCommand,
    };

    // Process command
    if (trimmedCommand.toLowerCase() === "clear") {
      setLines(INITIAL_LINES);
      setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }

    const output = processCommand(trimmedCommand);

    const outputLine: TerminalLine = {
      id: Date.now() + 1,
      type: output.type,
      content: output.content,
    };

    setLines((prev) => [...prev, newCommandLine, outputLine]);
    setCurrentCommand("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(commandHistory[newIndex]);
        }
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <TerminalWindow>
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-sm"
        onClick={focusInput}
      >
        {lines.map((line) => (
          <OutputLine key={line.id} line={line} />
        ))}
        <CommandLine
          ref={inputRef}
          value={currentCommand}
          onChange={setCurrentCommand}
          onSubmit={handleCommand}
          onKeyDown={handleKeyDown}
        />
      </div>
    </TerminalWindow>
  );
};
