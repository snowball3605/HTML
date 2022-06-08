function top() {
    document.getElementById( 'b' ).scrollIntoView();    
};

function bottom() {
    document.getElementById("t2").scrollIntoView();
    window.setTimeout( function () { top(); }, 10100 );
}