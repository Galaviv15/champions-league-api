import TeamTableRow from "../team-table-row/TeamTableRow";
import "./standings-table.css";

function StandingsTable(props) {
  return (
    <div className="StandingsTable">
      <h2 className="group-name">{props.group}</h2>
      <div className="group-table">
        <div className="table-header-row">
          <div className="team-name-th">
    
          </div>
          <div className="team-stats-th">
            <div className="games-played-th">
              GP
            </div>
            <div className="goal-difference-th">
              GD
            </div>
            <div className="points-th">
              Pts
            </div>
          </div>
        </div>
        <TeamTableRow teamLogo={props.team1Logo} teamName={props.team1Name} teamGamesPlayed={props.team1GamesPlayed} teamGoalDif={props.team1GoalDif} teamPts={props.team1Pts}/>
        <TeamTableRow teamLogo={props.team2Logo} teamName={props.team2Name} teamGamesPlayed={props.team2GamesPlayed} teamGoalDif={props.team2GoalDif} teamPts={props.team2Pts}/>
        <TeamTableRow teamLogo={props.team3Logo} teamName={props.team3Name} teamGamesPlayed={props.team3GamesPlayed} teamGoalDif={props.team3GoalDif} teamPts={props.team3Pts}/>
        <TeamTableRow teamLogo={props.team4Logo} teamName={props.team4Name} teamGamesPlayed={props.team4GamesPlayed} teamGoalDif={props.team4GoalDif} teamPts={props.team4Pts}/>
        </div>
      
    </div>
  );
}

export default StandingsTable;
