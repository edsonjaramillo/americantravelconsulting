import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';
import { NextPage } from 'next';

const PrivacyPage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Privacy Policy'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <PrivacyPolicy
        name='American Travel Consulting'
        email='chris@americantravelconsulting.com'
        phone='(256) 572-0669'
        website='https://americantravelconsulting.com/'
      />
    </>
  );
};

export default PrivacyPage;
