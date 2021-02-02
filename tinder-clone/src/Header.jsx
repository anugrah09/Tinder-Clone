import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <Link to ="/login">
            <IconButton>
            <PersonIcon fontSize="large" className="headerIcon"/>
            </IconButton>
            </Link>
            <img className ="headerLogo" 
            src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png" />
            <IconButton>
            <ForumIcon fontSize="large" className="headerIcon"/>
            </IconButton>
        </div>
    )
}

export default Header
