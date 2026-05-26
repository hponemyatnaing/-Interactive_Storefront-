$(document).ready(function () {

  const themeToggleBtn = $('#themeToggleBtn');

  const cartItemsContainer = $('#cartItemsContainer');

  const subtotalElement = $('#subtotal');

  const taxElement = $('#tax');

  const totalElement = $('#total');

  const addToCartButtons = $('.add-to-cart');

  let shoppingCart = [];

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    $('body').addClass('dark-mode');
  }

  themeToggleBtn.on('click', function () {

    $('body').toggleClass('dark-mode');

    if ($('body').hasClass('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

  });

  function updateCartDisplay() {

    cartItemsContainer.html('');

    let subtotal = 0;

    shoppingCart.forEach((item, index) => {

      subtotal += item.price;

      const cartItem = `
                <div class="cart-item">
                    <p>${item.name} - $${item.price.toFixed(2)}</p>

                    <button class="remove-btn" data-index="${index}">
                        Remove
                    </button>
                </div>
            `;

      cartItemsContainer.append(cartItem);

    });

    const tax = subtotal * 0.10;

    const grandTotal = subtotal + tax;

    subtotalElement.text(`$${subtotal.toFixed(2)}`);

    taxElement.text(`$${tax.toFixed(2)}`);

    totalElement.text(`$${grandTotal.toFixed(2)}`);

  }

  addToCartButtons.on('click', function () {

    const id = $(this).data('id');

    const name = $(this).data('name');

    const price = parseFloat($(this).data('price'));

    const item = {
      id,
      name,
      price
    };

    shoppingCart.push(item);

    updateCartDisplay();

  });

  $(document).on('click', '.remove-btn', function () {

    const itemIndex = $(this).data('index');

    shoppingCart.splice(itemIndex, 1);

    updateCartDisplay();

  });

});