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

// 답
// 내 답안과 일치


문제 12 : 게임 캐릭터 클래스 만들기
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

//split() 메서드는 문자열을 배열로 만들어 반환하고,
//reverse() 메서드는 배열의 순서를 반전하며,
//join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.

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

//답
const height = prompt("키를 입력하세요.");

if (height >= 150){
  console.log("YES");
} else {
  console.log("NO");
};


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


//문제 33 : 거꾸로 출력하기 ❓-답안 오류?
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

//문제 34 : sort 구현하기
//민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
//그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.
//민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해 보자.(키는 공백으로 구분하여 입력됩니다.)

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES

//내 답안
const height = prompt("키를 입력하세요.").split(" ");

function align(a, b) {
  return a - b;
}

const srt = [...height].sort(align);

console.log(srt.join("") === height.join("") ? "YES" : "NO");

//답
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted.split(' ').sort(function(a, b){return a - b;}).join(" ");

if(unsorted === sorted){
    console.log("Yes");
} else{
    console.log("No");
}


//문제 35 : Factory 함수 사용하기 - ❌ 다시 풀어 보세요.
//2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.
//<pass>에 코드를 작성하여 two함수를 완서하세요.

function one(n){
    function two(){
        //pass
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

//내 답안
function one(n){
    function two(x){
        Math.pow(n, x);
    }
}

//답

function one(n){
    function two(value){
        const sq = Math.pow(value,n);
        return sq;
    }
    return two;
}

//문제 36 : 구구단 출력하기
//1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

입출력
입력 : 2
출력 : 2 4 6 8 10 12 14 16 18

//내 답안
const num = prompt('구구단을 외자, 구구단을 외자!')
let num2 = parseInt(num);

for (let i = 1; i < 10; i++) {
  let result = num2 * i;
  console.log(result);
}

//답
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
  result += i*num + ' ';
}

console.log(result);


//문제 37 : 반장 선거 - 💥 ❗ 어려움!!
//새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
//학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.

//답
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);


//문제 38 : 호준이의 아르바이트
//호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다.
//그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.
//1위~3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
//학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

입출력
입력 : 97 86 75 66 55 97 85 97 97 95
출력: 6

//내 답안
const arr = prompt('점수를 입력하세요.').split(' ').map((item) => parseInt(item));
let result = [];

arr.sort((a, b) => {
  return a - b;
});

{/* function getWinner(arr) {
  let first = arr.filter((item) => {
    return item === Math.max(...arr);
  });
  arr.splice(arr.indexOf(first[0], first.length));
  result.push(...first);
  console.log(arr);
  let second = arr.filter((item) => {
    return item === Math.max(...arr);
  });
  arr.splice(arr.indexOf(second[0], second.length));
  result.push(...second);
  let third = arr.filter((item) => {
    return item === Math.max(...arr);
  });
  arr.splice(arr.indexOf(third[0], third.length));
  result.push(...third);
} */}

for (let i = 0; i < 3; i++) {
  let test = arr.filter((item) => {
    return item === Math.max(...arr);
  });
  arr.splice(arr.indexOf(test[0]), test.length);
  result.push(...test);
}
console.log(result.length);


//답
let arr = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
arr.sort((a, b) => {
  return a - b;
});

let top3 = [];
let count = 0;

while (top3.length < 4) {
  let value = arr.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(top3);
console.log(count - 1);


//문제 39 : 오타 수정하기
//혜원이는 평소 영타가 바르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다.
//그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다.
//혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.
//문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

입출력
입력: querty
출력: euerty

입력: hqllo my namq is hyqwon
출력: hello my name is Hyewon

//내 답
let data = prompt("문장을 입력하세요").split(" ");

const result = data.map((word) => word.replace("q", "e")).toString();
const lastResult = result.replace(/,/g, " ");
console.log(lastResult);

//답
//1. 함수 사용
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));


//문제 40 : 놀이동산에 가자
//테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야합니다.
//원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

//첫 번째 입력으로 제한 무게가 주어지고, 두 번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
//그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

입력
50
5
20
20
20
20
20

출력
2

//내 답안
const arr = prompt('입력').split(" ").map((item) => parseInt(item));

let count = 0;
let total = 0;

for (let i = 2; i < arr.length; i++) {
  total += arr[i];
  if (total <= arr[0]) {
    count++;
  }
}
console.log(count);

//답
let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);

 
//문제 41 : 소수판별 💚더 나은방법 있음.💚
//숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해 주세요.
//소수이면 YES로, 소수가 아니면 NO로 출력해 주세요.
//(소수:1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수)

//내 답안
let input = prompt('숫자를 입력하세요');
let num = parseInt(input);

function test(num) {
  if (num > 7) {
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  } else if (num === 2 || num === 3 || num === 5 || num === 7) {
    console.log("YES");
  } else if (num === 1 || num === 4 || num === 6) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}

test(num);

//답
const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);


//문제 42 : 2020년
//2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
//두 수 a,b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
//요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
//예를 들어, a = 5, b = 24라면  5월 24일은 일요일이므로 문자열 "SUN"을 반환하세요.

//제한 조건
//2020년은 윤년입니다.
//2020년 a월 b일은 실제로 있는 날입니다.(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

//내 답안
const data = prompt('월과 일을 입력하세요.').split(' ').map((item) => parseInt(item))

function findDay(a, b) {
  if (a === 0 || b === 0) {
    console.log("월과 일 숫자를 입력하세요.");
  } else if (a > 12 || b > 31) {
    console.log("잘못된 입력입니다.");
  } else if (a === 2 && b > 29) {
    console.log("2월은 29일까지입니다.");
  } else {
    let date2 = new Date(`2020-${a}-${b}`);
    const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return console.log(dayList[date2.getDay()]);
  }
}

findDay(data[0], data[1]);

//답
const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(month, date));


//문제 43 : 10진수를 2진수로 💚강의 들어서 원리 이해해보기💚
//우리가 흔히 사용하는 숫자 1, 8, 19 ,28893 등등...은 10진수 체계입니다.
//이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
//사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력해주세요.

//내 답안
const num = prompt('숫자를 입력해주세요.')
console.log(parseInt(num, 10).toString(2));

//답
let a = prompt('10진수를 입력해주세요.')
let b = [];
let result = '';

while (a){
	b.push(a % 2);
	a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
})

console.log(result);


//문제 44 : 각 자리수의 합
//사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요.
//예를 들어 18234 = 1+8+2+3+4 이고 정답은 18입니다.
//3849 = 3+8+4+9 이고 정답은 24입니다.

입출력
입력: 18234
출력: 18

입력: 3849
출력: 24

//내 답안
const num = prompt('숫자를 입력하세요').split(' ').map((item) => parseInt(item));

let result = num.reduce((a, b) => {
  return a + b;
});

console.log(result)

//답 (더 이상 나눠지지 않을 때까지 10으로 나누면 나머지가 각 자리수가 된다...)
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}

console.log(sum);


//문제 45 :  getTime()함수 사용하기
//Date 객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
//이를 이용하여 현재 연도(2022)를 출력해보세요.

//내 답안
const today = new Date();
console.log(today);

let todayYear = today.getTime() / 1000 / 60 / 60 / 24 / 365;
console.log(Math.floor(todayYear) + 1970);

//답
const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970 //3600초 = 1시간


console.log(year);


//문제 46 : 각 자리수의 합 2
//1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.
//예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415 이고 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

//내 답안
let num = "";
for (let i = 1; i <= 20; i++) {
  num += i;
}
let arr = num.split("").map((item) => parseInt(item, 10));
let result = arr.reduce((a, b) => {
  return a + b;
});

console.log(result); //102

//답
let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);


//문제 47 : set자료형의 응용
//바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다.
//이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
//중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.
//아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

//내 답안
let newPeople = new Set([people]);
console.log(Object.keys(...newPeople).length); //5

//답
let result = new Set();
for (let key in people) {
  result.add(people[key]);
}
console.log(result.size); //size 는 set 객체 내 값의 개수를 반환합니다.


//문제 48 : 대소문자 바꿔서 출력하기
//문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력
입력: AAABBBcccddd
출력: aaabbbCCCDDD

//내 답안
const char = prompt('문자를 입력하세요.').split('');
let result = "";

char.forEach((item) => {
  result +=
    item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
});

console.log(result);

//답
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if(a[i] === a[i].toLowerCase()){ 
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s)


//문제 49 : 최댓값 구하기
//순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

입출력
입력: 10 9 8 7 6 5 4 3 2 1
출력: 10

//내 답안
const num = prompt('숫자를 입력하세요').split(' ').map((item) => parseInt(item, 10));
console.log(Math.max(...num))

//답
let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
  return parseInt(n, 10);
});

numbers.sort((a, b) => {
  return b-a;
});

console.log(numbers[0]);


//문제 50 : 버블정렬 구현하기 ✨
//버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
//아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (/*빈칸을 채워주세요.*/) {
      if (result[j] > result[j + 1]) {
         //빈칸을 채워주세요.
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));

//내 답안
let j = 0; j < result.length; j++
[[result[j], result[j + 1]]] = [[result[j + 1], result[j]]]

//답
let j = 0; j < result.length - 1; j++
let temp = result[j];
result[j] = result[j+1];
result[j+1] = temp;

//문제 51 : merge sort를 만들어보자
//병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

//1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
//2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
//3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

//다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];

  while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
    if (/*빈칸을 채워주세요*/){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    /*빈칸을 채워주세요*/
  }
  while (right.length) {
    /*빈칸을 채워주세요*/
  }

  return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));

//내 답안
while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
  if (/*빈칸을 채워주세요*/){
    result.push(left.shift());
  } else {
    result.push(right.shift());
  }
}
while (left.length) {
  /*빈칸을 채워주세요*/
}
while (right.length) {
  /*빈칸을 채워주세요*/
}


//문제 52 : quick sort
//다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++){
    if (/*빈칸을 채워주세요*/) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    return /*빈칸을 채워주세요*/
  }
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));

//내 답안
for (let i = 1; i < arr.length; i++){
  if (arr[i]<pivot) {
    left.push(arr[i]);
  } else {
    right.push(arr[i]);
  }
  return /*빈칸을 채워주세요*/
}

//답안
for (let i = 1; i < arr.length; i++){
  if (arr[i]<pivot) {
    left.push(arr[i]);
  } else {
    right.push(arr[i]);
  }
  return /*빈칸을 채워주세요*/
}