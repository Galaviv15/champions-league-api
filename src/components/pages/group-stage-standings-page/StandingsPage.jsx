import "./standings-page.css"
import axios from "axios";
import { CONSTS } from "../../../consts/cosnts";
import { useState } from "react";
import { useEffect } from "react";
import StandingsTable from "../../standings-table/StandingsTable"



function StandingsPage(){


    const[league, setLeague] = useState({});
    const[leagueLogoURL, setLeagueLogoURL] = useState("");
    const[groupA, setGroupA] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupB, setGroupB] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupC, setGroupC] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupD, setGroupD] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupE, setGroupE] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupF, setGroupF] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupG, setGroupG] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);
    const[groupH, setGroupH] = useState([{team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 } , {team:{name:"", logo: ""}, all:{played: 0},goalsDiff:0, points:0 }]);

    useEffect(()=> {
        getStandings();
    },[])



    async function getStandings(){
        try{
            const response = await axios.get(`${CONSTS.apiURL}/standings?season=2023&league=2`, { headers: CONSTS.apiKey});
            let data = response.data.response[0].league;

            setLeague(data)
            setGroupA(data.standings[0])
            setGroupB(data.standings[1])
            setGroupC(data.standings[2])
            setGroupD(data.standings[3])
            setGroupE(data.standings[4])
            setGroupF(data.standings[5])
            setGroupG(data.standings[6])
            setGroupH(data.standings[7])

            console.log(data);
            console.log("league is: " , data.name);
            console.log("group A is: " , data.standings[0]);
            console.log("group A teams are: " , data.standings[0][0].team, data.standings[0][1].team,data.standings[0][2].team, data.standings[0][3].team );
            console.log("Bayern points : " , data.standings[0][0].points);
            console.log("Bayern goal diff:" , data.standings[0][0].goalsDiff);
            console.log(league);

        }
        catch(e){
            console.error("Failed to get Standings", e)
        }
    }

    return(
        <div className="StandingsPage">
            <h1 className="standing-heading">Group Stage Live Standings</h1>
            <div className="groups">
            
            <StandingsTable group={groupA[0].group} 
            team1Logo={groupA[0].team.logo} team1Name={groupA[0].team.name} team1GamesPlayed={groupA[0].all.played} team1GoalDif={groupA[0].goalsDiff} team1Pts={groupA[0].points}
            team2Logo={groupA[1].team.logo} team2Name={groupA[1].team.name} team2GamesPlayed={groupA[1].all.played} team2GoalDif={groupA[1].goalsDiff} team2Pts={groupA[1].points}
            team3Logo={groupA[2].team.logo} team3Name={groupA[2].team.name} team3GamesPlayed={groupA[2].all.played} team3GoalDif={groupA[2].goalsDiff} team3Pts={groupA[2].points}
            team4Logo={groupA[3].team.logo} team4Name={groupA[3].team.name} team4GamesPlayed={groupA[3].all.played} team4GoalDif={groupA[3].goalsDiff} team4Pts={groupA[3].points} />
            <StandingsTable group={groupB[0].group} 
            team1Logo={groupB[0].team.logo} team1Name={groupB[0].team.name} team1GamesPlayed={groupB[0].all.played} team1GoalDif={groupB[0].goalsDiff} team1Pts={groupB[0].points}
            team2Logo={groupB[1].team.logo} team2Name={groupB[1].team.name} team2GamesPlayed={groupB[1].all.played} team2GoalDif={groupB[1].goalsDiff} team2Pts={groupB[1].points}
            team3Logo={groupB[2].team.logo} team3Name={groupB[2].team.name} team3GamesPlayed={groupB[2].all.played} team3GoalDif={groupB[2].goalsDiff} team3Pts={groupB[2].points}
            team4Logo={groupB[3].team.logo} team4Name={groupB[3].team.name} team4GamesPlayed={groupB[3].all.played} team4GoalDif={groupB[3].goalsDiff} team4Pts={groupB[3].points} />
            <StandingsTable group={groupC[0].group} 
            team1Logo={groupC[0].team.logo} team1Name={groupC[0].team.name} team1GamesPlayed={groupC[0].all.played} team1GoalDif={groupC[0].goalsDiff} team1Pts={groupC[0].points}
            team2Logo={groupC[1].team.logo} team2Name={groupC[1].team.name} team2GamesPlayed={groupC[1].all.played} team2GoalDif={groupC[1].goalsDiff} team2Pts={groupC[1].points}
            team3Logo={groupC[2].team.logo} team3Name={groupC[2].team.name} team3GamesPlayed={groupC[2].all.played} team3GoalDif={groupC[2].goalsDiff} team3Pts={groupC[2].points}
            team4Logo={groupC[3].team.logo} team4Name={groupC[3].team.name} team4GamesPlayed={groupC[3].all.played} team4GoalDif={groupC[3].goalsDiff} team4Pts={groupC[3].points} />
            <StandingsTable group={groupD[0].group} 
            team1Logo={groupD[0].team.logo} team1Name={groupD[0].team.name} team1GamesPlayed={groupD[0].all.played} team1GoalDif={groupD[0].goalsDiff} team1Pts={groupD[0].points}
            team2Logo={groupD[1].team.logo} team2Name={groupD[1].team.name} team2GamesPlayed={groupD[1].all.played} team2GoalDif={groupD[1].goalsDiff} team2Pts={groupD[1].points}
            team3Logo={groupD[2].team.logo} team3Name={groupD[2].team.name} team3GamesPlayed={groupD[2].all.played} team3GoalDif={groupD[2].goalsDiff} team3Pts={groupD[2].points}
            team4Logo={groupD[3].team.logo} team4Name={groupD[3].team.name} team4GamesPlayed={groupD[3].all.played} team4GoalDif={groupD[3].goalsDiff} team4Pts={groupD[3].points} />
            <StandingsTable group={groupE[0].group} 
            team1Logo={groupE[0].team.logo} team1Name={groupE[0].team.name} team1GamesPlayed={groupE[0].all.played} team1GoalDif={groupE[0].goalsDiff} team1Pts={groupE[0].points}
            team2Logo={groupE[1].team.logo} team2Name={groupE[1].team.name} team2GamesPlayed={groupE[1].all.played} team2GoalDif={groupE[1].goalsDiff} team2Pts={groupE[1].points}
            team3Logo={groupE[2].team.logo} team3Name={groupE[2].team.name} team3GamesPlayed={groupE[2].all.played} team3GoalDif={groupE[2].goalsDiff} team3Pts={groupE[2].points}
            team4Logo={groupE[3].team.logo} team4Name={groupE[3].team.name} team4GamesPlayed={groupE[3].all.played} team4GoalDif={groupE[3].goalsDiff} team4Pts={groupE[3].points} />
            <StandingsTable group={groupF[0].group} 
            team1Logo={groupF[0].team.logo} team1Name={groupF[0].team.name} team1GamesPlayed={groupF[0].all.played} team1GoalDif={groupF[0].goalsDiff} team1Pts={groupF[0].points}
            team2Logo={groupF[1].team.logo} team2Name={groupF[1].team.name} team2GamesPlayed={groupF[1].all.played} team2GoalDif={groupF[1].goalsDiff} team2Pts={groupF[1].points}
            team3Logo={groupF[2].team.logo} team3Name={groupF[2].team.name} team3GamesPlayed={groupF[2].all.played} team3GoalDif={groupF[2].goalsDiff} team3Pts={groupF[2].points}
            team4Logo={groupF[3].team.logo} team4Name={groupF[3].team.name} team4GamesPlayed={groupF[3].all.played} team4GoalDif={groupF[3].goalsDiff} team4Pts={groupF[3].points} />
            <StandingsTable group={groupG[0].group} 
            team1Logo={groupG[0].team.logo} team1Name={groupG[0].team.name} team1GamesPlayed={groupG[0].all.played} team1GoalDif={groupG[0].goalsDiff} team1Pts={groupG[0].points}
            team2Logo={groupG[1].team.logo} team2Name={groupG[1].team.name} team2GamesPlayed={groupG[1].all.played} team2GoalDif={groupG[1].goalsDiff} team2Pts={groupG[1].points}
            team3Logo={groupG[2].team.logo} team3Name={groupG[2].team.name} team3GamesPlayed={groupG[2].all.played} team3GoalDif={groupG[2].goalsDiff} team3Pts={groupG[2].points}
            team4Logo={groupG[3].team.logo} team4Name={groupG[3].team.name} team4GamesPlayed={groupG[3].all.played} team4GoalDif={groupG[3].goalsDiff} team4Pts={groupG[3].points} />
            <StandingsTable group={groupH[0].group} 
            team1Logo={groupH[0].team.logo} team1Name={groupH[0].team.name} team1GamesPlayed={groupH[0].all.played} team1GoalDif={groupH[0].goalsDiff} team1Pts={groupH[0].points}
            team2Logo={groupH[1].team.logo} team2Name={groupH[1].team.name} team2GamesPlayed={groupH[1].all.played} team2GoalDif={groupH[1].goalsDiff} team2Pts={groupH[1].points}
            team3Logo={groupH[2].team.logo} team3Name={groupH[2].team.name} team3GamesPlayed={groupH[2].all.played} team3GoalDif={groupH[2].goalsDiff} team3Pts={groupH[2].points}
            team4Logo={groupH[3].team.logo} team4Name={groupH[3].team.name} team4GamesPlayed={groupH[3].all.played} team4GoalDif={groupH[3].goalsDiff} team4Pts={groupH[3].points} />
    
            </div>
        </div> 
    
    );
}

export default StandingsPage;