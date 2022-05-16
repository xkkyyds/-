$(document).ready(function() {
    var a_index = 0;
    $("body").click(function(e) {
        var a = new Array("★禁★", "★毒★");
        var $i = $("<span/>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 9999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",

            "color": "#207f4c",
            "user-select": "none"
        });
        $("body").append($i);
        $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() {
            $i.remove();
        });
    });
});