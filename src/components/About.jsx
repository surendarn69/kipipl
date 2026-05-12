import { Grid, Box, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import aboutimg from '../Assests/aboutimg.png';

const About = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: { xs: 2, sm: 4, lg: 8 },
        alignItems: 'center',
      }}
    >
      {/* Left Section: Image/Logo */}
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={aboutimg}
          alt="30+ Years Industry Experience"
          sx={{
            width: { xs: '80%', md: '100%' },
            maxWidth: '400px',
            margin: { xs: '0 auto', md: '0' },
            display: 'block',
          }}
        />
      </Grid>

      {/* Right Section: About Content */}
      <Grid item xs={12} md={7}>
        <Box>
          {/* Title Section */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 100,
              fontSize: { lg: '60px', xs: '24px' },
              color: '#4B4E53',
              mb: 2,
            }}
          >
            ABOUT <br />
            <span
              style={{
                fontWeight: 700,
                fontSize: 'inherit',
              }}
            >
              US
            </span>
            <Divider
              style={{
                width: '100px',
                height: '3px',
                background: '#FF6634',
                marginTop: '8px',
              }}
            />
          </Typography>

          {/* Description Section */}
          <Typography
            variant="body1"
            sx={{
              color: '#7E8082',
              fontWeight: 400,
              fontSize: { lg: '16px', xs: '12px' },
              lineHeight: { lg: '25px', xs: '18px' },
              mb: 2,
            }}
          >
            With a legacy dating back to 1990, we stand as pioneers in the sand and
            aggregates industry, driven by innovation and a steadfast commitment to quality.
            Operating from a 100-acre mining campus in Murungatholuvu, Chennimalai, home to
            10 million tons of premium blue metal reserves, we redefine reliability in every
            order.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#7E8082',
              fontWeight: 400,
              fontSize: { lg: '16px', xs: '12px' },
              lineHeight: { lg: '25px', xs: '18px' },
              mb: 2,
            }}
          >
            Our state-of-the-art 150 TPH 4-stage sand manufacturing plant, paired with
            advanced quality controls, ensures products that meet IS standards while
            minimizing our carbon footprint. Strategically located as the nearest blue metal
            quarry to Erode, we guarantee swift delivery within two hours, backed by
            exceptional service and sustainable practices.
          </Typography>

          {/* Button Section */}
          <Box
            sx={{
              display: 'flex',
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontWeight: 600,
                fontSize: { lg: '14px', xs: '10px' },
                padding: { lg: '12px 24px', xs: '8px 16px' },
                backgroundColor: '#FEA515',
              }}
            >
              KNOW MORE
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
