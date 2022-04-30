import { DestinationType } from '@/lib/graphcms';
import Link from 'next/link';
import BlurImage from '../shared/BlurImage';

const FeaturedDestination = (destination: DestinationType) => {
  return (
    <div className='featureddestination'>
      <BlurImage
        src={destination.main.url}
        alt={destination.mainalt}
        layout='fill'
        objectFit='fill'
        quality={40}
      />
      <h3 className='featureddestination__name'>{destination.name}</h3>
      <Link href={`/destinations/${destination.slug}`}>
        <a className='featureddestination__link'>View Details</a>
      </Link>
    </div>
  );
};

export default FeaturedDestination;
