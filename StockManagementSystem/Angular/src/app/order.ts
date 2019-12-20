export class Order {
    constructor(
        public orderId: number,
        public cartId: number,
        public id: number,
        public productId: number,
        public productName: string,
        public productCategory: string,
        public productCompany: string,
        public productQuantity: number
        public productPrice: number,
    ) { }
}
