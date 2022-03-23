import React from 'react'
import useStyles from './useStyles'
import { Link } from 'react-router-dom';

const SideNav = (props) => {
    const classes = useStyles(props);
  return (
    <>
        <nav className={classes.SideNav}>
    <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/readme">readme</Link>
            </li>
          </ul>
    </nav>
    </>
  )
}

export default SideNav