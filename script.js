const badges = [
    {
        link: "https://www.linkedin.com/in/sajjad-ali-b428b6198",
        source: "https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white",
        alt: "LinkedIn"
    }
];

document.onload = () => {
    const badgesDiv = document.getElementById("badges");
    badges.forEach(badge => {
        const badgeImg = document.createElement("img");
        badgeImg.src = badge.source;
        badgeImg.alt = badge.alt;
        badgeImg.style = "margin: 0 10px 10px 0;";

        const badgeLink = document.createElement("a");
        badgeLink.href = badge.link;

        badgesDiv.appendChild(badgeLink);
    })
}