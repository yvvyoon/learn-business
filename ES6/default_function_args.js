// ES5
function makeRequest(url, method) {
    if (!method) {
        method = 'GET';
    }

    doSomething(url, method);
}

// ES6
// 사용자 입력을 검증하기 위해 argument에 default 값 설정
function makeRequest2(url, method = 'GET') {
    // doSomething(url, method);

    console.log(url, method);
}

makeRequest2('hello', 'POST');
makeRequest2('hello');

// Example
const sum = ( a = 0, b = 0) => a + b;
sum();  // 0