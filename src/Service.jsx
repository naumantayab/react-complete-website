import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";
const Services = (props) => {
  return (
    <>
      <div className="my-5">
        <div className="text-center"> Our Services </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Cdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
