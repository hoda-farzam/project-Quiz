
// Questions that will be asked

const Questions = [
    {
        q: "واژه پیانو به چه معناست ؟",
        a: [
            { text: "آهسته نواختن", isCorrect: false },
            { text: "تند نواختن", isCorrect: false },
            { text: "آرام نواختن", isCorrect: true },
            { text: "سریع نواختن", isCorrect: false },
        ],
    },

    {
        q: " درازترین ماهی استخوانی جهان چه نام دارد ؟",
        a: [
            { text: "پاروماهی بزرگ", isCorrect: true },
            { text: "خورشید ماهی", isCorrect: false },
            { text: "پشت‌خاره‌سانان", isCorrect: false },
            { text: " اوزون برون", isCorrect: false },
        ],
    },

    {
        q: "تابلوی لبخند ژکوند اثر کیست؟",
        a: [
            { text: "ونگوک", isCorrect: false },
            { text: "پیکاسو", isCorrect: false },
            { text: "داوینچی", isCorrect: true },
            { text: "رامبراند", isCorrect: false },
        ],
    },

    {
        q: "کدام درخت نماد صلح است؟",
        a: [
            { text: "سیب", isCorrect: false },
            { text: "نارنج", isCorrect: false },
            { text: "سرو", isCorrect: false },
            { text: "زیتون", isCorrect: true },
        ],
    },

    {
        q: "سنگین ترین عضو داخل بدن کدام است؟",
        a: [
            { text: "کبد", isCorrect: true },
            { text: "روده", isCorrect: false },
            { text: "کلیه", isCorrect: false },
            { text: "قلب", isCorrect: false },
        ],
    },

    {
        q: "پنی سیلین برای مبارزه با چه نوع عفونتی استفاده می شود؟",
        a: [
            { text: "میکروبی", isCorrect: false },
            { text: "ویروسی", isCorrect: false },
            { text: "قارچی", isCorrect: false },
            { text: "باکتری", isCorrect: true },
        ],
    },

    {
        q: "کوسه ها چه تعداد استخوان دارند؟",
        a: [
            { text: "150", isCorrect: false },
            { text: "250", isCorrect: false },
            { text: "0", isCorrect: true },
            { text: "47", isCorrect: false },
        ],
    },

    {
        q: "نماد شیمی طلا کدام است؟",
        a: [
            { text: "AU", isCorrect: true },
            { text: "Fe", isCorrect: false },
            { text: "Bn", isCorrect: false },
            { text: "Zn", isCorrect: false },
        ],
    },

    {
        q: "گنبد سلطانیه در چه دوره ای ساخته شده است؟",
        a: [
            { text: "سلجوفیان", isCorrect: false },
            { text: "سلوکیان", isCorrect: false },
            { text: "ایلخانیان", isCorrect: true },
            { text: "اشکانیان", isCorrect: false },
        ],
    },

    {

        q: "اولین ماهواره‌ای که به مدار زمین فرستاده شد، توسط کدام کشور انجام گرفت؟",
        a: [
            { text: "شوروي سابق", isCorrect: true },
            { text: "آمریکا", isCorrect: false },
            { text: "فرانسه", isCorrect: false },
            { text: "انگلستان", isCorrect: false },
        ],
    },

    {
        q: "نام قبلی کدام یک از کشورهای زیر «ساحل طلایی» بود؟",
        a: [
            { text: "غنا", isCorrect: true },
            { text: "موزامبیک", isCorrect: false },
            { text: "بوتوانا", isCorrect: false },
            { text: "زئیر", isCorrect: false },
        ],
    },

    {
        q: "جنگ‌های صلیبی چند سال به طول انجامید؟",
        a: [
            { text: "۱۷۱ سال", isCorrect: false },
            { text: "۱۶۰ سال", isCorrect: false },
            { text: "۱۷۹ سال", isCorrect: false },
            { text: "۱۸۶ سال", isCorrect: true },

        ],
    },


    {
        q: "آبشار آنجل در کدام کشور واقع شده است؟ ",
        a: [
            { text: "گویان", isCorrect: false },
            { text: "سوئیس", isCorrect: false },
            { text: "ونزوئلا ", isCorrect: true },
            { text: "نروژ", isCorrect: false },
        ],
    },

    {
        q: "What is the capital of France?",
        a: [
            { text: "Paris", isCorrect: true },
            { text: "London", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
        ],
    },

    {
        q: " What is the largest country in the world?",
        a: [
            { text: "Canada", isCorrect: false },
            { text: "China", isCorrect: false },
            { text: "Russia", isCorrect: true },
            { text: "USA", isCorrect: false },
        ],
    },

    {
        q: "کلمبو پایتخت کدام یک از کشورهای زیر است؟",
        a: [
            { text: "سریلانکا", isCorrect: true },
            { text: "زیمباوه", isCorrect: false },
            { text: "چک", isCorrect: false },
            { text: "چاد", isCorrect: false },
        ],
    },

    {
        q: " ایران طولانی‌ترین مرز مشترک را با کدام کشور دارد؟",
        a: [
            { text: "پاکستان", isCorrect: false },
            { text: "ترکیه ", isCorrect: false },
            { text: "عراق ", isCorrect: true },
            { text: "ترکمنستان", isCorrect: false },
        ],
    },

    {
        q: "در میان شهرهای زیر کدام یک نسبت به بقیه پرجمعیت‌ تر است؟",
        a: [
            { text: "قم", isCorrect: false },
            { text: "زاهدان", isCorrect: false },
            { text: "کرمانشاه", isCorrect: true },
            { text: "رشت", isCorrect: false },
        ],
    },

    {
        q: "کتاب «خدمت و خیانت روشنفکران» اثر چه شخصی است؟",
        a: [
            { text: "جلال الدین فارسی", isCorrect: false },
            { text: "دکتر سروش", isCorrect: false },
            { text: "دکتر حسن آیت", isCorrect: false },
            { text: "جلال آل احمد ", isCorrect: true },
        ],
    },

    {
        q: "مردمک چشم اختاپوس شبیه کدام شکل هندسی است ؟",
        a: [
            { text: "مستطیل", isCorrect: true },
            { text: "مربع", isCorrect: false },
            { text: "دایره", isCorrect: false },
            { text: "مثلث", isCorrect: false },
        ],
    },

    {
        q: "در موسیقی چند نت وجود دارد ؟",
        a: [
            { text: "نه", isCorrect: false },
            { text: "هشت", isCorrect: false },
            { text: "دوازده", isCorrect: false },
            { text: "هفت", isCorrect: true },
        ],
    },

    {
        q: " حق قرار داد رویتر چند سال بود؟",
        a: [
            { text: "10سال", isCorrect: false },
            { text: "20سال ", isCorrect: false },
            { text: "15سال", isCorrect: false },
            { text: "25سال  ", isCorrect: true },
        ],
    },

    {
        q: "علی دایی به کدام تیم ایتالیایی گل زده است ؟",
        a: [
            { text: "آتالانتا", isCorrect: false },
            { text: "آث موفالکون", isCorrect: false },
            { text: "آث میلان", isCorrect: true },
            { text: "آلساندریا", isCorrect: false },
        ],
    },

    {
        q: "برای حل یک مسئله، انسان در مقایسه با کامپیوتر... ؟",
        a: [
            { text: ".به حداقل دستورالعمل نیاز دارد،اما سرعت کمی دارد", isCorrect: true },
            { text: ".دقت و قابلیت اطمینان بالائی دارد", isCorrect: false },
            { text: ".انعطاف پذیری کمی دارد ", isCorrect: false },
            { text: ".سرعت زیادی دارد ولی خستگی پذیر است", isCorrect: false },
        ],
    },

    {
        q: "شاعر سرود ای ایران چه کسی است ؟",
        a: [
            { text: "ادیب برومند", isCorrect: false },
            { text: "بیژن سمندر ", isCorrect: false },
            { text: "حسین گل گلاب", isCorrect: true },
            { text: "هوشنگ چالنگی", isCorrect: false },
        ],
    },

    {
        q: " بزرگترین کشوری که تنها یک منطقه زمانی (ساعت واحد) دارد؟",
        a: [
            { text: "چین", isCorrect: true },
            { text: "ژاپن", isCorrect: false },
            { text: "کره شمالی", isCorrect: false },
            { text: "کره جنوبی", isCorrect: false },
        ],
    },

    {
        q: "یک تاس چند نقطه دارد ؟",
        a: [
            { text: "21", isCorrect: true },
            { text: "22", isCorrect: false },
            { text: "23", isCorrect: false },
            { text: "25", isCorrect: false },
        ],
    },


    {
        q: " کدام حشره بیشترین طول عمر را دارد؟",
        a: [
            { text: "عنکبوت", isCorrect: false },
            { text: "مورچه ", isCorrect: false },
            { text: " موریانه ", isCorrect: true },
            { text: "ملخ", isCorrect: false },
        ],
    },



    {
        q: " کدام مورد معادل مناسب تری برای واژه “کارنگ” است؟",
        a: [
            { text: "آرامش دهنده", isCorrect: false },
            { text: "کارشناس ", isCorrect: false },
            { text: "سیاست مدار", isCorrect: false },
            { text: "چرب زبان ", isCorrect: true },
        ],
    },


    {
        q: "كداميك از تمدنهاي نامبرده درناحيه خاورميانه بوده است ؟؟",
        a: [
            { text: "چین", isCorrect: true },
            { text: " بين النهرين ", isCorrect: false },
            { text: "سند", isCorrect: false },
            { text: "مصر", isCorrect: false },

        ],
    },

    {
        q: "کدام حیوان در هنگام خواب یک چشم خود را باز نگه میدارد؟",
        a: [
            { text: "گرگ", isCorrect: true },
            { text: "شغال", isCorrect: false },
            { text: "جغد", isCorrect: false },
            { text: "روباه", isCorrect: false },

        ],
    },

    {
        q: "نویسنده کدام یک از این کتاب ها، همان نویسنده ی کتاب بابا لنگ دراز است؟",
        a: [
            { text: "دشمن عزیز", isCorrect: true },
            { text: "ندایی از درون", isCorrect: false },
            { text: "سایه جولی", isCorrect: false },
            { text: "آنشرلی", isCorrect: false },

        ],
    },

    {
        q: " در تهیه شارلوت شکلاتی از چه نوعی کیکی استفاده میکنیم؟",
        a: [
            { text: "کیک شکلاتی", isCorrect: true },
            { text: "کیک مافین", isCorrect: false },
            { text: "نان رولت", isCorrect: false },
            { text: "کیک اسفنجی", isCorrect: false },

        ],
    },

    {
        q: "داستان “مدیر مدرسه” اثر کیست؟",
        a: [
            { text: "جلال آل احمد", isCorrect: true },
            { text: "محمد علی جمال زاده", isCorrect: false },
            { text: "بزرگ علوی", isCorrect: false },
            { text: "سیمین دانشور", isCorrect: false },

        ],
    },
    {
        q: "کدام کتاب اثر ویکتور هوگو نیست؟",
        a: [
            { text: "سپید دندان", isCorrect: true },
            { text: "بینوایان", isCorrect: false },
            { text: "روح انسان", isCorrect: false },
            { text: "مردی که میخندد", isCorrect: false },

        ],
    },

    {
        q: "What is the currency of Japan?",
        a: [
            { text: "Yen", isCorrect: true },
            { text: "Dollar", isCorrect: false },
            { text: "Euro", isCorrect: false },
            { text: "Rial", isCorrect: false },

        ],
    },

    {
        q: " هنگام ایجاد یک صفحه جدید خالی به طورخودکار کدام کد برای کدنویسی در نظر گرفته می شود؟",
        a: [
            { text: "XHTML ", isCorrect: true },
            { text: "javascript    ", isCorrect: false },
            { text: "css", isCorrect: false },
            { text: "HTML", isCorrect: false },
        ],
    },

    {
        q: " کدامیک از امکانات زیر برای بهینه سازی واشکال زدایی کدها استفاده می شود؟",
        a: [
            { text: "code inspector", isCorrect: true },
            { text: "Quick tag editor ", isCorrect: false },
            { text: "code coloring ", isCorrect: false },
            { text: "clean up htm", isCorrect: false },
        ],
    },

    {
        q: " دستورات css  درون چه علامتی قرار می گیرند؟",
        a: [
            { text: "(…) ", isCorrect: false },
            { text: "[…] ", isCorrect: false },
            { text: " {…}", isCorrect: true },
            { text: "-", isCorrect: false },
        ],
    },



    {
        q: " my web page",
        a: [
            { text: "خارجی", isCorrect: false },
            { text: "داخلی", isCorrect: false },
            { text: "خطی", isCorrect: true },
            { text: " این دستوراشتباه است", isCorrect: false },
        ],
    },


    {
        q: " یک کیلوگرم  چند گرم سبک تر از یک کیلو گرم آهن است؟",
        a: [
            { text: "وزنشان یکسان است", isCorrect: true },
            { text: "100 گرم", isCorrect: false },
            { text: "1 گرم", isCorrect: false },
            { text: "هیچ کدام", isCorrect: false },

        ],
    },

    {
        q: "چرا اعمال سیاست تعیین کلمه عبور برای کامپیوترهای موجود در یک سازمان ضروری میباشد؟",
        a: [
            { text: " برای جلوگیری از دسترسی غیر مجاز به اطلاعات موجود در سیستم", isCorrect: true },
            { text: "برای دسترسی آسان کاربران به منابع اطلاعاتی به اشتراک", isCorrect: false },

            { text: "برای آسان ساختن ورود کاربران به محیط شبکه  ", isCorrect: false },

        ],
    },

    {
        q: "  چه عاملي درتوسعه يك شهر مؤثر است ؟",
        a: [
            { text: " دسترسي به منابع زير زميني", isCorrect: true },
            { text: "راههاي ارتباطي وحمل ونقل ", isCorrect: false },
            { text: "جمعيت زياد ", isCorrect: false },
            { text: "موقعيت دفاعي خوب ", isCorrect: false },

        ],
    },

    {
        q: "وظیفه clean up html  چیست؟",
        a: [
            { text: "حذف کدهای html ", isCorrect: true },
            { text: "برای بهینه سازی و اشکال زدایی ", isCorrect: false },
            { text: "ویرایش برچسب ها ", isCorrect: false },
            { text: "تعیین رنگ بندی انواع برچسب ها و کد های برنامه", isCorrect: false },

        ],
    },
    {
        q: "کدام گزینه یک زبان برنامه نویسی وب رانشان می دهد؟",
        a: [
            { text: "jsp  ", isCorrect: true },
            { text: "Borland C  ", isCorrect: false },
            { text: "Pascal", isCorrect: false },
            { text: "Qbasic ", isCorrect: false },

        ],
    },

    {
        q: "محیط کد نویسی Dreamweaver قابلیت پشتیبانی کدام زبان برنامه نویسی را ندارد ؟",
        a: [
            { text: "visual Basic", isCorrect: true },
            { text: "CSS ", isCorrect: false },
            { text: "pasca", isCorrect: false },
            { text: "XHTML ", isCorrect: false },

        ],
    },

    {
        q: " اولین سیستم عامل تک کاربره(Single User) در چه سالی تولید شد",
        a: [
            { text: "1983", isCorrect: false },
            { text: "1980", isCorrect: false },
            { text: "1981", isCorrect: true },
            { text: "1982", isCorrect: false },
        ],
    },

    {
        q: "برای اتصال به اینترنت باید خط تلفن را به کدامیک از قطعات زیر متصل نمود؟",
        a: [
            { text: "مودم (Modem)", isCorrect: true },
            { text: "پورت موازی(Paralel Port)", isCorrect: false },
            { text: "اسکنر (Scanner)   ", isCorrect: false },
            { text: "چاپگر (Printer) ", isCorrect: false },
        ],
    },

    {
        q: "  به کدامیک از کلیدهای زیر کلیدهای تابعی اطلاق می گردد؟",
        a: [
            { text: "Ctrl,Shift,Alt", isCorrect: false },
            { text: " Spacebar,back space,Enter ", isCorrect: false },
            { text: " Alt,Ctrl   ", isCorrect: false },
            { text: "F12 تا F1 ", isCorrect: true },
        ],
    },

    {
        q: " با کدامیک از برنامه های کاربردی زیر می توان یک بانک اطلاعاتی ایجاد نمود؟",
        a: [
            { text: " PowerPoint ", isCorrect: false },
            { text: "Excel ", isCorrect: false },
            { text: " Word  ", isCorrect: false },
            { text: " Access  ", isCorrect: true },
        ],
    },
];

let currQuestion = 0;
let score = 0;
// const selectedAnswers = new Array(Questions.length);
const selectedAnswers = new Array(5).fill(undefined);
let randomQuestions = getRandomQuestions(5);

function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    if (currQuestion === Questions.length - 1) {
        question.textContent = "Final Question: " + Questions[currQuestion].q;
    } else {
        question.textContent = Questions[currQuestion].q;
    }

    opt.innerHTML = "";

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        if (selectedAnswers[currQuestion] === i) {
            choice.checked = true;
        }

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }

    const prevButton = document.getElementById("prev");
    prevButton.addEventListener("click", function () {
        if (currQuestion > 0) {
            const selectedAns = parseInt(
                document.querySelector('input[name="answer"]:checked').value
            );
            selectedAnswers[currQuestion] = selectedAns;
            currQuestion--;
            loadQues();
        }
    });
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        const totalScore = document.getElementById("score");
        const message = score === Questions.length ? "Congratulations! You answered all questions correctly." : `You scored ${score} out of ${Questions.length}.`;
        totalScore.textContent = message;
        totalScore.classList.add("score");
        if (score >= 10) {
            totalScore.style.color = "green";
        } else {
            totalScore.style.color = "red";
        }
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Quiz";
        restartButton.addEventListener("click", function () {
            currQuestion = 0;
            score = 0;
            selectedAnswers.fill(undefined);
            loadQues();
            totalScore.textContent = "";
            totalScore.classList.remove("score");
            totalScore.style.color = "";
            const submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            submitButton.addEventListener("click", checkAns);
            document.getElementById("btn").appendChild(submitButton);
        });
        document.getElementById("btn").appendChild(restartButton);
    }
}

function checkAns() {
    const selectedAns = parseInt(
        document.querySelector('input[name="answer"]:checked').value
    );

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct");
    }
    selectedAnswers[currQuestion] = selectedAns;
    nextQuestion();
}

function startQuiz() {
    currQuestion = 0;
    score = 0;
    selectedAnswers.fill(undefined);
    loadQues();
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
    startQuiz();
});

function loadScore() {
    const totalScore = document.getElementById("score");
    const message =
      score === Questions.length
        ? "Congratulations! You answered all questions correctly."
        : `You scored ${score} out of ${Questions.length}.`;
  
    totalScore.textContent = message;
  
    if (score < 20) {
      totalScore.style.color = "red";
      totalScore.textContent += " You failed the quiz!";
    } else {
      totalScore.style.color = "green";
      totalScore.textContent += " You passed the quiz!";
    }
  }
  

// function loadScore() {
//     const totalScore = document.getElementById("score");
//     const message =
//         score === Questions.length
//             ? "Congratulations! You answered all questions correctly."
//             : `You scored ${score} out of ${Questions.length}.`;

//     totalScore.textContent = message;

//     if (score < 20) {
//         totalScore.style.color = "red";
//         totalScore.textContent += " You failed the quiz!";
//     } else {
//         totalScore.style.color = "green";
//         totalScore.textContent += " You passed the quiz!";
//     }
// }