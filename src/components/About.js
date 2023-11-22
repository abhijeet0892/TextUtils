import React from "react";

function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "gray" : "white",
    // border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "gray",
    // boxShadow: "none",
  };
  let style1 = { color: props.mode === "dark" ? "white" : "black" };
  return (
    <div className="container">
      <h1 className="my-3" style={style1}>
        About Us
      </h1>
      <p style={style1}>
        Market Insights Research was founded as a market research brand under
        Alivean Teach Solutions (now Alivean Digital Consultancy Pvt Ltd) in
        2016. <br /> <br />
        We have a global presence with clients spanning across 50 countries
        around the globe and across 21 key business domains. We have an
        experience of working on more than 1000 projects over the past 5 years
        for more than 600 clients.
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Our Vision
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our vision is to be the leading provider of market research and
              intelligence, delivering insights that enable our clients to make
              informed decisions and achieve their goals.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our mission is to provide high-quality, data-driven insights and
              analysis to help our clients stay ahead of the competition and
              navigate the rapidly evolving business landscape.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Why choose us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Experienced and Skilled Analysts:</strong> Our team of
              analysts are highly skilled and experienced in their respective
              fields. They utilize the latest research methodologies and
              technologies to deliver accurate and comprehensive insights.
              <br />
              <strong>Timely Delivery:</strong> We understand the importance of
              timely delivery of research reports and insights. We have
              streamlined our processes to ensure that we deliver our services
              in a timely and efficient manner.
              <br />
              <strong>Competitive Pricing:</strong> We offer competitive pricing
              for our services without compromising on the quality of our
              research. We believe in delivering value to our clients, and our
              pricing reflects that.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
