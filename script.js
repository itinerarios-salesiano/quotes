var Bquotes = [
  '“Tudo vale a pena quando a alma não é pequena. - Fernando Pessoa”',
  '“Os miseráveis não têm outro remédio a não ser a esperança.” - William Shakespeare',
  '“A alegria evita mil males e prolonga a vida.” - William Shakespeare',
  '"Nada do que acontece é esquecido pra sempre mesmo que você não se lembre!" - Reino dos Gatos',
  '"Um coração estável é a única constante nesse mundo!" - Ponyo',
  '“Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.” - Machado de Assis',
  '“A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez.” - Friedrich Nietzsche',
  '“A vida é para quem topa qualquer parada. Não para quem para em qualquer topada.” - Bob Marley',
  '“A imaginação é mais importante que o conhecimento.” - Albert Einstein',
  '“A vida é uma tragédia quando vista de perto, mas uma comédia quando vista de longe.” - Charles Chaplin'
]

function clicou() {
  var sla = Math.floor(Math.random() * (Bquotes.length)); 
  document.getElementById('textin').innerHTML = Bquotes[sla];
}