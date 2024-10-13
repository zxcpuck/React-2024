// export interface IProductModel {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     discountPercentage: number;
//     rating: number;
//     stock: number;
//     tags: string[];
//     brand: string;
//     sku: string;
//     weight: number;
//     dimensions: Dimensions;
//     warrantyInformation: string;
//     shippingInformation: string;
//     availabilityStatus: string;
//     reviews: Review[];
//     returnPolicy: string;
//     minimumOrderQuantity: number;
//     meta: Meta;
//     thumbnail: string;
//     images: string[];
// }
//
// export interface Dimensions {
//     width: number;
//     height: number;
//     depth: number;
// }
//
// export interface Review {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
// }
//
// export interface Meta {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
// }

// Product.ts
export interface IProductModel {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    thumbnail: string;
    images: string[];
}

