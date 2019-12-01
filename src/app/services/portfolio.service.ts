import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  Portfolio: Company[] = [
      new Company("Realty Income Corporation","O", 22, new Category("Real Estate",20)),
      new Company("New Residential Investment Corp","NRZ", 17, new Category("Real Estate",20)),
      new Company("Welltower Inc.","WELL", 16, new Category("Real Estate",20)),
      new Company("LTC Properties Inc","LTC", 16, new Category("Real Estate",20)),
      new Company("Simon Property Group Inc","SPG", 15, new Category("Real Estate",20)),
      new Company("STORE Capital Corporation\n","STOR", 14, new Category("Real Estate",20)),
      new Company("iShares iBoxx $ Investment Grade Corporate Bond ETF\n","LQD", 40, new Category("Bonds",20)),
      new Company("Vanguard Total International Bond ETF\n","BNDX", 30, new Category("Bonds",20)),
      new Company("iShares 7-10 Year Treasury Bond ETF\n","IEF", 10, new Category("Bonds",20)),
      new Company("iShares 3-7 Year Treasury Bond ETF\n","IEI", 10, new Category("Bonds",20)),
      new Company("iShares 1-3 Year Treasury Bond ETF\n","SHY", 10, new Category("Bonds",20)),
      new Company("JP Morgan Chase & Co.\n","JPM", 3, new Category("Finance",14)),
      new Company("Main Street Capital Corporation\n","MAIN", 3, new Category("Finance",14)),
      new Company("Bank of America\n","BAC", 2, new Category("Finance",14)),
      new Company("AFLAC Incorporated\n","AFL", 1, new Category("Finance",14)),
      new Company("Royal Bank Of Canada\n","RY", 1, new Category("Finance",14)),
      new Company("Toronto Dominion Bank (The)\n","TD", 1, new Category("Finance",14)),
      new Company("T. Rowe Price Group Inc.\n","TROW", 1, new Category("Finance",14)),
      new Company("Wells Fargo & Company\n","WFC", 1, new Category("Finance",14)),
      new Company("Dominion Energy Inc.\n","D", 4, new Category("Utilities",12)),
      new Company("Southern Company (The)\n","SO", 3, new Category("Utilities",12)),
      new Company("Duke Energy Corporation (Holding Company)\n","DUK", 3, new Category("Utilities",12)),
      new Company("NextEra Energy Inc.\n","NEE", 2, new Category("Utilities",12)),
      new Company("Johnson & Johnson\n","JNJ", 19, new Category("Health Care",11)),
      new Company("Pfizer Inc.\n","PFE", 18, new Category("Health Care",11)),
      new Company("Amgen Inc.\n","AMGN", 16, new Category("Health Care",11)),
      new Company("Merck & Company Inc. (new)\n","MRK", 15, new Category("Health Care",11)),
      new Company("AbbVie Inc.\n","ABBV", 15, new Category("Health Care",11)),
      new Company("Medtronic plc.\n","MDT", 12, new Category("Health Care",11)),
      new Company("UnitedHealth Group Incorporated (DE)\n","UNH", 5, new Category("Health Care",11)),
      new Company("Disney","DIS", 22, new Category("Consumer",8)),
      new Company("Costco Wholesale Corporation\n","COST", 19, new Category("Consumer",8)),
      new Company("Target Corporation\n","TGT", 14, new Category("Consumer",8)),
      new Company("Home Depot Inc. (The)\n","HD", 14, new Category("Consumer",8)),
      new Company("Nike Inc.\n","NKE", 10, new Category("Consumer",8)),
      new Company("Comcast Corporation Class A Common Stock\n","CMCSA", 8, new Category("Consumer",8)),
      new Company("Coca-Cola\n","KO", 8, new Category("Consumer",8)),
      new Company("Estee Lauder Companies Inc. (The)\n","EL", 5, new Category("Consumer",8)),
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
      new Company("Chevron Corporation","CVX", 60, new Category("Energy",2)),
      new Company("Exxon Mobil Corporation","XOM", 40, new Category("Energy",2)),
  ];

  constructor() { }

  getPortfolio() : Company[]{
    return this.Portfolio
  }
}
