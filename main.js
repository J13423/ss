function save(){
    p1 = document.getElementById('p1').value;
    finalP1 = p1.charAt(0).toUpperCase().concat(p1.substr(0))
    localStorage('p1', finalP1)

    p2 = document.getElementById('p2').value;
    finalP2 = p2.charAt(0).toUpperCase().concat(p1.substr(0))
    localStorage('p2', finalP2)
}