// Select a random live project when you click the live project SVG
function showRandomProject() {
    let Link = document.getElementById("svg-link");
    const numProjects = 7;
    
    switch (Math.floor(Math.random() * numProjects)) {
        case 0:
            Link.href = "WhatColorIsThat";
            break;
        case 1:
            Link.href = "2020IsOverParty";
            break;
        case 2:
            Link.href = "GrenadeBrothers";
            break;
        case 3:
            Link.href = "LeagueKillViewer";
            break;
        case 4:
            Link.href = "PlatformerTechDemo";
            break;
        case 5:
            Link.href = "PaintSplatterTechDemo";
            break;
        case 6:
            Link.href = "WallpaperPix";
            break;
    }
}
