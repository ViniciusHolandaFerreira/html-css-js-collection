
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAk4uXYzWaYcuG6NN9bwo0rBsueZ7_IiYM",
  authDomain: "task-app-497bf.firebaseapp.com",
  databaseURL: "https://task-app-497bf-default-rtdb.firebaseio.com",
  projectId: "task-app-497bf",
  storageBucket: "task-app-497bf.firebasestorage.app",
  messagingSenderId: "285324815437",
  appId: "1:285324815437:web:b76a6ad56330980b2f4004",
  measurementId: "G-D6RNWJMHQ9"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Add tarefa ao Banco de Dados
export function adicionarDado(caminho, obj) {
  const refBanco = ref(db, caminho);
  return push(refBanco, obj)
}

// Delet tarefa do Banco de Dados
export function deletarDado(caminho,id) {
  const refBanco = ref(db, `${caminho}/${id}`)
  return remove(refBanco)
}

// Escuta alterações em tempo real no Banco de Dados
export function observarDados(caminho, callback) {
  const refBanco = ref(db, caminho);
  onValue(refBanco, (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() : null);
  });
}