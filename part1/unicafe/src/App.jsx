import { useState } from 'react'

const FeedbackButton = ({ name, handler }) => (
  <button onClick={handler} >
    {name}
  </button>
)

const ReceiveFeedback = ({ options, header, onFeedback }) => (
  <>
    <h1>{header}</h1>
    {
      options.map((o, idx) => (
        <FeedbackButton
          key={idx}
          name={o.name}
          handler={() => {
            o.handler()
            onFeedback(o.name)
          }}
        />
      ))
    }
  </>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}: </td>
    <td>{value}</td>
  </tr>
)

const FeedbackStatistics = ({ header, options, all, avg }) => {
  const numberOfGoods = options.find((o) => o.name === 'good')?.state || 0
  return (
    all == 0
    ? <p>No feedback received</p>
    : <>
      <h1>{header}</h1>
      <table>
        <tbody>
          {
            options.map((o, idx) => (
              <StatisticLine
                key={idx}
                text={o.name}
                value={o.state}
              />
            ))
          }
          <tr>
            <td>all: </td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>avg: </td>
            <td>{avg}</td>
          </tr>
          <tr>
            <td>good perc: </td>
            <td>{numberOfGoods * 100 / all} % </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  // updates total and avg
  const handleFeedback = (type) => {
    const newAll = all + 1
    setAll(newAll)

    let optionScore = 0
    switch (type) {
      case 'good':
        optionScore = 1
        break;
      case 'bad':
        optionScore = -1
        break;
      default:
        break;
    }

    const newScore = score + optionScore
    setScore(newScore)
    setAvg(newScore/newAll)
  }


  const options = [
    { name: 'good',     handler: handleGood     , state: good     },
    { name: 'neutral',  handler: handleNeutral  , state: neutral  },
    { name: 'bad',      handler: handleBad      , state: bad      },
  ]

  return (
    <div>
      <ReceiveFeedback
        options={options}
        onFeedback={handleFeedback}
        header="Give Feedback!"
      />
      <FeedbackStatistics
        options={options}
        all={all}
        avg={avg}
        header="statistics"
      />
    </div>
  )
}

export default App
