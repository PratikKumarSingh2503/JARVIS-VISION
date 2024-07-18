const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}


function wishMe() {
    const day = new Date();
    const hour = day.getHours();
    const time = day.toLocaleString(undefined, { hour: "numeric", minute: "numeric", hour12: true });
    const dayOfWeek = day.toLocaleDateString(undefined, { weekday: 'long' });

    if (hour >= 0 && hour < 12) {
        speak(`Good Morning Boss, it's ${dayOfWeek} and the time is ${time}`);
    } else if (hour >= 12 && hour < 16) {
        speak(`Good Afternoon Boss, it's ${dayOfWeek} and the time is ${time}`);
    } else {
        speak(`Good Evening Boss, it's ${dayOfWeek} and the time is ${time}`);
    }
}
window.addEventListener('load', () => {
    speak("Initializing JARVIS..");
    wishMe();
});



function schedule() {
    const day = new Date().toLocaleDateString(undefined, { weekday: 'long' }).toLowerCase();
    const week = {
        "monday": "Boss, from 9:00 to 9:50 you have Algorithms class, from 10:00 to 11:50 you have System Design class, from 12:00 to 2:00 you have a break, and today you have Programming Lab from 2:00 onwards.",
        "tuesday": "Boss, from 9:00 to 9:50 you have Web Development class, from 10:00 to 10:50 you have a break, from 11:00 to 12:50 you have Database Systems class, from 1:00 to 2:00 you have a break, and today you have Open Source Projects lab from 2:00 onwards.",
        "wednesday": "Boss, today you have a full day of classes. From 9:00 to 10:50 you have Machine Learning class, from 11:00 to 11:50 you have Operating Systems class, from 12:00 to 12:50 you have Ethics in Technology class, from 1:00 to 2:00 you have a break, and today you have Software Engineering workshop from 2:00 onwards.",
        "thursday": "Boss, today you have a full day of classes. From 9:00 to 10:50 you have Computer Networks class, from 11:00 to 12:50 you have Cloud Computing class, from 1:00 to 2:00 you have a break, and today you have Cybersecurity lab from 2:00 onwards.",
        "friday": "Boss, today you have a full day of classes. From 9:00 to 9:50 you have Artificial Intelligence class, from 10:00 to 10:50 you have Advanced Programming class, from 11:00 to 12:50 you have UI/UX Design class, from 1:00 to 2:00 you have a break, and today you have Capstone Project work from 2:00 onwards.",
        "saturday": "Boss, today you have a more relaxed day. From 9:00 to 11:50 you have team meetings for your Capstone Project, from 12:00 to 12:50 you have Innovation and Entrepreneurship class, from 1:00 to 2:00 you have a break, and today you have extra time to work on personal development and coding practice from 2:00 onwards.",
        "sunday": "Boss, today is a holiday, but keep an eye on upcoming deadlines and use this time to catch up on any reading or project work."
    };
    speak(week[day] || "No schedule found for today.");
}



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
});

function openSocialMedia(command) {
    if (command.includes('facebook')) {
        window.open("https://www.facebook.com/", "_blank");
        speak("Opening Facebook...");
    } else if (command.includes('whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Opening WhatsApp...");
    } else if (command.includes('discord')) {
        window.open("https://discord.com/", "_blank");
        speak("Opening Discord...");
    } else if (command.includes('instagram')) {
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening Instagram...");
    } else {
        speak("No result found.");
    }
}

function schedule() {
    const day = new Date().toLocaleDateString(undefined, { weekday: 'long' }).toLowerCase();
    const week = {
        "monday": "Boss, from 9:00 to 9:50 you have Algorithms class, from 10:00 to 11:50 you have System Design class, from 12:00 to 2:00 you have a break, and today you have Programming Lab from 2:00 onwards.",
        "tuesday": "Boss, from 9:00 to 9:50 you have Web Development class, from 10:00 to 10:50 you have a break, from 11:00 to 12:50 you have Database Systems class, from 1:00 to 2:00 you have a break, and today you have Open Source Projects lab from 2:00 onwards.",
        "wednesday": "Boss, today you have a full day of classes. From 9:00 to 10:50 you have Machine Learning class, from 11:00 to 11:50 you have Operating Systems class, from 12:00 to 12:50 you have Ethics in Technology class, from 1:00 to 2:00 you have a break, and today you have Software Engineering workshop from 2:00 onwards.",
        "thursday": "Boss, today you have a full day of classes. From 9:00 to 10:50 you have Computer Networks class, from 11:00 to 12:50 you have Cloud Computing class, from 1:00 to 2:00 you have a break, and today you have Cybersecurity lab from 2:00 onwards.",
        "friday": "Boss, today you have a full day of classes. From 9:00 to 9:50 you have Artificial Intelligence class, from 10:00 to 10:50 you have Advanced Programming class, from 11:00 to 12:50 you have UI/UX Design class, from 1:00 to 2:00 you have a break, and today you have Capstone Project work from 2:00 onwards.",
        "saturday": "Boss, today you have a more relaxed day. From 9:00 to 11:50 you have team meetings for your Capstone Project, from 12:00 to 12:50 you have Innovation and Entrepreneurship class, from 1:00 to 2:00 you have a break, and today you have extra time to work on personal development and coding practice from 2:00 onwards.",
        "sunday": "Boss, today is a holiday, but keep an eye on upcoming deadlines and use this time to catch up on any reading or project work."
    };
    speak(week[day] || "No schedule found for today.");
}

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Boss, How May I Help You?");
    } else if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric", hour12: true });
        speak(`The current time is ${time}`);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric" });
        speak(`Today's date is ${date}`);
    } else if (message.includes('open calculator')) {
        // Calculator can only be opened using desktop applications, browsers don't have access to OS applications directly.
        speak("Sorry, I can't open the calculator in the browser.");
    } else if (message.includes('schedule')) {
        schedule();
    } else if (message.includes('facebook') || message.includes('whatsapp') || message.includes('discord') || message.includes('instagram')) {
        openSocialMedia(message);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("I found some information for " + message + " on Google");
    }
}
