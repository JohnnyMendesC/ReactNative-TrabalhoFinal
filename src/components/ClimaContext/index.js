import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClima from '../../services/apiClima';
import apiConversor from '../../services/apiConversor';
import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
    const [dadosClima, setDadosClima] = useState(null);
    const [ultimaAtualizacao, setUltimaAtualizacao] = useState("");
    const [cidade, setCidade] = useState("");

    const isConnected = async () => {
        const state = await NetInfo.fetch();
        return state.isConnected;
    };

    // 1 - Função para buscar dados climáticos
    const buscarDadosClimaticos = async (novaCidade = null, atualizar = false) => {
        try {
            // 1.1 -Verifica se há conexão com a internet
            if (!await isConnected()) {
                throw new Error("Sem conexão");
            }
            let coordenadas;

            // 2 - Recupera coordenadas do AsyncStorage se não estiver atualizando ou coordenadas ainda indefinidas
            if (!atualizar || !coordenadas) {
                await AsyncStorage.setItem("@lastCidade", cidade);
                const cidadeAtual = novaCidade || cidade;
                const coordenadasSalvas = await AsyncStorage.getItem(`@coords_${cidadeAtual}`);
                if (coordenadasSalvas) {
                    coordenadas = JSON.parse(coordenadasSalvas);
                } else {
                    // 2.1 - Senão, caso não existam coordenadas armazenadas, busca na API
                    const nomeparacoordenadas = await apiConversor.get(`${cidadeAtual}&limit=1&appid=fddf1172100f1baa6c0a0f6fc01c8711`);
                    const cidadeData = nomeparacoordenadas.data[0];
                    if (!cidadeData) {
                        throw new Error("Cidade não encontrada");
                    }
                    coordenadas = { lat: cidadeData.lat, lon: cidadeData.lon };
                    await AsyncStorage.setItem(`@coords_${cidadeAtual}`, JSON.stringify(coordenadas));
                    await AsyncStorage.setItem("@lastCidade", cidade);
                }
            }

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
            await AsyncStorage.setItem("@dadosClima", JSON.stringify({ dados, ultimaAtualizacao: new Date().toISOString() }));

        } catch (error) {
            if (error.message === "Sem conexão") {
                const dadosSalvos = await AsyncStorage.getItem("@dadosClima");
                if (dadosSalvos) {
                    const { dados, ultimaAtualizacao } = JSON.parse(dadosSalvos);
                    setDadosClima(dados);
                    setUltimaAtualizacao(new Date(ultimaAtualizacao).toLocaleString());
                    Alert.alert("Sem conexão. Exibindo dados salvos.");
                }
            }
        }
    };

    // Carregar dados salvos ao inicializar
    useEffect(() => {
        const carregarDados = async () => {
            const dadosSalvos = await AsyncStorage.getItem("@dadosClima");
            if (dadosSalvos) {
                const { dados, ultimaAtualizacao } = JSON.parse(dadosSalvos);
                setDadosClima(dados);
                setUltimaAtualizacao(new Date(ultimaAtualizacao).toLocaleString());
            }
            const dadoCidade = await AsyncStorage.getItem("@lastCidade");
            setCidade(dadoCidade);
        };
        carregarDados();
    }, []);

    return (
        <ClimaContext.Provider value={{ dadosClima, cidade, setCidade, buscarDadosClimaticos, ultimaAtualizacao }}>
            {children}
        </ClimaContext.Provider>
    );
};