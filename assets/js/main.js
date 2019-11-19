document.querySelectorAll("#menu a").forEach(function(link){
  link.addEventListener("click", function(){
    document.querySelector("#menuToggle input").checked = false;
  });
});

var tutorial = [
  ["intro-1@2x.png", "Choose an account which might be interesting to you. (This might be your own account.)"],
  ["intro-2@2x.png", "Right click on the account and choose \"Analyse user network\"."],
  ["intro-3@2x.png", "Click on the Crossfoam icon in the upper right of your browser window."],
  ["intro-4@2x.png", "Crossfoam gives you information on its progress in collecting data. Collecting and analysing large networks can take up to several hours. Choose \"explore data\" for insights."],
  ["intro-4@2x.png", "Please keep in mind Crossfoam can not analyse live data. Once requested, Crossfoam downloads a snapshot of the state of the network and analyses this. Snapshots may become outdated over time."],
  ["intro-5@2x.png", "This screen gives you an overview of which accounts Crossfoam has analysed already. You can delete or export analysed data, or click on the username to explore the visualisation."],
  ["intro-6@2x.png", "This window visualises the social network of the chosen account. Scroll around and click for details, or choose a different visualisation option."],
  ["intro-cluster@2x.png", "Crossfoam finds bubbles in the analysed networks by comparing the connections within a cluster with those across clusters. Account clusters with many internal, but very few external connections, are identified as bubbles and color-coded for your convenience."],
  ["intro-7@2x.png", "These bubbles can be relabeled with a more descriptive name. You can further choose whether bubble membership is displayed on the social network site."],
  ["intro-8@2x.png", "These bubbles can be relabeled with a more descriptive name. You can further choose whether bubble membership is displayed on the social network site."],
  ["intro-9@2x.png", "An account, which is identified as belonging to a bubble, can be marked as such in the social network interface."]
];

var current = 0;

function updateSlide(){
  document.querySelector("#slide-image").setAttribute("src", "./assets/images/story/" + tutorial[current][0]);
  document.querySelector("#slide-text").innerHTML = "<span>(" + (current + 1) + ")</span> " + tutorial[current][1];
  document.querySelectorAll("#how a").forEach(function(a){ a.style.opacity = "1"; });
  if (current === 0) {
    document.querySelector("#slide-prev").style.opacity = "0.5";
  }
  if (current === tutorial.length - 1) {
    document.querySelector("#slide-next").style.opacity = "0.5";
  }
}

document.querySelector("#slide-next").addEventListener("click", function(){
  if (current < tutorial.length - 1) {
    current++;
    updateSlide();
  }
});

document.querySelector("#slide-prev").addEventListener("click", function(){
  if (current > 0) {
    current--;
    updateSlide();
  }
});

updateSlide();