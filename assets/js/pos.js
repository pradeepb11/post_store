function addtoCart(id) {
    console.log(id);
    const localStorageItems = getCartItem();
    // search localStorage product item for checking already has this product in local


}


const getCartItem = () => {
    const cartItemSearch = localStorage.getItem("cart-items");
    let cartItems;
    if (cartItemSearch) {
        cartItems = JSON.parse(cartItemSearch);
    } else {
        cartItems = { products: [] };
    }
    return cartItems;
};