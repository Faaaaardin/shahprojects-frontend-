import React from "react";
import goodrej from "../Assets/goderej.jpg";
import mahindra from "../Assets/mahindra.jpg";
import tatamotors from "../Assets/tatamotors.png";
import Marquee from "react-fast-marquee";
import NilkamalImage from "../Assets/Nilkamal.jpg";
import IKEA from "../Assets/IKEA.jpg";
import Cello from "../Assets/Cello.jpg";
import TataSteel from "../Assets/Tata Steel.jpg";
import SBI from "../Assets/1SBI.jpg";
import HDFC from "../Assets/HDFC.jpg";
import Wipro from "../Assets/Wipro.jpg";
import Infosys from "../Assets/Infosys.jpg";


function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Company Icon </span>
        </h3>
        <Marquee>

         <img src={NilkamalImage} alt="Doctor" />
         < img src= {tatamotors} alt="Doctor" />
         < img src={mahindra} alt="Doctor" />
         < img src={goodrej} alt="Doctor"/>         
         <img src={IKEA} alt="Doctor" />
         <img src={Cello} alt="Doctor"/> 
         <img src={TataSteel} alt="Doctor"/> 
         <img src={SBI} alt="Doctor"/>
         <img src={HDFC} alt="Doctor"/>
         <img src={Wipro} alt="Doctor"/>
         <img src={Infosys} alt="Doctor"/>
         
        </Marquee>
      </div>
    </div>
  );
}

export default Doctors;




