import { Close } from '@mui/icons-material'
import { Button } from '@mui/material';
import React, { Fragment } from 'react';
import './SendMail.css'
import { useForm } from 'react-hook-form';
import { closeSendMessageIsOpen } from '../../features/counter/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../Firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function SendMail() {

const {register, handleSubmit, formState : {errors} } = useForm();
const dispatch = useDispatch();

const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessageIsOpen())
}

  return (
    <Fragment>
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <Close
            className="sendMail__close"
            onClick={() => {
              dispatch(closeSendMessageIsOpen());
            }}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="To"
            type="email"
            {...register("to", { required: true })}
          />
          {errors.to && <p className="sendMail__error">To is Required!</p>}
          <input
            placeholder="Subject"
            type="text"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <p className="sendMail__error">Subject is Required!</p>
          )}
          <input
            placeholder="Message..."
            type="text"
            className="sendMail__message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="sendMail__error">Message is Required!</p>
          )}

          <div className="sendMail__options">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              {" "}
              Send
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SendMail