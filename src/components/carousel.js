import React, { useState } from 'react';
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: props.images[1].node.childImageSharp.fluid,
      altText: props.images[1].node.name,
      header: 'Photography and Video Productions by Montezuma Media',
      caption: 'Capital Lake, Colorado'
    },
    {
        src: props.images[0].node.childImageSharp.fluid,
        altText: props.images[0].node.name,
        header: 'To See The World From Other Perspectives',
        caption: 'Delhi, India'
    },
    {
        src: props.images[2].node.childImageSharp.fluid,
        altText: props.images[2].node.name,
        header: '',
        caption: 'North Maroon Peak, Colorado'
    },
    {
        src: props.images[3].node.childImageSharp.fluid,
        altText: props.images[3].node.name,
        header: '',
        caption: 'Great Sand Dunes, Colorado'
    },
    {
      src: props.images[4].node.childImageSharp.fluid,
      altText: props.images[4].node.name,
      header: '13,000 Feet',
      caption: 'North Maroon Peak, Colorado'
    },
    {
      src: props.images[5].node.childImageSharp.fluid,
      altText: props.images[5].node.name,
      header: '',
      caption: 'Vilnius, Lithuania'
    }
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Img fluid={item.src} alt={item.altText} style={{height:`100vh`}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.header} className="d-block" style={{color:`blue`}}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="landing-carousel"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;