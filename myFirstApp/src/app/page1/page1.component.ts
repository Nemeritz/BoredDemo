import { Component, OnInit } from '@angular/core';
import { debug } from 'util';
import { FormControl } from '@angular/forms';
import { tableOption } from '../models/tableOption.model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  Output = new FormControl('');
  NewVariable = new FormControl('');
  Account = new FormControl('');
  FromTable = new FormControl('');
  DesiredTable = new FormControl('');
  DesiredTableField = new FormControl('');

  tableOptions: tableOption[] = [
    {name: 'Members'},
    {name: 'Products'},
    {name: 'PriceBreaks'},
    {name: 'Orders'},
    {name: 'OrderDetails'}
  ]

  constructor() { }

  ngOnInit() {
  }

  OnSubmit() {
    this.Output.setValue(this.findDesiredFromTable());
  }

  findDesiredFromTable(): string {

    return ',' + this.NewVariable.value + ' = SELECT' + this.DesiredTableField.value + ' FROM ' + this.Account.value + '_'
            + this.FromTable.value + ' LEFT JOIN ' + this.Account.value + '_' + this.DesiredTable.value + ' ON FROMTABLE_1 '
            + ' = ' + 'idTABLE2' + ' WHERE ' + 'id' + this.Account.value + '_' + this.DesiredTable.value + ' = ' + 'FROMTABLE_1';
  }

  defaultOption($scope) {
    $scope.prop = {
      defaultTable: 'Members'
    };
  }
  
}
