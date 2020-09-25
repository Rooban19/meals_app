class Product{
    constructor(id,ownerId,title,imageUrl,description,price){
        this.id = id;
        this.title = title;
        this.ownerId = ownerId;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

export default Product;