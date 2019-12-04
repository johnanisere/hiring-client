import React from "react";
import Profile from "./blocks";
import SelectCheck from "../selected/SelectCheck";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const App = ({ selected, dev }) => {
  const { interviewDetails, testDetails  } = useSelector(
    ({ interviewDetails}) => interviewDetails
  );

 

  return (
    <>
      <Profile
        bottom
        style={{
          width: "calc(100% - 50px)",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, .09)"
        }}
      >
        {(interviewDetails.scheduled || testDetails.scheduled) &&
        interviewDetails.decaDev === dev.email ? (
          <em style={{ fontWeight: "lighter" }}> 
            Interview has been scheduled for {interviewDetails.scheduled || testDetails.scheduled}
          </em>
        ) : (
          <>
            <Profile.Tag style={{ marginRight: "10px" }} blue medium>
              <Link
                to={`/schedule-interview/${dev.email}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Schedule interview
              </Link>
            </Profile.Tag>

            <Profile.Tag style={{ marginRight: "10px" }} blue medium>
              <Link
                to={`/schedule-test/${dev.email}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Schedule Test
              </Link>
            </Profile.Tag>
            <Profile.Text style={{ marginRight: "10px" }} bold size2>
              OR
            </Profile.Text>
        {"   "}
        <Profile.Text
          bold
          size6
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center"
          }}
        >
          <SelectCheck
            decadevObject={dev}
            selected={selected}
            style={{ position: "initial", marginRight: "5px" }}
          />
          Save for later
        </Profile.Text>
          </>
        )}
      </Profile>
    </>
  );
};

export default App;
