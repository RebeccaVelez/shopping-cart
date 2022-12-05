var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 300;

function calc(n) {
    var price = document.getElementsByClassName("item_price")[n].innerHTML;
    var noTickets = document.getElementsByClassName("num")[n].value;
    var total = parseFloat(price) * noTickets;
    if (!isNaN(total))
        document.getElementsByClassName("product-total")[n].innerHTML = total;
}

/* Remove item from cart */
function removeItem(n)
{
    /* Remove row from DOM and recalc cart total */
    var productRow = $(n).parent().parent();
    productRow.slideUp(fadeTime, function() {
        productRow.remove();
        // recalculateCart();
    });
}