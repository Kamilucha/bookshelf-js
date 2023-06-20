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
    emptyListStubImage: new URL('../images/shopping-list/shoppingbook1.png', import.meta.url)
      .href,

    // SVG
    svgTrashIcon: new URL('../svgsprite/symbol-defs.svg#icon-trash', import.meta.url),

    svgClose: new URL('../svgsprite/symbol-defs.svg#icon-close', import.meta.url),
  };
}
