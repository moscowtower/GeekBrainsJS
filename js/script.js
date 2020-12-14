class Product {
    constructor(id, name, price, amount, img, bigimg) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.img = 'img/' + img;
        this.bigimg = bigimg;
    }
}

var basket = {
    size: function(){
        return this.products.length
    },
    products: [],
    add: function(product){
        if (this.productInBasket(product)){
            this.products[product.id].amount += 1;
        }
        else {
            this.products.push(product)
        }
    },
    countTotal: function(){
        var total = 0
        for (var i = 0; i < this.products.length; i++){
            total += this.products[i].price * this.products[i].amount
            }
        return total
    },
    info: function(){
        switch (this.size()){
            case 0:
                alert('Корзина пуста');
                break;
            default:
            var result = 'В корзине ' + this.size() + ' предметов: \n'
            for (var i in this.products){
                result += this.products[i].name + ', ' +
                this.products[i].amount + ' штук, по ' + this.products[i].price + ' за штуку. \n'
            }
            result += 'ИТОГО: ' + this.countTotal();
            alert(result)
            }
        },
    productInBasket: function(product){
        for (var i in this.products){
            if (product.id == this.products[i].id) return true; 
        }
    }
    }

function showBasket(basket){
    var basketView = document.getElementById('basket');
    var basketImg = document.createElement('img');
    basketImg.className = 'basketImage';
    basketImg.src = 'https://i.pinimg.com/originals/70/40/5f/70405f68ba3a416658543134010b9ee5.png';
    basketImg.addEventListener("click", (event) => basket.info());
    basketView.appendChild(basketImg);
}

function showCatalog(products){
    var view = document.getElementById('catalog');
    var catalog = document.createElement('p');
    var gallery = document.createElement('DIV');
    var itemRow = document.createElement('DIV');
    var buttonRow = document.createElement('DIV');

    itemRow.className = 'row';
    buttonRow.className = 'buttonrow';
    catalog.textContent = 'Каталог';
    catalog.className = 'catalog';
    gallery.className = 'gallery';

    for (var i = 0; i < products.length; i++){
        var item = document.createElement('img');
        item.className = 'item';
        item.id = products[i].id
        item.src = products[i].img;

        var button = document.createElement('button');
        button.className = 'button';
        button.id = i;
        button.textContent = 'Купить';
        button.productId = products[i].id
        button.addEventListener('click', (event) => basket.add(products[event.target.id])); 

        //item.addEventListener('click', (event) => popUp());
        itemRow.appendChild(item);
        buttonRow.appendChild(button);
    }
    gallery.appendChild(itemRow);
    gallery.appendChild(buttonRow);
    view.appendChild(catalog);
    view.appendChild(gallery);
}


// //fill me maybe
item1 = new Product(0, 'Ведро', 500, 1, 'vedro.jpg',['img/big/vedroBig0.jpg', 'img/vedroBig1.jpg']); 
item2 = new Product(1, 'Лейка', 1000, 1, 'leika.jpg', ['img/big/leikaBig0.jpg', 'img/leikaBig1.jpg']);
item3 = new Product(2, 'Телогрейка', 1500, 1, 'telogreika.jpg',['img/big/telogreikaBig0.jpg', 'img/telogreikaBig1.jpg']);

// item1 = new Product(0, 'Ведро', 500, 1, 'vedro.jpg'); 
// item2 = new Product(1, 'Лейка', 1000, 1, 'leika.jpg');
// item3 = new Product(2, 'Телогрейка', 1500, 1, 'telogreika.jpg');

var productsList = [item1, item2, item3];
basket.add(item1);
basket.add(item2);
basket.add(item3);
//call me maybe

showBasket(basket);
showCatalog(productsList);