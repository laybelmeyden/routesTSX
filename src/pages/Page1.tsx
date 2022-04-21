import React from 'react'
import { Link } from 'react-router-dom'

export const Page1 = () => {
  return (
    <div>MAIN PAGE ---{'>'} <br />
    <Link to="/page/1">GOGOGO1</Link> <br />
    <Link to="/page/2">GOGOGO2</Link>   <br />
    <Link to="/page/3">GOGOGO3</Link> <br />
    </div>
  )
}
