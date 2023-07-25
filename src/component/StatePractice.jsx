import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./StatePractice.css";
import { useNavigate } from "react-router-dom";

const StatePractice = () => {
  const formObject = {
    name: "",
    email: "",
    pass: "",
  };
  const [val, setVal] = useState([]);
  const [form, setForm] = useState(formObject);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clickHandler = () => {
    const formErrors = validation(form);
    if (Object.keys(formErrors).length === 0) {
      setVal([...val, form]);
      setForm(formObject);
    }
    setFormError(formErrors);
  };

  const removeHandler = (index) => {
    setVal(val.filter((item, i) => i !== index));
  };

  const validation = (value) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!value.name) {
      error.name = "Name is required";
    }
    if (!value.email) {
      error.email = "Email is required";
    } else if (!regex.test(value.email)) {
      error.email = "This is not a valid email";
    }
    if (!value.pass) {
      error.pass = "Password is required";
    } else if (value.pass.length < 5) {
      error.pass = "Password must be greater than 4 characters";
    } else if (value.pass.length > 10) {
      error.pass = "Password must be less than 10 characters";
    }
    return error;
  };

  const formHandler = (e) => {
    e.preventDefault();
    setFormError(validation(form));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="State-main-container">
      <form onSubmit={formHandler} className="formData">
        <h3 className="headingSignUp">Sign Up</h3>
        <TextField
          id="outlined-basic-1"
          type="text"
          name="name"
          value={form.name}
          label="Name"
          variant="outlined"
          fullWidth
          onChange={changeHandler}
          required
        />
        <p>{formError.name}</p>
        <TextField
          id="outlined-basic-2"
          type="email"
          name="email"
          value={form.email}
          label="Email"
          variant="outlined"
          fullWidth
          onChange={changeHandler}
          required
        />
        <p>{formError.email}</p>

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="pass"
            onChange={changeHandler}
            value={form.pass}
            fullWidth
            required
          />
        </FormControl>
        <p>{formError.pass}</p>
        <Button variant="contained" color="primary" onClick={clickHandler}>
          Add
        </Button>
      </form>
      <div className="users-data">
       <h1>USERS DATA</h1>
      {val && val.map((item, index) => (
       <div key={index} className="user-data">
           <h3>{item.name}</h3>
           <h3>{item.email}</h3>
           <h3>{item.pass}</h3>
           <button className="btn" onClick={()=>removeHandler(index)}>Remove</button>
       </div>
      ))}
      </div>
    </div>
  );
};

export default StatePractice;

