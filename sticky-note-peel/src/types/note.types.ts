export type Note = {
  id: string;
  color: string;
  title: string;
  body?: string;
  checklist?: string[];
  meta?: string;
  tags?: string[];
  date?: string;
};
