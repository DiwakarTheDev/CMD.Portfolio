import { TerminalLine } from "./Terminal";

interface OutputLineProps {
  line: TerminalLine;
}

export const OutputLine = ({ line }: OutputLineProps) => {
  if (line.type === "command") {
    return (
      <div className="flex items-center gap-2 animate-fadeIn">
        <span className="text-primary text-glow font-semibold">❯</span>
        <span className="text-terminal-text">{line.content}</span>
      </div>
    );
  }

  if (line.type === "error") {
    return (
      <div className="text-destructive animate-fadeIn pl-4">
        {line.content}
      </div>
    );
  }

  return (
    <div className="text-terminal-text animate-fadeIn pl-4">
      {line.content}
    </div>
  );
};
