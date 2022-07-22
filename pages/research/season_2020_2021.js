import React from "react";
import CommonText from "../../components/research/CommonText";
import AnalysisOfBangleMakers from "../../components/research/20_21/AnalysisOfBangleMakers";
import FuelRetailIndustry from "../../components/research/20_21/FuelRetailIndustry";
import AutomobileEnergyRecovery from "../../components/research/20_21/AutomobileEnergyRecovery";
import TennisRacketDesign from "../../components/research/20_21/TennisRacketDesign";
import AnalysisOfFallingAsteroid from "../../components/research/20_21/AnalysisOfFallingAsteroid";
import AnalysisOfCallCenter from "../../components/research/20_21/AnalysisOfCallCenter";

const season_2020_2021 = ({ setCurrPage }) => {
  return (
    <div className="my-3">
      <CommonText setCurrPage={setCurrPage} year="2020-2021" />
      <AnalysisOfBangleMakers />
      <hr style={{ margin: "20px" }} />
      <FuelRetailIndustry />
      <hr style={{ margin: "20px" }} />
      <AutomobileEnergyRecovery />
      <hr style={{ margin: "20px" }} />
      <TennisRacketDesign />
      <hr style={{ margin: "20px" }} />
      <AnalysisOfFallingAsteroid />
      <hr style={{ margin: "20px" }} />
      <AnalysisOfCallCenter />
    </div>
  );
};

export default season_2020_2021;
