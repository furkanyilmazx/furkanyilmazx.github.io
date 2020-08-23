import React from "react"

function GithubStarIcon(props) {
  return (
    <svg
      aria-label="stars"
      className="prefix__octicon prefix__octicon-star"
      viewBox="0 0 14 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        fill="#586069"
        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
      />
    </svg>
  )
}

export default GithubStarIcon
