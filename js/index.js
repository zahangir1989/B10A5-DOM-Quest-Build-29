document
  .getElementById("btn-donate-1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputNumber = document.getElementById("input-number").value;
    const numberParseFloat = parseFloat(inputNumber);

    const balanceInput1 = document.getElementById("balance-1").innerText;
    const balanceParseFloat = parseFloat(balanceInput1);

    const sumTotal = balanceParseFloat + numberParseFloat;

    const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalanceFloat = parseFloat(mainBalance);
    console.log(mainBalanceFloat);

    const reduceBalance = mainBalanceFloat + numberParseFloat;
    console.log(reduceBalance);

    document.getElementById("balance-1").innerText = sumTotal;
    document.getElementById("main-balance").innerText = reduceBalance;
    document.getElementById("input-number").value = " ";
  });

// second card

document
  .getElementById("btn-donate-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("btn-donate-2");

    const inputNumber2 = document.getElementById("input-number-2").value;
    const numberParseFloar = parseFloat(inputNumber2);
    console.log(numberParseFloar);

    const balanceInput2 = document.getElementById("balance-2").innerText;
    const balanceParseFloar = parseFloat(balanceInput2);
    console.log(balanceParseFloar);

    const sumTotal = balanceParseFloar + numberParseFloar;
    console.log(sumTotal);

    const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalance2Float = parseFloat(mainBalance);
    console.log(mainBalance2Float);
    if(balanceParseFloar === 600){
        const balanceMain = mainBalance2Float + sumTotal;
        document.getElementById('main-balance').innerText = balanceMain;
        const balancesub = balanceParseFloar + numberParseFloar;
        document.getElementById('balance-2').innerText = balancesub;

    }
    if(balanceParseFloar > 600){
        const balanceMain = mainBalance2Float + numberParseFloar;
        document.getElementById('main-balance').innerText = balanceMain;
        const subTotal2 = numberParseFloar + balanceParseFloar;
        document.getElementById('balance-2').innerText = subTotal2;

    }

    document.getElementById("input-number-2").value = " ";
  });

// thirt card

document
  .getElementById("btn-donate-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("btn-donate-3");

    const inputNumber3 = document.getElementById("input-number-3").value;
    const numberParseFloar = parseFloat(inputNumber3);
    console.log(numberParseFloar);

    const balanceInput3 = document.getElementById("balance-3").innerText;
    const balanceParseFloar = parseFloat(balanceInput3);

    const sumTotal = balanceParseFloar + numberParseFloar;
    console.log(sumTotal);

    const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalance3Float = parseFloat(mainBalance);
    console.log(mainBalance3Float);

    if (balanceParseFloar === 2400) {
      const reduceBalance = mainBalance3Float + sumTotal;
      const subBlance = balanceParseFloar + numberParseFloar;
      document.getElementById("balance-3").innerText = subBlance;
      document.getElementById("main-balance").innerText = reduceBalance;
    }

    if (balanceParseFloar > 2400) {
      const reduceBalance = mainBalance3Float + numberParseFloar;
      document.getElementById("main-balance").innerText = reduceBalance;

      const sumTotal2 = numberParseFloar + balanceParseFloar;
      document.getElementById("balance-3").innerText = sumTotal2;
    }
    document.getElementById("input-number-3").value = " ";
  });
