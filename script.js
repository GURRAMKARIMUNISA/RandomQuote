const quoteText=document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".clipboard"),
twitterBtn=document.querySelector(".twitter"),
quoteBtn=document.querySelector("button");
//random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="loading Quote...";
    //fetching random quotes/data from the API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
    console.log(result);
    quoteText.innerText=result.content;
    authorName.innerText=result.author;
    quoteBtn.innerText="New Quote";
    quoteBtn.classList.remove("loading");
});
}
soundBtn.addEventListener("click",()=>{
    //the speechSynthesisUtterance is a web speech api that represents a speech request
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);//speak method of speechSynthesis
})
copyBtn.addEventListener("click",()=>{
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
})
twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
})
quoteBtn.addEventListener("click",randomQuote);
