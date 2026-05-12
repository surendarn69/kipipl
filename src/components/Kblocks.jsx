import React, { useRef } from 'react';
import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import kblocks from '../Assests/K-Blocks.png';
import Kblockslogo from '../Assests/kblock.jpeg';
import Kblocks1 from '../Assests/Kblock1.png';
import Kblocks2 from '../Assests/Kblock2.png';
import Kblocks3 from '../Assests/Kblock3.png';
import Kblocks4 from '../Assests/Kblock4.png';
import kblock1 from '../Assests/kblock1.jpeg';
import kblock2 from '../Assests/kblock2.jpeg';
import kblock3 from '../Assests/kblock3.jpeg';

const KBlocks = () => {
    const productSectionRef = useRef(null);

    // Scroll to the "Our Products" section
    const handlekblocksScroll = () => {
        if (productSectionRef.current) {
            productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    {/* K-Blocks Section */}
                    <Card sx={{ width: '97%', height: 'auto', background: 'white', mt: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-around',
                            }}
                        >
                            <img
                                src={kblocks}
                                alt="ready mix"
                                style={{
                                    width: '100%',
                                    maxWidth: '450px',
                                    height: 'auto', // Keep the height auto for better ratio
                                    paddingTop: '30px',
                                    objectFit: 'contain',
                                }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: { xs: '30px', md: '40px' },
                                        color: '#FF6634',
                                        ml: 2,
                                    }}
                                >
                                    K <span style={{ color: '#4B4E53' }}>Blocks</span>
                                </Typography>
                                <Divider
                                    style={{
                                        width: '100px',
                                        height: '3px',
                                        background: '#FF6634',
                                        marginLeft: '20px',
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: '16px',
                                        color: '#7E8082',
                                        width: { xs: '95%', md: '425px' },
                                        height: '50px',
                                        mt: 4,
                                        ml: 2,
                                    }}
                                >
                                    We take pride in being a leading manufacturer of a diverse range of solid blocks,
                                    catering to various construction and sustainable building needs.
                                    <br />
                                    <br />
                                    Fully automated plant with high-pressure machines. Bricks are strapped and
                                    crane-delivered up to the first floor, reducing labor costs. Each lot undergoes
                                    rigorous compression testing for quality assurance.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '184px',
                                        height: '45px',
                                        background: '#FEA515',
                                        borderRadius: '2px',
                                        mt: { xs: 35, sm: 20 },
                                        ml: 2,
                                    }}
                                    onClick={handlekblocksScroll}
                                >
                                    <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                                        VIEW PRODUCTS
                                    </Typography>
                                </Button>
                            </Box></Box> 
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'left',  // 👈 Now aligned left
                                        ml: 10,                // Optional: small left margin for spacing
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
                                            window.open('https://wa.me/919942530590', '_blank')}
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
                        {/* Logo and Scrollable Section */}
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
                  src={Kblockslogo}
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
                                {[kblock1, kblock2, Kblocks1, Kblocks2, Kblocks3, kblock3, Kblocks4].map((image, index) => (
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
      color: 'black',
    }}
  >
    Our Products
  </Typography>
  <Grid container spacing={2} sx={{ mt: 4, justifyContent: 'center', textAlign: 'center' }}>
    {/* On small screens (xs) 1 item per row */}
    {/* On medium and large screens (md) 3 items per row */}
    <Grid item xs={12} sm={4} md={4}> {/* 12 for small, 4 for medium */}
      <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '16px', md: '30px' }, wordSpacing: '2px' }}>
         • 8” Solid Block
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4}> {/* 12 for small, 4 for medium */}
      <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '16px', md: '30px' }, wordSpacing: '2px' }}>
        • 6” Solid Block
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4}> {/* 12 for small, 4 for medium */}
      <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '16px', md: '30px' }, wordSpacing: '2px' }}>
         • 4” Solid Block
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

export default KBlocks;












