(function(){

    function calc_defense(attack, damage) {
      return 100 * (attack / damage - 1);
    }

    function show_defense() {
      const attack = inputs[0].value;
      const damage = inputs[1].value;
      const defense = calc_defense(attack, damage);
      defenseNode.textContent = `防御力：${defense}`;
    }

    const inputs = document.getElementsByTagName("input");
    const defenseNode = document.getElementById("defense")
    inputs[2].addEventListener("click", ()=>{show_defense(inputs, defenseNode)});
    show_defense();
  }())