const countCheckButton = document.querySelector("#countCheckButton");

countCheckButton.addEventListener("click", function () {
    const countInput = document.querySelector("#countRaffle");
    const count = parseInt(countInput.value);

    console.log("function: countCheck")
    if (count <= 0 || isNaN(count)) {
        alert("1이상의 값을 입력해주세요!")
    } else {
        console.log("값이 입력되었습니다.")
        
        document.querySelector("#allRiffle").style.display = "block";

        const articlesContainer = document.querySelector("#articleContainer");
        articlesContainer.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let article = document.createElement("article");
            article.innerHTML = '<div id="' + (i+1) + 'stRaffle">' +
                '<h1>' + (i+1) + '번째 복권</h1>' +
                '<span id="1st">1</span>' +
                '<span id="2nd">2</span>' +
                '<span id="3rd">3</span>' +
                '<span id="4th">4</span>' +
                '<span id="5th">5</span>' +
                '<span id="6th">6</span>' +
                '</div>';
            articlesContainer.appendChild(article);
        }
    }
})