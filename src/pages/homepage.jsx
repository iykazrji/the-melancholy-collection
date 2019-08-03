import React from "react";

// Import Page Sections...
import Section1 from "components/page-components/homepage/section-1";
import Section2 from "components/page-components/homepage/section-2";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Homepage;
