import { useEffect, useRef, useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClima from '../../services/apiClima';
import apiConversor from '../../services/apiConversor';
import NetInfo from '@react-native-community/netinfo';
//import { API_KEY } from "@env";

export const Clima = () => {
    const [dadosClima, setDadosClima] = useState(null);
    const [cidade, setCidade] = useState("");
    const [ultimaAtualizacao, setUltimaAtualizacao] = useState("");
    const inputRef = useRef();

    // Função para verificar conectividade
    const isConnected = async () => {
        const state = await NetInfo.fetch();
        return state.isConnected;
    };

    const limparCidade = () => {
        setCidade("");
        setDadosClima(null);
    };

    // 1 - Função para buscar dados climáticos
    const buscar = async (atualizar = false) => {
        console.log(atualizar);
        try {
            // 1.1 -Verifica se há conexão com a internet
            if (!await isConnected()) {
                throw new Error("Sem conexão");
            }
            let coordenadas;

            // 2 - Recupera coordenadas do AsyncStorage se não estiver atualizando ou coordenadas ainda indefinidas
            if (!atualizar || !coordenadas) {
                const coordenadasSalvas = await AsyncStorage.getItem(`@coords_${cidade}`);
                if (coordenadasSalvas) {
                    console.log("Coordenadas do AsyncStorage")
                    coordenadas = JSON.parse(coordenadasSalvas);
                } else {
                    // 2.1 - Senão, caso não existam coordenadas armazenadas, busca na API
                    console.log("Coordenadas da API")
                    const nomeparacoordenadas = await apiConversor.get(`${cidade}&limit=1&appid=fddf1172100f1baa6c0a0f6fc01c8711`);
                    const cidadeData = nomeparacoordenadas.data[0];
                    if (!cidadeData) {
                        Alert.alert("Cidade não encontrada");
                        return;
                    }
                    coordenadas = { lat: cidadeData.lat, lon: cidadeData.lon };
                    await AsyncStorage.setItem(`@coords_${cidade}`, JSON.stringify(coordenadas));
                    await AsyncStorage.setItem("@lastCidade", cidade);
                }
            }
            // 3 - Requisição para buscar dados climáticos
            const coordparadados = await apiClima.get('', {
                params: {
                    lat: coordenadas.lat,
                    lon: coordenadas.lon,
                    appid: 'fddf1172100f1baa6c0a0f6fc01c8711',
                    lang: 'pt_br',
                    units: 'metric',
                },
            });
            const dados = coordparadados.data;
            setDadosClima(dados);
            setUltimaAtualizacao(new Date().toLocaleString());
            console.log("Dados climáticos da API")

            // 4 - Salva os dados atualizados no AsyncStorage
            await AsyncStorage.setItem("@dadosClima", JSON.stringify({ dados, ultimaAtualizacao: new Date().toISOString() }));
        } catch (error) {
            if (error.message === "Sem conexão") {
                // 4.1 - Recupera dados locais se não houver conexão
                const dadosSalvos = await AsyncStorage.getItem("@dadosClima");
                if (dadosSalvos) {
                    // 4.2 - Se houver dados salvos exibe os dados com data e hora da ultima requisição:
                    console.log("Dados climáticos do AsyncStorage")
                    const { dados, ultimaAtualizacao } = JSON.parse(dadosSalvos);
                    setDadosClima(dados);
                    setUltimaAtualizacao(new Date(ultimaAtualizacao).toLocaleString());
                    Alert.alert("Sem conexão. Exibindo dados salvos.");
                } else {
                    // 4.3 - Se não houver dados, retorna o alert
                    console.log("Sem dados climáticos disponíveis na API ou no asyncstorage")
                    Alert.alert("Sem conexão e sem dados locais disponíveis.");
                }
            } else {
                // 4.4 - Se o erro for de outra natureza
                //console.error("Erro ao buscar dados climáticos:", error);
            }
        }
    };

    // Carregar dados salvos ao iniciar o app
    useEffect(() => {
        async function carregarDados() {
            const dadosSalvos = await AsyncStorage.getItem("@dadosClima");
            if (dadosSalvos) {
                const { dados, ultimaAtualizacao } = JSON.parse(dadosSalvos);
                setDadosClima(dados);
                setUltimaAtualizacao(new Date(ultimaAtualizacao).toLocaleString());
            }
            const dadoCidade = await AsyncStorage.getItem("@lastCidade");
            setCidade(dadoCidade);
        }
        carregarDados();
    }, []);

    return (
        <View style={styles.container}>
            {/* Exibição dos dados climáticos */}
            {dadosClima ? (
                <View style={styles.card}>
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
                    <Text style={styles.textoRodape}>Atualizado em: {ultimaAtualizacao}
                    </Text>
                </View>
            ) : (
                <View style={styles.card}>
                    <Text style={styles.textoRodape}>Escolha uma cidade para acompanhar sua previsão climática</Text>
                </View>
            )}

            {/* Exibição do menu com input e botões */}
            {dadosClima ? (
                < View style={[styles.inputForm, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        style={styles.botaoConfirmarCidade}
                        role='button'
                        aria-label='Trocar cidade escolhida para receber nova previsão do tempo'
                        title='Trocar cidade'
                        onPress={limparCidade}
                    >
                        <Text style={styles.textoBotaoConfirmarCidade}>
                            Trocar Cidade
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botaoAtualizarDados}
                        onPress={() => buscar(true)}
                    >
                        <Text style={styles.textoBotaoAtualizar}>Atualizar Previsão</Text>
                    </TouchableOpacity>
                </View >
            ) : (
                <View style={styles.inputForm}>
                    <TextInput
                        style={styles.inputCidade}
                        value={cidade}
                        onChangeText={(texto) => setCidade(texto)}
                        ref={inputRef}
                        placeholder="Digite a Cidade"
                    />
                    <TouchableOpacity
                        style={styles.botaoConfirmarCidade}
                        onPress={() => buscar(false)}
                    >
                        <Text style={styles.textoBotaoConfirmarCidade}>Confirmar Cidade</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0394b6',
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
        marginTop: 0,
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
    },
    botaoAtualizarDados: {
        backgroundColor: '#861388',
        borderRadius: 100,
        width: 70,
        alignSelf: 'center',
    },
    textoBotaoAtualizar: {
        padding: 10,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#faf6f6'
    },
    iconeClima: {
        //backgroundColor: '#c4f4fb',
        height: 35,
        width: 35,
        borderRadius: 10,
    },
    textoRodape: {
        fontSize: 10,
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 0,
        alignSelf: 'flex-end',
    }
});