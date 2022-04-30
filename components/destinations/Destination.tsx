import { DestinationType } from '@/lib/graphcms';
import Link from 'next/link';
import { BlurImage } from '@/components/index';

const Destination = (destination: DestinationType) => (
  <article className='destinationcard'>
    <div className='destinationcard__image'>
      <BlurImage
        src={destination.main.url}
        layout='fill'
        objectFit='fill'
        alt={destination.mainalt}
        quality={35}
      />
    </div>
    <h3 className='destinationcard__name'>{destination.name}</h3>
    <p className='destinationcard__description'>{destination.description}</p>
    <Link href={`/destinations/${destination.slug}`}>
      <a className='destinationcard__link'>View Details</a>
    </Link>
  </article>
);

export default Destination;
