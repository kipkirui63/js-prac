function main() {
    var prodID = readLine();
    var price = parseInt(readLine(),10);
    var discount = parseInt(readLine(),10);
    
    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);
    
    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        this.price -= (discount / 100) * this.price;
        
    }
}




var p = new Product("prodID", "price");
p.changePrice("newPrice");