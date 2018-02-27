import { Product } from './product';
import { User } from './user';

export class Sale {
    constructor(
        public user?: User,
        public products?: Product[],
        public total?: number
    ){}
}