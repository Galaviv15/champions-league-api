import "./team-table-row.css";

function TeamTableRow(props) {
  return (
    <div className="TeamTableRow">
      <div className="team-logo-name">
        <div className="team-logo">
          <img className="team-logo-img" src={props.teamLogo} alt="FCB"/>
        </div>
        <div className="team-name">
           {props.teamName}
        </div>

      </div>
      <div className="team-stats">
        <div className="games-played">
          {props.teamGamesPlayed}
        </div>
        <div className="goal-diff">
         {props.teamGoalDif}
        </div>
        <div className="points">
         {props.teamPts} 
        </div>

      </div>


      {/*}
      <tr>
        <td>{props.teamLogo}</td>
        <td>{props.teamName}</td>
        <td>{props.teamGamesPlayed}</td>
        <td>{props.teamGoalDif}</td>
        <td>{props.teamPts}</td>
      </tr>
  */}
    </div>
  );
}

export default TeamTableRow;
