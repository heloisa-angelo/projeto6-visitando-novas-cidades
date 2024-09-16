let name = prompt('Qual seu nome turista?')
let visit = prompt('Você visitou alguma cidade? (sim/não)')
let city = []
let numberOfCities = 0
while(visit == 'sim'){
  city[numberOfCities] = prompt('Qual o nome da cidade visitada?')
  numberOfCities += 1

  visit = prompt('Você visitou alguma outra cidade? (sim/não)')

}
alert(`Turista: ${name}
Quantidade de cidades visitadas: ${numberOfCities}
Cidades visitadas:${city}`)