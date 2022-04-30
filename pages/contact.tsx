import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification, ToastType } from '@/lib/toastNotification';
import { HeadOpenGraph, CustomInput, RadioInput } from '@/components/index';
import { TextFieldInput, FormGroupLabel } from '@/components/index';
import { NextPage } from 'next';
import { formatPhoneNumber } from '@/lib/form';

const ContactPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;

    const templateParameters = {
      name: data.name,
      organization: data.organization,
      destination: data.destination,
      email: data.email,
      phone: formatPhoneNumber(data.phone),
      choice: data.choice,
      message: data.message
    };

    console.table(templateParameters);

    // const { status } = await emailjs.send(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    //   templateParameters,
    //   process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    // );

    // if (status == 200) {
    //   toastNotification(
    //     ToastType.SUCCESS,
    //     `Thank you ${name} for your message. We will get back to you as soon as possible.`,
    //     5000
    //   );
    //   reset();
    // } else {
    //   toastNotification(ToastType.ERROR, 'Error occured. Try again.');
    // }
  };

  return (
    <>
      <HeadOpenGraph
        title='Contact Us'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corporis!'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
      />

      <div className='contact responsive-width-contact'>
        <div className='contact__grid'>
          <h1 className='contact__header'>Need a quote?</h1>
          <span className='contact__subheader'>
            Please fill out the form below and our team will be in contact soon.
          </span>
        </div>
      </div>

      <form
        className='form'
        onSubmit={handleSubmit(onSubmit, () => toastNotification(ToastType.ERROR, 'Check input requirements.'))}>
        <div className='form__grid responsive-width-contact'>
          <FormGroupLabel name='name' label='Name' errors={errors.name}>
            <CustomInput
              type='text'
              name='name'
              placeholder='Jane Doe'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='organization' label='Organization' errors={errors.organization}>
            <CustomInput
              type='text'
              name='organization'
              placeholder='Jane Doe High School'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='destination' label='Destination' errors={errors.destination}>
            <CustomInput
              type='text'
              name='destination'
              placeholder='Orlando, Florida'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='email' label='Email' errors={errors.email}>
            <CustomInput
              type='text'
              name='email'
              placeholder='janedoe@me.com'
              register={register}
              req={{
                required: { value: true, message: 'Required' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='phone' label='Phone Number' errors={errors.phone}>
            <CustomInput
              type='text'
              name='phone'
              placeholder='0123456789'
              register={register}
              req={{
                required: { value: true, message: 'Required' },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Must be 10 digit numbers'
                },
                minLength: { value: 10, message: 'Must be 10 digits' },
                maxLength: { value: 10, message: 'Must be 10 digits' }
              }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='message' label='Message' errors={errors.message}>
            <TextFieldInput
              name='message'
              placeholder='Enter Message'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='' label='Response Choice' errors={errors.choice}>
            <div className='form__radiogroup'>
              <label className='form__radiolabel' htmlFor='choice-Either'>
                <RadioInput
                  name='choice'
                  value='Either'
                  register={register}
                  req={{ required: { value: true, message: 'Required' } }}
                />
                Either
              </label>
              <label className='form__radiolabel' htmlFor='choice-Email'>
                <RadioInput
                  name='choice'
                  value='Email'
                  register={register}
                  req={{ required: { value: true, message: 'Required' } }}
                />
                Email
              </label>
              <label className='form__radiolabel' htmlFor='choice-Phone'>
                <RadioInput
                  name='choice'
                  value='Phone'
                  register={register}
                  req={{ required: { value: true, message: 'Required' } }}
                />
                Phone
              </label>
            </div>
          </FormGroupLabel>
          <button type='submit' className='form__button'>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
