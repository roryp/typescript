var Example;
(function (Example) {
    var area = function (l, b) { return (l * b); };
    var c = {
        r: 5,
        area: function () {
            return Math.PI * this.r * this.r;
        }
    };
    var rectArea = area(4, 3);
    var circArea = c.area();
    console.log("rectArea: ", rectArea);
    console.log("circArea: ", circArea);
})(Example || (Example = {}));
