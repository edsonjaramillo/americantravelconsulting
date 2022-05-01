import { Terms, HeadOpenGraph } from '@/components/index';
import { NextPage } from 'next';

const TermsPage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms and Conditions'
        description='Read the most recent American Travel Consulting terms and conditions here.'
        image='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
        alt='American Travel Consulting Logo'
      />
      <Terms
        name='American Travel Consulting'
        email='chris@americantravelconsulting.com'
        phone='(256) 572-0669'
        website='https://americantravelconsulting.com/'
      />
    </>
  );
};

export default TermsPage;
