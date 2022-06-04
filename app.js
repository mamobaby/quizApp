//ゲーム内容
const quiz = [
    {
        question: `ゲーム市場、最も売れたゲーム機はどれ？`,
        answers: [
            `Switch`,
            `ニンテンドーＤＳ`,
            `プレステーション４`,
            `ファミコン`
        ],
        correct: `ニンテンドーＤＳ`
    },
    {
        question: `日本一高い山といえばどれ？`,
        answers: [
            `富士山`,
            `蔵王山`,
            `阿蘇山`,
            `御嶽山`
        ],
        correct: `富士山`
    },
    {
        question: `ゴウカザルのタイプはどれ？`,
        answers: [
            `ほのお、じめん`,
            `ほのお、かくとう`,
            `ほのお、はがね`,
            `ほのお、アク`
        ],
        correct: `ほのお、かくとう`
    }
];
//クイズ数取得
const quizLength = quiz.length;
let quizIndex = 0;

//正解数
let score = 0;

//buttonタグの取得
const $button = document.getElementsByTagName(`button`);
let buttonLength = $button.length;

//問題文、選択肢書き換え
const setupQuiz = () => {
    document.getElementById(`js-question`).textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
}
setupQuiz();



//正誤判定
const judgement = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert(`正解！！`);
        score++;
    } else {
        window.alert(`不正解! 正解は、` + quiz[quizIndex].correct + `です。`);
    } 

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert(`終了！あなたの正解数は` + score + "/" + quizLength + "です！");
    }
};

//クリック位置判定
let judgementIndex = 0;
while(judgementIndex < buttonLength) {
    $button[judgementIndex].addEventListener(`click`, (e) => {
        judgement(e);
    });
    judgementIndex++;
}
