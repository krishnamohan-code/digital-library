import { Component, OnInit } from '@angular/core';
import { accounts } from './../account';
import { userAccount } from './../userAccount';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
   
  accounts:userAccount[];
  newAccount:any={};
  constructor() { }

  ngOnInit(): void
   {
    this.accounts=accounts;
    }

addAccount(newAccount):any
{
  this.accounts.unshift(newAccount);
  this.newAccount={};
  console.log(newAccount.name);
  
}

}
