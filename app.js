
function Avaliar(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("user.html");
  url = url[0];

  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;
  var avaliacao = 0;

  if (estrela == 5) {
    if (s5 == url + "star0.png") {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star1.png";
      document.getElementById("s4").src = "star1.png";
      document.getElementById("s5").src = "star1.png";
      avaliacao = 5;
    } else {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star1.png";
      document.getElementById("s4").src = "star1.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 4;
    }
  }

  //ESTRELA 4
  if (estrela == 4) {
    if (s4 == url + "star0.png") {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star1.png";
      document.getElementById("s4").src = "star1.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 4;
    } else {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star1.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 3;
    }
  }

  //ESTRELA 3
  if (estrela == 3) {
    if (s3 == url + "star0.png") {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star1.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 3;
    } else {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star0.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 2;
    }
  }

  //ESTRELA 2
  if (estrela == 2) {
    if (s2 == url + "star0.png") {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star1.png";
      document.getElementById("s3").src = "star0.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 2;
    } else {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star0.png";
      document.getElementById("s3").src = "star0.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 1;
    }
  }

  //ESTRELA 1
  if (estrela == 1) {
    if (s1 == url + "star0.png") {
      document.getElementById("s1").src = "star1.png";
      document.getElementById("s2").src = "star0.png";
      document.getElementById("s3").src = "star0.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 1;
    } else {
      document.getElementById("s1").src = "star0.png";
      document.getElementById("s2").src = "star0.png";
      document.getElementById("s3").src = "star0.png";
      document.getElementById("s4").src = "star0.png";
      document.getElementById("s5").src = "star0.png";
      avaliacao = 0;
    }
  }

  document.getElementById('rating').innerHTML = avaliacao;

}
//Produto 1
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    let str = ''
    let produtos = data[11]
    let rating0 = data[11]
    str += `<img class="HQ" src="${produtos.image}" alt=""><br><br>
                <h3 style="font-size:12px"><b>${produtos.title}</b></h3>
                <h4>R$ ${produtos.price}</h4>
                <p>Category: ${produtos.category}</p>
                <img width="40px" src="star1.png" id="s1"></a>
        <img width="40px" src="star1.png" id="s2"></a>
        <img width="40px" src="star1.png" id="s3"></a>
        <img width="40px" src="star1.png" id="s4"></a>
        <img width="40px" src="star0.png" id="s5"></a>
        <p><b>Nota : </b></p>
        <p id="rating">${produtos.rating.rate}</p>
        <div>
        <a style="background: rgb(0, 0, 0)" class="btn btn-primary" href="detalhes.html?id=${produtos.id}" role="button">detalhes</a>
      </div>`
    document.getElementById('tela').innerHTML = str
  }).catch(error => console.log(error))
//Produto 2
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    let str = ''
    let produtos = data[10]
    let rating0 = data[10]
    str += `<img class="HQ" src="${produtos.image}" alt=""><br><br>
                <h3 style="font-size:15px"><b>${produtos.title}</b></h3>
                <h4>R$ ${produtos.price}</h4>
                <p>Category: ${produtos.category}</p>
                <img width="40px" src="star1.png" id="s1"></a>
        <img width="40px" src="star1.png" id="s2"></a>
        <img width="40px" src="star1.png" id="s3"></a>
        <img width="40px" src="star1.png" id="s4"></a>
        <img width="40px" src="star0.png" id="s5"></a>
        <p><b>Nota : </b></p>
        <p id="rating">${produtos.rating.rate}</p>
        <div>
        <a style="background: rgb(0, 0, 0)" class="btn btn-primary" href="detalhes.html?id=${produtos.id}" role="button">detalhes</a>
      </div>`
    document.getElementById('tela1').innerHTML = str
  }).catch(error => console.log(error))
//Produto 3
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    let str = ''
    let produtos = data[13]
    let rating0 = data[13]
    str += `<img class="HQ" src="${produtos.image}" alt=""><br><br>
                <h3 style="font-size:15px"><b>${produtos.title}</b></h3>
                <h4>R$ ${produtos.price}</h4>
                <p>Category: ${produtos.category}</p>
        <img width="40px" src="star1.png" id="s1"></a>
        <img width="40px" src="star1.png" id="s2"></a>
        <img width="40px" src="star0.png" id="s3"></a>
        <img width="40px" src="star0.png" id="s4"></a>
        <img width="40px" src="star0.png" id="s5"></a>
        <p><b>Nota : </b></p>
        <p id="rating">${produtos.rating.rate}</p>
        <div>
        <a style="background: rgb(0, 0, 0)" class="btn btn-primary" href="detalhes.html?id=${produtos.id}" role="button">detalhes</a>
      </div>`
    document.getElementById('tela2').innerHTML = str
  }).catch(error => console.log(error))
//Produto 4
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    let str = ''
    let produtos = data[12]
    let rating0 = data[12]
    str += `<img class="HQ" src="${produtos.image}" alt=""> <br><br>
                <h3 style="font-size:15px"><b>${produtos.title}</b></h3>
                <h4>R$ ${produtos.price}</h4>
                <p>Category: ${produtos.category}</p>
                <img width="40px" src="star1.png" id="s1"></a>
        <img width="40px" src="star1.png" id="s2"></a>
        <img width="40px" src="star1.png" id="s3"></a>
        <img width="40px" src="star0.png" id="s4"></a>
        <img width="40px" src="star0.png" id="s5"></a>
        <p><b>Nota : </b></p>
        <p id="rating">${produtos.rating.rate}</p>
        <div>
        <a style="background: rgb(0, 0, 0)" class="btn btn-primary" href="detalhes.html?id=${produtos.id}" role="button">detalhes</a>
      </div>`
    document.getElementById('tela3').innerHTML = str
  }).catch(error => console.log(error))

//Produto 5
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    let str = ''
    let produtos = data[9]
    let rating0 = data[9]
    str += `<img class="HQ" src="${produtos.image}" alt=""><br><br>
                <h3 style="font-size:16px"><b>${produtos.title}</b></h3>
                <h4>R$ ${produtos.price}</h4>
                <p>Category: ${produtos.category}</p>
                <img width="40px" src="star1.png" id="s1"></a>
        <img width="40px" src="star1.png" id="s2"></a>
        <img width="40px" src="star1.png" id="s3"></a>
        <img width="40px" src="star0.png" id="s4"></a>
        <img width="40px" src="star0.png" id="s5"></a>
        <p><b>Nota : </b></p>
        <p id="rating">${produtos.rating.rate}</p>
        <div>
        <a style="background: rgb(0, 0, 0)" class="btn btn-primary" href="detalhes.html?id=${produtos.id}" role="button">detalhes</a>
      </div>`
    document.getElementById('tela4').innerHTML = str
  }).catch(error => console.log(error))
//Produto 6
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    let str = ''
    let produtos = data[8]
    let rating0 = data[8]
    str += `<img class="HQ" src="${produtos.image}" alt=""><br><br>
                <h3><b>${produtos.title}</b></h3>
                <h4>R$ ${produtos.price}</h4>
                <p>Category: ${produtos.category}</p>
                
                <img width="40px" src="star1.png" id="s1"></a>
        <img width="40px" src="star1.png" id="s2"></a>
        <img width="40px" src="star1.png" id="s3"></a>
        <img width="40px" src="star0.png" id="s4"></a>
        <img width="40px" src="star0.png" id="s5"></a>
        <p><b>Nota : </b></p>
        <p id="rating">${produtos.rating.rate}</p>
         <div>
              <a class="btn btn-primary" style="background: rgb(0, 0, 0)" href="detalhes.html?id=${produtos.id}" role="button">detalhes</a>
            </div>`
    $('#tela5').html(str)

  }).catch(error => console.log(error))

  
  function detalhes_produto() {
    var query = location.search.slice(1);
    //console.log(location.search)
    var partes = query.split('&');
    console.log(partes)
    var valor
  
    partes.forEach(function(parte) {
      var chaveValor = parte.split('=');
      var chave = chaveValor[0];
      valor = chaveValor[1];
      console.log(chave)
      console.log(valor)
    });
  
    fetch(`https://fakestoreapi.com/products/${valor}`)
      .then(res => res.json())
      .then(product => {
        console.log(product)
        let str = ''
        str +=
          `<img class="HQ" src="${product.image}" alt=""><br><br>
          <h3><b>${product.title}</b></h3>
          <h4>R$ ${product.price}</h4>
          <p>Category: ${product.category}</p>
          <p>Description : ${product.description}</p>
          <img width="40px" src="star1.png" id="s1"></a>
  <img width="40px" src="star1.png" id="s2"></a>
  <img width="40px" src="star1.png" id="s3"></a>
  <img width="40px" src="star0.png" id="s4"></a>
  <img width="40px" src="star0.png" id="s5"></a>
  <p><b>Nota : </b></p>
  <p id="rating">${product.rating.rate}</p>`
        $('#tela_detalhes').html(str)
        console.log(str)
      })
      .catch(error => console.log(error));
  }


  function pesquisar_produto() {
    console.log('pesquisar_produto')
    const palavra = $('#palavra').val()
    console.log(palavra)
  
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(data => {
        let str = ''
        for (let i = 0; i < data.length; i++) {
          let product = data[i]
          let text = product.title
          let position = text.search(palavra);
          if(position > 0){
           str +=
            `<div class="row">          
              <div class="col-7">
                <p style="font-size:19px"><b>${product.title}</b></p>
                <p>${product.description}</p>
              </div>
              <div class="col-3">
                <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
              </div>
              <div class="col-2">
                <a class="btn btn-primary" style="background: rgb(0, 0, 0)" href="detalhes.html?id=${product.id}" role="button">detalhes</a>
              </div>
            </div>` 
          }
        }
        
        $('#tela_pesquisa').html(str)      
      })
      .catch(error => console.log(error));  
  }