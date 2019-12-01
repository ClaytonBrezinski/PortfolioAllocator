import {Company} from "./company";

export class Category {
  categoryName: string;
  categoryWeight: number;

  constructor(categoryName: string, categoryWeight: number) {
    this.categoryName = categoryName;
    this.categoryWeight = categoryWeight;
  }
}
