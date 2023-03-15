import { Box, Typography } from "@mui/material";

export default function About(): JSX.Element {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h3">About Me</Typography>
      <Typography variant="h6">
        Hi, My name is Elton and I've been working as a software engineer for
        about 3 years. I graduated from the University of California, Irvine in
        2019 with a degree in Computer Science and shortly after in 2020, I
        started as a Full-Stack Engineer at Codazen working with React,
        JavaScript, GraphQL, and PHP. Then after about 2 and a half years, I
        worked at Amazon at the Alexa Framework and SDK Organization.
      </Typography>
      <Typography variant="h6">
        Outside of work, you can find me doing a wide variety of activities.
        Currently, my main interests are video games, tennis, rock climbing,
        snowboarding, and playing MTG with my friends. If you want to connect,
        here are my contacts:
      </Typography>
    </Box>
  );
}
