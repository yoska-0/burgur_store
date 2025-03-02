import Button from "@mui/material/Button";

export default function BodyHeaderSection({ text, style }) {
  return (
    <Button
      variant="contained"
      style={{
        color: "white",
        borderRadius: "20px",
        fontSize: "15px",
        fontWeight: "400",
        textTransform: "none",
        padding: "7px 30px",
        ...style,
      }}
    >
      {text}
    </Button>
  );
}
