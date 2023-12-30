document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
  
    if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
      let area = 0.5 * base * height;
      document.getElementById('areaResult').textContent = `Luas Segitiga: ${area.toFixed(2)}`;
    } else {
      document.getElementById('areaResult').textContent = 'Masukkan nilai alas dan tinggi yang valid!';
    }
  });
  
  document.getElementById('perimeterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);
    let sideC = parseFloat(document.getElementById('sideC').value);
  
    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC) && sideA > 0 && sideB > 0 && sideC > 0) {
      let perimeter = sideA + sideB + sideC;
      document.getElementById('perimeterResult').textContent = `Keliling Segitiga: ${perimeter.toFixed(2)}`;
    } else {
      document.getElementById('perimeterResult').textContent = 'Masukkan nilai sisi-sisi yang valid!';
    }
  });
  
  document.getElementById('resetAreaButton').addEventListener('click', function() {
    document.getElementById('areaResult').textContent = '';
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
  });
  
  document.getElementById('resetPerimeterButton').addEventListener('click', function() {
    document.getElementById('perimeterResult').textContent = '';
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
  });
  