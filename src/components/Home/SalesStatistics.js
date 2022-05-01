import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Yearly Sale Statistics</h5>
          <iframe 
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
            width: "100%",
            height: "350px",
          }}
          src="https://charts.mongodb.com/charts-iresa-uwvnb/embed/charts?id=626e523e-0c36-4a72-8563-4b943cbe56a4&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        </article>

        <article className="card-body">
          <h5 className="card-title">Monthly Sale Statistics</h5>
          <iframe 
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
            width: "100%",
            height: "350px",
          }}
          src="https://charts.mongodb.com/charts-iresa-uwvnb/embed/charts?id=626e5daa-7769-4c5f-8a1d-58db5522f38e&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
