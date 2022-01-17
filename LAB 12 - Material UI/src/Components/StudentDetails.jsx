import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Card, CardMedia } from "@mui/material";
export default function StudentDetails({
  name,
  rollNo,
  currentGPA,
  details,
  imgSrc,
}) {
  return (
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              src={imgSrc}
              // image={require(`${imgSrc}`)}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Roll Number: {rollNo}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {details}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <b>Current GPA: </b>
                {currentGPA}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
