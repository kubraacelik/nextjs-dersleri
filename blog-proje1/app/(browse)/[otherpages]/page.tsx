import React from 'react'

interface OtherPagesProps {
    params: {
        otherpages: string
    }
}

const OtherPages = ({params}:OtherPagesProps) => {
  return (
    <div>OtherPages {params.otherpages}</div>
  )
}

export default OtherPages