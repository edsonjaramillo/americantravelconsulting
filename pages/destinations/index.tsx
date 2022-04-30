import { Destination, Section, HeadOpenGraph } from '@/components/index';
import { DestinationType, getDestinations, graphCMSClient } from '@/lib/graphcms';
import { GetStaticProps } from 'next';

interface DestinationsPageProps {
  destinations: DestinationType[];
}

const DestinationsPage = ({ destinations }: DestinationsPageProps) => (
  <>
    <HeadOpenGraph
      title='Destinations'
      description='Explore the best destinations for your school trip around the best cities in the United States of America.'
      image='https://res.cloudinary.com/dzfqnxwvf/image/upload/v1598424852/destinations/destinations-hero.jpg'
      alt='Destinations'
    />
    <Section header='Destinations' h1>
      <div className='destinationscardgrid'>
        {destinations.map((destination) => (
          <Destination key={destination.id} {...destination} />
        ))}
      </div>
    </Section>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { destinations } = await graphCMSClient.request(getDestinations);

  return {
    props: { destinations },
  };
};

export default DestinationsPage;
