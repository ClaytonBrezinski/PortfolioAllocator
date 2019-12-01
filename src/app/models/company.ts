import {Category} from "./category";

export class Company {
  name: string;
  tickerSymbol: string;
  categoryPercent: number;
  category: Category;

  constructor(name: string, tickerSymbol: string, categoryPercent: number, category: Category) {
    this.name = name;
    this.tickerSymbol = tickerSymbol;
    this.categoryPercent = categoryPercent;
    this.category = category;
  }
}
