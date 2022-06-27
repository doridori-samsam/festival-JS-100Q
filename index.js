//Chapter 1-1

//문제 1 : 배열의 삭제
//다음 배열에서 400, 500을 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500]

//답
nums.splice(3,2);
//인자 순서 index값/index부터 제거될 원소 수(0이면 삭제되지 않는다)/index와 제거된 원소 수 사이에 추가될 값


//문제 2 : 배열의 내장함수
//<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

데이터
var arr = [200, 100, 300];
//pass
console.log(arr);

출력
[200, 100, 1000, 300]

//답
arr.splice(2, 0, 1000);


//문제 3 : 변수의 타입
//다음 출력 값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof(arr));
1)undefined
2)String
3)Number
4)Object

//답
4)Object


//문제 4 : 변수의 타입 2
//다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 맞지 않은 것은?

1)입력 : a = 1, 출력 : Number
2)입력 : a = 2.22, 출력 : Boolean
3)입력 : a = 'p', 출력 : String
4)입력 : a = [1,2,3],  출력 : Object

//답
2번 - 출력 값은 Number이다.


//문제 5 : for문 계산 🤔
//다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);

1) 10
2) 12
3) 14
4) 16

//답
3) 14 ❌ - 다시풀어보세요
//i=1부터 시작, 2씩 증가한다. i가 3일때 2가 증가되면 i<5; 조건을 만족시키지 못하므로 반복문 끝


//문제 6 : False
//다음은 자바스크립트 문법 중에서 False로 취급하는 것들입니다.. 
//앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.
1) NaN
2) 1
3) ""
4) 0
5) undefined

//답
2) 1 //콘솔창에 !!1 로 확인 할 수 있다.


//문제 7 : 변수명 🤔
//다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오
1) age
2) &age
3) let
4) _age
5) 1age

//답
3번, 5번 //식별자는 문자, 밑줄(_) 혹은 달러기호($)로 시작해야 하며 let은 예약어라 사용 불가능하다.


//문제 8 : 객체의 키 이름 중복
//자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)
var d = {
    'height' : 180,
    'weight' : 78,
    'weight' : 84,
    'temperature' : 36,
    'eyesight' : 1
};

console.log(d['weight']);

//답 
84 //키가 중복되었을 경우 마지막 키의 값을 가져온다.


//문제 9 : concat을 활용한 출력 방법
//다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요.

console.log(result);

출력
2019/04/26 11:34:27

//답
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);


//문제 10 : 별 찍기 💥
//크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
//온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.
//은비를 위해 프로그램을 작성해 주세요.

입력 5
출력
         *
        ***
       *****
      *******
     *********  

//내 답안
const level = 5;
for (let i = 1; i<= level; i++){
    let tree = "*";
    let empty = ' ';
    tree = empty.repeat(5-i)+tree.repeat(2*i-1);
    console.log(tree);
}

//답(강의 영상 참고)
const level = 5;
for(let i = 1; i<= level; i++){
    let tree = "";
    //공백 증가 포문
    for(let k=1; k<=level-i; k++){
        tree = tree + " ";
    }
    //별 증가 포문
    for (let j=1; j <= i*2-1; j++){
        tree = tree + "*";
    }
    console.log(tree);
}



//문제 11 : for를 이용한 기본 활용
//1부터 100까지 모두 더하는  code를 <pass>부분에 완성하세요. for를 사용해야 합니다.

let s = 0;
//pass
console.log(s);

//내 답안
for(i=1; i<=100; i++){
    s = i+s;
}

//답
//내 답안과 일치


//문제 12 : 게임 캐릭터 클래스 만들기
//다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
//주어진 소스코드를 수정해선 안됩니다.

데이터
<여기에 class를 작성하세요.>

const x = new Wizard(545, 210, 10)
console.log(x.health, x.mana, x.armor);
x.attack();

출력
545 210 10
파이어볼!!

//내 답안
class Wizard{
    constructor(health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼!!');
    }
}

//답안
//내 답안과 일치


//문제 13 : 몇 번째 행성인가요?
//우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로
//총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
//입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
//출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
//예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

입출력
입력 : 1
출력 : 수성

//내 답안
const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

function 입력(n){
    console.log(planets[n-1]);
}

//답안
const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const n = prompt('몇 번째 행성인가요?');
console.log(planets[n-1]);


//문제14 : 3의 배수인가요?
//영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
//입력으로 랜덤한 숫자 n이 주어집니다.
//만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

입출력
입력 : 3
출력 : 짝

입력 : 2
출력 : 2

//내 답안
(function(){
    const n = prompt('3의 배수인가요?');
    if(n%3 === 0){
        alert('짝');
    }
    else{
        alert(n)
    }
})();

//답
const n = prompt('숫자를 입력하세요.');

if(n%3 == 0){
    console.log('짝');
}
else{
    console.log(n);
}


//문제 15 : 자기소개
//신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
//만약 입력으로 '김다정'이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력되게 해주세요.

입출력
입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.

//내 답안
const a = prompt('이름이 뭐예요?');
alert(`안녕하세요. 저는 ${a}입니다.`);

//답
const name = prompt('이름을 입력하세요.');
console.log(`안녕하세요. 저는 ${name}입니다.`);


//문제 16 : 로꾸거
//문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력
입력 : 거꾸로
출력 : 로꾸거

//내 답안
const backwards = prompt('거꾸로 말해볼까요?');
let word = [...backwards];
alert(((word.reverse()).toString()).replace(/,/g,""))

//답
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log(reverseString);


//문제 17 : 놀이기구 키 제한
//유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
//유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
//입력으로 키가 주어지면 
//키가 150이 넘으면 YES를, 틀리면 NO를 출력하는 프로그램을 작성하세요.

//내 답안
const height = prompt('키가 몇이에요?');
if(height >= 150){
    alert('YES')
}
else{
    alert('NO')
}

답
const height = prompt("키를 입력하세요.");

if (height >= 150){
  console.log("YES");
} else {
  console.log("NO");
}


//문제 18 : 평균 점수
//영하네 반은 국어, 수학, 영어 시험을 보았습니다.
//영하는 친구들의 평균 점수를 구해주기로 했습니다.

//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균를 구하는 프로그램을 작성하세요.
//단, 소숫점 자리는 모두 버립니다.

입출력

입력 : 20 30 40
출력 : 30

//내 답안
const input = prompt('점수를 입력하세요.');
let score = input.split(' ');
let sum = 0;
for(i=0; i<score.length; i++){
    sum += parseInt(score[i])
}
let average = Math.floor(sum/score.length)
console.log(average);

//답
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i=0; i<3; i++){
    sum += parseInt(scores[i], 10);
}

console.log(Math.floor(sum/3));


//문제 19 : 제곱을 구하자 
//공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

//내 답안
const numbers = prompt ('두 개의 숫자를 입력하세요.').split(' ');
console.log(Math.pow(numbers[0], numbers[1]));

//답
const n = prompt('수를 입력하세요.').split(' ');
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
🔥 "parseInt"를 잊지말자. prompt에서 입력받은 데이터는 split을 통해 문자열로 배열에 들어가게 된다.


//문제 20 : 몫과 나머지
//공백으로 구분하여 두 숫자가 주어집니다.
//두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

입출력
입력 : 10 2
출력 : 5 0

//내 답안
const n = prompt('두 개의 숫자를 입력하세요.').split(' ');

function result(a,b){
    console.log((a/b)+' '+(a%b))
}

result(parseInt(n[0]), parseInt(n[1]));

//답
const n = prompt('수를 입력하세요.').split(' ');
const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);
console.log(result, left);


//문제 21 : set은 어떻게 만드나요?💥 // set 개념 공부하기
//다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1) var x = {1, 2, 3, 4, 5, 7};
2) var x = {};
3) var x = new Set('javascript');
4) var x = new Set(range(5));
5) var x = new Set();

//답
3번, 5번


//문제 22 : 배수인지 확인하기
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1) i/6 == 0
2) i%6 == 0
3) i&6 == 0
4) i|6 == 0
5) i//6 == 0

//답
2번

//문제 23 : OX문제

console.log(10/3)의 출력 결과는 3이다.Boolean

//답
X, 출력 결과는 3.3333333333333335


//문제 24 : 대문자로 바꿔주세요!
//민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데
//참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져있는등 형식이 제각각이었습니다.
//민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어 주세요.

//내 답안
const name = prompt('Let us know your name').toUpperCase();
alert(name);

//답
var name = prompt("이름을 입력하세요.");
console.log(name.toUpperCase());


//문제 25 : 원의 넓이를 구하세요
//원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
//함수를 사용하여 원의 넓이를 구하는 코드를 작성해 봅시다.
//입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

//내 답안
const radius = prompt('반지름의 길이를 알려주세요.');

function circle(x){
   return parseInt(x)**2*3.14
};

alert(circle(radius));

//답
function  circle(n){
    const result = n*n*3.14;
    return result;
}
const r = prompt('원의 반지름을 입력하세요.');
console.log(circle(r));


//문제 26 : 행성 문제2 💥
//우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
//이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

//내 답안

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']
const planetsEng = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

const input = prompt('행성 이름을 입력하세요.');

function english(x){
   return planetsEng[planets.indexOf(x)]
}

alert(english(input));

//답
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);


//문제 27 : 객체 만들기 ❌ - 다시 풀어보세요
//첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
//두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해 주세요.

입력
Yujin Hyewon
70 100

출력
{'Yujin':70, 'Hyewon':100}

//답
const name = prompt('학생 이름은?').split(' ');
const score = prompt('점수는?').split(' ');
const result = {};

for (let i=0; i<name.length; i++){
    result[name[i]] = praseInt(values[i], 10);
}

console.log(obj);


//문제 28 : 2-gram ❌ - 다시 풀어보세요.
//2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
//예를 들어, 'JavaScript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t

//입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

//내 답안
const letter = prompt('문자를 입력하세요.').split('');
for(i=0; i<letter.length; i++){
    var i;
    console.log(letter[i], letter[i+1]);
}

//답
const data = prompt('문자를 입력하세요.');

for (let i=0; i<data.length-1; i++){
  console.log(data[i], data[i+1]);
}


//문제 29 : 대문자만 지나가세요 - 💛
//진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
//알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

//내 답안
const letter = prompt('알파벳을 입력하세요.');
const regExp = /[A-Z]/g;
alert(regExp.test(letter) ? 'YES' : 'NO');

//답
const data = prompt('알파벳을 입력하세요.');
if(data === data.toUpperCase()){
    console.log('YES');
} else{
    console.log('NO');
}

//문제 30 : 문자열 속 문자 찾기
//문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
//첫번째 입력에서는 문자열이 입력되고, 두 번째에는 찾을 문자가 입력되어야 합니다.
//그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.

입력
pineapple is yummy
apple

출력
4

//내 답안
const sentence = prompt("문장을 입력하세요.");
const word = prompt("찾을 단어를 입력하세요.");

alert(sentence.search(word));

//답
const data = prompt('문자열을 입력하세요.');
const word = prompt('찾을 단어를 입력하세요.');

console.log(data.indexOf(word));


//문제 31 : 자바스크립트 자료형의 복잡도 - ❌ 시간복잡도에 대한 개념 알기
//다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)


//답
3번, 5번


//문제 32 : 문자열 만들기
//취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다.
//혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력 : 5

//내 답안
const data = prompt('문자열을 입력하세요.').split(' ');
alert(data.length);

//답
const string = prompt('문자열을 입력하세요.')split(' ');
console.log(string.length);


//문제 33 : 거꾸로 출력하기
//한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2

//내 답안
const numbers = prompt('숫자들을 입력하세요.').split('');
const result = numbers.reverse().join(" ");
alert(result);

//답
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for(let i=0; i<data.length; i++){
    result += data[i];
}

console.log(result);


