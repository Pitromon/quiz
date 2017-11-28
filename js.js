
var linkPesquisa = "https://opentdb.com/api.php?amount=10";
$.get( linkPesquisa, function( data ) {


    $(function() {
        $.get( linkPesquisa, function( data ) {
            $( ".result" ).html( data.results[0].question );
        });
    });

    $(function() {
        $.get( linkPesquisa, function( data ) {
            $( "#correct_answer" ).html( data.results[0].correct_answer );
        });
    });
});