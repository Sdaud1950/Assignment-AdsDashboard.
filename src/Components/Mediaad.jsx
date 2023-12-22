import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mediaad = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const Nav = useNavigate();

  const BTN = () => {
    if (isChecked) {
      console.log("Heelo");
      Nav('/Formmedia')
    } else {
    if(isChecked1){
      Nav('/Forms')
    }
      
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("Biutim woeki ");
  };
  
  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    console.log("Biutim woeki ");
  };
  
  return (
    <div className="Media-ads">
      <div>
        <label>
          <input
            id="Meiaads"
            value="mediaads"
            name="Ads"
            type="checkbox"
            // checked={isChecked}
            onChange={handleCheckboxChange1}
            style={{ display: "block" }} // Hide the actual checkbox
          />
          <span>
            {" "}
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </span>
          <spm> Create TextAd</spm>
        </label>
      </div>
      <div>
        <label>
          <input
            id="testads"
            value="Text-ads"
            name="Adss"
            type="checkbox"
            onChange={handleCheckboxChange}
            style={{ display: "block" }} // Hide the actual checkbox
          />
          <span>
            {" "}
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </span>
          <spm> Create MediaAd</spm>
        </label>
        <button onClick={BTN} className="Next-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Mediaad;
