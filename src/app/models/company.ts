import {Category} from "./category";

export class Company {
  public name: string;
  public tickerSymbol: string;
  public categoryPercent: number;
  public category: Category;

  constructor(name: string, tickerSymbol: string, categoryPercent: number, category: Category) {
    this.name = name;
    this.tickerSymbol = tickerSymbol;
    this.categoryPercent = categoryPercent;
    this.category = category;
  }

  getPortfolioPercent(): number {
    return (this.categoryPercent) * (this.category.categoryPercent) / 100;
  }

}
