import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const ProductsDatabases = ({ data }) => {
  return (
    <Col name="products-databases" header="Databases">
      {data.allProductsDatabases.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className="o-menu__item" key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className="o-menu__link"
              role="menuitem"
            >
              <span className="o-menu__title">
                {node.title}
              </span>
            </a>
          </li>
        );
      })}
    </Col>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query productsDatabases {
        allProductsDatabases {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => <ProductsDatabases data={data} {...props} />}
  />
);
