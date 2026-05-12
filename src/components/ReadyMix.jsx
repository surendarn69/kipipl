import React, { useRef } from 'react';
import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReadyMiximg from '../Assests/readymix.png';
import KRM from '../Assests/KRM.jpeg';
import KRMC from '../Assests/KRMC.png';
import KRMC1 from '../Assests/KRMC1.png';
import KRMC2 from '../Assests/KRMC2.png';
import KRMC3 from '../Assests/KRMC3.png';
import KRMC4 from '../Assests/KRMC4.png';
import ReadyMixNext from '../Assests/redymix-next.jpeg';

const ReadyMix = () => {
  const productsRef = useRef(null);

  const handleScrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Grid container>
      {/* Main Section */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '95%',
            background: '#EEEEEE',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card sx={{ width: '97%', mt: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 400, fontSize: { xs: '45px', md: '40px' }, color: '#FF6634' }}>
                  Kannan<br />
                  <span style={{ fontWeight: 700, fontSize: '45px', color: '#4B4E53' }}>Ready Mix</span>
                </Typography>
                <Divider sx={{ width: '100px', height: '3px', background: '#FF6634', mt: 1 }} />
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: '#7E8082',
                    mt: 4,
                    maxWidth: { xs: '100%', md: '425px' },
                  }}
                >
                  Our Twin Shaft RMC Plant ensures superior-quality concrete using 
                  VSI-processed aggregates and M-sand. With expert-led design 
                  mixes, boom pumps for small orders, and delivery anywhere in 
                  Erode within 3 hours, every pour is flawlessly executed under the 
                  supervision of a dedicated site coordinator. Perfect for all project 
                  sizes.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: '184px',
                    height: '45px',
                    background: '#FEA515',
                    mt: { xs: 6, md: 4 },
                  }}
                  onClick={handleScrollToProducts}
                >
                  <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>VIEW PRODUCTS</Typography>
                </Button>
              </Box>

              {/* Image Section */}
              <Box sx={{ mt: { xs: 4, md: 0 }, textAlign: 'center', flex: 1 }}>
                <Box
                  component="img"
                  src={ReadyMiximg}
                  alt="Ready Mix"
                  sx={{
                    width: { xs: '70%', sm: '60%', md: '80%' },
                    maxWidth: '700px',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop:'auto'
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    width: '207px',
                    height: '48px',
                    background: '#25D366',
                    borderRadius: '15px',
                    mt: 2,
                  }}
                  onClick={() => window.open('https://wa.me/919942530590', '_blank')}
                >
                  <WhatsAppIcon />
                  <Typography sx={{ fontWeight: 400, fontSize: '14px', textTransform: 'none', ml: 1 }}>
                    Chat on Whatsapp
                  </Typography>
                </Button>
              </Box>
            </Box>

            {/* KRM Image and Scrolling Images */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'start' },
                mt: 4,
                gap: 2,
              }}
            >
              {/* KRM Image */}
              <Box
                sx={{
                  width: { xs: '150px', md: '30%' },
                  textAlign: 'center',
                  order: { xs: -1, md: 0 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: { xs: 'auto', md: 0 },
                }}
              >
                <Box
                  component="img"
                  src={KRM}
                  alt="KRM Static"
                  sx={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </Box>

              {/* Scrolling Images */}
              <Box
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: 2,
                  width: '100%',
                  px: 2,
                  mt: { xs: 2, md: 0 },
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#FEA515 transparent',
                  '&::-webkit-scrollbar': { height: '8px', backgroundColor: '#EEEEEE' },
                  '&::-webkit-scrollbar-thumb': { backgroundColor: '#FEA515', borderRadius: '4px' },
                }}
              >
                {[ReadyMixNext, KRMC, KRMC1, KRMC2, KRMC3, KRMC4].map((image, index) => (
                  <Box
                    component="img"
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    sx={{
                      width: '125px',
                      height: '125px',
                      objectFit: 'cover',
                      flexShrink: 0,
                      borderRadius: '10px',
                    }}
                  />
                ))}
              </Box>
            </Box>
            <Box
  ref={productsRef}
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    mt: 10,
    px: 2,
    mb: 4,
  }}
>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
      color: 'black',
    }}
  >
    Our Products
  </Typography>
  <Grid
    container
    spacing={2}
    sx={{
      mt: 4,
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    {/* On mobile (xs) 3 items per row (each taking up 4 columns) */}
    {/* On larger screens (md) 5 items per row (each taking up 2.4 columns) */}
    <Grid item xs={4} sm={4} md={2.4}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        • M10
      </Typography>
    </Grid>
    <Grid item xs={4} sm={4} md={2.4}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        • M15
      </Typography>
    </Grid>
    <Grid item xs={4} sm={4} md={2.4}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        • M20
      </Typography>
    </Grid>
    <Grid item xs={4} sm={4} md={2.4}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        • M25
      </Typography>
    </Grid>
    <Grid item xs={4} sm={4} md={2.4}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        • M30
      </Typography>
  </Grid>
  <Grid item xs={4} sm={4} md={2.4} >
    <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '16px', md: '30px' }, wordSpacing: '2px' }}>
      • M35
    </Typography>
  </Grid>
  <Grid item xs={4} sm={4} md={2.4}>
    <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '16px', md: '30px' }, wordSpacing: '2px' }}>
      • M40
      </Typography>
    </Grid>
    <Grid item xs={4} sm={4} md={2.4}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        
      </Typography>
    </Grid>
  </Grid>
</Box>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReadyMix;
