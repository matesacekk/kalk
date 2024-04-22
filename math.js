function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const koren1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const koren2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('result').innerHTML = `Kořeny: x1 = ${koren1.toFixed(2)}, x2 = ${koren2.toFixed(2)}`;
        const img1 = document.createElement('img');
        img1.src = 'hura.jpg'; 
        img1.alt =' Jupiajej';
    } else if (discriminant === 0) {
        const korinek = -b / (2 * a);
        document.getElementById('result').innerHTML = `Dvojnásobný kořen: x = ${korinek.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 'Žádné reálné kořeny';
        const img = document.createElement('img');
        img.src = 'no_roots.jpg'; 
        img.alt =' Neexistující reálné kořeny';
        document.getElementById('result').appendChild(img);
    }
}
