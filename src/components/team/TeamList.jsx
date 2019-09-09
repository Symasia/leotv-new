import React, { useState, useEffect } from "react";
import Preloader from "../layouts/Preloader.jsx"
import axios from "axios";
import "./Team.css";
const spreadSheet =
  "https://spreadsheets.google.com/feeds/cells/1vrXp-lzVlGVnvV5Bo28ZTldf2zhnl0tFz7b-ZdMHKmI/1/public/full?alt=json";

/*
As long as row is 2, keep pushing to the temp array, then when it changes, push to acc, flush temp and increase row
*/
const TeamList = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getMembersData = async () => {
      const response = await axios.get(spreadSheet);
      const members = response.data.feed.entry.filter(
        row => row.gs$cell.row !== "1"
      );
      let row = 2;
      let temp = [];
      let arr = [];
      for (let v of Object.values(members)) {
        if (v.gs$cell.row !== row.toString()) {
          row += 1;
          arr.push(temp);
          temp = [];
        }
        temp.push(v.content.$t);
      }
      arr.push(temp);
      setMembers(arr);
    };
    getMembersData();
  }, []);

  const teamList = members.map(
    ([name, img, field, position, branch, joined_date]) => (
      <li className="team-member">
        <img src={img} alt="" />
        <div className="content">
          <h3>{name}</h3>
          <p>
            {field} • {position}
          </p>
          <p><strong>Branch:</strong> {branch}</p>
          <p><strong>Joined on:</strong> {joined_date}</p>
        </div>
      </li>
    )
  );

  return (
    <section id="member-list" className="Team-List">
      <h2 style={{borderBottom: "2px solid black"}}>Members List</h2>
      <ul>{teamList.length ?  teamList : <Preloader color="black"/> }</ul>
    </section>
  );
};

export default TeamList;
