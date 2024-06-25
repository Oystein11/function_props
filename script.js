function greeting (greeting, name) {
    console.log (greeting + ", " + name);
    const display_greeting = document.querySelector ("#display_greeting");
    display_greeting.textContent = `${greeting}, ${name}`;
};

greeting ("Good morning", "Øystein!");
greeting ("Good night", "Øystein!");

function character (first_name, Last_name) {
    this.first_name = first_name;
    this.Last_name = Last_name;
};

const character_one = new character ("Noble", "Paladin");
const character_two = new character ("Wizened", "Mage");

function display_character (character) {
    const display_char = document.querySelector ("#display_char");
    display_char.textContent = `${character.first_name} ${character.Last_name}`;
}

display_character (character_one);
