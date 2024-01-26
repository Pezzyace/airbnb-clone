import React from 'react'

const jokes = (joke) => {
  return (
    <div>
      <h3 style={{display: joke.question ? "block" : "none"}}>{joke.question}</h3>
      <p>{joke.answer}</p>
      <div>
        {joke.upVotes}
        {joke.downVotes}
      </div>
      <p>{joke.comment.firstCommenter}</p>
      <hr />
    </div>
  )
}

export default jokes

