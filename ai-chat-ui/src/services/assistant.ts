import { MessageSegment } from "@/types/chat";

const HTTP_REQUEST_RESPONSE: MessageSegment[] = [
  {
    type: "text",
    text: "There are several ways to make an HTTP request in JavaScript, including using the `XMLHttpRequest` object, the `fetch()` API, and using libraries such as Axios or jQuery.",
  },
  {
    type: "text",
    text: "Here is an example of making a GET request using the XMLHttpRequest object:",
  },
  {
    type: "code",
    language: "javascript",
    code: 'var xhr = new XMLHttpRequest();\nxhr.open("GET", "https://example.com",\ntrue);\nxhr.send();',
  },
];

const FALLBACK_RESPONSE: MessageSegment[] = [
  {
    type: "text",
    text: "I can help with that. Could you tell me a bit more about what you are trying to achieve?",
  },
];

export function getAssistantResponse(prompt: string): MessageSegment[] {
  if (/http|request|javascript/i.test(prompt)) {
    return HTTP_REQUEST_RESPONSE.map((segment) => ({ ...segment }));
  }
  return FALLBACK_RESPONSE.map((segment) => ({ ...segment }));
}

export const RESPONSE_DELAY_MS = 700;
