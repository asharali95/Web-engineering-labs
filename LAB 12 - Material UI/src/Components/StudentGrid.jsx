import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StudentDetails from "./StudentDetails";
import { Students } from "./utility";
export default function StudentGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Students.map(({ name, rollNo, currentGPA, details, src }) => (
          <Grid item xs={2} sm={4} md={4}>
            <StudentDetails
              name={name}
              details={details}
              rollNo={rollNo}
              currentGPA={currentGPA}
              imgSrc={src}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
