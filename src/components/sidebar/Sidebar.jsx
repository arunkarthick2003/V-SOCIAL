import './Sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import { Button } from '@mui/material';
import {Users} from "../../dummyData";
import CloseFriend from '../closefriend/CloseFriend';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <u1 className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleOutlineIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutlineIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutlineIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </u1>
            <Button className='sidebarButton'>Show More</Button>
            <hr className='sidebarHr'/>
            <u1 className='sidebarFrientList'>
                {Users.map(u=>(
                    <CloseFriend key={u.id} user={u} />
                ))}
            </u1>
        </div>
    </div>
  )
}

export default Sidebar