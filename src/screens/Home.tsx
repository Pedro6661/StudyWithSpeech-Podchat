import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useState } from 'react';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Deseja realmente voltar para a tela inicial?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => navigation.navigate('Welcome')
        }
      ]
    );
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Adiciona mensagem do usuário
      const userMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        isUser: true
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');

      // Simula resposta do sistema após 1 segundo
      setTimeout(() => {
        const systemMessage: Message = {
          id: Date.now() + 1,
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
          isUser: false
        };
        setMessages(prev => [...prev, systemMessage]);
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons name="exit-outline" size={20} color="#FFD700" />
        </TouchableOpacity>

        <Image 
          source={require('../../assets/sws-removebg-preview.png')} 
          style={styles.logo}
        />
      </View>

      <ScrollView 
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message) => (
          <View 
            key={message.id}
            style={[
              styles.messageContainer,
              message.isUser ? styles.userMessage : styles.systemMessage
            ]}
          >
            <View style={styles.messageContent}>
              <Text style={[
                styles.messageText,
                message.isUser ? styles.userMessageText : styles.systemMessageText
              ]}>
                {message.text}
              </Text>
              {!message.isUser && (
                <TouchableOpacity style={styles.audioButton}>
                  <Ionicons name="volume-high" size={28} color="#FFD700" />
                  <Text style={styles.audioButtonText}>Ouvir resposta</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="O que quer saber?"
          placeholderTextColor="#666"
          value={inputMessage}
          onChangeText={setInputMessage}
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSendMessage}
        >
          <Ionicons name="paper-plane" size={20} color="#FFD700" />
        </TouchableOpacity>
      </View>
      
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  logoutButton: {
    position: 'absolute',
    left: 20,
    top: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 8,
    borderRadius: 20,
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  messagesContent: {
    flexGrow: 1,
    gap: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  messageContent: {
    gap: 8,
  },
  userMessage: {
    backgroundColor: '#FFD700',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  systemMessage: {
    backgroundColor: '#2A2A3E',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
  },
  userMessageText: {
    color: '#000000',
  },
  systemMessageText: {
    color: '#FFFFFF',
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  audioButtonText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 25,
  },
}); 