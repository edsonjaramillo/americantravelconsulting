import { getEmployees, graphCMSClient, EmployeeType } from '@/lib/graphcms';
import { GetStaticProps } from 'next';
import { Employee, HeadOpenGraph, Section } from '@/components/index';

interface AboutPageProps {
  employees: EmployeeType[];
}

const AboutPage = ({ employees }: AboutPageProps) => {
  return (
    <>
      <HeadOpenGraph
        title='About Us'
        description='Meet our team of experts who are passionate about helping you plan and excecute your school trip.'
        image='https://res.cloudinary.com/dzfqnxwvf/image/upload/v1598424852/destinations/destinations-hero.jpg'
        alt='Destinations'
      />
      <Section header='Meet our Team' width='responsive-width-about'>
        <div className='employeesgrid'>
          {employees.map((employee) => (
            <Employee key={employee.id} {...employee} />
          ))}
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { employees } = await graphCMSClient.request(getEmployees);
  return {
    props: { employees },
  };
};

export default AboutPage;
