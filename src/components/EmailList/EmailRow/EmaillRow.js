import React, { Fragment } from 'react';
import './EmailRow.css'
import Checkbox from "@mui/material/Checkbox";
import { pink, grey } from "@mui/material/colors";
import { IconButton } from '@mui/material';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/counter/mailSlice';

function EmaillRow({id, title, subject, description, time}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    navigate('/Mail');
    dispatch(selectMail({
      id,
      title, 
      subject,
      description,
      time,
    }))
  }

  return (
    <Fragment>
      <div className="emailRow" onClick={() => openMail()}>
        <div className="emailRow__options">
          <Checkbox
            sx={{ color: grey, "&.Mui-checked": { color: pink[600] } }}
          />
          <IconButton>
            <StarBorderIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
        </div>

        <h3 className="emailRow__title">{title}</h3>

        <div className="emailRow__message">
          <h4>
            {subject}
            <span className="emailRow__description">
              &nbsp;-&nbsp;{description}
            </span>
          </h4>
        </div>

        <p className="emailRow__time">{time}</p>
      </div>
    </Fragment>
  );
}

export default EmaillRow;