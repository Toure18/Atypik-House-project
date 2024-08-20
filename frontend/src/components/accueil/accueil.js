import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import intro from './images/Rectangle 3.jpg';
import galerie1 from './images/Rectangle 9.jpg';
import galerie2 from './images/Rectangle 10.jpg';
import galerie3 from './images/Rectangle 11.jpg';


const galleryItems = [
    {
      img: galerie1,
      title: 'L\'ilot nocturne'
    },
    {
      img: galerie2,
      title: 'Paysage urbain'
    },
    {
      img: galerie3,
      title: 'Nature sauvage'
    },
    {
        img: galerie1,
        title: 'L\'ilot nocturne'
      },
      {
        img: galerie1,
        title: 'L\'ilot nocturne'
      }
  ];

function PageAccueil() {
    const reviews = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ];

      

      
  return (
    <div>
      {/* Section d'introduction */}
      <div style={{ width: '100vw', overflow: 'hidden' }}>
        <img src={intro} alt="Intro" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>

      {/* Galerie d'images */}
      <Container sx={{ mt: 4 }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          style={{ paddingBottom: '40px' }}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: '8px' }} />
                <Typography variant="body1" sx={{ mt: 2 }}>{item.title}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Avis client */}
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Avis client</Typography>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ width: 'auto' }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Paper sx={{
                padding: 3,
                borderRadius: '50%',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: ['500px', '600px', '800px'], 
                height: ['200px', '200px', '200px'], 
                m: 'auto', 
                maxWidth: '90%', 
                overflow: 'hidden',
              }}>
                <Typography variant="body1" sx={{ p: 2, textAlign: 'center' }}>
                  {review}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>


      {/* Section de promotion */}
      <div style={{
            position: 'relative',
            textAlign: 'center',
            color: 'white',
            backgroundImage: `url("/Rectangle.jpg")`,
            backgroundRepeat: 'no-repeat',  // Add this to prevent the image from repeating
            backgroundPosition: 'center',  // Centers the image within the container
            height: '400px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
            backgroundColor: 'rgba(149,85,50,0.5)'
        }}>
                <Typography variant="h1" component="h1" sx={{ mb: 1, backgroundColor: 'rgba(,0,0,0.5)', padding: '8px' }}>
                    Un lieu Atypik
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: 'rgba(176,140,91,0.4)' }}>
                    Mettez le en location
                </Button>
            
        </div>
    </div>
  );
}

export default PageAccueil;
