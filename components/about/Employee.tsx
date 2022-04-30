import { EmployeeType } from '@/lib/graphcms';
import { BlurImage } from '@/components/index';

const Employee = (employee: EmployeeType) => (
  <article className='employee'>
    <div className='employee__image'>
      <BlurImage
        src='https://via.placeholder.com/900x1200'
        alt={`${employee.name}'s photo`}
        title={`${employee.name}'s photo`}
        layout='fill'
        objectFit='cover'
      />
    </div>
    <div className='employee__information'>
      <h3 className='employee__name'>{employee.name}</h3>
      <a
        href={`mailto:${employee.email}`}
        className='employee__contactgroup'
        title={`Send email to ${employee.name}`}>
        <MailIcon />
        <span className='employee__emailme'>{`Email ${employee.name}`}</span>
      </a>
      <p className='employee__biography'>{employee.biography}</p>
      <blockquote>
        <p className='employee__quote'>{employee.quote}</p>
      </blockquote>
    </div>
  </article>
);

const MailIcon = () => (
  <svg
    className='employee__emailicon'
    xmlns='http://www.w3.org/2000/svg'
    height='100%'
    viewBox='0 0 24 24'
    width='100%'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
  </svg>
);

export default Employee;
