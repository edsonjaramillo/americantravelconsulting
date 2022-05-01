import { navbarLinks } from '@/components/shared/Navbar';
import { DestinationType, getDestinationsSitemap, graphCMSClient } from '@/lib/graphcms';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { HeadOpenGraph } from '@/components/index';

interface SitemapPageProps {
  destinations: DestinationType[];
}

const Sitemap = ({ destinations }: SitemapPageProps) => (
  <>
    <HeadOpenGraph
      title='Sitemap'
      description='A list of all pages on American Travel Consulting. Used for search engine optimization.'
      image='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
      alt='American Travel Consulting Logo'
    />
    <div className='sitemap responsive-width-sitemap'>
      <h1 className='sitemap__header'>Sitemap</h1>
      <hr />
      <div className='sitemap__grid'>
        <SitemapSection header='Main'>
          <SitemapLink slug='/' name='Homepage' />
          {navbarLinks.map((link) => (
            <SitemapLink key={link.name} slug={link.slug} name={link.name} />
          ))}
        </SitemapSection>
        <SitemapSection header='Legal'>
          <SitemapLink slug='/policy' name='Privacy Policy' />
          <SitemapLink slug='/terms' name='Terms and Conditions' />
        </SitemapSection>
        <SitemapSection header='Destinations'>
          {destinations.map((destination) => (
            <SitemapLink
              key={destination.id}
              slug={`/destinations/${destination.slug}`}
              name={destination.name}
            />
          ))}
        </SitemapSection>
      </div>
    </div>
  </>
);

interface SitemapSectionProps {
  header: string;
  children: any;
}

interface SitemapLinkProps {
  slug: string;
  name: string;
}

const SitemapSection = ({ header, children }: SitemapSectionProps) => (
  <section className='sitemap__section'>
    <h2 className='sitemap__section--title'>{header}</h2>
    {children}
  </section>
);

const SitemapLink = ({ slug, name }: SitemapLinkProps) => (
  <Link href={slug}>
    <a className='sitemap__link'>{name}</a>
  </Link>
);

export const getStaticProps: GetStaticProps = async () => {
  const { destinations } = await graphCMSClient.request(getDestinationsSitemap);

  return {
    props: { destinations },
  };
};

export default Sitemap;
