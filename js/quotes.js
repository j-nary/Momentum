const quotes = [
    {
        quote: "결혼하자 언제가 좋아? 난 내일인데",
        author: "@m00n_zi0",
    },
    {
        quote: "헐 너무 옙뻐!",
        author: "@yeolmumi",
    },
    {
        quote: "대박적... 머리카락도 눈치 있으면 코랄로 자라야함..",
        author: "@periwinkle_uni",
    },
    {
        quote: "한이 귀여웡",
        author: "@whoooo__",
    },
    {
        quote: "핱트핱트",
        author: "@_nnyong_",
    },
    {
        quote: "사랑해 ㅈㄴ 예뻐",
        author: "@y_eppie",
    },
    {
        quote: "찰떡이다 진아ㅏ",
        author: "@su_bin47",
    },
    {
        quote: "오조오억배 예쁘네 퍼스널컬러 한 보람 잇다 야",
        author: "@ujehioxx",
    },
    {
        quote: "오우 너무 이쁘세요 !",
        author: "@sh07_23",
    },
    {
        quote: "와 개쩐다 진아",
        author: "@dduals_",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;