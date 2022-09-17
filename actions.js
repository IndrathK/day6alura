//inserindo e limpando o campo de novos lutadores
function inserirNovoLutador() {
    var nome = document.getElementById("novo");
    var icone = document.getElementById("teamIcon");
    lutadores.push({
      icon: icone.value,
      nome: nome.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
  
    icone.value = "";
    nome.value = "";
    exibirLutadoresNaTela(lutadores);
  }
  
  //Nomes fixos na tabela pelas variaveis
  var gon = {
    icon:
      "https://uploads.metropoles.com/wp-content/uploads/2022/05/26125804/hunter-x-hunter1.jpg",
    nome: "gon",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  };
  var killua = {
    icon:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/7/6/5/a/765afb557fabd371fd0a3ba386728100.jpg",
    nome: "killua",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  };
  
  var kurapika = {
    icon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgAZMuxLynX5zV_II4QxPT0oPub_AsYXfzlbUdJJ0Q5gV1tp4ejrgzQqBavnGqNSs7oA&usqp=CAU",
    nome: "kurapika",
    vitorias: 8,
    empates: 5,
    derrotas: 2,
    pontos: 0
  };
  var leorio = {
    icon:
      "https://pbs.twimg.com/media/FM68byUXMAcmdnT.png",
    nome: "leorio",
    vitorias: 8,
    empates: 5,
    derrotas: 2,
    pontos: 0
  };
  
  gon.pontos = calculaPontos(gon);
  killua.pontos = calculaPontos(killua);
  kurapika.pontos = calculaPontos(kurapika);
  leorio.pontos = calculaPontos(leorio);
  
  //imprimindo a quantidade de pontos
  function calculaPontos(lutador) {
    var pontos = lutador.vitorias * 10 - lutador.empates;
    return pontos;
  }
  
  var lutadores = [gon, killua, kurapika, leorio];
  
  exibirLutadoresNaTela(lutadores);
  //função que cria a tabela e os botões
  function exibirLutadoresNaTela(lutadores) {
    var elemnto = "";
    for (var i = 0; i < lutadores.length; i++) {
      elemnto += "<tr><td>" + `<img src="${lutadores[i].icon}">` + "</td>";
    elemnto += "<td>" + lutadores[i].nome + "</td>";
    elemnto += "<td>" + lutadores[i].vitorias + "</td>";
    elemnto += "<td>" + lutadores[i].empates + "</td>";
    elemnto += "<td>" + lutadores[i].derrotas + "</td>";
    elemnto += "<td>" + lutadores[i].pontos + "</td>";
    elemnto +=
      "<td><button onClick='adicionarVitoriaLut(" +
      i +
      ")'>Vitória</button></td>";
    elemnto +=
      "<td><button onClick='adicionarEmpatesLut(" +
      i +
      ")'>Empate</button></td>";
    elemnto +=
      "<td><button onClick='adicionarDerrotaLut(" +
      i +
      ")'>Derrota</button></td>";
    elemnto +=
      "<td><button onClick='limparlut(" + i + ")'>Limpar</button></tr></td>";
    }
  
    var tabelaLutadores = document.getElementById("tabelaLutadores");
    tabelaLutadores.innerHTML = elemnto;
  }
  
  //funçoes que fazem a execução das ações dos botoes
  function limparlut(i) {
    lutadores[i].vitorias = 0;
    lutadores[i].derrotas = 0;
    lutadores[i].empates = 0;
    lutadores[i].pontos = 0;
    exibirLutadoresNaTela(lutadores);
  }
  
  function adicionarVitoriaLut(i) {
    var lutador = lutadores[i];
    lutador.vitorias++;
    lutador.pontos = calculaPontos(lutador);
    exibirLutadoresNaTela(lutadores);
  }
  
  function adicionarEmpatesLut(i) {
    var lutador = lutadores[i];
    lutador.empates++;
    lutador.pontos = calculaPontos(lutador);
    exibirLutadoresNaTela(lutadores);
  }
  
  function adicionarDerrotaLut(i) {
    var lutador = lutadores[i];
    lutador.derrotas++;
    exibirLutadoresNaTela(lutadores);
  }
  
