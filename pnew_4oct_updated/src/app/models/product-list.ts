import {Items} from '../models/items';
import {SearchCriteria} from '../models/search-criteria';

export class ProductList {

    items:Array<Items>;
    search_criteria:SearchCriteria;
    total_count:number;
}
