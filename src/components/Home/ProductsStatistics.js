import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Yearly Products Statistics</h5>
          <iframe 
            style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
            width: "100%",
            height: "350px",
          }} 
          src="https://charts.mongodb.com/charts-iresa-uwvnb/embed/charts?id=626e5529-3dbc-4b6b-8a34-7d3ddb645c54&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        </article>

        <article className="card-body">
          <h5 className="card-title">Monthly Products Statistics</h5>
          <iframe 
            style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
            width: "100%",
            height: "350px",
          }} 
          src="https://charts.mongodb.com/charts-iresa-uwvnb/embed/charts?id=626e6fa4-8313-4caa-8bab-8fc879ac150a&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
