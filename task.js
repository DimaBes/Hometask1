//? Начальник цеха пригласил людей на совещание 
//? Каждый, кто входит в кабинет пожимает руки всем присутствующим
//? Сколько человек зашло в кабинет, если известно,
//? что всего произошло 120 рукопожатий.
function getPeople(handshake){
    let n = 0;
    let totalHandshakes = 0;
  
    while (totalHandshakes < handshake) {
      n++;
      totalHandshakes += n - 1;
    }
    return n;
}
console.log( getPeople(1) ); // 1
console.log( getPeople(3) ); // 2
console.log( getPeople(6) ); //3
console.log( getPeople(10) ); //4
console.log( getPeople(15) ); //5
console.log( getPeople(120); //?