class Hotword {
    constructor(options) {
        this.hotwords = options.hotwords || [];
        this.sensitivity = options.sensitivity || 0.5;
        this.onHotwordDetected = options.onHotwordDetected || function () {};
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.continuous = true;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;

        this.recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
            console.log("Heard:", transcript);
            this.hotwords.forEach(hotword => {
                if (transcript.includes(hotword.toLowerCase())) {
                    this.onHotwordDetected();
                }
            });
        };

        this.recognition.onerror = (error) => {
            console.error("Recognition error:", error);
            this.restart();
        };

        this.recognition.onend = () => {
            this.restart();
        };
    }

    start() {
        this.recognition.start();
        console.log("Hotword detection started...");
    }

    restart() {
        setTimeout(() => this.recognition.start(), 1000);
    }
}
