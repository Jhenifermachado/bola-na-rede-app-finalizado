import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function EnderecoEntrega() {
  const [endereco, setEndereco] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEndereco({
      ...endereco,
      [name]: value,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica de salvamento, por exemplo, enviar para um servidor ou armazenar no estado global.
    console.log('Endereço Salvo:', endereco);
    // Limpar o formulário após o salvamento
    setEndereco({
      nome: '',
      endereco: '',
      cidade: '',
      estado: '',
      cep: '',
    });
  };

  const handleAlterar = () => {
    // Implementar a lógica para carregar um endereço existente para edição, se necessário.
    // Aqui, apenas logamos os detalhes do endereço para fins de demonstração.
    console.log('Alterar Endereço:', endereco);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <h1>Endereço de Entrega</h1>
      <Form onSubmit={handleSave}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={endereco.nome}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEndereco">
          <Form.Label>Endereço:</Form.Label>
          <Form.Control
            type="text"
            name="endereco"
            value={endereco.endereco}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formCidade">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control
            type="text"
            name="cidade"
            value={endereco.cidade}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEstado">
          <Form.Label>Estado:</Form.Label>
          <Form.Control
            type="text"
            name="estado"
            value={endereco.estado}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formCEP">
          <Form.Label>CEP:</Form.Label>
          <Form.Control
            type="text"
            name="cep"
            value={endereco.cep}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Salvar Endereço
        </Button>
      </Form>

      {/* Botão para Alterar Endereço */}
      <Button variant="secondary" onClick={handleAlterar} style={{ marginTop: '10px' }}>
        Alterar Endereço
      </Button>
    </Container>
  );
}

export default EnderecoEntrega;
