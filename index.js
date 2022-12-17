const form = document.getElementById("formAddMed");

//PEGAR TODOS OS INPUTS QUE FOREM DESTE FORMULARIO DE ADICIONAR
const allInputs = form.getElementsByTagName("input");
const showModal = document.getElementById("modal");

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener("invalid", function (event) {
    if (event.target.validity.valueMissing) {
      showModal.classList.remove("hide");
    }
  });
}

const addMed = () => {
  event.preventDefault();

  const med = {
    medName: document.getElementById("medName").value,
    medQuantity: document.getElementById("medQuantity").value,
    medPrice: document.getElementById("medPrice").value,
    medClass: document.getElementById("medClass").value,
  };

  //SUMIR COM O FORM
  form.classList.add("hide");

  //APARECER COM AS INFORMAÇÕES
  const formInfo = document.getElementById("formInfo");
  formInfo.classList.remove("hide");
  //INSERIR ESSAS INFORMAÇÔES
  const medInfoName = document.getElementById("medInfoName");
  const medInfoQuantity = document.getElementById("medInfoQuantity");
  const medInfoPrice = document.getElementById("medInfoPrice");

  medInfoName.innerHTML = med.medName;
  medInfoQuantity.innerHTML = `${med.medQuantity} Unidades disponíveis`;
  medInfoPrice.innerHTML = `${med.medPrice} Reais por unidade`;
};

//APARECER COM AS INFORMAÇÕES

const returnForm = () => {
  //SUMIR COM AS INFORMAÇÕES
  const formInfo = document.getElementById("formInfo");
  formInfo.classList.add("hide");
  //APARECER COM O FORM
  const form = document.getElementById("formAddMed");
  form.classList.remove("hide");
};

const closeModal = () => {
  showModal.classList.add("hide");
};
