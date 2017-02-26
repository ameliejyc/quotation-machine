$(document).ready(function() {
  getQuote();

function getQuote(){
 var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
 $.getJSON(url, function(data){
   if (data.quoteAuthor === '') {
   data.quoteAuthor = 'Unknown';
 }
   $("#quote").html('"'+data.quoteText+'"');
   $("#author").html("-"+data.quoteAuthor);
 });
};

 $("#newQuote").on("click", function(){
   getQuote();
 });
  
 $("#tweet").on("click", function(){
window.open("https://twitter.com/intent/tweet?text=");
 });
  
});
