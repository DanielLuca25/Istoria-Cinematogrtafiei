window.addEventListener("scroll", function(e) {
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop - window.innerHeight) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.innerHeight);
  var nav = document.getElementById("line");
  line.style.width = (100 * scrollPercentage) + "%";
  if(document.documentElement.scrollTop <= window.innerHeight)  line.style.width = 0 + "%";
});