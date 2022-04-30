import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { DestinationType, graphCMSClient } from '@/lib/graphcms';
import { getDestinationSlugs, getDestination } from '@/lib/graphcms';
import { BlurImage, HeadOpenGraph } from '@/components/index';
import MapBox from '@/components/destinations/Map';

interface DestinationPageProps {
  destination: DestinationType;
}

interface DestinationImageProps {
  url: string;
  alt: string;
}
const DestinationImage = ({ url, alt }: DestinationImageProps) => (
  <div className='destination__image'>
    <BlurImage src={url} layout='fill' objectFit='fill' alt={alt} quality={35} priority />
  </div>
);

const DestinationPage = ({ destination }: DestinationPageProps) => (
  <>
    <HeadOpenGraph
      title={destination.name}
      image={destination.main.url}
      description={destination.description}
      alt={destination.mainalt}
    />
    <div className='destination responsive-width-destination'>
      <h1 className='destination__name'>{destination.name}</h1>
      <p className='destination__description'>{destination.description}</p>
      <div className='destination__imagegrid'>
        <DestinationImage url={destination.main.url} alt={destination.mainalt} />
        <DestinationImage url={destination.secondimage.url} alt={destination.secondalt} />
        <DestinationImage url={destination.thirdimage.url} alt={destination.thirdalt} />
        <DestinationImage url={destination.fourthimage.url} alt={destination.fourthalt} />
      </div>
      <h2 className='destination__section'>Popular Attractions</h2>
      <ul className='destination__attractions'>
        {destination.mapitems.map((place) => (
          <li key={place.id} className='destination__attraction'>
            {place.name}
          </li>
        ))}
      </ul>
      <div className='destination__mapbox'>
        <MapBox
          initial={{
            latitude: destination.viewport.latitude,
            longitude: destination.viewport.longitude,
            zoom: destination.zoomlevel + 2,
          }}
          mapitems={destination.mapitems}
        />
      </div>
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { slug } = ctx.params as { slug: string };

  const { destination } = await graphCMSClient.request(getDestination, { slug });

  return {
    props: { destination },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { destinations } = await graphCMSClient.request(getDestinationSlugs);

  const paths = destinations.map((destination: DestinationType) => ({
    params: { slug: destination.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default DestinationPage;
