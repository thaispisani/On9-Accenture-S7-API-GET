const { response } = require('express');
const express = require('express');
const app = express();
const porta = 8080;

const biografias = require('./biografias.json')


//visualizando todas biografias
app.get('/biografias', function(request, response){
  response.json(biografias);
});

// Visualizando a partir do id
app.get('/biografias/:id', function(request, response){
  
  const { id } = request.params;
   const bioSelecionada = biografias.find(bioSelecionada => bioSelecionada.id == id);

  response.json(bioSelecionada);
});

//teste servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`)
})