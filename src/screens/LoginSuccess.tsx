import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../Components/Button';
import {RootState} from '../store';

import {globalStyles} from '../globalStyles';
import {clearUserData} from '../store/slices/userSlice';

const LoginSuccess = (props: any) => {
  const {navigation} = props;
  const user = useSelector((state: RootState) => state.users.user);
  const status = useSelector((state: RootState) => state.users.status);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearUserData());
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      contentInsetAdjustmentBehavior="automatic">
      {status === 'loading' && <ActivityIndicator />} 
      {status === 'succeeded' ? (
        <>
          <Text style={globalStyles.title}>Thank you</Text>
          <View>
            <Text style={globalStyles.paragraph}>Your email: {user.email}</Text>
            <Text style={globalStyles.paragraph}>Your name: {user.name}</Text>
            <Button title="Go back" onPress={() => handleBack()} />
          </View>
        </>
      ) : (
        <>
          <Text style={globalStyles.title}>Error</Text>
          <Button title="Go back" onPress={() => handleBack()} />
        </>
      )}
    </ScrollView>
  );
};

export default LoginSuccess;
