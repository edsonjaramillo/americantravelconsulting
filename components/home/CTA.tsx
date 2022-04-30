import Image from 'next/image';
import Link from 'next/link';

const CTA = () => (
  <div className='cta'>
    <Image src='/cta.jpg' alt='CTA' layout='fill' objectFit='cover' objectPosition='50% 40%' priority />
    <div className='cta__content responsive-width'>
      <div className='cta__headergrid'>
        <h1 className='cta__title'>
          Travel Easier
          <br />
          Travel Stress-Free
          <br />
          Let Us Do The Work
        </h1>
        <span className='cta__subtitle'>
          Enjoy your next student group trip from start to finish without a worry in the world
        </span>
        <Link href='/contact'>
          <a className='cta__link'>Request A Quote</a>
        </Link>
      </div>
      <div className='cta__image'>
        <Image
          src='https://media.graphassets.com/resize=fit:clip,width:600/iKlq3BmlS67bJPSeyO2Q'
          alt='American Travel Consulting logo'
          layout='fill'
          objectFit='scale-down'
          quality={40}
          priority
        />
      </div>
    </div>
  </div>
);

export default CTA;
