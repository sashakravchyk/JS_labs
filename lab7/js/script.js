(function (global) {
  const ns = {};

  const homeHtml = "snippets/home.html";
  const allCategoriesUrl = "data/catalog.json";
  const categoriesTitleHtml = "snippets/categoriesTitle.html";
  const categoryHtml = "snippets/categoryItem.html";
  const catalogItemsUrl = "data/categs/";
  const catalogItemsTitleHtml = "snippets/productTitle.html";
  const catalogItemHtml = "snippets/productItem.html";

  const insertHtml = function (selector, html) {
    const targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  const showLoading = function (selector) {
    let html = '<div id="loader" class="loader"></div>';
    insertHtml(selector, html);
  };

  const insertProperty = function (string, propName, propValue) {
    const propToReplace = `{{${propName}}}`;
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };

  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#mainHome");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#mainHome").innerHTML = responseText;
      },
      false
    );
  });

  ns.loadCatalogCategories = function () {
    showLoading("#mainHome");
    $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
  };

  ns.loadHome = function () {
    showLoading("#mainHome");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        switchHomeToActive();
        document.querySelector("#mainHome").innerHTML = responseText;
      },
      false
    );
  };

  function buildAndShowCategoriesHTML(categories) {
    $ajaxUtils.sendGetRequest(
      categoriesTitleHtml,
      function (categoriesTitleHtml) {
        $ajaxUtils.sendGetRequest(
          categoryHtml,
          function (categoryHTML) {
            switchCatalogToActive();
            const categoriesViewHtml = buildCategoriesViewHtml(
              categories,
              categoriesTitleHtml,
              categoryHTML
            );
            insertHtml("#mainHome", categoriesViewHtml);
          },
          false
        );
      },
      false
    );
  }

  function buildCategoriesViewHtml(
    categories,
    categoriesTitleHtml,
    categoryHtml
  ) {
    let finalHTML = categoriesTitleHtml;
    finalHTML += "<div class='container p-0'>";
    finalHTML += "<section class='row'>";
    for (let i = 0; i < categories.length; i++) {
      let html = categoryHtml;
      const name = "" + categories[i].name;
      const short_name = categories[i].short_name;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "short_name", short_name);
      finalHTML += html;
    }
    finalHTML += "</section>";
    finalHTML += "</div>";
    return finalHTML;
  }

  ns.loadCatalogItems = function (categoryShort) {
    showLoading("#mainHome");
    $ajaxUtils.sendGetRequest(
      catalogItemsUrl + categoryShort + ".json",
      buildAndShowCatalogItemsHTML
    );
  };

  function buildAndShowCatalogItemsHTML(categoryCatalogItems) {
    $ajaxUtils.sendGetRequest(
      catalogItemsTitleHtml,
      function (catalogItemTitleHtml) {
        $ajaxUtils.sendGetRequest(
          catalogItemHtml,
          function (catalogItemHtml) {
            switchCatalogToActive();
            const catalogItemsViewHtml = buildCatalogItemsViewHtml(
              categoryCatalogItems,
              catalogItemTitleHtml,
              catalogItemHtml
            );
            insertHtml("#mainHome", catalogItemsViewHtml);
          },
          false
        );
      },
      false
    );
  }

  function buildCatalogItemsViewHtml(
    categoryCatalogItems,
    catalogItemsTitleHtml,
    catalogItemHtml
  ) {
    catalogItemsTitleHtml = insertProperty(
      catalogItemsTitleHtml,
      "name",
      categoryCatalogItems.category.name
    );

    catalogItemsTitleHtml = insertProperty(
      catalogItemsTitleHtml,
      "special_instructions",
      categoryCatalogItems.category.special_instructions
    );

    let finalHtml = catalogItemsTitleHtml;
    
    finalHtml += "<section class='row'>";

    const catalogItems = categoryCatalogItems.catalog_items;
    const catShort_name = categoryCatalogItems.category.short_name;
    for (let i = 0; i < catalogItems.length; i++) {
      let html = catalogItemHtml;

      html = insertProperty(html, "short_name", catalogItems[i].short_name);

      html = insertProperty(html, "catShort_name", catShort_name);

      html = insertItemPrice(
        html,
        "price_retail",
        catalogItems[i].price_retail
      );

      html = insertItemAmount(
        html,
        "amount_retail",
        catalogItems[i].amount_retail
      );

      html = insertItemPrice(
        html,
        "price_wholesale",
        catalogItems[i].price_wholesale
      );

      html = insertItemAmount(
        html,
        "amount_wholesale",
        catalogItems[i].amount_wholesale
      );

      html = insertProperty(html, "name", catalogItems[i].name);

      html = insertProperty(html, "description", catalogItems[i].description);

      finalHtml += html;
    }

    finalHtml += "</section>";
    return finalHtml;
  }

  function insertItemPrice(html, pricePropName, priceValue) {
    if (!priceValue) {
      return insertProperty(html, pricePropName, "");
    }
    priceValue = "$" + priceValue.toFixed(2);
    html = insertProperty(html, pricePropName, priceValue);
    return html;
  }

  function insertItemAmount(html, amountPropName, amountValue) {
    if (!amountValue) {
      return insertProperty(html, amountPropName, "");
    }
    amountValue = "(" + amountValue + ")";
    html = insertProperty(html, amountPropName, amountValue);
    return html;
  }

  const switchCatalogToActive = function () {
    let classes = document.querySelector("#linkHome").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#linkHome").className = classes;

    classes = document.querySelector("#linkCategory").className;
    if (classes.indexOf("active") === -1) {
      classes += " active";
      document.querySelector("#linkCategory").className = classes;
    }
  };

  const switchHomeToActive = function () {
    let classes = document.querySelector("#linkCategory").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#linkCategory").className = classes;

    classes = document.querySelector("#linkHome").className;
    if (classes.indexOf("active") === -1) {
      classes += " active";
      document.querySelector("#linkHome").className = classes;
    }
  };

  ns.loadSpecials = function (categoryShort) {
    showLoading("#mainHome");
    const randomCategory = ["C1", "C2", "C3"][Math.floor(Math.random() * 3)];
    $ajaxUtils.sendGetRequest(
      catalogItemsUrl + randomCategory + ".json",
      buildAndShowCatalogItemsHTML
    );
  };

  global.$ns = ns;
})(window);
