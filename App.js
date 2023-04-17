import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [calculo, setCalculo] = useState('');
  const [resultado, setResultado] = useState('');

  function adicionarTela(botao, type) {
    switch (type) {
      case 'operador':
        if (resultado.length === 0) return;
        if (
          resultado[resultado.length - 1] === '+' ||
          resultado[resultado.length - 1] === '-' ||
          resultado[resultado.length - 1] === '/' ||
          resultado[resultado.length - 1] === '*' ||
          resultado[resultado.length - 1] === '.'
        ) {
          return;
        }
        break;
    }
    switch (botao) {
      case 'ac':
        setCalculo('');
        setResultado('');
        break;
      case '=':
        if (
          resultado[resultado.length - 1] === '0' &&
          resultado[resultado.length - 2] === '/'
        )
          return;
        setCalculo(resultado + ' =');
        setResultado(eval(resultado));
        break;
      case '.':
        if (resultado.includes('.')) return;
        else setResultado(resultado + '.');
        break;
      default:
        if (resultado.length >= 15) return;
        setResultado(resultado + botao);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultado}>
        <Text style={styles.textoResultado}>{calculo}</Text>
        <Text style={styles.textoResultado}>{resultado}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity
          onPress={() => adicionarTela('ac')}
          style={[styles.botao, styles.operadorDiferente]}>
          <Text style={styles.texto}>ac</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.operadorDiferente]}>
          <Text style={styles.texto}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.operadorDiferente]}>
          <Text style={styles.texto}> %</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('/', 'operador')}
          style={[styles.botao, styles.operador]}>
          <Text style={styles.texto}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('7', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('8', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('9', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('*', 'operador')}
          style={[styles.botao, styles.operador]}>
          <Text style={styles.texto}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('4', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('5', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('6', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('-', 'operador')}
          style={[styles.botao, styles.operador]}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('1', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('2', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('3', 'numero')}
          style={styles.botao}>
          <Text style={styles.texto}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('+', 'operador')}
          style={[styles.botao, styles.operador]}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('0', 'numero')}
          style={[styles.botao, styles.botao0]}>
          <Text style={styles.texto}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('.', 'operador')}
          style={styles.botao}>
          <Text style={styles.texto}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => adicionarTela('=', 'operador')}
          style={[styles.botao, styles.operador]}>
          <Text style={styles.texto}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#000',
  },
  resultado: {
    height: '30%',
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  botoes: {
    height: '70%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  botao: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
  botao0: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.2,
  },
  texto: {
    fontSize: 20,
  },
  operador: {
    backgroundColor: 'orange',
  },
  operadorDiferente: {
    backgroundColor: 'gray',
  },
  textoResultado: {
    fontSize: 50,
    textAlign: 'right',
    color: 'white',
  },
});
