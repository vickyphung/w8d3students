import React from 'react'

function Scores(scoreData) {
  console.log(scoreData)
  return (
    <div>


      {scoreData?.scoreData?.map((score, index) => (
        <ul>
          <li>
            {score.date}
            <br ></br>
            {score.score}
          </li>
        </ul>
      )
      )}

    </div>
  )
}

export default Scores;
