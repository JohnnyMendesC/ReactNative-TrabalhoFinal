import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.Input`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
`;

const MaskedInput = styled(MaskedInput)`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
`;

const SubmitButton = styled.SubmitButton`
  height: 50px;
  background-color: #4CAF50;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ButtonText = styled.ButtonText`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;