import { toastNotification, ToastType } from '@/lib/toastNotification';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { CustomInput, FormGroupLabel } from '../components';

const PaymentPage: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    const { schoolcode } = data;
    router.push(`https://americantravelconsulting.grcoll.co/go/${schoolcode}`);
  };

  return (
    <>
      <div className='payment payment--center responsive-width-contact'>
        <h1 className='payment__header'>GroupCollect Payment Portal</h1>
        <span className='payment__subheader'>
          Enter your school code below and you will be transfered to your GroupCollect payment page.
        </span>
        <form
          className='form'
          onSubmit={handleSubmit(onSubmit, () => toastNotification(ToastType.ERROR, 'Check input requirements.'))}>
          <div className='form__grid'>
            <FormGroupLabel name='schoolcode' label='School Code' errors={errors.schoolcode}>
              <CustomInput
                type='text'
                name='schoolcode'
                placeholder='schoolhsbandchicago2022'
                register={register}
                req={{ required: { value: true, message: 'Required' } }}
              />
            </FormGroupLabel>
            <button type='submit' className='form__button'>
              Go to Payment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentPage;
