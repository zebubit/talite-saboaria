/* Fonte única de produtos, aromas e preços.
   Mexeu aqui, mudou no site inteiro e na sacola. */

const LOJA = {
  nome: "Talité",
  assinatura: "Essência de Talité",
  whatsapp: "5534998596811",
  whatsappVisivel: "(34) 99859-6811",
  instagram: "https://instagram.com/talite.saboaria",
  arroba: "@talite.saboaria",
  tiktok: "https://www.tiktok.com/@saboaria.talit",
  cidade: "Uberaba, MG"
};

/* Os 18 aromas do catálogo, em 3 linhas */
const AROMAS = [
  {
    linha: "Relax & Bem-Estar",
    resumo: "Sua pele e seus sentidos em perfeita harmonia. Produzidos à mão para momentos de profundo relaxamento e autocuidado.",
    itens: [
      { nome: "Lavanda",      desc: "O clássico do relaxamento. Promove paz interior e uma noite tranquila." },
      { nome: "Camomila",     desc: "Ação ultra-suave e relaxante, ideal para peles delicadas e momentos de aconchego." },
      { nome: "Erva-Cidreira",desc: "Suave e calmante, perfeita para aliviar o estresse da rotina." },
      { nome: "Alecrim",      desc: "Estimulante natural que traz foco, clareza e energia para o dia a dia." },
      { nome: "Hortelã",      desc: "Refrescante e revigorante, ideal para despertar os sentidos no banho." },
      { nome: "Capim-Limão",  desc: "Cítrico, revigorante e revitalizante, traz a leveza da natureza para o seu banho." },
      { nome: "Canela",       desc: "Aquecedora e aconchegante, com propriedades estimulantes." }
    ]
  },
  {
    linha: "Frutal & Cítrica",
    resumo: "Uma explosão de frescor e aromas irresistíveis que transformam o seu banho em uma experiência deliciosa e vibrante.",
    itens: [
      { nome: "Morango",  desc: "Romântica e adocicada, deixa a pele perfumada por muito mais tempo." },
      { nome: "Uva",      desc: "Doce e envolvente, rica em antioxidantes que hidratam profundamente." },
      { nome: "Laranja",  desc: "Cítrica, alegre e energizante, com um perfume solar contagiante." },
      { nome: "Maracujá", desc: "Relaxante e revigorante, com o equilíbrio perfeito entre o doce e o cítrico." },
      { nome: "Manga",    desc: "Tropical, suculenta e altamente nutritiva para a pele." },
      { nome: "Limão",    desc: "Extremamente refrescante e purificante, ideal para renovar as energias." }
    ]
  },
  {
    linha: "Especial & Energética",
    resumo: "Formulações exclusivas que unem aromaterapia e elementos da natureza para limpeza e proteção.",
    itens: [
      { nome: "Sal Grosso & Anil",    desc: "Purificação energética profunda, ideal para limpar vibrações pesadas." },
      { nome: "Sal Grosso & Alecrim", desc: "A união entre a limpeza do sal e a força estimulante do alecrim." },
      { nome: "Sal Grosso & Arruda",  desc: "Poderoso escudo de proteção energética e renovação de vibrações." },
      { nome: "Cravo & Canela",       desc: "Estimulante e envolvente; atrai prosperidade, foco e vitalidade." },
      { nome: "Alecrim & Alfavaca",   desc: "Combinação herbal revigorante que promove leveza e equilíbrio espiritual." }
    ]
  }
];

/* lista simples, para o seletor de aroma da sacola */
const TODOS_AROMAS = AROMAS.flatMap(g => g.itens.map(i => i.nome));

/* aroma: true = o cliente escolhe o aroma ao adicionar na sacola */
const PRODUTOS = [
  { id:"premium", nome:"Sabonete Premium",     medida:"100 g",  preco:16.90, aroma:true,
    desc:"Base enriquecida e acabamento mais refinado, para um banho especial." },
  { id:"terap",   nome:"Sabonete Terapêutico", medida:"100 g",  preco:18.90, aroma:true,
    desc:"Formulado com foco no efeito da aromaterapia sobre o corpo e a mente." },
  { id:"esfol",   nome:"Sabonete Esfoliante",  medida:"100 g",  preco:17.90, aroma:true,
    desc:"Textura que renova a pele no banho, sem agredir." },
  { id:"facial",  nome:"Sabonete Facial",      medida:"90 g",   preco:19.90, aroma:true,
    desc:"Mais suave, pensado para a pele do rosto." },
  { id:"luxo",    nome:"Barra Luxo Decorada",  medida:"120 g",  preco:22.90, aroma:true,
    desc:"Barra maior, com acabamento decorado. Bonita de deixar à vista." },
  { id:"liquido", nome:"Sabonete Líquido",     medida:"250 ml", preco:29.90, aroma:true,
    desc:"A mesma essência em versão líquida, com válvula pump." },
  { id:"espuma",  nome:"Espuma de Banho",      medida:"150 ml", preco:34.90, aroma:true,
    desc:"Espuma densa e perfumada para transformar o banho em ritual." },
  { id:"sais",    nome:"Sais de Banho",        medida:"250 g",  preco:24.90, aroma:true,
    desc:"Para dissolver na água morna e relaxar de verdade." },
  { id:"escalda", nome:"Escalda-pés",          medida:"250 g",  preco:22.90, aroma:true,
    desc:"Alívio para os pés cansados no fim do dia." },
  { id:"sache",   nome:"Sachê Aromático",      medida:"40 g",   preco:14.90, aroma:true,
    desc:"Perfuma gaveta, armário e carro por semanas." }
];

const KITS = [
  { id:"k-delicado", nome:"Kit Delicado", preco:29.90,  inclui:"2 sabonetes + laço",
    desc:"O presente simples que agrada sempre. Dois sabonetes escolhidos, embalados com laço.",
    foto:"img/p10.jpg" },
  { id:"k-essencia", nome:"Kit Essência", preco:44.90,  inclui:"3 sabonetes",
    desc:"Três aromas na caixa, para quem quer experimentar a linha.",
    foto:"img/p03.jpg" },
  { id:"k-relax",    nome:"Kit Relax",    preco:54.90,  inclui:"2 sabonetes + sais de banho",
    desc:"A dupla que vira ritual: barra no banho e sais para o descanso.",
    foto:"img/p02.jpg" },
  { id:"k-spa",      nome:"Kit Spa",      preco:79.90,  inclui:"3 sabonetes + sais + escalda-pés",
    desc:"Spa em casa, do começo ao fim. É o mais pedido para presentear.",
    foto:"img/p01.jpg", destaque:true },
  { id:"k-premium",  nome:"Kit Premium",  preco:129.90, inclui:"4 sabonetes + sabonete líquido",
    desc:"O presente completo, na caixa maior. Para quando a ocasião pede.",
    foto:"img/p04.jpg" }
];

/* Lembrancinhas não entram na sacola: o valor depende da quantidade,
   do acabamento e da etiqueta, então o pedido vai por orçamento. */
const LEMBRANCINHAS_MINIMO = 30;

/* Marketplaces e perfis. Item sem url nao aparece na pagina,
   entao da pra ir preenchendo aos poucos sem quebrar nada.
   icone: shopee | tiktok | mercadolivre | instagram | loja  */
const LOJAS = [
  { nome:"Shopee", chamada:"Compre também na nossa loja da Shopee", icone:"shopee", cor:"#EE4D2D", url:"" }
];

const OCASIOES = ["Casamentos", "Chá de bebê", "Batizados", "Aniversários", "Eventos corporativos"];

/* Galeria (carrossel). Troque, apague ou reordene as fotos aqui. */
const GALERIA = [
  { src:"img/galeria/g01.jpg", r:1.0, alt:"Sabonete artesanal com flores secas ao lado de um pote de sais de banho Talité" },
  { src:"img/galeria/g02.jpg", r:0.75, alt:"Caixa Talité com sabonete, frasco de sais de banho com etiqueta e bucha vegetal" },
  { src:"img/galeria/g03.jpg", r:0.75, alt:"Quatro sabonetes em forma de rosa sobre tábua de madeira" },
  { src:"img/galeria/g04.jpg", r:0.75, alt:"Sabonetes dourados com brilho sobre saboneteira de madeira" },
  { src:"img/galeria/g05.jpg", r:0.75, alt:"Dois sabonetes lilás em molde arredondado" },
  { src:"img/galeria/g06.jpg", r:0.75, alt:"Sabonete transparente em forma de rosa, em tom verde-limão" },
  { src:"img/galeria/g07.jpg", r:0.75, alt:"Sabonete escuro em caixa com fita Sabonetes naturais" },
  { src:"img/galeria/g08.jpg", r:0.75, alt:"Bandeja de madeira com sabonetes redondos em amarelo, lilás, verde e roxo" },
  { src:"img/galeria/g09.jpg", r:0.75, alt:"Dois sabonetes cinza sobre saboneteira de madeira" },
  { src:"img/galeria/g10.jpg", r:0.75, alt:"Sabonete rosa em forma de rosa, segurado na mão" },
  { src:"img/galeria/g11.jpg", r:0.75, alt:"Kit presente com sabonete azul, frasco de sais e bucha vegetal" },
  { src:"img/galeria/g12.jpg", r:0.75, alt:"Sabonete transparente em forma de girassol" },
  { src:"img/galeria/g13.jpg", r:0.8602, alt:"Sabonete Talité sobre pedra escura com colher de madeira e flores secas" },
  { src:"img/p02.jpg", r:1.25, alt:"Kit Talité com sabonetes e sais de banho" },
  { src:"img/p03.jpg", r:1.25, alt:"Caixa com três sabonetes artesanais" },
  { src:"img/p06.jpg", r:1.25, alt:"Kit com sabonetes e sabonete líquido" },
  { src:"img/p07.jpg", r:1.25, alt:"Kit presente com laço verde" },
  { src:"img/p09.jpg", r:1.25, alt:"Sabonetes artesanais em caixa de madeira" }
];
