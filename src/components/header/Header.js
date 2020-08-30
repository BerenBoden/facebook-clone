import React from 'react';
import facebook from '../../img/facebook.png';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../provider/StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src={facebook} alt="logo"/>
            </div>
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook..." type="text" />
            </div>
            <div className="header__center">
                <div className="header__option">
                    <HomeIcon fontSize="medium"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="medium"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="medium"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="medium"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="medium"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
