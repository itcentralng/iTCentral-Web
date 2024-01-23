// InternCard.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './InternCard.css'; // Import the external CSS file

const InternCard = () => {
  return (
    <div className='page-container'>
    <div className="slide-container">
      <div className="slide-content">
        <div className="card-wrapper">
          <div className="card3">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src="/images/mubarak.jpeg" alt="" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Mubarak Ibrahim</h2>
              <p className="description">
              My time at iT Central was really wonderful. I worked on a variety of tasks, and also learned new things and improved my skills.
              </p>
              <h3 className='heading3'>Skills:</h3>
              <span className='description'>HTML</span>
              <span className='description'>CSS</span>
              <span className='description'>JavaScript</span>
              <span className='description'>React JS</span>
              <h3 className='heading3'>Education:</h3>
              <span className='description'>Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InternCard;



  // <Card className="card">
    //   {/* <CardMedia
    //     component="img"
    //     height="140"
    //     image="https://placekitten.com/600/140" // Replace with your intern's image
    //     alt="Intern Image"
    //     className="media"
    //   /> */}
    //   <div className='imgContainer'>
    //     <img src="/images/IMG_20230111_162107.jpg" alt="" />
    //   </div>
    //   <CardContent className='card-details'>
    //     <Typography gutterBottom variant="h4" component="div" className='bold-text'>
    //       Maryam Rabi'u
    //       </Typography>
    //     <Typography variant="body2" className='text'>
    //       Internship Position
    //     </Typography>
    //     <Typography variant="body2" className='text'>
    //       Began from: July, 2023.
    //     </Typography>
    //     <Typography variant="body2" className='text'>
    //       Skills: React, JavaScript, HTML, CSS
    //     </Typography>
    //   </CardContent>
    // </Card>