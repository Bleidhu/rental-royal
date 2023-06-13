import Button from "@mui/material/Button";
import { TextField, Paper } from "@mui/material";
import "./login.css";

export async function submitData() {
  let sendData = {
    email: "tmp",
    password: "tmp2",
  };

  const resp = await fetch("http://localhost:3001/api/signup/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(sendData), // body data type must match "Content-Type" header
  });
}

export default function Login() {
  return (
    <div id="login-card">
      <Paper variant="outlined" id="login-paper">
        <TextField
          id="email"
          label="Outlined"
          variant="outlined"
          size="small"
          className="inputData"
        />
        <TextField
          id="password"
          label="Outlined"
          variant="outlined"
          size="small"
          className="inputData"
        />
        <Button className="inputData" onClick={submitData}>
          lol
        </Button>
      </Paper>
    </div>
  );
}
