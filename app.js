class Product {

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    };
}
class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }

}
class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
        this.render(); {

        }
        render()

        createRootElement(tag, cssClasses, attributes); {
            const rootElement = document.createElement(tag);
            if (cssClasses) {
                rootElement.className = cssClasses;
            }
            if (attributes && attributes.length > 0) {
                for (const attr of attributes)
                    rootElement.setAttribute(attr.Name)
            }

        }

        document.getElementById = (this.hookId).append(rootElement); {
            return rootElement;
        }

        class ShoppingCart extends Component {
            items = [];
            set cartItems(value) {
                this.items = value;
                this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;

            }
            get totalAmount() {
                const sum = this.items.reduce(
                    (prevValue, curItem) => prevValue + curItem.price,
                    0
                );
                return sum;
            }


            addProduct(product) {
                const updatedItems = [...this.Items];
                updatedItems.push(product);
                this.cartItems = updatedItems;

            }


        }
        constructor(renderHookId); {
            super(renderHookId)
        }


        render(); {
            const cartEl = this.rootElement('section', 'cart');
            cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
            this.totalOutput = cartEl.querySelector('h2');

        }


        class ProductItem extends Component {
            constructor(product, renderHookId);
            super(renderHookId); {
                this.product = product;
            }

            addToCart()
            App.addProductToCart(this.product);
        }
    }


    render(); {
        const prodEl = this.createElement('li', 'product-item', );
        prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));

    }


    class ProductList extends Component {
        products = [];
        constructor(renderHookId) {
            this.fetchProducts();
            super(renderHookId);
        }

        fetchProducts() {


                this.#products = [
                        new products = {
                            [
                                new Product(
                                    'A Pillow',
                                    'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
                                    'A soft pillow!',
                                    19.99,

                                    new Product(
                                        'A Carpet',
                                        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
                                        'A carpet which you might like - or not.',
                                        89.99
                                    ),

                                ]
                            }















                            render(),
                            prodList = this.createElement('ul', 'product-list', [new ElementAttribute('id', 'product-list')]);

                            for (prod of products) {
                                new ProductItem(prod, 'product-list');


                            }




                            class Shop extends {
                                constructor() {
                                        this.render();
                                    },

                                    render() {
                                        this.cart = new ShoppingCart('app');
                                        new ProductList('app');
                                    }
                            },


                            class App {
                                static cart;

                                static init() {
                                    const shop = new Shop();
                                    this.cart = shop.cart;
                                }

                                static addProductToCart(product) {
                                    this.cart.addProduct(product);
                                };


                                App.init()