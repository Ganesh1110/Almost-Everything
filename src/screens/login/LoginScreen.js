import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18next, {languageResource} from '../../services/i18next';
import {GlobalStyles} from '../../utilities/GlobalStyles';
import {DIM} from '../../utilities/Constants';

const LoginScreen = ({navigation}) => {
  const {t} = useTranslation();

  const changeLng = () => {
    if (i18next.language == 'eng') {
      i18next.changeLanguage('tam');
    } else {
      i18next.changeLanguage('eng');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        {t('Login')}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => changeLng()}>
        <Text style={styles.buttonText}>{t('change-Language')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginTop: 60,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
});

export default LoginScreen;
