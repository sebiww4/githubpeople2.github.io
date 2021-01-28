const questions = [
    {
        question:" Quelle est l'unité pour exprimer les temperatures absolues ?\n1. Le Celsius(°C)\n2. Le Kelvin (K)\n3. Le Joule(J)",
        reponse: 2
    },
    {
        question: " Quelle est la température la plus inferieure dans l'univers ?\n1. -273K\n2. 273°C\n3. -273°C",
        reponse: 3
    },
    {
        question: " Quelle est la valeur d'un nanomètre en (nm) en mètre ?\n1. 10^-9\n2. 10^-3\n3. 10^-6",
        reponse: 1
    },
    {
        question: " Quelle est la relation qui lie l'energie, la puissance, et le temps ?\n1. E=Pxt\n2. P=mxg\n3. E=Δm.c^2",
        reponse: 1
    },
    {
        question: " Que devient la masse perdu ?\n1. Joule\n2. Watt\n3. Energie",
        reponse: 3
    },
    {
        question: " Quelle est la relation d'Einstein entre la masse et l'énergie ?\n1. E=Δm.c2\n2. E=Δm.c^2\n3. E=ΔM.c^2",
        reponse: 2
    },
    {
        question: " Quelle est la valeur λmax de la longueur d'onde du soleil ?\n1. 300nm\n2. 400nm\n3. 500nm",
        reponse: 3
    },
    {
        question: " Quelle est la température à la surface du soleil ?\n1. 5596K\n2. 5696K\n3. 5796K",
        reponse: 3
    }
];

let nBonneReponse = 0;

for (let i = 0; i<questions.length; i+=1){
    let repUser = prompt(questions[i].question);
    if (repUser == questions[i].reponse){
        alert("Cliquer sur OK pour continuer");
        nBonneReponse += 1;
    }else{
        alert("Cliquer sur OK pour continuer");
    }
}

if (nBonneReponse <= 1){
    alert(`Votre note est de ${nBonneReponse} sur ${questions.length}`);
} else{
    alert(`Votre note est de ${nBonneReponse} sur ${questions.length}`);
}
if (nBonneReponse == 8){
    alert(`Bravo !!!!`);
}