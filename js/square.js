function calculateSquare() {
    let num = document.getElementById("numberInput").value;
    let square = num * num;
    document.getElementById("output").innerText = `The square of ${num} is ${square}`;
}