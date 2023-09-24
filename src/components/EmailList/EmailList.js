import React, { Fragment, useEffect, useState } from "react";
import './EmailList.css'
import {   IconButton } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import { pink, grey } from "@mui/material/colors";
import RedoIcon from '@mui/icons-material/Redo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from './Section/Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmaillRow from './EmailRow/EmaillRow';
import { db } from '../Firebase';

function EmailList() {

  const [emails, setEmails ] = useState([]);

  useEffect(() => {
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    })
  })

  return (
    <Fragment>
      <div className="emailList">
        <div className="emailList__settings">
          <div className="emailList__settingsLeft">
            <Checkbox
              sx={{ color: grey, "&.Mui-checked": { color: pink[600] } }}
            />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RedoIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="emailList__settingsRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardHideIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailList__section">
          <Section
            Icon={InboxIcon}
            title="  Primary"
            selected={true}
            color="red"
          />
          <Section
            Icon={PeopleIcon}
            title="  Social"
            selected={false}
            color="#1A73E8"
          />
          <Section
            Icon={LocalOfferIcon}
            title="Promotions"
            selected={false}
            color="green"
          />
        </div>
        <div className="emailList__list">

          {
            emails.map(({id, data: {to, subject, message, timestamp}}) => (
              <EmaillRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            ))
          }
          
        </div>
      </div>
    </Fragment>
  );
}

export default EmailList