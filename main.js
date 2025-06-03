// Consts
const joinClanBtn = document.getElementById("join-clan-btn");
const calenderBtn = document.getElementById("calender-btn");
const newsBtn = document.getElementById("news-btn");
const upcomingEventBtn = document.getElementById("upcoming-event-btn");
const secondNextEventBtn =document.getElementById("second-next-event-btn");
const clanwarBtn = document.getElementById("clanwar-btn");
const announcementBtn = document.getElementById("announcement-div");
const tacticAndTippsBtn = document.getElementById("tactical-tipps-div");
const presentationBtn = document.getElementById("presentation-div");
const memesAndScreenshotsBtn = document.getElementById("memes-and-screenshots-div");
const discordBtn = document.getElementById("join-discord-btn");

const logoBtn = document.getElementById("logo-div");


// EventListener
joinClanBtn.addEventListener("click", () => {
    window.location.href = "clans.html"
});
calenderBtn.addEventListener("click", () => {
    window.location.href = "clanwar.html"
});
newsBtn.addEventListener("click", () => {
    window.location.href = "news.html"
});
upcomingEventBtn.addEventListener("click", () => {
    window.location.href = "news.html"  // Unfinished
});
secondNextEventBtn.addEventListener("click", () => {
    window.location.href = "news.html"  // Unfinished
});
clanwarBtn.addEventListener("click", () => {
    window.location.href = "clanwar.html"
});
announcementBtn.addEventListener("click", () => {
    window.location.href = "news.html"
});
tacticAndTippsBtn.addEventListener("click", () => {
    window.location.href = "tactic-and-tipps.html"
});
presentationBtn.addEventListener("click", () => {
    window.location.href = "presentation.html"
});
memesAndScreenshotsBtn.addEventListener("click", () => {
    window.location.href = "memes-and-screenshots.html"
});
discordBtn.addEventListener("click", () => {
    window.location.href = "https://discord.gg/Xcd23pGKfC"
});

logoBtn.addEventListener("click", () => {
    window.location.href = "index.html"  // Unfinished
});