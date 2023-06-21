export default function () {
  return {
    // Shoppin
      //apple
    appleBooksIconPath: new URL(
      '../images/shopping-list/apple-books-2.png',
        import.meta.url)
        .href,
      
    //bookshop
    bookShopIconPath: new URL('../images/shopping-list/book-shop-2.png', import.meta.url)
      .href,

    //amazon
    amazonIconPath: new URL('../images/shopping-list/amazon-2.png', import.meta.url).href,

    // Empty
    emptyListStubImage: new URL('../images/shopping-list/shoppingbook1.png', import.meta.url)
      .href,

    // SVG
    svgTrashIcon: new URL('../svgsprite/symbol-defs.svg#icon-trash', import.meta.url),

    svgClose: new URL('../svgsprite/symbol-defs.svg#icon-close', import.meta.url),


    // SWITCHER
   colorSwitcherCnt: document.querySelector('.color-scheme-switcher'),
    colorSwitcher: document.querySelector('#color-scheme-switcher-checkbox'),
    colorSwitcherSlider: document.querySelector(
      '.color-scheme-switcher-slider'
    ),
  };
}
