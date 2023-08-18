let contents = document.getElementsByClassName("content");
let tabs = document.getElementsByClassName("tab");

function hideAllContentWindows ()
{
    for (let i = 0; i < contents.length; i++)
        contents[i].style.display = "none";
}

function clearActiveTabStyles ()
{
    for (let i=0; i<tabs.length; i++)
        tabs[i].classList.remove("active-tab");
}

function onTabClick (event, contentId)
{
    hideAllContentWindows();
    clearActiveTabStyles();
    document.getElementById(contentId).style.display = "block";
    event.currentTarget.classList.add("active-tab");
}