// use createElement to create pictures. Not ENTIRELY sure how to use append within context of flexible function
const ajakPic = document.createElement("img");
ajakPic.src = "imagesEternals\\Ajak.jpg";

const sersiPic = document.createElement("img");
sersiPic.src = "imagesEternals\\Sersi.jpg";

const ikarisPic = document.createElement("img");
ikarisPic.src = "imagesEternals\\Ikaris.jpg";

const kingoPic = document.createElement("img");
kingoPic.src = "imagesEternals\\Kingo.jpg";

const thenaPic = document.createElement("img");
thenaPic.src = "imagesEternals\\Thena.jpg";


const eternalData = [

    {
        eternalName: "Ajak",
        skillSet: ["Immortality", "Healing", "Telepathy", "Strength", "Wisdom"],
        image: ajakPic,
    },

    {
        eternalName: "Sersi",
        skillSet: ["Immortality", "Matter Manipulation", "Telekinesis", "Enhanced Durability", "Charm"],
        image: sersiPic,
    },

    {
        eternalName: "Ikaris",
        skillSet: ["Immortality", "Flight", "Energy Projection", "Strength", "Leadership"],
        image: ikarisPic,
    },

    {
        eternalName: "Kingo",
        skillSet: ["Immortality", "Energy Manipulation", "Agility", "Marksmanship", "Stamina"],
        image: kingoPic,
    },

    {
        eternalName: "Thena",
        skillSet: ["Immortality", "Weapon Mastery", "Combat Strategy", "Strength", "Telepathy"],
        image: thenaPic,
    },
];



// we will make temporary array to display all skills only once
const skillOptions = [];

// first forEach accesses each object in eternalData array 
// second forEach accesses the skills array each object(eternal character) has
eternalData.forEach(eternal => {
    eternal.skillSet.forEach(potentialNewSkill => {
        
        // This is the 'meat' of the function that gave me the most trouble, find and then if
        // foundSkill is set equal to result of what comes after
        // even though we are going through skill array, we want to compare to skillOptions array
        // currentSkillsList represents the value of skillOptions array
        // potentialNewSkill represents the value of skills array in eternalData
        // function cycles through every value of skillOptions array and compares it to each value of skills array
        // if currentSkillsList is ever equal to potentialNewSkill, foundSkill will be true nothing will happen

        if (skillOptions.find((currentSkillsList) => currentSkillsList == potentialNewSkill)) {    
        }
        // if currentSkillsList is NEVER equal to potentialNewSkill, value of foundSkill will be undefined
        // foundSkill is undefined because there is nothing found that is equal to it, aka it's original
        // undefined is treated the same way as false and so if false the potentialNewSkill will be pushed to array
        // we are pushing just that value that was in the array, we are not pushing the whole object
        else {
            skillOptions.push(potentialNewSkill);
            // could put displayStr += `${potentialNewSkill} is a skill,   ` and make that what's put on webpage
            //      but I don't need it formatted I just need it printed out simple
        }
    });
    // now we just need to get a handle to display information, can use break to make it look like a list or just have a ,
    let skillOptionList = document.querySelector('.availableSkills');
    // clarifying that we are printing out the array as is, but could also do skillOptionList.innerHTML = displayStr
    //      If I wanted to
    skillOptionList.innerHTML = skillOptions.join(`, `);
});

// temporary array that will hold the ENTIRE object that represents the eternal, not just the skill name like last forEach
const qualifiedEternals = [];
// also define displayStr because we use it later
let displayStr = "";

//function that will take text field input from user and measure it against content of object arrays (within the big array)
const searchResult = () => {
    //taking the input from text field, MAKE SURE ALL FUTURE PROJECTS USE THIS WAY INTEAD OF GET ELEMENT becausee this is ES6
    let requestedSkill = document.querySelector('#skillReq').value;
    
    // forEach function that will go up to every item in the eternalData array one at a time. 
    // not 100% sure how exactly it works, but reason we don't need nested forEach is because we only need to use find once
    //      last function we needed to use find repeatedly against the same array, here once we have it one time we're good
    eternalData.forEach((eternal) => {
    
        // all in one if statement, but this time we act on the true rather than the false,
        if (eternal.skillSet.find(skill => skill == requestedSkill)) {
            displayStr += `${eternal.eternalName} has the ability: ${requestedSkill} <br>`;
//THIS IS WHERE WE APPEND IMAGE to the body of the document. Putting it in displayStr just makes it say undefined because it looks for value to read.
            document.body.append(eternal.image);
            qualifiedEternals.push(eternal);
        };
    });
    
    let finalResults = document.querySelector('.eternalsList');
    // this time we are using the displayStr to display because we pushed the entire object to the temp array, so if we
    //      tried to print all that out it would be messy/not work. This way we get the right info out. 
    finalResults.innerHTML = displayStr;
};