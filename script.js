
const SignOffArr = ['With Kind Regards', 'Goodbye',
    'Smell you later', 'Apple Bottom Jeans', 'PS I Spilt your water'];

const RandMessageGen = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        var max = arr.length;
        SignOffArr[i] = Math.floor(Math.random() * max);
    } 
    return SignOffArr;
};

const GenerateBtn = document.querySelector('GenerateBtn');
    GenerateBtn.addEventListener("click", (MouseEvent) => {
        document.getElementById('#GeneratorOutput').innerHTML = RandMessageGen;
    });

