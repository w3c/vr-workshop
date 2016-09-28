var showAnchor =  function(a) {
    return function() {
        a.classList.add("show");
    };
};

var hideAnchor =  function(a) {
    return function() {
        a.classList.remove("show");
    };
};

[].forEach.call(document.querySelectorAll("*[id]"), function(el) {
    var anchor = document.createElement("a");
    anchor.textContent = "#";
    anchor.title = el.textContent;
    anchor.className = "ref";
    anchor.href = "#" + el.id;
    el.insertBefore(anchor, el.firstChild);
    el.addEventListener("mouseover", showAnchor(anchor));
    el.addEventListener("mouseout", hideAnchor(anchor));
});

