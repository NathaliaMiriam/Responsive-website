
// Menu Mobile

document.getElementById('hamburguer-icon').onclick = function () {

  document.getElementById('sliding-header-menu-outer').style.right = '0';

};

document.getElementById('sliding-header-menu-close-button').onclick = function () {

  document.getElementById('sliding-header-menu-outer').style.right = '-320px';

};


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName('single-tab');

for (var a = 0; a < about_tags.length; a++) {

  about_tags[a].onclick = function () {

    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style['background-color'] = unselected_color; // 1º tira a cor de seleção de todos
      about_tags[b].style['font-weight'] = 'normal';
    }

    this.style['background-color'] = selected_color; // 2º coloca a cor ao q foi selecionado
    this.style['font-weight'] = 'bold';

    var selecionado = this.innerHTML;  // seleciona qualquer tag html (a intenção é pegar cada chave do objeto aboutUs)

    document.getElementById('box-text').innerHTML = aboutUs[selecionado];

  };    

}


// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var serviço_atual = 0;  // começa no 'Webdesign'

document.getElementById("service-previous").onclick = function () {

  if (serviço_atual == 0) {
    var serviço_anterior = our_services.length - 1;  // p sempre alcançar o último elemento, independente da qtd. - ('Marketing Digital', neste caso)
  } else {
    var serviço_anterior = serviço_atual - 1;
  }

  document.getElementById("service-title").innerHTML = our_services[serviço_anterior].title;
  document.getElementById("service-text").innerHTML = our_services[serviço_anterior].text;

  serviço_atual = serviço_anterior;  // atualiza a var serviço_atual e ao clicar no botão irá rodar

};


document.getElementById("service-next").onclick = function () {

  if (serviço_atual == our_services.length - 1) {
    var serviço_seguinte = 0;  // do último elemento volta p o primeiro elemento
  } else {
    var serviço_seguinte = serviço_atual + 1;
  }

  document.getElementById("service-title").innerHTML = our_services[serviço_seguinte].title;
  document.getElementById("service-text").innerHTML = our_services[serviço_seguinte].text;

  serviço_atual = serviço_seguinte; 

};


// Data Footer

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById("current_year").innerHTML = ano_atual;


/* Mapa

API Key Google: AIzaSyCq0ry8lRVVjBwLGcEgA6zT-ssalbi_Yuk --> pega em credenciais do Google

*/
   