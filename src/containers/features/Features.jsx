import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Society Profiles',
    text: 'Explore the vibrant tapestry of college life through dedicated society profiles. Each society showcases its unique mission, dynamic members, upcoming events, and memorable past activities.',
  },
  {
    title: 'Event Calendar',
    text: 'Seamlessly plan your college journey with our centralized event calendar. Stay updated on upcoming events hosted by various societies, ensuring you never miss out on exciting opportunities. From workshops to social gatherings, find your niche and participate with ease.',
  },
  {
    title: 'Student Profiles',
    text: 'Elevate your college experience with personalized student profiles. Keep track of your extracurricular activities, achievements, and society engagements throughout your academic journey.',
  },
  {
    title: 'Sponsorship Opportunities',
    text: 'Forge meaningful connections between sponsors and student societies through transparent collaboration. Our platform empowers sponsors to connect with active and engaged societies, allowing them to choose the best fit for their advertisements.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">From Campus to Community, Building Bridges of Opportunity</h1>
      <p>Join Us Now!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
