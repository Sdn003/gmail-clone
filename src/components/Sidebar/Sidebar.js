import { Button, IconButton } from '@mui/material';
import React, { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import './Sidebar.css';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from 'react-redux';
import { openSendMessageIsOpen } from '../../features/counter/mailSlice';

function Sidebar() {
const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="sidebar">
        <Button startIcon={<AddIcon />} className="sidebar__compose" onClick={() => {
          dispatch(openSendMessageIsOpen())
        }}>
          Compose
        </Button>
        <SidebarOptions
          Icon={InboxIcon}
          title="Inbox"
          number={"54"}
          selected={true}
        />
        <SidebarOptions
          Icon={StarIcon}
          title="Starred"
          number={"25"}
          selected={false}
        />
        <SidebarOptions
          Icon={AccessTimeIcon}
          title="Snoozed"
          number={"6"}
          selected={false}
        />
        <SidebarOptions
          Icon={LabelImportantIcon}
          title="Important"
          number={"45"}
          selected={false}
        />
        <SidebarOptions
          Icon={NearMeIcon}
          title="Sent"
          number={"76"}
          selected={false}
        />
        <SidebarOptions
          Icon={NoteIcon}
          title="Drafts"
          number={"32"}
          selected={false}
        />

        <SidebarOptions
          Icon={ExpandMoreIcon}
          title="More"
          number={"44"}
          selected={false}
        />

        <div className="sidebar-footer">
          <div className="sidebar-footer__options">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
                <PhoneIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar