

function Character(hero){
	this.self = this;
	this.name = hero.name;
	this.stats = {
		hp: 100,
		intel: hero.intel,
		str: hero.str,
		speed: hero.speed,
		durability: hero.durability,
		power: hero.power,
		combat: hero.combat
	}
	this.attack = function(target){
		console.log(this.name);
		console.log(this);
		target.damageCalculation(this)
	}
	this.damageCalculation = function(attacker){
		let blockDamage = 1;
		let damage;
		if((this.stats.combat + this.stats.speed) > (attacker.stats.combat + attacker.stats.speed)){
			let dodgeChange = (this.stats.combat + this.stats.speed) - (attacker.stats.combat + attacker.stats.speed)
			let rng = Math.random() * 100;
			if(rng < dodgeChange ){
				console.log(this.name, " has dodge the attack");
				return
			} else {
				console.log("did not dodge");
				if(this.stats.intel > attacker.stats.intel){
					console.log("block some damage happened");
					blockDamage = (this.stats.intel - attacker.stats.intel) * .01;
					damage = ((attacker.stats.str + attacker.stats.power) - this.stats.durability);

				} else { // did not block && takes full damage
					damage = (attacker.stats.str + attacker.stats.power) - this.stats.durability;
				}
				console.log(attacker.name + " has done " + damage + " to " + this.name);
				//this.hp = 
			}
		}
		//let block =  
	}

}