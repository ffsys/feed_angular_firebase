app.filter('dateToISO', function() {
  return function(input) {
    if (moment(input).local().format('DD/MM/YYYY') === 'Invalid date')
        return 'invalid ';
    else
        return moment(input).local().format('DD/MM/YYYY');
  };
});

app.filter('dateTimeToISO', function() {
  return function(input) {
    if (moment(input).local().format('DD/MM/YY HH:mm') === 'Invalid date')
        return 'invalid ';
    else
        return moment(input).local().format('DD/MM/YY HH:mm');
  };
});

app.filter('sexo', function() {
  return function(input) {
    if(input=="f") return "Feminino";
    else return "Masculino";
  };
});

app.filter('unidadeFilter', function() {
  return function(input,und) {
    
    if(input>1) return input + " "+und+"s";
    else return input + " "+und;
  };
});

app.filter('removeTag', function() {
  return function(input) {
    
    return input.replace(/<[^>]*>/g, "");
  };
});

app.filter('statusPedido', function() {
  return function(input) {
    switch(parseInt(input)){
      case 0 : return "Aguardando Confirmação";
      case 1 : return "Aguardando Entrega";
      case 2 : return "Pedido Entregue";
      case 3 : return "Pedido Cancelado";
      default : return "";
    }
  };
});

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});

app.filter('formatPreco', function() {
  return function(price) {
    if(price){
      price = price.toFixed(2);
      var string = price.toString();
      var posicao = string.indexOf(".");
      if (posicao == -1){
        string = "R$ " + string + ",00";
        return string;
      } else {
        if (posicao == string.length-2) string = string + "0";
        string = string.replace(".", ",");
        string = "R$ " + string;
        return string;
      }
    }
    return "";
  };
});

app.filter('comparaData', function() {
  return function(obj) {
    var data_1 = new Date(obj.data_venc);
    var today = new Date();
   if(obj.data == null){
        if(data_1 < today) return "Atrasado";
        else if(data_1 >= today) return "Pendente";
   } else return "Concluído";
    // return "";
  };
});