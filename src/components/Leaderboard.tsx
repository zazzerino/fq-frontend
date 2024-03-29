import * as React from 'react';
import { useDispatch } from 'react-redux';
import { showScores } from '../actions';
import * as http from '../http';
import { ResetButton } from './ResetButton';

interface ScoreRecord {
  id: number,
  name: string,
  score: number
}

interface ScoreDisplayOpts {
  score: ScoreRecord,
  key: number,
  index: number
}

function ScoreDisplay(props: ScoreDisplayOpts) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.score.name}</td>
      <td>{props.score.score}</td>
    </tr>
  );
}

export function ShowLeaderboard(props: any) {
  const dispatch = useDispatch();

  return (
    <button
      className="ShowLeaderboard"
      onClick={() => { dispatch(showScores()) }}
    >
      High Scores
    </button>
  )
}

// function RestartButton() {
//   return (
//     <button className="RestartButton">
//       Play again
//     </button>
//   )
// }

export function Leaderboard(props: any) {
  const [scores, setScores] = React.useState([])

  React.useEffect(() => {
    const fn = async function () {
      setScores(await http.getScores());
    }();
  }, []);

  return (
    <div className="Leaderboard">
      <ResetButton />
      <h1>High Scores</h1>
      <table className="Leaderboard-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            scores.map((score: ScoreRecord, index: number) => {
              return <ScoreDisplay
                key={index}
                index={index + 1}
                score={score}
              />;
            })
          }
        </tbody>
      </table>
    </div>
  );
}
