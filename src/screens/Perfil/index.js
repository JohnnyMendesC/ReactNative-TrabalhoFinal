import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, FlatList, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Estado para armazenar as informações de perfil
  const [name, setName] = useState('Bretas_Junior');
  const [description, setDescription] = useState('Tenho 20 anos e sou louco por qualquer tipo de esporte que tenha alguém de companhia.');
  const [sports, setSports] = useState(['🏐 Vôlei', '🏀 Basquete', '🎾 Tênis']); // Lista de esportes favoritos
  const [editMode, setEditMode] = useState(false); // Controla se estamos no modo de edição
  const [newSport, setNewSport] = useState(''); // Controla o novo esporte a ser adicionado

  // Dados de imagens do feed
  const photos = [
    'https://modobrincar.rihappy.com.br/wp-content/uploads/2022/09/como-aprender-a-jogar-volei-topo.webp',
    'https://media.istockphoto.com/id/1017261492/pt/foto/playing-tennis-in-summer.jpg?s=612x612&w=0&k=20&c=gzRRfssyYD3MVeH83-EFg77DZ1iQL1XNkWomInJt7uY=',
    'https://blog.futfanatics.com.br/wp-content/uploads/2019/07/oneal-uol.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPO1JsG96ZAYCOh2kbjOyTB_S0ezHmsIAUQ&s',
    'https://revistatenis.uol.com.br/media/versions/como_jogar_bem_na_rede_tenis_voleio_dicas_free_big.jpg',
    'https://prefeitura.pbh.gov.br/sites/default/files/styles/slideshow/public/estrutura-de-governo/1-%20V%C3%B5lei%20Adaptado%2C%20foto%20Stephanie%20Vital%2C%2024%20de%20outubro%20-%20C%C3%B3pia.jpg?itok=x_suzo4X',
  ];

  // Função para salvar as alterações
  const handleSaveChanges = () => {
    if (!name.trim()) {
      Alert.alert('Erro', 'O nome não pode estar vazio!');
      return;
    }
    setEditMode(false); // Desativa o modo de edição
  };

  // Função para cancelar a edição
  const handleCancelEdit = () => {
    setEditMode(false); // Desativa o modo de edição
  };

  // Função para adicionar um novo esporte
  const handleAddSport = () => {
    if (newSport.trim()) {
      setSports([...sports, newSport]);
      setNewSport(''); // Limpa o campo após adicionar
    }
  };

  // Função para remover um esporte
  const handleRemoveSport = (sportToRemove) => {
    setSports(sports.filter(sport => sport !== sportToRemove));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Foto de Perfil */}
        <Image
          source={{ uri: 'https://www.billboard.com/wp-content/uploads/2024/10/Lisa-07-victorias-secrect-fashion-show-live-2024-billboard-1548.jpg?w=875&h=583&crop=1' }}
          style={styles.profileImage}
        />
        
        {/* Nome do Usuário */}
        {editMode ? (
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome"
          />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}

        {/* Descrição do Perfil */}
        {editMode ? (
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            placeholder="Digite uma descrição"
            multiline
          />
        ) : (
          <Text style={styles.description}>{description}</Text>
        )}

        {/* Esportes Favoritos */}
        <Text style={styles.sectionTitle}>Esportes Favoritos</Text>
        {editMode ? (
          <>
            {/* Adicionar Novo Esporte */}
            <View style={styles.sportInputContainer}>
              <TextInput
                style={styles.sportInput}
                placeholder="Adicionar esporte"
                value={newSport}
                onChangeText={setNewSport}
              />
              <TouchableOpacity style={styles.addButton} onPress={handleAddSport}>
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          sports.map((sport, index) => (
            <Text key={index} style={styles.sport}>
              {sport}
            </Text>
          ))
        )}

        {/* Feed de Fotos */}
        <Text style={styles.sectionTitle}>Feed de Fotos</Text>
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.feedImage} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Mostra as imagens em 3 colunas
          contentContainerStyle={styles.feedContainer}
        />

        {/* Botões */}
        {editMode ? (
          <>
            <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
              <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancelEdit}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setEditMode(true)}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Garante que o conteúdo ocupe todo o espaço necessário
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nameInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    width: '80%',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionInput: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    width: '80%',
    height: 80,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  sport: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  sportInputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  sportInput: {
    fontSize: 16,
    color: '#555',
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    width: '70%',
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#007BFF',
  },
  button: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 8,
    backgroundColor: '#6200ee',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  logoutButton: {
    backgroundColor: '#0394b6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  feedContainer: {
    marginBottom: 20,
  },
  feedImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
});

export default ProfileScreen;
