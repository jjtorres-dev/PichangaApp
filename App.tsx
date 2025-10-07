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
      setStatus('📁 Buscando archivo firebase.ts...');
      
      // Verificar que el archivo existe
      const firebaseModule = require('./src/config/firebase');
      setStatus('✅ Archivo encontrado, inicializando...');
      
      // Pequeña pausa para que se vea el mensaje
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (firebaseModule.auth) {
        setStatus('🎉 ¡FIREBASE CONECTADO!');
        setDetails('Todo está funcionando correctamente ✅');
      } else {
        setStatus('❌ Auth no disponible');
        setDetails('El módulo de autenticación no se cargó');
      }
      
    } catch (error: any) {
      setStatus('❌ Error crítico');
      setDetails(`Mensaje: ${error.message}\n\nStack: ${error.stack}`);
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  details: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});