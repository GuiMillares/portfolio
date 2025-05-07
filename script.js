  const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    if (value.length > 6) {
      this.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      this.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      this.value = value;
    }
  });
