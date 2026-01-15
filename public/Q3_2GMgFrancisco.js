
    function confirm() {
        if(confirm("Choose")== true) {
            text = "You chose OK!";
        } else {
            text = "You canceled!";
        }
        document.getElementById("demo").innerHTML = text;
    }