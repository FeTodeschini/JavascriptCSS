function get_number(prompt){
    let valid_input = false;
    let num_rolls;

    //keeps asking for the number of rolls until a valid answer is given (a number greater than 0)
    while(!valid_input){
        num_rolls = Number(window.prompt(prompt));
        
        if (!isNaN(num_rolls) && num_rolls > 0)
            valid_input = true;
    }

    return num_rolls;
}

function init_rolls(){
    //initialize the array that counts how many times each number was rolled
    let rolls = [];

    for(let i=0; i <11; i++){
        rolls.push(0);
    }

    return rolls;
}

function roll_dice(num_rolls){

    let rolls = init_rolls();

    let die1, die2, roll;

    //roll the dice and count how many times each number was rolled
    for(let i = 0; i <num_rolls; i++){
        //roll dice
        die1 = Math.floor(Math.random() * 6) + 1;
        die2 = Math.floor(Math.random() * 6) + 1;

        roll = die1 + die2;

        //add 1 to the counter of rolls for the number rolled
        rolls[roll-2]++;
    }

    return rolls;
}

function log_results(num_rolls, rolls, table){
    //print the result of the rolls to the console
    let head = table.getElementsByTagName("thead")[0];   
    let body = table.getElementsByTagName("tbody")[0];

    let caption = document.createElement("caption");
    caption.innerText = `The dice was rolled ${num_rolls} times...`;
    caption.style = "caption-side: top;";

    table.insertBefore(caption, head);

    console.log(`We rolled the dice ${num_rolls} times...`);

    let container_html = `<p>We rolled the dice ${num_rolls} times...</p>`;

    for(let i=0; i<11; i++){
        let num = i + 2;
        let count = rolls[i];
        let pct = Math.round(count / num_rolls * 100);

        console.log(`${num} was rolled ${count} times (${pct}%)`);
        let row = document.createElement("tr");
        row.innerHTML = `<td>${num}</td><td>${count}</td><td>${pct}%</td>`;
        body.appendChild(row);
    }
    
    table.classList.remove("hide");
}