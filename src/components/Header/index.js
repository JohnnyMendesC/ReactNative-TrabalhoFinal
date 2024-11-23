import React, { useState, useContext } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput, Text, Modal, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { ClimaContext,CardClima } from '../ClimaContext';




const Header = () => {
  const [text, setText] = useState('');
  const { dadosClima, buscarDadosClimaticos, setCidade, cidade, ultimaAtualizacao } = useContext(ClimaContext);
  const [modalVisible, setModalVisible] = useState(false);
  

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Image
        source={require('../../../assets/adaptive-icon2.png')}
        style={styles.logo}
      />

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor='white'
          value={text}
          onChangeText={setText}
        />
      </View>

      <View style={styles.climaHeader}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.textoCidade}>{dadosClima ? `${dadosClima.name}` : "Confira o"}</Text>
          <Text style={styles.textoTemperatura}>{dadosClima ? `${dadosClima.main.temp}°C` : "Clima"}
            {dadosClima && (
              <Image
                style={styles.iconeClima}
                source={{
                  uri: `https://openweathermap.org/img/wn/${dadosClima.weather[0].icon}@2x.png`,
                }}
              />
            )}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={() => { }}>
              <View style={styles.modalContent}>
                <CardClima
                  dadosClima={dadosClima}
                  buscarDadosClimaticos={buscarDadosClimaticos}
                  setCidade={setCidade}
                  ultimaAtualizacao={ultimaAtualizacao}
                  cidade={cidade}
                />
                <TouchableOpacity
                  style={styles.botaoFecharModal}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textoBotaoFechar}>X</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const CardClima = ({ dadosClima, buscarDadosClimaticos, setCidade, cidade, ultimaAtualizacao }) => {
  const [cidadeInput, setCidadeInput] = useState("");

  return (
    <View style={styles.modalContent}>
      {/* Exibição dos dados climáticos */}
      {dadosClima ? (
        <>
          <Text style={styles.tituloCard}>
            {dadosClima.name}, {dadosClima.sys.country} - {dadosClima.main.temp}°C
          </Text>
          <Image
            style={styles.iconeClima}
            source={{
              uri: `https://openweathermap.org/img/wn/${dadosClima.weather[0].icon}@2x.png`,
            }}
          />
          <Text style={styles.textoCard}>
            {dadosClima.weather[0].description} - Umidade {dadosClima.main.humidity}%
          </Text>
          <Text style={styles.textoCard}>
            Vento: {dadosClima.wind.speed} m/s, Direção: {dadosClima.wind.deg}°
          </Text>
          <Text style={styles.miniTextoCard}>
            Atualizado em: {ultimaAtualizacao || "N/A"}
          </Text>
        </>
      ) : (
        <Text style={styles.textoCard}>Nenhuma cidade selecionada.</Text>
      )}

      {/* Campo para trocar cidade */}
      <View style={styles.inputForm}>
        <TextInput
          style={styles.inputCidade}
          value={cidadeInput}
          onChangeText={setCidadeInput}
          placeholder="Digite a Cidade"
          placeholderTextColor='#faf6f6'
        />
        <TouchableOpacity
          style={styles.botaoConfirmarCidade}
          onPress={() => {
            setCidade(cidadeInput);
            buscarDadosClimaticos(cidadeInput);
          }}
        >
          <Text style={styles.textoBotaoConfirmarCidade}>Confirmar Cidade</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de atualizar */}
      {dadosClima && (
        <TouchableOpacity
          style={styles.botaoAtualizarDados}
          onPress={() => buscarDadosClimaticos(cidade)}
        >
          <Text style={styles.textoBotaoAtualizar}>Atualizar Previsão</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 55,
    minWidthwidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    backgroundColor: 'black',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileButton: {
    width: 40,
    height: 40,
  },
  profileIcon: {
    width: 10,
    height: 10,

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
    marginLeft: 10,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#333',
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  climaHeader: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  textoCidade: {
    color: '#fff',
    fontSize: 10,
    paddingTop: 5,
    marginBottom: -5,
  },
  textoTemperatura: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 5,
    marginTop: -5,
  },
  iconeClima: {
    width: 25,
    height: 25,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F03115',
    padding: 10,
    borderRadius: 20,
    width: '300',
    height: '330',
    alignItems: 'center',
    paddingBottom: 0,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#faf6f6'
  },
  textoCard: {
    marginVertical: 5,
    color: '#faf6f6'
  },
  miniTextoCard: {
    fontSize: 10,
    color: '#faf6f6',
    top: 20,
    alignSelf: 'flex-end'
  },
  botaoFecharModal: {
    marginTop: 20,
    backgroundColor: '#861388',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    bottom: 365,
    left: 15,
  },
  textoBotaoFechar: {
    color: '#faf6f6',
    fontSize: 16,
  },
  inputForm: {
    marginTop: 20,
    width: '100%',
    color: '#faf6f6',
  },
  inputCidade: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color: '#faf6f6',
  },
  botaoConfirmarCidade: {
    backgroundColor: '#0394b6',
    padding: 10,
    borderRadius: 5,
  },
  textoBotaoConfirmarCidade: {
    color: '#faf6f6',
    fontSize: 16,
  },
  botaoAtualizarDados: {
    backgroundColor: '#861388',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotaoAtualizar: {
    color: '#faf6f6',
  },

});

export default Header;
