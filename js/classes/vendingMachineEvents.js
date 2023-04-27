class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    const myinfo = document.querySelector(".section2");
    this.myMoney = myinfo.querySelector(".bg-box strong");

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }
  // 장바구니 콜라 생성 함수
  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}">
            ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
    `;
    this.stagedList.append(stagedItem);
  }

  bindEvent() {
    /**
     * 1. 입금 버튼 기능
     * 입금 버튼 누르면
     * 1) 소지금 === 소지금 - 입금액
     * 2) 잔액 === 기존잔액 + 입금액
     * 3) 입금액 > 소지금
     * 4) 입금액이 정상적으로 입금되면 입금창은 초기화
     */
    this.btnPut.addEventListener("click", () => {
      // 입력값
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));

      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      if (inputCost) {
        // 입금액이 소지금 보다 적거나 같다면
        if (inputCost <= myMoneyVal && inputCost > 0) {
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";

          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원";

          // 입금액이 소지금보다 많다!
        } else {
          alert("소지금이 부족합니다.");
        }
        this.inputCostEl.value = null;
      }
    });
    /**
     * 2. 거스름돈 반환 버튼
     * 1) 반환버튼 -> 소지금 === 잔액 + 소지금
     * 2) 잔액창 초기화
     */
    this.btnReturn.addEventListener("click", () => {
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 잔액
      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(balanceVal + myMoneyVal) + "원";
        this.balance.textContent = null;
      }
    });

    // 3. 자판기 장바구니 채우기
    // 1) 아이템 클릭 -> 잔액 === 잔액 - 아이템 가격
    // 2) 아이템 가격 > 잔액 -> 경고
    // 3) 아이템이 장바구니로
    // 4) 아이템 count-1 (아이템 카운트 == 0 -> 품절)
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola");
    this.btnsCola.forEach((item) => {
      item.addEventListener("click", (event) => {
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        ); // 잔액
        const targetElPrice = parseInt(event.currentTarget.dataset.price);
        if (targetElPrice <= balanceVal) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          //장바구니 콜라 생성
          this.stagedItemGenerator(event.currentTarget);
          for (const item of this.stagedList) {
          }
        } else {
          alert("잔액이 부족합니다.");
        }
      });
    });
  }
}
export default VendingMachineEvents;
