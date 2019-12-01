import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  Portfolio: Company[] = [
      new Company("","O", 22, new Category("Real Estate",20)),
      new Company("","NRZ", 17, new Category("Real Estate",20)),
      new Company("","WELL", 16, new Category("Real Estate",20)),
      new Company("","LTC", 16, new Category("Real Estate",20)),
      new Company("","SPG", 15, new Category("Real Estate",20)),
      new Company("","STOR", 14, new Category("Real Estate",20)),
      new Company("","LQD", 0, new Category("Bonds",20)),
      new Company("","BNDX", 0, new Category("Bonds",20)),
      new Company("","IEF", 0, new Category("Bonds",20)),
      new Company("","IEI", 0, new Category("Bonds",20)),
      new Company("","SHY", 0, new Category("Bonds",20)),
      new Company("","JPM", 3, new Category("Finance",14)),
      new Company("","MAIN", 3, new Category("Finance",14)),
      new Company("","BAC", 2, new Category("Finance",14)),
      new Company("","AFL", 1, new Category("Finance",14)),
      new Company("","RY", 1, new Category("Finance",14)),
      new Company("","TD", 1, new Category("Finance",14)),
      new Company("","TROW", 1, new Category("Finance",14)),
      new Company("","WFC", 1, new Category("Finance",14)),
      new Company("","D", 4, new Category("Utilities",12)),
      new Company("","SO", 3, new Category("Utilities",12)),
      new Company("","DUK", 3, new Category("Utilities",12)),
      new Company("","NEE", 2, new Category("Utilities",12)),
      new Company("","JNJ", 19, new Category("Health Care",11)),
      new Company("","PFE", 18, new Category("Health Care",11)),
      new Company("","AMGN", 16, new Category("Health Care",11)),
      new Company("","MRK", 15, new Category("Health Care",11)),
      new Company("","ABBV", 15, new Category("Health Care",11)),
      new Company("","MDT", 12, new Category("Health Care",11)),
      new Company("","UNH", 5, new Category("Health Care",11)),
      new Company("","DIS", 22, new Category("Consumer",8)),
      new Company("","COST", 19, new Category("Consumer",8)),
      new Company("","TGT", 14, new Category("Consumer",8)),
      new Company("","HD", 14, new Category("Consumer",8)),
      new Company("","NKE", 10, new Category("Consumer",8)),
      new Company("","CMCSA", 8, new Category("Consumer",8)),
      new Company("","KD", 8, new Category("Consumer",8)),
      new Company("","EL", 5, new Category("Consumer",8)),
      new Company("","T", 60, new Category("Telecom",6)),
      new Company("","VZ", 40, new Category("Telecom",6)),
      new Company("","UNP", 23, new Category("Industrials",4)),
      new Company("","WM", 20, new Category("Industrials",4)),
      new Company("","LMT", 20, new Category("Industrials",4)),
      new Company("","BA", 20, new Category("Industrials",4)),
      new Company("","3MM", 17, new Category("Industrials",4)),
      new Company("","APPL", 30, new Category("Tech",3)),
      new Company("","MSFT", 25, new Category("Tech",3)),
      new Company("","AVGO", 18, new Category("Tech",3)),
      new Company("","V", 14, new Category("Tech",3)),
      new Company("","CSCO", 13, new Category("Tech",3)),
      new Company("","", 0, new Category("Energy",2)),
      new Company("","", 0, new Category("Energy",2)),
      new Company("","", 0, new Category("Energy",2)),
  ];

  constructor() { }
}
