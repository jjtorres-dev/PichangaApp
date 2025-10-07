import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { auth } from './src/config/firebase';

export default function App() {
  useEffect(() => {
    testFirebaseConnection();
  }, []);

  const testFirebaseConnection = async () => {
    try {
      console.log('🔌 Probando conexión con Firebase...');
      // Verificar que auth se inicializó correctamente
      if (auth) {
        console.log('✅ Firebase Auth configurado correctamente');
        console.log('🔑 Auth instance:', auth.app.name);
      } else {
        console.log('❌ Firebase Auth no se inicializó');
      }
    } catch (error) {
      console.log('❌ Error en Firebase:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a PichangaApp! ⚽</Text>
      <Text style={styles.subtitle}>Firebase conectado 🔥</Text>
      <Text style={styles.instruction}>Revisa la consola para ver el estado</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E8B57', // Verde fútbol
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FF6B35', // Naranja energético
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});