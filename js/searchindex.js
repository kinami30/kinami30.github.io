// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "INICIO", "inicio nbsp dvd prÓximamente thursday december este sitio no vende ningÚn producto de miyano mamoru es solo para descargar si quieres comprar algo mamo dale clic al botÓn quot seras dirigido una pÁgina ventas dÓnde podrÁs ver su precio pedirlo send comments ©todos los derechos reservados por king records ", "");
   return this;
}
