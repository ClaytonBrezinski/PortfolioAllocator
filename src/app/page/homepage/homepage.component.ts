import { Component, OnInit } from '@angular/core';
import {Company} from "../../models/company";
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  portfolio: Company[] = [];

  constructor(private portfolioServiceService: PortfolioService) { }

  ngOnInit() {
    this.portfolio = this.portfolioServiceService.getPortfolio();
  }

}
