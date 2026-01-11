import { apiFetch } from "./api";

/* ---------- Types ---------- */

export interface Stock {
  id?: string;
  symbol: string;
  companyName?: string;
  quantity?: number;
  price?: number;
}

export interface Portfolio {
  id: string;
  name: string;
  rating?: string;
  sharpeRatio?: number;
  stocks: Stock[];
}

/* ---------- Portfolio APIs ---------- */

/**
 * Get user's portfolio
 */
export function getPortfolio(userId: string): Promise<Portfolio> {
  return apiFetch(`/api/portfolios/${userId}`);
}

/**
 * Analyze portfolio
 */
export function analyzePortfolio(userId: string) {
  return apiFetch(`/api/portfolios/${userId}/analyze`, {
    method: "POST",
  });
}

/* ---------- Stock APIs ---------- */

/**
 * Add stock to portfolio
 */
export function addStock(
  userId: string,
  stock: { symbol: string; quantity: number }
) {
  return apiFetch(`/api/portfolios/${userId}/stocks`, {
    method: "POST",
    body: JSON.stringify(stock),
  });
}

/**
 * Remove stock from portfolio
 */
export function removeStock(userId: string, symbol: string) {
  return apiFetch(
    `/api/portfolios/${userId}/stocks/${symbol}`,
    {
      method: "DELETE",
    }
  );
}
