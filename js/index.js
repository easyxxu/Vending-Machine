import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new ColaGenerator(); // 해당 코드가 실행되면 constructor도 실행됨
const vendingMachineEvents = new VendingMachineEvents();
//colaGenerator에서 데이터를 받아오고 완료 시 콜라버튼을 만들고 있고
// topLevel await : 최상위 모듈에서 실행되는 await
await colaGenerator.setup();
vendingMachineEvents.bindEvent();
