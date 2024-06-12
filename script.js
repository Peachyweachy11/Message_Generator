
const SignOffArr = ['With Kind Regards', 'Goodbye',
    'Smell you later', 'Apple Bottom Jeans', 'PS I Spilt your water'];

const RandMessageGen = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        var max = arr.length;
        var randomIndx = Math.floor(Math.random() * max);
        return arr[randomIndx];
    } 
};

const GenerateBtn = document.querySelector('#GenerateBtn');
    GenerateBtn.addEventListener("click", () => {
        document.getElementById('GeneratorOutput').innerHTML = RandMessageGen(SignOffArr);
    });

