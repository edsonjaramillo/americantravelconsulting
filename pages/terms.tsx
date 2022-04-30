import { Terms, HeadOpenGraph } from '@/components/index';
import { NextPage } from 'next';

const TermsPage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms and Conditions'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
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
