function Product(prodId, price){
    this.prodId = prodId;
    this.price = price;
    this.changePrice = function(discount){
        this.discount = discount;
    }
}

var p = new Product("sugar",250)
p.changePrice(200);
console.log(p);