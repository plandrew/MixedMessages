
const randomNumber = n => Math.ceil(Math.random()*n)
// Random Number Generator -> for given n it will generate a number between 0 and n

console.log("dupa");

const skillFactory = (name, steps, time) => {
    return {
      name: name,
      steps: steps,
      time: time
      }
    };
//Factory function that will create an object containing -> skill name, steps required to master the skill, and time required to master the skill

var fieldsCounter = 1;
//Global counter for the number of steps fields of the skill

let skillCounter = 0;
//GlobalCounter for the number of skills in the local memory

function add_more_fields(){
    
    new_field = `<br><label>Skill Step</label>
    <input type="text" id="skill_step${fieldsCounter}" name="skill_step" placeholder="Step">`;
    var form = document.getElementById('form')
    form.innerHTML += new_field;
    fieldsCounter += 1;
    
}
//Function that will create new step field if it is required

function clickSubmit() {

    skillCounter += 1;
    
    let stepArray = [];

    sname = document.getElementById("skill_name").value;
    stime = document.getElementById("skill_time").value;

    for (i = 0; i < fieldsCounter; i++)
    {
        let skill = document.getElementById(`skill_step${i}`).value;
        //localStorage.setItem(`sstep${i}`, skill);
        stepArray.push(skill);
    }

    newSkill = JSON.stringify(skillFactory(sname, stepArray, stime));
    
    localStorage.setItem(`skill${skillCounter}`, newSkill);
}
//Function that runs after clicking "Submit" button -> it will save new skill object as a string in the local memory of the browser

function generateRandomSkill() {
    localRandomNumber = randomNumber(skillCounter)
    let randomSkill = localStorage.getItem(`skill${localRandomNumber}`);
    console.log(localRandomNumber);
    console.log(randomSkill);
    return JSON.parse(randomSkill);
}
//Function will return the random skill object which will be used on the main website
