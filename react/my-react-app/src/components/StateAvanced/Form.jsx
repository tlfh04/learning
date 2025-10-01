import React from "react";
import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const [form, setForm] = useState({ username: "", age: 0, email: "" });

  function handleChange(event) {
    // const target = event["target"];
    // console.log(target);

    const { name, value } = event.target;
    console.log(name, value);
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    // if (name === "username") {
    //   setUsername(value);
    // } else if (name === "age") {
    //   setAge(value);
    // } else if (name === "email") {
    //   setEmail(value);
    // }
  }

  return (
    <div>
      <form action="">
        <input
          className="border-1"
          type="text"
          name="username"
          value={form["name"]}
          onChange={(evnet) => {
            handleChange(event);
          }}
        />
        <input
          className="border-1"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(evnet) => {
            handleChange(event);
          }}
        />
        <input
          className="border-1"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(evnet) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
