import React, { useState } from "react";
import "./Contact.css";
import { db, messagesRef } from "./firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    var newMsgRef = messagesRef.push();
    newMsgRef.set({
      name: name,
      email: email,
      number: phoneNumber,
      message: message,
    });

    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");

    alert("Message has been sent successfully");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Email</label>
        <input
          required
          type="email"
          name=""
          id=""
          placeholder="xyz@test.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Contact Number</label>
        <input
          required
          type="number"
          name=""
          id=""
          placeholder="10 Digit mobile number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <label>Message</label>
        <textarea
          required
          placeholder="Please be nice :)"
          name=""
          id=""
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
