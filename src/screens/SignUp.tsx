import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>

      <Image 
        source={require('../../assets/sws-removebg-preview.png')} 
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Olá! Que bom te ver!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Seu nome</Text>
        <TextInput 
          style={styles.input}
          placeholder="qual seu nome?"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder="digite seu email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry
        />
      </View>

      <TouchableOpacity 
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.createAccountText}>CRIAR CONTA</Text>
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
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
}); 