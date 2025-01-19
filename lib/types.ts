export interface AnswersList {
  id: string;
  email: string;
  name: string;
  profileImage?: string | null;
  solutions: Solution[];
}

export interface Solution {
  id: string;
  description?: string | null;
  language: string;
  brutesol?: string | null;
  bettersol?: string | null;
  optimalsol?: string | null;
  approach?: string | null;
  title: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
