import { Product } from './product';
import { User } from './user';

export class Sale {
    constructor(
        public user?: User,
        public product?: Product[],
        public total?: number
    ){}
}