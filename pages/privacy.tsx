import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';
import { NextPage } from 'next';

const PrivacyPage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Privacy Policy'
        description='Read the most recent American Travel Consulting privacy policy here.'
        image='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
        alt='American Travel Consulting Logo'
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
