import React from "react";
import AnalysisOfCoffeeManufacturing from "../../components/research/21_22/AnalysisOfCoffeeManufacturing";
import CoviKnowApp from "../../components/research/21_22/CoviKnowApp";
import CommonText from "../../components/research/CommonText";

const season_2021_2022 = ({ setCurrPage }) => {
  return (
    <>
      <CommonText setCurrPage={setCurrPage} year="2021-2022" />
      <CoviKnowApp />
      <hr style={{ margin: "20px" }} />
      <AnalysisOfCoffeeManufacturing/>
    </>
  );
};

export default season_2021_2022;
