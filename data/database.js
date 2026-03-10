let categorias = [
    { id: 1, nome: "Tacos" },
    { id: 2, nome: "Burritos" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesa" },
];

let produtos = [
    { 
        id: 1,
        categoriaId: 1, 
        nome: "Tacos al Pastor", 
        preco: 35.50, 
        descricao: "Tacos com carne de porco marinada, abacaxi e cebola.", 
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTa2GSJdtAX-7uppABNXkWsnYAwYRpFTuKg&s" },

    { 
        id: 2,
        categoriaId: 2, 
        nome: "Burrito Grande", 
        preco: 45.00, 
        descricao: "Burrito com carne, feijão, arroz e queijo.", 
        imagem: "https://www.example.com/burrito.jpg" },

    { 
        categoriaid: 3, 
        nome: "Refrigerante", 
        preco: 7.50, 
        descricao: "Refrigerante Coca-Cola.", 
        imagem: "https://andinacocacola.vtexassets.com/arquivos/ids/158051/Pack-6-Coca-Cola-Original-350ml.jpg?v=638507764518030000" },

    { 
        categoriaid: 4, 
        nome: "Churros", 
        preco: 10.00, 
        descricao: "Churros fritos e cobertos com açúcar.", 
        imagem: "https://i.ytimg.com/vi/se9OKP8mCsA/maxresdefault.jpg" },
];

module.exports = { categorias, produtos };