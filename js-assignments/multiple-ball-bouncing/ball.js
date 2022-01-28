function Ball(size, id) {
    this.width = size;
    this.height = size;
    this.id = id;

    this.create = function(container, position) {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.borderRadius = "50%";
        this.element.style.background = '#' + Math.floor(16777215 * Math.random()).toString(16);;
        this.element.style.position = "absolute";
        this.element.style.top = position.top + "px"; //confusion
        this.element.style.left = position.left + "px";
        container.appendChild(this.element);

        // eventListener added
        this.element.addEventListener("click", function(event) {
            var direction = 1;
            var interval = setInterval(function() {
                    var newTop = parseInt(event.target.style.top) + 5 * direction + "px";
                    event.target.style.top = newTop;
                    if (parseInt(newTop) >= container.clientHeight - event.target.clientHeight) {
                        direction *= -1;
                    }
                    if (parseInt(newTop) <= 0) {
                        direction = 1;
                    }
                },

                1000 / 60);
        })
    }
};