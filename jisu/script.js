const drinkList = document.querySelectorAll(".btn-cola"); //음료 리스트
const balance = document.querySelector(".balance"); //잔액
const selectDrinks = document.querySelectorAll(".select li"); // 선택된 음료 리스트
const btnGet = document.querySelector(".btn-get"); // 획득 버튼
const getDrinks = document.querySelectorAll(".get-drinks li"); //최종 선택된 음료 리스트
const drinkArr = [];
// 자판기의 음료 선택
// → 잔액 표시 / 선택한 음료 보여줌
// → 획득 버튼 누르면 획득한 음료 칸으로 넘어감
// → 총금액 표시

// 자판기에서 음료 클릭시 active 클래스 추가해주기
drinkList.forEach((drink) => {
  drink.addEventListener("click", () => {
    drink.classList.add("active");
    drinkArr.push(drink);
    console.log(drinkArr);
  });
});
