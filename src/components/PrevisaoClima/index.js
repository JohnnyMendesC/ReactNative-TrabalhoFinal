import { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClima from '../../services/apiClima';
import apiConversor from '../../services/apiConversor';
//import { API_KEY } from "@env";

export const Clima = () => {

    const [dadosClima, setDadosClima] = useState();
    const [cidade, setCidade] = useState("");
    const [cidadeUser, setCidadeUser] = useState(null);


    const inputRef = useRef();

    const limparCidade = () => {
        setCidade("");
        setCidadeUser("");
        setDadosClima(null);
        //inputRef.current.focus();
    };

    // Função executada para converter o nome da cidade em coordenadas, 
    // e buscar as coordenas para retornar dados climáticos daquela cidade
    const buscar = async () => {
        if (cidade.trim().length === 0) {
            Alert.alert("A cidade deve conter apenas letras");
            //inputRef.current.focus();
            return;
        }

        try {
            // Requisição para obter as coordenadas para buscar os dados
            const nomeparacoordenadas = await apiConversor.get(`${cidade}&limit=1&appid=fddf1172100f1baa6c0a0f6fc01c8711`);
            const cidadeData = nomeparacoordenadas.data[0];

            if (!cidadeData) {
                Alert.alert("Cidade não encontrada");
                return;
            }
            const { lat: latitude, lon: longitude } = cidadeData;

            // Requisição para obter os dados climáticos
            try {
                const coordparadados = await apiClima.get('', {
                    params: {
                        lat: latitude,
                        lon: longitude,
                        appid: 'fddf1172100f1baa6c0a0f6fc01c8711',
                        lang: 'pt_br',
                        units: 'metric',
                    },
                });

                // Atualizaçãoe do estado com as informações
                setDadosClima(coordparadados.data);
                console.log("Dados recebidos: ", coordparadados.data);

                // Armazene a última cidade pesquisada
                await AsyncStorage.setItem("@lastCidade", cidade);
                //inputRef.current.focus();
            } catch (error) {
                console.error("Erro ao buscar dados climáticos:", error);
            }
        } catch (error) {
            console.error("Erro ao buscar coordenadas:", error);
        }
    };

    useEffect(() => {
        async function loadData() {
            const dadoCidade = await AsyncStorage.getItem("@lastCidade");
            setCidade(dadoCidade);
        }
        loadData();
    }, [])

    return (
        <View style={styles.container}>
            {dadosClima ? (
                <View style={styles.card}>
                    <Text style={styles.tituloCard}>
                        {dadosClima.name}, {dadosClima.sys.country} - {dadosClima.main.temp}°C
                    </Text>
                    <Text style={styles.textoCard}>
                        {dadosClima.weather[0].description} - Umidade {dadosClima.main.humidity}%
                    </Text>
                    <Text style={styles.textoCard}>
                        Vento: {dadosClima.wind.speed} m/s, Direção: {dadosClima.wind.deg}, {dadosClima.weather.icon}
                    </Text>
                </View>
            ) : (
                <View style={styles.card}>
                    <Text style={styles.textoCard}>Carregando informações...</Text>
                </View>
            )}
            {/* RETORNAR MENSAGEM DE ERRO SE CIDADE NÃO EXISTIR */}

            {dadosClima ? (
                < View style={styles.inputForm}>
                    <TouchableOpacity
                        style={styles.botaoConfirmarCidade}
                        role='button'
                        aria-label='Confirmar cidade escolhida para receber previsão do tempo'
                        title='Confirmar cidade'
                        onPress={limparCidade}
                    >
                        <Text style={styles.textoBotaoConfirmarCidade}>
                            Trocar Cidade
                        </Text>
                    </TouchableOpacity>
                </View >
            ) : (
                < View style={styles.inputForm}>
                    <TextInput
                        style={styles.inputCidade}
                        role='text input'
                        aria-label='Digite a cidade que deseja receber a previsão do tempo'
                        type={'text'}
                        value={cidade}
                        onChangeText={(texto) => setCidade(texto)}
                        ref={inputRef}
                        placeholder='Digite a Cidade'
                    />
                    <TouchableOpacity
                        style={styles.botaoConfirmarCidade}
                        role='button'
                        aria-label='Confirmar cidade escolhida para receber previsão do tempo'
                        title='Confirmar cidade'
                        onPress={buscar}
                    >
                        <Text style={styles.textoBotaoConfirmarCidade}>
                            Confirmar Cidade
                        </Text>
                    </TouchableOpacity>
                </View >
            )}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cccccc',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
    },
    card: {
    },
    tituloCard: {
        fontSize: 30,
        marginTop: 0,
    },
    textoCard: {
        fontSize: 15,
    },
    inputForm: {
        margin: 10,
    },
    inputCidade: {
        backgroundColor: '#c4f4fb',
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderRadius: 10,
        margin: 10,
        width: 300,
    },
    botaoConfirmarCidade: {
        backgroundColor: '#f1d612',
        borderRadius: 10,
        width: 300,
        alignSelf: 'center',
    },
    textoBotaoConfirmarCidade: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})