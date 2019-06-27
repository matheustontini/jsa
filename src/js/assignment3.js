document.addEventListener('DOMContentLoaded', () => {

    const content = document.querySelector(".main-content");

    fetch('/data/data1.json')
    .then((response) => {
        return response.json()
    })
    .then((franchiseName) => {
        console.log(franchiseName)

        franchiseName.forEach(value => {
            let y =   (`<div class='data'>Date: ${value.date}<br>
                        Franchise: ${value.franchiseName}<br>
                        Income: ${value.income}<br>
                        Wage cost: ${value.wageCosts}<br>
                        ingredients costs: ${value.ingredientsCosts}<br>
                        Other costs: ${value.otherCosts}<br>
                        <strong>${value.cake1Name}</strong><br>
                        Sold: ${value.cake1Sold}<br>
                        <strong>${value.cake2Name}</strong><br>
                        Sold: ${value.cake2Sold}<br>
                        <strong>${value.cake3Name}</strong><br>
                        Sold: ${value.cake3Sold}<br>
                        <strong>${value.cake4Name}</strong><br>
                        Sold: ${value.cake4Sold}<br>
                        <strong>${value.cake5Name}</strong><br>
                        Sold: ${value.cake5Sold}<br>
                        <strong>${value.cake6Name}</strong><br>
                        Sold: ${value.cake6Sold}<br></div>`);
                        content.innerHTML += y;
        });
    })
    
});