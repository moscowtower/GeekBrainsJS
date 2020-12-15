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
    size: function () {
        return this.products.length
    },
    products: [],
    productIds: [],
    add: function (productId) {
        productId = productId.substr(1);
        let item = productsList[productId];
        if (this.productIds.includes(item.id)) {
            this.getProductByID(item.id).amount += 1;
        }
        else {
            this.products.push(item);
            this.productIds.push(item.id);
        }
        createBasketPopUp(this);
    },
    remove: function (productId) {
        productId = productId.substr(1);
        let item = productsList[productId];
        if (this.productIds.includes(item.id)) {
            productToDelete = this.getProductByID(item.id);
            indexOfProductToDelete = this.products.indexOf(productToDelete)
            this.products.splice(indexOfProductToDelete, 1);
            indexOfId = this.productIds.indexOf(item.id);
            this.productIds.splice(indexOfId, 1)
            //console.log(this.size() + ' from remove')
        }
        createBasketPopUp(this);
    }
    ,
    countTotal: function () {
        //console.log(this.size() + ' from countTotal')
        if (this.size() < 1) {
            return 0;
        }
        var total = 0
        for (var i = 0; i < this.size(); i++) {
            total += this.products[i].price * this.products[i].amount
        }
        return total
    },
    getProductByID: function (id) {
        for (var i = 0; i < this.size(); i++) {
            if (this.products[i].id == id) {
                return this.products[i];
            }
        }
    },
    getProductByNAME: function (name) {
        for (var i = 0; i < this.size(); i++) {
            if (this.products[i].name == name) {
                return this.products[i];
            }
        }
    },
    info: function () {
        switch (this.size()) {
            case 0:
                console.log('Корзина пуста');
                break;
            default:
                var result = 'В корзине ' + this.size() + ' предметов: \n'
                for (var i in this.products) {
                    result += this.products[i].name + ', ' +
                        this.products[i].amount + ' штук, по ' + this.products[i].price + ' за штуку. \n'
                }
                result += 'ИТОГО: ' + this.countTotal();
            //console.log(result)
        }
    },
}
function showBasket(basket) {
    var basketView = document.getElementById('basket');
    var basketImg = document.createElement('img');
    basketImg.className = 'basketImage';
    basketImg.src = 'https://i.pinimg.com/originals/70/40/5f/70405f68ba3a416658543134010b9ee5.png';
    basketImg.addEventListener("click", (event) => basket.info());
    basketView.appendChild(basketImg);
}

function showCatalog(products) {
    var gallery = document.getElementById('gallery')
    var itemRow = document.createElement('DIV');
    var buttonRow = document.createElement('DIV');

    itemRow.className = 'row';
    buttonRow.className = 'buttonrow';
    gallery.className = 'gallery';

    for (var i = 0; i < products.length; i++) {
        var item = document.createElement('img');
        item.className = 'item';
        item.id = products[i].id
        item.src = products[i].img;

        var button = document.createElement('button');
        button.className = 'buy_button';
        button.id = i;
        button.textContent = 'Купить';
        button.productId = products[i].id
        console.log(products[i].id)
        //button.addEventListener('click', (event) => basket.add(event.target.id));

        //item.addEventListener('click', (event) => popUp());
        itemRow.appendChild(item);
        buttonRow.appendChild(button);
    }
    gallery.appendChild(itemRow);
    gallery.appendChild(buttonRow);

}

function giveAction() {
    var buyButtons = document.getElementsByClassName('buy_button');
    arr_buyButtons = Array.from(buyButtons);
    arr_buyButtons.forEach(element =>
        element.addEventListener('click', (event) => basket.add(element.productId)));
}

function giveXaction() {
    var xButtons = document.getElementsByClassName('close')
    arr_xButtons = Array.from(xButtons);
    arr_xButtons.forEach(element =>
        element.addEventListener('click', (event) => basket.remove(basket.getProductByNAME(element.parentElement.innerHTML.split(',')[0]).id)));
}
function createBasketPopUp(basket) {
    var popUp = document.getElementById('main popup');
    popUp.innerHTML = "";
    var headline = document.createElement('h3');
    headline.textContent = 'Состав корзины';
    popUp.appendChild(headline);
    var itemList = document.createElement('ul');
    if (basket.size() < 1) {
        var item = document.createElement('li');
        item.textContent = 'пусто';
        itemList.appendChild(item);
        popUp.appendChild(itemList);
    }
    for (var i = 0; i < basket.size(); i++) {
        var item = document.createElement('li')
        item.textContent = basket.products[i].name + ', ' + basket.products[i].amount + ' шт.';
        itemList.appendChild(item);
        if (document.getElementById('popup-total') == null) {
            var total = document.createElement('span');
            total.textContent = 'ИТОГО: ' + basket.countTotal();
            total.className = 'popup-total';
            total.id = 'popup-total';
        }
        popUp.appendChild(itemList);
        popUp.appendChild(total);

        var nodeList = document.getElementsByTagName('li');
        var arr_nodelist = Array.from(nodeList);
        arr_nodelist.forEach(element => {
            var cancel = document.createElement('span');
            cancel.className = 'close';
            cancel.textContent = '\u00D7';
            element.appendChild(cancel);
        });
        giveXaction();
    }
    if (total) {
        var nextButton = document.createElement('button');
        nextButton.textContent = 'Далее';
        nextButton.addEventListener('click', (event) => createAddressBlock()); //placeholder
        popUp.appendChild(nextButton);
    }
    function createAddressBlock() {
        popUp.innerHTML = "";
        var headline = document.createElement('h3');
        headline.textContent = 'Адрес доставки';
        popUp.appendChild(headline);

        var form = document.createElement('form');

        let country = document.createElement('input');
        country.required = true;
        let tCountry = document.createElement('p')
        tCountry.textContent = 'Страна:';
        tCountry.appendChild(country)
        form.appendChild(tCountry);

        let city = document.createElement('input');
        city.required = true;
        let tCity = document.createElement('p')
        tCity.textContent = 'Город:';
        tCity.appendChild(city);
        form.appendChild(tCity);

        let street = document.createElement('input');
        street.required = true;
        let tStreet = document.createElement('p')
        tStreet.textContent = 'Улица:';
        tStreet.appendChild(street);
        form.appendChild(tStreet);

        let house = document.createElement('input');
        house.required = true;
        let tHouse = document.createElement('p')
        tHouse.textContent = 'Дом:';
        tHouse.appendChild(house);
        form.appendChild(tHouse);

        let appt = document.createElement('input');
        appt.required = true;
        let tAppt = document.createElement('p')
        tAppt.textContent = 'Квартира:';
        tAppt.appendChild(appt);
        form.appendChild(tAppt);

        let submitButton = document.createElement('input');
        submitButton.type = 'button';
        submitButton.className = 'submit';
        submitButton.value = 'подвердить';
        submitButton.addEventListener('submit', (event) => form.submit());
        form.appendChild(submitButton);
        popUp.appendChild(form);
        nextButton.addEventListener('click', (event) => createCommentBlock());
        nextButton.className = 'next';
        popUp.appendChild(nextButton);
    }

    function createCommentBlock() {
        popUp.innerHTML = "";
        let headline = document.createElement('h3');
        headline.textContent = 'Комментарий';
        popUp.appendChild(headline);

        let form = document.createElement('form')

        let comment = document.createElement('textarea')
        comment.className = 'comment';

        let submitButton = document.createElement('input');
        submitButton.type = 'button';
        submitButton.className = 'submit';
        submitButton.value = 'отправить';
        submitButton.addEventListener('submit', (event) => form.submit());

        form.appendChild(comment);
        form.appendChild(submitButton);
        popUp.append(form);
    }
}


//fill me maybe
var item1 = new Product('i0', 'Ведро', 500, 1, 'vedro.jpg', ['img/big/vedroBig0.jpg', 'img/vedroBig1.jpg']);
var item2 = new Product('i1', 'Лейка', 1000, 1, 'leika.jpg', ['img/big/leikaBig0.jpg', 'img/leikaBig1.jpg']);
var item3 = new Product('i2', 'Телогрейка', 1500, 1, 'telogreika.jpg', ['img/big/telogreikaBig0.jpg', 'img/telogreikaBig1.jpg']);

var productsList = [item1, item2, item3];


//call me maybe
showBasket(basket);
showCatalog(productsList);
giveAction();



//jquery tryout
$(document).ready(function () {
    $(".giveaction").click(function () { // empty удаляет дочерние элементы, а не контент корзины
        basket.products.length = 0;;
    });
});

(function () {

    $("#basket").on("click", function () {
        createBasketPopUp(basket);
        $(".popup").fadeToggle("slow");
    });

})();
