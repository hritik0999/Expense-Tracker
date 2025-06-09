export interface Expense {
    id: string;
    description?: string;
    amount: number;
    category?: string;
    isAutoCategorized?: boolean;
    createdAt: Date;
  }
  