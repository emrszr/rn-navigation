import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../components/Button';
import { RootStackParamList } from '../types';
import { useAuth } from '../viewModels/UseAuth';

const LoginScreen = () => {
  const {user, login, loading, error} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({email, password});
  };

  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!user) {
      return;
    }
    navigator.navigate('SScreen', {user});
  }, [user, navigator]);

  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    accessible={false}>
        <View
        style={styles.container}
        >

      <View style={styles.content}>
        <Text style={styles.title}>Giriş Yap</Text>

        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <Button title="Giriş Yap" onPress={handleLogin} />
        )}

        {error && <Text style={styles.error}>{error}</Text>}

        {user && <Text style={styles.success}>Hoş geldin, {user.email}!</Text>}
      </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    justifyContent: 'center',
    borderWidth: 1,
    padding: 20,

    paddingTop: 0,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -20,
    width: 110,
    paddingHorizontal: 5,
    backgroundColor: '#efefef',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  success: {
    color: 'green',
    marginTop: 10,
  },
});

export default LoginScreen;
