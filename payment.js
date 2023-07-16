// Обработчик отправки формы
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    
    // Вместо выполнения оплаты, выводим сообщение об ошибке
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
    errorMessage.textContent = "Ошибка 418 не дает выполнить оплату, пожалуйста, попробуйте еще раз.";
  });
  