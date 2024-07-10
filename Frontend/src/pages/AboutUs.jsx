import React from 'react';

const AboutUs = () => {
  return (
    <div className="main-content">
      <h1>About Us</h1>
      <p>Welcome to DiaryDev, your go-to blog for all things technology, programming, and web development.</p>
      <h2>Our Mission</h2>
      <p>At DiaryDev, we aim to provide valuable content and discus Forum that helps developers of all levels to learn and grow. We cover a wide range of topics including the latest trends in technology, in-depth programming tutorials, and insightful articles on web development and more.</p>
      <h2>Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          <h3> Felbi</h3>
          <p>Founder & Lead Developer</p>
        </div>
        {/* <div className="team-member">
          <h3>nama</h3>
          <p>posisi</p>
        </div>
        <div className="team-member">
          <h3>nama</h3>
          <p>posisi</p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
