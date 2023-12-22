import React from "react";
import { useNavigate, } from "react-router-dom";
import FormSubmit from "./FormSubmit";
import { useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Form = () => {

  const [isPopupVisible, setPopupVisibility] = useState(false);

  const HandelSubmit= ()=>{
    setPopupVisibility(true)

    setTimeout(()=>{
Back('/Createads')
    },600)
  }

  const Back = useNavigate();
  const Goback = () => {
    Back("/Createads");
  };



  return (
    <>
      <div>
        <div className={`form-container ${isPopupVisible ? 'Addtinalform-con' : ''}`}>
          <div className="form-wrapper">
            <header>Create Text & Media</header>

            <form>
              <div className="upper-part">
                <div className="upper-left-part">
                  <div className="col">
                    <label>Heading 01</label>
                    <input
                      type="text"
                      placeholder="Add heading that would make users interested"
                    />
                  </div>

                  <div className="col">
                    <label>Heading 02</label>
                    <input
                      type="text"
                      placeholder="Add heading that would make users interested"
                    />
                  </div>
                </div>
                <div className="upper-right-part">
                  <div className="col">
                    <label>Description 01</label>
                    <textarea
                      rows={6}
                      cols={40}
                      placeholder="Add primary text to hep to users understand more about about products, sercives or offers"
                    />
                  </div>
                </div>
              </div>

              <div className="lower-part">
                <div className="lower-first">
                  <div className="col">
                    <label>Business Name</label>
                    <input type="text" placeholder="Add your business name" />
                  </div>

                  <div className="col">
                    <label>Website URL</label>
                    <input
                      type="text"
                      placeholder="Add the URL of the landing page you want to redirect users to"
                    />
                  </div>
                </div>

                <div className="lower-second">
                  <div className="col">
                    <label>Button Label</label>
                    <input
                      type="text"
                      placeholder="Select a label that best suits ur ad"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Both-button">
        <button onClick={Goback} className="Back-btn">
          {" "}
          Back
        </button>
        <button onClick={HandelSubmit} className="Submit-BTN"> Submit</button>
        {
            
            isPopupVisible? <div className="POP-UP"> 
              <CheckCircleOutlineIcon/>
            
            submited</div>:""
         }
      </div>
    </>
  );
};

export default Form;
