import { Category } from './category';

export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category_id?: number,
        public category?: Category,
        public photo?: string,
        public count?: number,
        public description?: string
    ){}
}