import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material';
import React, { useRef } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReadyMix1 from '../Assests/bluemetal.jpeg';
import blue1 from '../Assests/blue1.jpeg';
import blue2 from '../Assests/blue2.jpeg';
import blue3 from '../Assests/blue3.jpeg';
import blue4 from '../Assests/blue4.jpeg';
import blue5 from '../Assests/blue5.jpeg';
import blue6 from '../Assests/blue6.jpeg';
import kanna from '../Assests/kanna.jpeg';

const BlueMetals = () => {
  const productSectionRef = useRef(null); // Ref for the "Our Products" section

  const handleScrollToImages = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            width: '95%',
            height: 'auto',
            justifyContent: 'center',
            background: '#EEEEEE',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Blue Metals */}
          <Card sx={{ width: '97%', height: 'auto', background: 'white', mt: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                ml: { xs: 2, md: 15 },
                justifyContent: 'space-around',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: '60px', md: '40px' },
                    color: '#FF6634',
                  }}
                >
                  Kannan
                  <br />
                  <span
                    style={{ fontWeight: 700, fontSize: '45px', color: '#4B4E53' }}
                  >
                    Blue Metals
                  </span>
                </Typography>
                <Divider
                  style={{
                    width: '100px',
                    height: '3px',
                    background: '#FF6634',
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#7E8082',
                    width: { xs: '100%', md: '425px' },
                    height: '50px',
                    mt: 4,
                  }}
                >
                  As a trusted leader in sand and aggregates, we are committed to
                  delivering high-quality products with unmatched efficiency and
                  sustainable practices.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: '184px',
                    height: '45px',
                    background: '#FEA515',
                    borderRadius: '2px',
                    mt: 10
                  }}
                  onClick={handleScrollToImages} // Call the scroll handler
                >
                  <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                    VIEW PRODUCTS
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mt: { xs: 4, md: 0 },
                }}
              >
                                         <img
    src={ReadyMix1}
    alt="ready mix"
    style={{
        width: '100%',
        maxWidth: '640px',
        height: 'auto',
        paddingTop: '30px',
        objectFit: 'contain',
    }}
/>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'end',
                    mr: 5,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: '207px',
                      height: '48px',
                      background: '#25D366',
                      borderRadius: '15px',
                      mt: 2,
                    }}
                    onClick={() =>
                      window.open('https://wa.me/918220624590', '_blank')
                    }
                  >
                    <WhatsAppIcon />
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: '14px',
                        textTransform: 'none',
                        ml: 1,
                      }}
                    >
                      Chat on Whatsapp
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
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
                  src={kanna}
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
                              {[blue1,blue2,blue3,blue4,blue5,blue6].map((image, index) => (
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
  ref={productSectionRef}
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
      color: '#4B4E53',
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
        • M-Sand
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
        • P-Sand
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
        • 6 mm
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
        • 12 mm
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
        • 20 mm
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
        • 40 mm
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
        • 53 mm
      </Typography>
    </Grid>
    <Grid item xs={4} sm={4} md={3}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '16px', md: '30px' }, // Font size changes based on screen size
          wordSpacing: '2px',
        }}
      >
        • Rough Stone
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
        • Dust
      </Typography>
    </Grid><Grid item xs={4} sm={4} md={2.4}>
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

export default BlueMetals;


