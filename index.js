const cadastro = (e) => {
  e.preventDefault();

  // Pegar o nome
  const nomeMedicamento = document.getElementById("nomeMedicamento");
  // Pegar a quantidade
  const quantidadeMedicamento = document.getElementById(
    "quantidadeMedicamento"
  );
  // Pegar o preco
  const precoMedicamento = document.getElementById("precoMedicamento");
  // Pegar a classe do medicamento
  const classeMedicamento = document.getElementById("classeMedicamento");

  //ESCONDENDO FORM
  const formMedicamento = document.getElementById("formMedicamento");
  formMedicamento.style.display = "none";

  // MOSTRANDO INFO
  const infoMedicamento = document.getElementById("infoMedicamento");
  infoMedicamento.style.display = "flex";

  const infoNomeMedicamento = document.getElementById("infoNomeMedicamento");
  const infoQuantidadeMedicamento = document.getElementById(
    "infoQuantidadeMedicamento"
  );
  const infoPrecoMedicamento = document.getElementById("infoPrecoMedicamento");

  infoNomeMedicamento.innerHTML = nomeMedicamento.value;
  infoQuantidadeMedicamento.innerHTML = `${quantidadeMedicamento.value} Unidades disponíveis`;
  infoPrecoMedicamento.innerHTML = `${precoMedicamento.value} Reais por unidade`;
  // const valor = precoMedicamento.value + " Reais por unidade";
};

const esconderInfo = () => {
  // ESCONDER INFO
  const formMedicamento = document.getElementById("formMedicamento");
  formMedicamento.style.display = "flex";

  // MOSTRAR FORM
  const infoMedicamento = document.getElementById("infoMedicamento");
  infoMedicamento.style.display = "none";
};
