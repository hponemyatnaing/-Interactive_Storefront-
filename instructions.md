# Interactive Storefront Instructions

Here are the simple steps to make the storefront work:

## Task 1: Light and Dark Mode
1. **Check the starting theme:** Look at the `savedTheme` variable. If it says 'dark', make the whole page dark (add the `dark-mode` class to the page's body).
2. **Make the toggle button work:** Find the theme button. When you click it, the page should switch between light mode and dark mode.

## Task 2: Show the Cart
Inside the `updateCartDisplay()` function, you need to update what the user sees:
1. **Clear the old list:** Find the cart box on the page and empty out what is currently inside it.
2. **Show the new list:** Look at every item in your `shoppingCart`. Put each item onto the page. Make sure to add a "Remove" button for each item.
3. **Calculate the money:** 
   - Add up the prices of all items (Subtotal).
   - Calculate a 10% tax on that subtotal.
   - Add the subtotal and tax to get the Grand Total.
4. **Update the screen:** Show the new subtotal, tax, and grand total numbers on the page.

## Task 3: Add and Remove Items
1. **Adding to cart:** Find all the "Add to Cart" buttons. When you click one of them, get the item's details (ID, name, and price). Put this new item into your `shoppingCart` list, then update the screen. *(Note: Make sure the price is a number, not text).*
2. **Removing from cart:** Make the "Remove" buttons work. When clicked, find that item in the `shoppingCart` list, remove it, and then update the screen.