$(document).ready(function () {
  var productItem = [
    {
      productName: "Camara GOPRO X7",
      price: "1800.00",
      photo: "camera.jpg",
    },
    {
      productName: "Disco duro 5TB",
      price: "800.00",
      photo: "external-hard-drive.jpg",
    },
    {
      productName: "Notebook Gamer Asus",
      price: "500.00",
      photo: "laptop.jpg",
    },
    {
      productName: "Apple Watch S8",
      price: "1000.00",
      photo: "watch.jpg",
    },
  ];
  showProductGallery(productItem);
  showCartTable();
});

function addToCart(element) {
  var productParent = $(element).closest("div.product-item");

  var price = $(productParent).find(".price span").text();
  var productName = $(productParent).find(".productname").text();
  var quantity = $(productParent).find(".product-quantity").val();

  var cartItem = {
    productName: productName,
    price: price,
    quantity: quantity,
  };
  var cartItemJSON = JSON.stringify(cartItem);

  var cartArray = new Array();
  // If javascript shopping cart session is not empty
  if (sessionStorage.getItem("shopping-cart")) {
    cartArray = JSON.parse(sessionStorage.getItem("shopping-cart"));
  }
  cartArray.push(cartItemJSON);

  var cartJSON = JSON.stringify(cartArray);
  sessionStorage.setItem("shopping-cart", cartJSON);
  showCartTable();
}

function emptyCart() {
  if (sessionStorage.getItem("shopping-cart")) {
    // Clear JavaScript sessionStorage by index
    sessionStorage.removeItem("shopping-cart");
    showCartTable();
  }
}

function removeCartItem(index) {
  if (sessionStorage.getItem("shopping-cart")) {
    var shoppingCart = JSON.parse(sessionStorage.getItem("shopping-cart"));
    sessionStorage.removeItem(shoppingCart[index]);
    showCartTable();
  }
}

function showCartTable() {
  var cartRowHTML = "";
  var itemCount = 0;
  var grandTotal = 0;

  var price = 0;
  var quantity = 0;
  var subTotal = 0;

  if (sessionStorage.getItem("shopping-cart")) {
    var shoppingCart = JSON.parse(sessionStorage.getItem("shopping-cart"));
    itemCount = shoppingCart.length;

    //Iterate javascript shopping cart array
    shoppingCart.forEach(function (item) {
      var cartItem = JSON.parse(item);
      price = parseFloat(cartItem.price);
      quantity = parseInt(cartItem.quantity);
      subTotal = price * quantity;

      cartRowHTML +=
        "<tr>" +
        "<td>" +
        cartItem.productName +
        "</td>" +
        "<td class='text-right'>$" +
        price.toFixed(2) +
        "</td>" +
        "<td class='text-right'>" +
        quantity +
        "</td>" +
        "<td class='text-right'>$" +
        subTotal.toFixed(2) +
        "</td>" +
        "</tr>";

      grandTotal += subTotal;
    });
  }

  $("#cartTableBody").html(cartRowHTML);
  $("#itemCount").text(itemCount);
  $("#totalAmount").text("$" + grandTotal.toFixed(2));
}

function showProductGallery(product) {
  //Iterate javascript shopping cart array
  var productHTML = "";
  product.forEach(function (item) {
    productHTML +=
      '<div class="product-item">' +
      '<img src="product-images/' +
      item.photo +
      '">' +
      '<div class="productname">' +
      item.productName +
      "</div>" +
      '<div class="price">$<span>' +
      item.price +
      "</span></div>" +
      '<div class="cart-action">' +
      '<input type="text" class="product-quantity" name="quantity" value="1" size="2" />' +
      '<input type="submit" value="Agregar" class="add-to-cart" onClick="addToCart(this)" />' +
      "</div>" +
      "</div>";
    ("<tr>");
  });
  $("#product-item-container").html(productHTML);
}

function calculo() {
  //tasa de impuesto
  var tasa = 21;

  //monto a calcular el impuesto
  var monto = $("input[name=monto]").val();

  //calsulo del impuesto
  var iva = (monto * tasa) / 100;

  //se carga el iva en el campo correspondien te
  $("input[name=iva]").val(iva);

  //se carga el total en el campo correspondiente
  $("input[name=total]").val(parseInt(monto) + parseInt(iva));
}
