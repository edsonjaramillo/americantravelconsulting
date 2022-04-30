import { TestimonialType } from '@/lib/graphcms';

const Testimonial = (testimonial: TestimonialType) => (
  <article className='testimonial'>
    <blockquote>
      <p className='testimonial__quote'>{testimonial.quote}</p>
    </blockquote>
    <div className='testimonial__meta'>
      <cite>{testimonial.name}</cite>
      <cite>{testimonial.organization}</cite>
    </div>
    <QuoteIcon />
  </article>
);

const QuoteIcon = () => (
  <svg
    className='testimonial__quoteicon'
    xmlns='http://www.w3.org/2000/svg'
    height='100%'
    viewBox='0 0 24 24'
    width='100%'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z' />
  </svg>
);

export default Testimonial;
