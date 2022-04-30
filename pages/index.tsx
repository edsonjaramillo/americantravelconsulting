import { HeadOpenGraph, CTA, Section } from '@/components/index';
import { FeaturedDestination, Testimonial } from '@/components/index';
import { GetStaticProps } from 'next';
import { graphCMSClient, getFeaturedDestinationsAndTestimonials } from '@/lib/graphcms';
import { DestinationType, TestimonialType } from '@/lib/graphcms';

interface HomepageProps {
  destinations: DestinationType[];
  testimonials: TestimonialType[];
}

const Homepage = ({ destinations, testimonials }: HomepageProps) => {
  return (
    <>
      <HeadOpenGraph
        title='American Travel Consulting'
        description='Specializing in student group travel, American Travel Consulting can customize the perfect trip for your group.'
        image='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
        alt='American Travel Consulting Logo'
      />
      <CTA />
      <Section header='Popular Destinations'>
        <div className='featureddestinationsgrid'>
          {destinations.map((destination) => (
            <FeaturedDestination key={destination.id} {...destination} />
          ))}
        </div>
      </Section>
      <Section header='Testimonials' color='section--bg--grayscale-200'>
        <div className='testimonialsgrid'>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { destinations, testimonials } = await graphCMSClient.request(
    getFeaturedDestinationsAndTestimonials
  );

  return {
    props: { destinations, testimonials },
  };
};

export default Homepage;
