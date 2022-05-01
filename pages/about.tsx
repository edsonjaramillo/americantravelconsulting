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
        image='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
        alt='American Travel Consulting Logo'
      />
      <Section header='Meet our Team' width='responsive-width-about' h1>
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
