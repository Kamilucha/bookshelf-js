export default function () {
  return {
    // Shoppin
      //apple
    appleBooksIconPath: new URL(
      '../images/shopping-list/apple-books.png',
        import.meta.url)
        .href,
      
    //bookshop
    bookShopIconPath: new URL('../images/shopping-list/book-shop.png', import.meta.url)
      .href,

    //amazon
    amazonIconPath: new URL('../images/shopping-list/amazon.png', import.meta.url).href,

    // Empty
    emptyListStubImage: new URL('../images/shoppingbook1.png', import.meta.url)
      .href,

    // SVG
    svgTrashIcon: new URL('../images/shopping-list/symbol-defs.svg', import.meta.url),
  };
}
