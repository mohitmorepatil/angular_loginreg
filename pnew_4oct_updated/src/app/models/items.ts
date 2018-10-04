import {CustomAttributes} from '../models/custom-attributes';
export class Items {
            "id": number;
            "sku": string;
            "name": string;
            "attribute_set_id": number;
            "price": number;
            "status": number;
            "visibility": number;
            "type_id": string;
            "created_at": string;
            "updated_at": string;
            "product_links": any;
            "tier_prices": any;
            "custom_attributes":Array<CustomAttributes>
}
