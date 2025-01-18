import { Stack } from '@mui/material';
import React from 'react'
import EventsDesktopView from './EventsDesktopView';
import EventsMobileView from './EventsMobileView';

const eventTypes = [
  {
    heading: "Corporate Events",
    mobileDescription: "Offsites, annual meetups, and conferences that inspire",
    desktopdDescription:
      "From offsites to conferences, we deliver seamless, inspiring events aligned with your company’s vision. Our expertise ensures productive gatherings that foster connection, celebrate milestones, and energize your team for growth.",
    image: "/events/corporate-event.svg",
  },
  {
    heading: "Personal Events",
    mobileDescription: "Weddings, anniversaries, and celebrations that touch hearts.",
    desktopdDescription:
      "We craft personalized weddings, anniversaries, and celebrations with elegance and attention to detail, creating heartfelt experiences that reflect your story and leave lasting memories for you and your loved ones.",
    image: "/events/personal-event.svg",
  },
  {
    heading: "Sports Events",
    mobileDescription: "Energetic tournaments and competitions that thrill.",
    desktopdDescription:
      "We organize dynamic sports events, handling logistics and live coordination. Noshi Events ensures seamless experiences for athletes and audiences, creating unforgettable moments of passion, adrenaline, and thrilling victories that inspire.",
    image: "/events/sports-event.svg",
  },
  {
    heading: "Promotional Events",
    mobileDescription: "Brand activations and product launches that shine.",
    desktopdDescription:
      "We bring brands to life with creative, engaging promotional events. From product launches to activations, Noshi Events delivers impactful experiences that captivate audiences and achieve your marketing goals effortlessly.",
    image: "/events/promotional-event.svg",
  },
];

function Events() {
  return (
    <Stack className='fixed-size-container' sx={{marginBottom: "14px !important", paddingTop: "20px !important"}} id="events-section">
      <Stack sx={{display: { xs: "none", md: "block" }}}>
        <EventsDesktopView eventTypes={eventTypes}/>
      </Stack>
      <Stack sx={{display: { xs: "block", md: "none" }}}>
        <EventsMobileView eventTypes={eventTypes}/>
      </Stack>
    </Stack>
  )
}

export default Events;