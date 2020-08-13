import { Component } from '@angular/core';
import{Learn} from  '../learn';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  shoppingList = [];
  shoppingitem;

  addlist(){
    this.shoppingList.push(new Learn(this.shoppingitem));
    console.log(this.shoppingList)
  }

  deleteList(i){


    console.log(i);
    this.shoppingList.splice(i,1);
    }


}
