import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";

const operations_and_management = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>
        Operations and management team
      </p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <CardComponent
        name="Rahul Roshan"
        position="Director"
        img="/ourTeam/k19/rahul_roshan.jpg"
        linkedin="https://www.linkedin.com/in/rahul-roshan-480561204/"
      />
      <CardComponent
        name="Shubham Mishra"
        position="Director"
        img="/ourTeam/k19/shubham_mishra.jpg"
        linkedin="https://www.linkedin.com/in/shubham-mishra-2926751aa/"
      />
      <CardComponent
        name="Vibhanshu Saurav"
        position="Chief Strategist"
        img="/ourTeam/k20/vibhanshu_saurav.jpeg"
        linkedin="https://www.linkedin.com/in/vibhanshu-saurav-9b66a921b/"
      />
      <CardComponent
        name="Pranav Rushi T"
        position="Strategist"
        img="/ourTeam/k20/pranav_rushi.jpg"
        linkedin="https://www.linkedin.com/in/t-pranav-rushi-575558203"
      />
      <CardComponent
        name="Kaustav Mitra"
        position="Strategist"
        img="/ourTeam/k20/kaustav_mitra.jpg"
        linkedin="" 
        // no linkedin
      />
      <CardComponent
        name="Abhishek Kumar"
        position="Strategist"
        img="/ourTeam/k20/abhishek_kumar.jpg"
        linkedin="https://www.linkedin.com/in/abhishek-kumar-087591244"
      />
      <CardComponent
        name="Uday Narayan Samanta"
        position="Strategist"
        img="/ourTeam/k20/uday_narayan_samanta.jpg"
        linkedin="https://www.linkedin.com/in/uday-narayan-samanta-ba801020b"
      />
      <CardComponent
        name="SOV Jaswanth Sriharsha"
        position="Strategist"
        img="/ourTeam/k20/sov_jaswanth_sriharsha.jpg"
        linkedin="https://www.linkedin.com/in/jaswanth-sriharsha-suvvada-b83337240"
      />
      <CardComponent
        name="Aman Kumar"
        position="Executor"
        img="/ourTeam/k21/aman_kumar.jpg"
        linkedin="https://www.linkedin.com/in/aman-kumar444"
      />
      <CardComponent
        name="Saday Kumar Samanta"
        position="Executor"
        img="/ourTeam/k21/saday_kumar_samanta.jpg"
        linkedin="https://www.linkedin.com/in/saday-kumar-samanta-7232b8223"
      />
      <CardComponent
        name="Kumar Yash Ojha"
        position="Executor"
        img="/ourTeam/k21/kumar_yash_ojha.jpg"
        linkedin="https://www.linkedin.com/in/kumar-yash-ojha-746668227"
      />
      <CardComponent
        name="Vivek Kumar"
        position="Executor"
        img="/ourTeam/k21/vivek_kumar.jpg"
        linkedin="https://www.linkedin.com/in/vivek-kumar-1ba1b5227"
      />
    </div>
  );
};

export default operations_and_management;
