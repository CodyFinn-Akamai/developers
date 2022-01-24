import React from "react";

import ProductsFeatured from "./productsFeatured";
import ProductsCompute from "./productsCompute";
import ProductsStorage from "./productsStorage";
import ProductsDatabases from "./productsDatabases";
import ProductsServices from "./productsServices";
import ProductsNetworking from "./productsNetworking";
import ProductsDevTools from "./productsDevTools";

const ProductMenus = () => (
  <div className="o-layout__row c-sub-menu c-sub-menu--products" id="sub-menu--products">
    <div className="o-layout__colset">
      <div className="o-layout__col">
        <ProductsFeatured />
        <div className="o-layout__module">
          <a href="https://linode.com/products/" className="o-link--arrow">
            View All Products
          </a>
        </div>
      </div>
      <div className="o-layout__col">
        <ProductsCompute />
        <ProductsStorage />
        <ProductsDatabases />
        <ProductsServices />
      </div>
      <div className="o-layout__col">
        <ProductsNetworking />
        <ProductsDevTools />
      </div>
    </div>
  </div>
);

export default ProductMenus;
