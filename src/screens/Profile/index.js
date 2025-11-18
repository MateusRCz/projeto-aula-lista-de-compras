import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao_silva@gmail.com');
  const [telefone, setTelefone] = useState('(99) 9 9999-9999');
  const [isEditing, setIsEditing] = useState(false);

  const handleAlterarDados = () => {
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    setIsEditing(false);
  };

  const handleSair = () => {
    Alert.alert('Confirmação', 'Deseja realmente sair?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => console.log('Logout') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="account-circle" size={40} color="#FFF" />
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              placeholderTextColor="#999"
              value={nome}
              onChangeText={setNome}
              editable={isEditing}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              editable={isEditing}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              placeholderTextColor="#999"
              value={telefone}
              onChangeText={setTelefone}
              editable={isEditing}
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity
            style={styles.alterarButton}
            onPress={isEditing ? handleAlterarDados : () => setIsEditing(true)}
          >
            <Text style={styles.alterarButtonText}>
              {isEditing ? 'Salvar Dados' : 'Alterar Dados'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sairButton}
            onPress={handleSair}
          >
            <Text style={styles.sairButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#F5A623',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
  },
  formContainer: {
    padding: 20,
    gap: 16,
  },
  inputGroup: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  alterarButton: {
    backgroundColor: '#FF6B4A',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  alterarButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sairButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  sairButtonText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '500',
  },
});
