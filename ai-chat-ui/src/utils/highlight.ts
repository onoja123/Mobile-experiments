import { colors } from "@/theme";

export interface CodeToken {
  text: string;
  color: string;
}

const KEYWORDS = new Set([
  "var",
  "let",
  "const",
  "new",
  "true",
  "false",
  "function",
  "return",
  "if",
  "else",
]);

const RED_METHODS = new Set(["open"]);

export function tokenizeJavascript(code: string): CodeToken[] {
  const tokens: CodeToken[] = [];
  const pattern = /("[^"]*"|'[^']*')|([A-Za-z_$][\w$]*)|(\s+)|(.)/g;
  let match: RegExpExecArray | null;
  let previousChar = "";

  while ((match = pattern.exec(code)) !== null) {
    const [raw, string, word] = match;

    if (string) {
      tokens.push({ text: string, color: colors.codeString });
    } else if (word) {
      if (KEYWORDS.has(word)) {
        tokens.push({ text: word, color: colors.codeKeyword });
      } else if (word.includes("HttpRequest")) {
        const index = word.indexOf("HttpRequest");
        if (index > 0) {
          tokens.push({ text: word.slice(0, index), color: colors.codeText });
        }
        tokens.push({ text: "HttpRequest", color: colors.codeClass });
      } else if (previousChar === "." && RED_METHODS.has(word)) {
        tokens.push({ text: word, color: colors.codeClass });
      } else {
        tokens.push({ text: word, color: colors.codeText });
      }
    } else {
      tokens.push({ text: raw, color: colors.codeText });
    }

    const trimmed = raw.trim();
    if (trimmed) previousChar = trimmed[trimmed.length - 1];
  }

  return tokens;
}

export function sliceTokens(tokens: CodeToken[], count: number): CodeToken[] {
  const result: CodeToken[] = [];
  let remaining = count;
  for (const token of tokens) {
    if (remaining <= 0) break;
    if (token.text.length <= remaining) {
      result.push(token);
      remaining -= token.text.length;
    } else {
      result.push({ ...token, text: token.text.slice(0, remaining) });
      remaining = 0;
    }
  }
  return result;
}
