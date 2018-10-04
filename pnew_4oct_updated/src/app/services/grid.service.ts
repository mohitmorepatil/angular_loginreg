import { Injectable } from '@angular/core';
import {ProductList} from '../models/product-list';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  execute(option: any) {
    debugger;
    let data: Array<any> = JSON.parse(JSON.stringify(option.data.items));
   // data = this.searchComplexPipe.transform(data, option);
    //data = this.searchAllDataPipe.transform(data, option);
    //data = this.sortPipe.transform(data, option);


    let rowCount = data.length;
   // alert(rowCount)
    let pagecount = parseInt((rowCount / option.pageSize).toString());
    //alert(pagecount)
    if (rowCount % option.pageSize != 0) {
      pagecount = pagecount + 1;
    }
    option.pageCount = pagecount;

    let start = (option.currentPage - 1) * option.pageSize;
    let end = start + option.pageSize;
//alert(start)
//alert(end)
    let pages: Array<any> = [];
    for (let i = 1; i <= pagecount; i++) {
      pages.push(i)
    }
    //alert(pages);

    let row = data.slice(start, end);
    option.row = row;
    option.pages = pages;
  }

}
