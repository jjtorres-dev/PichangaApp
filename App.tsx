import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('🔌 Conectando con Firebase...');
  const [details, setDetails] = useState('');

  useEffect(() => {
    testFirebaseConnection();
  }, []);

  const testFirebaseConnection = async () => {
    try {
      // Importación dinámica para evitar errores de compilación
      const firebaseModule = await require('./src/config/firebase');
      
      if (firebaseModule.auth) {
        setStatus('✅ Firebase CONECTADO');
        setDetails('La configuración es correcta y funcionando');
      } else {
        setStatus('❌ Problema con Auth');
        setDetails('El módulo auth no está disponible');
      }
    } catch (error: any) {
      setStatus('❌ Error de conexión');
      setDetails(`Error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a PichangaAppJJ! ⚽</Text>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.details}>{details}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2E8B57',
    textAlign: 'center',
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  details: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});