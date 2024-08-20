import React, {useRef} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {activateUser, storeUserData} from '../store/slices/userSlice';
import {SignupSchema} from '../utils/helpers';

import Button from '../Components/Button';

import {AppDispatch} from '../store';
import {SCREENS} from '../navigation/screens';
import Card from '../../assets/svg/Card';
import {globalStyles} from '../globalStyles';

const Login = ({navigation}: any) => {
  const refNameInput = useRef<any>(null);
  const dispatch = useDispatch<AppDispatch>();

  const focusOnName = () => {
    if (refNameInput && refNameInput.current) {
      refNameInput.current.focus();
    }
  };
  const handleFormSubmit = (values: FormValues) => {
    dispatch(activateUser());
    dispatch(storeUserData(values));
    navigation.navigate(SCREENS.LOGIN_SUCCESS);
  };
  return (
    <KeyboardAvoidingView
      style={globalStyles.keyboardAwareWrapper}
      behavior="padding"
      enabled>
      <ScrollView
        contentContainerStyle={globalStyles.container}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={globalStyles.title}>Test form</Text>
        <Text style={globalStyles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={globalStyles.image}>
          <Card />
        </View>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{email: '', name: ''}}
          //if required to clear form afterSubmit use resetForm()
          onSubmit={values => handleFormSubmit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={globalStyles.formWrap}>
              <View style={globalStyles.inputWrap}>
                <TextInput
                  style={globalStyles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                  blurOnSubmit={false}
                  returnKeyType="next"
                  onSubmitEditing={focusOnName}
                />
                {errors.email && touched.email ? (
                  <Text style={globalStyles.inputError}>{errors.email}</Text>
                ) : null}
              </View>

              <View style={globalStyles.inputWrap}>
                <TextInput
                  ref={refNameInput}
                  style={globalStyles.input}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Name"
                  onSubmitEditing={() => handleSubmit()}
                />
                {errors.name && touched.name ? (
                  <Text style={globalStyles.inputError}>{errors.name}</Text>
                ) : null}
              </View>
              <Button title="Apply" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
