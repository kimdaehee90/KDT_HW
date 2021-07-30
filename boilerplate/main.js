// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
  ];
  
  // 사용자 입력 받기
  const line = prompt('최대 금액을 입력해주세요.');
  const amount = +line;
  
  // 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
  const item = getItemByAmount(data, amount);
  
  const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';
  
  // 결과 출력
  alert(msg);
  
  // 아래에 getItemByAmount 함수를 작성하세요.
  function getItemByAmount(data, price) { // data와 price를 매개변수로 받는 gerItemByAmount 생성
    let goodsmax = { name : '', price : 0 };//가장 비싼 상품을 받을 변수 생성
    //입력값 내에서 가장 비싼 상품 찾기
    data.forEach((element) => {
        if(element.price <= amount &&element.price > goodsmax.price) { 
            goodsmax = element;  
        }
        
           
    });
    //amount가 숫자가 아니거나 500보다 작을 경우 null 반환
    if(isNaN(amount) || amount < 500){
      return null ;
    }
    //그렇지 않으면 goodmax 반환
    else{
        return goodsmax;

    } 
  
    
  }
