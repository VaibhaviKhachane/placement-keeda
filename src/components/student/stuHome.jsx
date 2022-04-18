import React, { useState, useEffect } from "react";
import "./pagesStu.css";
import axios from "axios";
import "./cardsStu.css";
import {FcSearch} from 'react-icons/fc'

const StuHome = () => {
  const [inputtext, setInputText] = useState("");
  const [getDrives, setDrives] = useState([]);
  const [getdrive, setdrive] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [getCmpny, setCmpny] = useState({});
  const [stuLocal, setStuLocal] = useState({});

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = getDrives.filter((el) => {
    //if no input the return the original
    if (inputtext === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(inputtext);
    }
  });
  useEffect(() => {
    drives();
    let data = localStorage.getItem("stu");
    if(data){
      setStuLocal(JSON.parse(data));
    }
  }, []);

  const apply = async(id)=>{
    await axios.put(`/api/drive/appliedStudent/${id}`,{
      appliedStudentId: stuLocal._id
    }).then(()=> {
      alert("Sucessfully Applied....");
    }).catch(()=> alert("Already Applied..."));
  }
  const drives = async () => {
    await axios
      .get("/api/drive")
      .then((resp) => {
        if (resp.data) setDrives(resp.data);
        return resp;
      })
      .catch((error) => console.log(error));
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const str = getdrive.endDate; //Set the string in the proper format(best to use ISO format ie YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS)
  var d = new Date(str); //converts the string into date object
  var m = d.getMonth(); //get the value of month
  var dd = d.getDate();
  var yy = d.getFullYear();

  const drive = async (id) => {
    await axios
      .get(`/api/drive/${id}`)
      .then((resp) => {
        if (resp.data) {
          setdrive(resp.data);
          setCmpny(resp.data.cmpny);
        }
        return resp;
      })
      .then(setIsClicked(true))
      .catch((error) => console.log(error));
  };

  // console.log(getdrive);

  return (
    <div className="container">
      <p className="header" style={{ fontWeight: "bold", fontSize: "x-large" }}>
        Upcoming Drives &nbsp;
        <input
          type="text"
          onChange={inputHandler}
          style={{ marginLeft: "1em" }}
          className="search-box"
          placeholder="Search Drive"
        ></input>
      </p>
      {
        <FcSearch
          style={{ marginTop: "2em", marginLeft: "-7em" }}
          size="1.3em"
        />
      }

      {/* <Cards input = {inputtext} className="drive"/> */}

      <div className="drive-container">
        <nav>
          <ul>
            <div className="map-Drives">
              {filteredData.map((elem, i) => {
                let date = new Date(elem.endDate);
                let m = date.getMonth();
                let d = date.getDate();
                let y = date.getFullYear();
                return (
                  <li className="cards" key={elem._id}>
                    <div className="decobox"></div>
                    <div className="drive-content">
                      <h4 style={{ textAlign: "center" }}>{elem.title}</h4>
                      <strong>Company:</strong>&nbsp; {elem.cmpny.name}
                      <br />
                      <strong>Last date:</strong>&nbsp;
                      {`${d} ${monthNames[m]} ${y}`}
                      <br />
                      <strong>Batch:</strong>&nbsp;{elem.batchYear}
                      <br />
                      <strong>Gap Allowed:</strong>&nbsp;{elem.gap}
                      <br />
                      <div className="read-btn">
                        <button
                          className="read-more-btn"
                          onClick={() => {
                            drive(elem._id);
                          }}
                        >
                          {`Read More >>`}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </div>

      <div className="Read-more">
        
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
        {isClicked ? (
          <div className="read-more-content">
            <h3 id="readMore-drive-title">{getdrive.title}</h3>
            <strong className="readMore">Company Name: {getCmpny.name}</strong>
            Email: {getCmpny.email}
            <br />
            Contact No: {getCmpny.contactno}
            <br />
            Website: {getCmpny.webLink}
            <br />
            <br />
            <strong className="readMore">Eligibility Criteria: </strong>
            Percentage: {getdrive.percentage}%&nbsp; Branches:{" "}
            {`${getdrive.branch}`}&nbsp;
            <br />
            Gap Allowed: {getdrive.gap}&nbsp; Batch: {getdrive.batchYear}
            <br />
            <br />
            <strong className="readMore">Job Description:</strong>
            {getdrive.jobDescript}
            <strong className="readMore">CTC: {getdrive.ctc}</strong>
            <h4>Last Date to Apply: {`${dd} ${monthNames[m]} ${yy}`}</h4>
            <button className="button" onClick={() => apply(getdrive._id)}>
              Apply
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default StuHome;
