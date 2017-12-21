 var result = [];

        var draw = function() {
            if (result.length === 6) return;

            var div = document.createElement("div");
            var drawResult = Math.floor(Math.random() * 49 + 1);
            var i;
            for (i = 0; i < result.length; i++) {
                if (drawResult == result[i]) {
                    return draw;
                }
            }
            div.textContent = drawResult;
            document.body.appendChild(div);
            result.push(drawResult);
        }

        var button = document.querySelector("button");

        button.addEventListener("click", draw);
