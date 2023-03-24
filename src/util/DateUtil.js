// 이번달 마지막 날짜 리턴
const returnLastDay = (month) => {

    let endNum = 0; // 달 끝날짜
    
    const month28 = [2];
    const month30 = [4,6,9,11];
    const month31 = [1,3,5,7,8,10,12];

    // 이번달 끝 날짜 구하기
    if(month28.indexOf(month) != -1) endNum = 28;
    if(month30.indexOf(month) != -1) endNum = 30;
    if(month31.indexOf(month) != -1) endNum = 31;

    return endNum;
};

const returnDateContent = (paramMonth) => {

    const result = [];  // 결과배열
    const date = new Date((new Date()).getFullYear(), paramMonth - 1, 1);  // 이번달 1일로 세팅함
    
    // 이번달 1일 시작 index => 일 0 ~ 토 6
    const index = date.getDay();                                
    // 이번달 마지막날짜
    const lastDay = returnLastDay( (new Date).getMonth() + 1 ); 

    const week1 = [];   // 첫째주
    const week2 = [];   // 둘째주
    const week3 = [];   // 셋째주
    const week4 = [];   // 넷째주
    const week5 = [];   // 다섯째주
    const week6 = [];   // 여섯째주

    let day = 1;    
    let endDay = 0; // 배열에 담을 마지막 일
    
    // 첫째주 담기
    for(let i=0; i<7; i++) { 
        const data = i < index ? '' : day++;
        week1.push(data);
    }  
    
    // 2~6째주 담기
    for(let i=2; i<=6; i++) {
        // 한주 배열에 담을 마지막값 설정
        endDay = day + 6;
    
        for(let j=day; j<=endDay; j++) { 
            const data = j <= lastDay ? day++ : '';
            
            if(i == 2) week2.push(data);
            if(i == 3) week3.push(data);
            if(i == 4) week4.push(data);
            if(i == 5) week5.push(data);
            if(i == 6) week6.push(data);
        }
    }

    // 결과담기
    for(let i=1; i<=6; i++) {

        let sun, mon, tue, wed, thu, fri, sat = 0;

        if(i == 1) { sun = week1[0]; mon = week1[1]; tue = week1[2]; wed = week1[3]; thu = week1[4]; fri = week1[5]; sat = week1[6]; }
        if(i == 2) { sun = week2[0]; mon = week2[1]; tue = week2[2]; wed = week2[3]; thu = week2[4]; fri = week2[5]; sat = week2[6]; }
        if(i == 3) { sun = week3[0]; mon = week3[1]; tue = week3[2]; wed = week3[3]; thu = week3[4]; fri = week3[5]; sat = week3[6]; }
        if(i == 4) { sun = week4[0]; mon = week4[1]; tue = week4[2]; wed = week4[3]; thu = week4[4]; fri = week4[5]; sat = week4[6]; }
        if(i == 5) { sun = week5[0]; mon = week5[1]; tue = week5[2]; wed = week5[3]; thu = week5[4]; fri = week5[5]; sat = week5[6]; }
        if(i == 6) { sun = week6[0]; mon = week6[1]; tue = week6[2]; wed = week6[3]; thu = week6[4]; fri = week6[5]; sat = week6[6]; }

        const week = { 'sun':sun, 'mon':mon, 'tue':tue, 'wed':wed, 'thu':thu, 'fri':fri, 'sat':sat };
        result.push(week);        
    }

    return result; 
};

const DateUtil = { returnDateContent };

export default DateUtil;