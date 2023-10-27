import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {GlobalStyles} from '../../utilities/GlobalStyles';

const Dashboard = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={GlobalStyles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {t('change-Language')}
        </Text>
      </View>
    </View>
  );
};

export default Dashboard;
