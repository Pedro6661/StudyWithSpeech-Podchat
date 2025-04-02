import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export function Welcome() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/sws-removebg-preview.png')} 
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Olá! Que bom te ver!</Text>
      
      <TouchableOpacity 
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.createAccountText}>CRIAR CONTA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>LOGAR</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Study-With-Speech</Text>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 40,
  },
  createAccountButton: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  createAccountText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FFD700',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 40,
  },
  loginText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 20,
  }
}); 