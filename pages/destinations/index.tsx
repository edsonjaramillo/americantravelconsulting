import { Destination, Section } from '@/components/index';
import { DestinationType, getDestinations, graphCMSClient } from '@/lib/graphcms';
import { GetStaticProps } from 'next';

interface DestinationsPageProps {
  destinations: DestinationType[];
}

const DestinationsPage = ({ destinations }: DestinationsPageProps) => (
  <>
    <Section header='Destinations'>
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
