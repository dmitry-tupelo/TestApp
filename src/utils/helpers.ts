import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.',
      ),
    email: Yup.string()
      .required()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter valid email',
      ),
  });