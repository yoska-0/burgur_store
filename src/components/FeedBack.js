import { useTheme } from "@emotion/react";
import Avatar from "@mui/material/Avatar";

export default function FeedBack({ body, name, job, imge }) {
  const theme = useTheme();
  return (
    <div
      style={{
        margin: "0 20px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div
        style={{
          backgroundColor: theme.palette.secoundry.main,
          color: "white",
          padding: "20px",
          borderRadius: "7px",
        }}
      >
        <div style={{ fontSize: "15px" }}>{body}</div>
        <h4 style={{ margin: "10px" }}>{name}</h4>
        <p style={{ margin: "5px" }}>{job}</p>
      </div>
      <Avatar
        alt="Remy Sharp"
        src={imge}
        className="avatarClients"
        sx={{
          width: 64,
          height: 64,
          marginTop: "20px",
          border: `5px solid ${theme.palette.primary.main}`,
        }}
      />
    </div>
  );
}
