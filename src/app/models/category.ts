import {Company} from "./company";

export class Category {
  name: string;
  categoryPercent: number;

  constructor(name: string, categoryPercent: number) {
    this.name = name;
    this.categoryPercent = categoryPercent;
  }
}
