function getResults(mangasData){
    for(var i=0; i < mangasData.length; i++){
        appendResult(i, mangasData[i]);
    }
}


function appendResult(id, mangaData){
    var manga = $("<div>").load("assets/templates/manga-item.html", function() {
        manga.attr("class", "manga-item")
        manga.attr("id", "manga-item-" + id);
        manga.find(".image").attr("src", mangaData["imageURL"]);
        manga.find(".title").text(mangaData["title"]);
        manga.find(".author").text(mangaData["author"]);
        manga.find(".demografic").text(mangaData["demografic"]);
        manga.find(".type").text(mangaData["type"]);
        manga.find(".first-publication-date").text(mangaData["firstPublicationDate"]);
        manga.find(".last-publication-date").text(mangaData["lastPublicationDate"]);
        manga.find(".volumes").text(mangaData["volumes"]);
        $("#results").append(manga);
    });
}


function empty(){
    $("#results").empty();
}


dataTest = [
    {
        "imageURL":"http://www.konbini.com/wp-content/blogs.dir/11/files/2017/08/onepiece-480x279.jpg", 
        "title":"One Piece", 
        "author":"", 
        "demographic":"", 
        "genre":"", 
        "firstPublicationDate":"", 
        "lastPublicationDate":"",
        "volumes":""
    },
    {
        "imageURL":"https://medias.comixtrip.fr/wp-content/uploads/2014/10/naruto-shippuden-02-1200x675.jpg", 
        "title":"Naruto", 
        "author":"", 
        "demographic":"", 
        "genre":"", 
        "firstPublicationDate":"", 
        "lastPublicationDate":"",
        "volumes":""
    },
    {
        "imageURL":"https://static.hitek.fr/img/actualite/2016/08/18/fb_bleach-012.jpg", 
        "title":"Bleach", 
        "author":"", 
        "demographic":"", 
        "genre":"", 
        "firstPublicationDate":"", 
        "lastPublicationDate":"",
        "volumes":""
    }
]