# 바닐라 JS로 크롬 앱 만들기

---

## #2. WELCOME TO JAVASCRIPT

### 2.0 Your First JS Project

1. html은 접착제
    - 자바스크립트, css 파일을 브라우저에서 여는 것 X
    - index.html 파일을 브라우저에서 여는 것 O
    - html파일은 css와 자바스크립트 파일을 가져옴.
2. html, css 파일 연결
    
    ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled.png)
    
    - link태그 사용
3. html, javascript 파일 연결
    
    ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%201.png)
    
    - script 태그 사용

### 2.2 Variables

1. console.log();
    
    콘솔에 log 또는 print
    
2. const
    - variable : 값 저장, 유지
    - const 상수 : 변하지 X
    - const veryLongVariableName = 0;    첫글자를 대문자로 ← 관례
3. let
    - const와 달리 variable값 업데이트 가능
    - let, const 둘 다 자료형 → 새로 선언할 때만 사용
    - const 변수 업데이트 시, Error
    
    +) var : const, let 이전에 있었던 어떠한 규칙도 없는 자료형
    

→ const를 사용하되, 필요한 경우에만 let을 사용하자!

→ let과 달리, const는 선언과 동시에 초기화 필수 !

### 2.4 Data Type

1. Boolean
    - false ≠ null : null은 값이 없음으로 채워진 변수를 의미
    - null은 자연적으로 발생 X
        
        → 우리가 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 사용
        
    - undefined : 변수가 존재하는데 아직 정의되지 않음을 의미
        
        ```jsx
        let a;
        console.log(a);
        ```
        
    - NaN : Not a Number
        
        undefined + undefined = NaN
        
2. Arrays
    
    ```cpp
    const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
    daysOfWeek.push("sum");      //배열에 데이터 추가
    ```
    
3. Objects
    
    ```cpp
    const player = {
    	name: "Jnary",
    	points: 921,
    	cute: true,
    };
    
    player.name              //객체에 접근하는 방법 1
    player["name"]           //객체에 접근하는 방법 2
    
    player.cute = false;     //객체 내 속성 업데이트 가능
    player.smart = true;     //객체 내 속성(property) 추가
    ```
    
4. Functions
    
    ```jsx
    function sayHello(name, age) {
    	console.log("Hello, I'm " + name + "and my age is " + age);
    }
    sayHello("Jnary", 21);
    ```
    
    ```jsx
    const player = {
    	name: "Jnary",
    	sayHello: function() {
    		console.log("Hello!");
    	},
    };
    ```
    

### 2.13 Conditionals

1. prompt
    
    사용자에게 메시지를 띄워주고 값을 입력받게 함
    
    지금은 사용하지 않는 오래된 방법 (CSS등으로 팝업창의 사용자화가 불가능함)
    
    ```jsx
    const age = prompt("How old are you?");
    //나이를 입력받을 때까지 코드의 실행을 멈춤
    console.log(typeof age)
    //string
    ```
    
2. 타입 변경
    
    ```jsx
    parseInt("15");
    //string -> number로 변환
    parseInt("assasasaa");
    //NaN
    ```
    
    숫자 외에 다른 것을 입력 받았을 때 NaN인지 아닌지 여부로 판별 가능
    
3. NaN 판별하는 방법
    
    ```jsx
    isNaN(age);
    //boolean 리턴
    
    if (isNaN(age)) {
    	console.log("Please write a number");
    }
    ```
    
4. 연산자
    
    ```jsx
    console.log(null == undefined); // true 값이 같은 지 판별
    console.log(null === undefined); // false 값과 타입이 모두 같은 지 판별
    ```
    

## #3. JAVASCRIPT ON THE BROWSER

### 3.0 The Document Object

1. Document
    - 브라우저에 이미 존재하는 object
    - html을 가리키는 객체
    
    ```jsx
    document.title
    >> "Jnary's Momentum"
    ```
    
    - html에 있는 속성을 javascript에서 읽고 쓸 수 있다 !
2. getElementById()
    - <hi id = “title”>Grab me!</hi>
    - .dir 옵션은 html의 모든 요소를 더 자세히 보여줌
    
    ```jsx
    const title = document.getElementById("title");
    title.innerText = "Let's Study!";
    //id를 통해 JS와 Html 소통
    ```
    
3. getElementsByClassName()
    - <h1 class=”hello”>Grab me!</h1>
    
    ```jsx
    const hellos = document.getElementsByClassName("hello");
    ```
    
    - class 이름으로 hello를 가진 것들의 배열을 리턴
    - 많은 element를 한 번에 가지고 와야하는 경우 사용
4. getElementsByTagName(”h1”);
    - tag : anchor, div, section, button
    
    ```html
    <body>
    	<div class="hello">
    		<h1>Grab me!</h1>
    	</div>
    	<script src="app.js"></script>
    </body>
    ```
    
5. querySelector
    - element를 CSS 방식으로 검색
        
        → hello 라는 class 내부에 있는 h1을 가져올 수 있음
        
    
    ```jsx
    const titile = document.querySelector(".hello h1");
    //class 내부에 tag 가져오는 방법
    document.querySelector("#title");
    //id 가져오는 방법
    
    console.dir(title);
    //html 요소 모두 보여짐
    title.style.color = "blue";
    //그 요소 중 하나 변경
    ```
    
    - 첫번째로 찾은 단 하나의 element만 리턴
    - 모든 element를 리턴하고 싶다면 → querySelectorAll()
    - 없다면 null 리턴

### 3.3 Events

1. listen
    
    ```jsx
    const title = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick() {
    	title.style.color = "blue";
    	console.log("title was clicked");
    }
    
    title.addEventListener("click", handleTitleClick);
    //listen하고 싶은 event명, event 발생 시 호출할 function명
    title.onclick = handleTitleClick;
    //동일한 코드
    //첫번째 방법 선호 -> .removeEventListener 사용 가능하기 때문
    ```
    
2. Event 찾는 방법
    - “h1 html element mdn” 구글링, “Web APIs” 라는 문장이 포함된 페이지 탐색
        
        → MDN : Mozilla Developer Network
        
        [Element - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Element)
        
    - .dir 붙여서 나온 property 중 앞에 on이 붙어있는 것
        
        ex. onclick → event 명은 click
        
3. Event 종류
    
    ```jsx
    title.addEventListener("mouseenter", handle~);
    //커서 가져다 댈 때 발생하는 event
    title.addEventListener("mouseleave", handle~);
    //커서 제거할 때 발생하는 event
    ```
    
4. Window
    - 기본적으로 제공되는 것.
    - window에 내제된 event들이 많음.
    
    ```jsx
    function handleWindowResize() {
    	document,body.style.backgroundColor = "tomato";
    }
    
    window.addEventListenr("resize", handelwWindowResize);
    //화면 크기 조정할 때 발생하는 event
    window.addEventListenr("copy", handele~);
    //유저가 copy 행위를 했을 때 발생하는 event
    window.addEventListenr("offline", handele~);
    //wifi에 연결되어 있지 않을 때 발생하는 event
    ```
    

### 3.7 CSS in Javascript

animation에 적합한 도구 → Javascript

style에 적합한 도구 → CSS

1. 자바스크립트와 CSS 연결
    - style.css
    
    ```css
    h1 {
    	color: blue;
    }
    .active {
    	color: tomato;
    }
    ```
    
    - app.js
    
    ```jsx
    function handleTitleClick() {
    	if(h1.className === "active") {
    		h1.className ="";
    	} else {
    		h1.className = "active";
    	}
    } //자바스크립트에서 css
    h1.addEventListener("click", handleTitleClick);
    ```
    
2. classList
    
    ```jsx
    function handleTitleClick() {
    	const clickedClass = "clicked";
    	if(h1.classList.contains(clickedClass)) {
    		h1.classList.remove(clickedClass);
    	} else {
    		h1.classList.add(clickedClass);
    	}
    }
    ```
    
    - className은 모든 것을 교체해버림.
    - classList는 contains() 함수를 이용
        
        → element의 class 내용물 조작 허용
        
    
    ```jsx
    //위와 동일한 코드
    function handleTitleClick() {
    	h1.classList.toggle("clicked");
    }
    ```
    
    - toggle : 있으면 추가하고 없으면 지우고

## #4 LOGIN

### 4.0 Input Values

1. input
    
    ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%202.png)
    
    ```html
    <body>
    	<div id="login-form"> 
         <input type="text" placeholder="What is your name?" />
         <button>Log In</button>
         <script src="app.js"></script>
    	</div>
    </body>
    ```
    
    - loginForm.querySelector 로 가져온 html 내의 input, button을 찾을 수 있음 !!
        
        ```jsx
        const loginForm = document.getElementById("login-form");
        const loginInput = loginForm.querySelector("input");
        const loginButton = loginForm.querySelector("button");
        ```
        
        ```jsx
        //위와 똑같은 코드
        const loginInput = document.querySelector("#login-form input");
        const loginButton = document.querySelector("#login-form button");
        ```
        
    - input 태그에 value 미리 지정 가능
        
        ```html
        <input value="jnary" type="text" placholder="What is your name?" />
        ```
        
        → input에 적힌 내용을 가져오려면 value 속성을 찾아보면 된다!
        
    - length
        
        ```jsx
        function onLoginBtnClick() {
            const username = loginInput.value;
            if (username === "") {
                alert("Please write your name.");
            } else if (username.length > 15) {
                alert("Your name is too long.");
            }
        }
        ```
        
        → user 가 입력하는 값의 유효성을 학인하는 연습
        
        but, user를 믿으면 안 된다 !! 이미 가지고 있는 최고의 기능들을 사용하는데 베스트
        
    - 브라우저의 도움을 받는 input
        
        click하지 않고 enter로도 submit 할 수 있는 것!
        
        → 브라우저가 새로고침하지 않고 user 정보를 저장하도록
        
        input을 form 태그 내에 넣어야 함 → 엔터를 누를때마다 자동적으로 submit
        
        → 매번 브라우저를 새로고침하는 것은 비효율적!
        
        ```html
        <form id="login-form">
        	<input 
        		required
            maxlength = "15"
            type="text"
            placeholder="What is your name?"
        	/>
        	<input type="submit" value="Log In" />
        </form>
        ```
        
        form의 기본 동작은 submit (새로고침)
        

### 4.2 Events

1. argument
    
    모든 EventListener function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보이다.
    
    → argument에 공간만 제공하면 됨!
    
    제공해주는 정보 : x,y좌표, 시간, 기본 동작 등등
    
    Mouse event, Submit event 등 이벤트 종류에 따라 제공되는 정보가 상이
    
    ```jsx
    console.dir(event); //제공되는 정보 확인
    ```
    
2. preventDefault();
    
    ```jsx
    function onLoginSubmit(event) {
    	event.preventDefault();
    }
    loginForm.addEventListener("submit", onLoginSubmit);
    ```
    
    어떤 event의 기본 행동이 실행되지 않도록 막아준다.
    
    기본 행동 : function에 대해 브라우저가 기본적으로 수행하는 동작 (ex. 페이지 새로고침)
    
    - alert
        
        특이해서 모든 동작들을 막는다.
        
        → 아무도 사용하지 않는 기능
        
    - href 예시
        
        ```html
        		<body>
                <a href="https://velog.io/@jnary">Go to Jlog</a>
        				//해당 url로 연결되는 anchor 요소
                <script src="app.js"></script>
            </body>
        </html>
        ```
        
        ```jsx
        const link = document.querySelector("a");
        function handleLinkClick(evnet) {
            event.preventDefault();
        }
        link.addEventListener("click", handleLinkClick);
        ```
        

### 4.4 Username

1. Getting Username
    - 이름 입력 후 버튼 누르면 사라지게 하기
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%203.png)
        
    - 이름 저장
        
        ```jsx
        function onLoginSubmit(event) {
            event.preventDefault();      //기본 동작 멈추기
            const username = loginInput.value;   //이름 저장
            loginForm.classList.add("hidden");   //form 숨기기
            console.log(username);   //사라져도 남아요
        }
        ```
        
    - 이름 입력 시 인사하기
        
        ```html
        		<body>
                <form id="login-form">
                </form>
                <h1 id="greeting" class="hidden"></h1>
        				//h1 태그에 숨길 내용 추가시키기
                <script src="app.js"></script>
            </body>
        ```
        
        ```jsx
        const HIDDEN_CLASSNAME = "hidden"
        //string만 포함된 변수는 대문자로 표기, string 저장하고 싶을 때 사용 (관습)
        //반복되는 string은 변수화 시키기! -> 디버깅 용이
        
        function onLoginSubmit(event) {
            event.preventDefault();
            const username = loginInput.value;
            loginForm.classList.add("HIDDEN_CLASSNAME");
        		
        		greeting.innerText = `Hello ${username}`;   //따옴표가 아닌 백틱
            //greeting.innerText = "Hello " + username;
        		//string + 변수 합치기
        
            greeting.classList.remove("HIDDEN_CLASSNAME");
        }
        ```
        
2. Saving Username
    - localStorage
        
        브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능을 담은 API명
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%204.png)
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%205.png)
        
    - setItem
        
        ```jsx
        function onLoginSubmit(event) {
            const username = loginInput.value;
            localStorage.setItem("username", username);
        }
        ```
        
3. Loading Username
    - username 유무 확인
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%206.png)
        
    - user 정보 기억하기
        
        ```jsx
        function paintGreetings(username) {
            greeting.innerText = `Hello ${username}`;
            greeting.classList.remove(HIDDEN_CLASSNAME);
        }
        
        const savedUsername = localStorage.getItem(USERNAME_KEY);
        
        if (savedUsername == null) {   //유저 정보가 없을 때
            loginForm.classList.remove(HIDDEN_CLASSNAME)
            loginForm.addEventListener("submit", onLoginSubmit);
        } else {   //있을 때
            paintGreetings(savedUsername);
        }
        ```
        

## #5 CLOCK

1. Intervals
    
    ```jsx
    function sayHello() {
        console.log("Hello");
    }
    setInterval(sayHello, 5000);
    //5000ms = 5s
    //5초가 지나면 첫 번째로 함수가 시작됨. 5초마다 함수 실행
    ```
    
2. Timeouts
    
    ```jsx
    setTimeout(sayHello, 5000);
    //얼마나 기다렸다가 함수를 실행할 것인지 설정
    ```
    
3. Dates
    - 오늘의 날짜, 시간 가져오기
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%207.png)
        
        - date.getDay() → 0 : 일요일을 의미, 리턴 타입 number
        - date.getFullYear()
        - date.getHours()
        - date.getMinutes()
        - date.getSeconds()
    - 현재 시각 표시하기
        
        ```jsx
        function getClock() {
            const date = new Date();
            clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        }
        getClock();     //로드 되자마자 실행하기 위함
        setInterval(getClock, 1000);    //1초 기다려야 실행되니까
        ```
        
    - padStart
        
        1초여도 01초로 표시하기
        
        string에 적용하는 속성
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%208.png)
        
        ```jsx
        function getClock() {
            const date = new Date();
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2, "0");
        
            clock.innerText = `${hours}:${minutes}:${seconds}`;
        }
        ```
        

## #6 QUOTES AND BACKGROUND

1. Quotes
    - math 모듈
        
        ```jsx
        Math.random()
        //0-1사이의 랜덤한 숫자 제공 -> float형
        Math.random() * 10
        //0-9 사이의 랜덤한 숫자 제공
        Math.round(1.1) //1 반올림
        Math.ceil(1.1)  //2 천정함수, 크기가 큰 가장 작은 정수 리턴
        Math.floor(1.1) //1 크기가 작은 가장 큰 정수 리턴, 소수점 버리기
        
        Math.floor(Math.random() * 10) // 0-9 -> 정수형
        ```
        
    - 문구, 작가 추가
        
        ```jsx
        const quotes = [
            {
                quote: "결혼하자 언제가 좋아? 난 내일인데",
                author: "@m00n_zi0",
            },
            {
                quote: "핱트핱트",
                author: "@_nnyong_",
            },
            {
                quote: "사랑해 ㅈㄴ 예뻐",
                author: "@y_eppie",
            },
        ];
        
        const quote = document.querySelector("#quote span:first-child");
        const author = document.querySelector("#quote span:last-child");
        
        const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote.innerText = todaysQuote.quote;
        author.innerText = todaysQuote.author;
        ```
        
2. Background
    - JavaScript에서 이미지를 만든 후, html에 그것을 추가시키자!
        
        ```jsx
        const images = ["0.png", "1.png", "2.png"];
        const chosenImage = images(Math.floor(Math.random() * images.length));
        
        //새로운 태그 만들기
        const bgImage = document.createElement("img");
        bgImage.src = `img/${chosenImage}`;
        //새로 만든 태그 body에 추가하기
        document.body.appendChild(bgImage);
        ```
        
        appendChild는 가장 뒤에, prependChild는 가장 앞에 추가
        

## #7 TO DO LIST

### 7.0 Setup

1. Setup
    - form이 필요하다. ⁉️
        
        : 사용자가 todo를 입력하고, list가 필요하고, 사용자가 todo를 나열할 수 있어야 하기 때문.
        
    - ul 태그에는 JS로 li 추가할 예정
        
        ```html
        <form id="todo-form">
            <input type="text" placeholder="Write a To Do and Press Enter" required/>
        </form>
        <ul id="todo-list"></ul>
        ```
        
2. Adding ToDos
    
    JS로 html 만들기
    
    ```jsx
    function paintToDo(newTodo) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.appendChild(span);
        span.innerText = newTodo;
        console.log(li);
    }
    ```
    
    ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%209.png)
    
3. Deleting ToDos
    - click된 위치 찾기
        
        ```jsx
        function deleteToDo(event) {
             console.dir(event.target.parentElement.innerText);
        }
        //event가 주는 정보 활용
        //event.target -> 클릭된 HTML element
        
        function paintToDo(newTodo) {
            const button = document.createElement("button");
            button.innerText = "❌";
            buttom.addEventListener("click", deleteToDo);
        }
        ```
        
    - 삭제하기
        
        ```jsx
        function deleteToDo(event) {
             const li = event.target.parentElement;
             li.remove();
        }
        ```
        
4. Saving ToDos
    - 받은 입력 배열에 저장하기
        
        ```jsx
        const toDos = [];
        const newTodo = toDoInput.value;    
        toDos.push(newTodo);
        ```
        
    - 배열에 담긴 내용 localStorage에 저장하기
        
        ```jsx
        function saveToDos() {
            localStorage.setItem("todos", toDos);
            //localStorage는 배열 형태 저장X, 오직 text
            //새로고침하면 기존에 있던 toDos를 화면에 나타내주지 않음.
            //새로고침 후 newTodo가 생기면 초기화 후 할당됨.
        }
        ```
        
    - object, array 등 ↔ string 전환
        
        ```jsx
        1. object -> string
        const player = {name:"Jnary"}
        JSON.stringify(player)
        //"{\"name\":\"Jnary\"}"
        
        2. string -> object
        JSON.parse("[1,2,3,4]")
        //(4) [1, 2, 3, 4]
        ```
        
    - 배열 형태로 localStorage에 저장하기
        
        ```jsx
        function saveToDos() {
            localStorage.setItem("todos", JSON.stringify(toDos));
            //배열 형태로 저장하기 위한 JSON.stringify()
            //중복도 가능
        }
        ```
        
5. Loading To Dos
    - forEach
        
        array에 있는 각각의 item에 대해 function을 실행시킴.
        
        ```jsx
        function FUNCTION_NAME(item) {
        		console.log(item);
        }
        const savedToDos = localStorage.getItem(TODOS_KEY);
        //localStorage가 비었으면 null 리턴
        
        if(savedToDos) {    //if (savedToDos !== null)
            const parsedToDos = JSON.parse(savedToDos);
            parsedToDos.forEach(FUNCTION_NAME);
        }
        ```
        
        화살표 함수
        
        ```jsx
        parsedToDos.forEach((item) => console.log(item));
        //함수 호출을 짧게 쓰는 방법
        ```
        

### 7.6 Deleting To Dos

1. 랜덤한 숫자
    
    ```jsx
    Data.now()
    >> 1621228922793
    //완전히 랜덤한 숫자는 X
    //element가 만들어질 때마다 갖게 되는 ID
    ```
    
    ```jsx
    const newTodoObj = {
            text: newTodo,
            id: Date.now(),
    };
    toDos.push(newTodoObj);
    ```
    
2. id와 함께 text 저장하기
    
    : 어떤 것을 삭제해야하는지 id로 판별하기 위해서 !
    
    ```jsx
    const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
    ```
    
    ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%2010.png)
    
3. filter 함수
    
    배열에서 요소를 삭제하는 것이 아니라, 해당 요소를 제외한 새로운 배열을 할당하는 것!
    
    새로운 배열에 해당 object를 유지하고 싶다면 → true 리턴
    
    ```jsx
    function filterFunc(element) {
    	return element !== 3
    	//3은 제외하고 배열 만들기
    }
    [1, 2, 3, 4].filter(filterFunc);
    >> [1, 2, 4]
    //filterFunc(1) 해당 원소가 true면 유지, False면 제거
    //filterFunc(2)
    //filterFunc(3)
    //filterFunc(4)
    ```
    

## #8 WEATHER

1. Geolocation
    
    ```jsx
    function onGeoOK(position) {
    		//Geolocation이 사용자 위치 정보를 인자로 넘겨줌.
    		//우리는 해당 정보를 전달받을 공간만 만들어놓으면 된다 !! <- 이게 제어의 역전이었던가
        const lat = position.coords.latitude;   //위도
        const lng = position.coords.longitude;  //경도
    }
    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
    //브라우저에서 사용자의 위치 좌표를 리턴해줌.
    //첫번째 인자는 리턴 성공했을 때 실행할 함수명
    //두번째 인자는 리턴 실패했을 때 실행할 함수명
    ```
    
2. Weather API
    - 위도, 경도의 숫자를 장소로 바꿔줄 서비스
    - network탭 : Wifi가 무슨 일을 하는 지 보여준다.
        
        ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%2011.png)
        
    - 화씨온도 → 섭씨온도
        
        ‘&units=metric’ 을 url 뒤에 추가
        
    - fetch
        
        ```jsx
        function onGeoOK(position) {
            const lat = position.coords.latitude;   //위도
            const lng = position.coords.longitude;  //경도
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
            
        		//url 부르는 것
        		fetch(url).then(response => response.json()).then(data => {
        				console.log(data.name, data.weather[0].main);
        }
        ```
        
        fetch는 promise 이다.
        
        promise : 당장 뭔가가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것
        
3. Conclusions
    
    ![Untitled](%E1%84%87%E1%85%A1%E1%84%82%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1%20JS%E1%84%85%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%A2%E1%86%B8%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d7f7e71fc15f4c43b8837be903d6f851/Untitled%2012.png)
    
    끝 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!