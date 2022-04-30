import { getEmployees, graphCMSClient, EmployeeType } from '@/lib/graphcms';
import { GetStaticProps } from 'next';
import { Employee, Section } from '@/components/index';

interface AboutPageProps {
  employees: EmployeeType[];
}

const AboutPage = ({ employees }: AboutPageProps) => {
  return (
    <>
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
    props: { employees }
  };
};

export default AboutPage;
