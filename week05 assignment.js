class Player {                          //created player class
    constructor(name, position) {       
        this.name = name;
        this.position = position;           //gave values for player names and positions.
    }


describe() {                                    // created description function inside player class to describe the the players.
    return `${this.name} plays ${this.position}`
}

}

class Team {                                // created team class
    constructor(name) {
        this.name = name;                       
        this.players = [];                 // created values for team name and empty players array to later be able to add players to the team
    }

    addPlayer(player) {                     //created adding player function inside team class with parameter of (player) to be able to add players to the class team
        if (player instanceof Player ) {    // created (instance0f) to be able to push (player) to the team array once created.
            this.players.push(player);
          }  else {
                throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}.`);        //created error incase (argument) is not a player
            }
        }

        describe () {                                                   //created description inside team class to be able to describe the team and the amount of players it would have.
            return `${this.name} has ${this.players.length} players.`;
        }
}

class Menu {                                //created menu class 
    constructor () {
        this.teams = [];                    //created values for teams as empty array to be able to input and add teams later on.
        this.selectedTeam = null;           //created values for selectedteam to null so it can start at none or no value until later selected.
    }

    start() {                                           //created start function inside menu class to start the application
        let selection = this.showMainMenuOptions();     // created selection and main menu option selector function with case switching statement.
        while (selection != 0) {
            switch (selection) {                        // used a while loop to be able to select which option or case to take action.
                case '1':                               // created different functions for each case in the switch/case statment to be able to do different actions.
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;

            }
            selection = this.showMainMenuOptions();     //once user makes their selection it should show the selection maid based on the showmainmenuoption function.
        
        }
        alert(`Goodbye!`);                              //if statement ends up being 0 or false in this case it would prompt an alert saying goodbye.
    }

    showMainMenuOptions() {                         //created the working showmainmenu function to be able to return/show what the user would see.
        return prompt(`                             
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);                                         // used backticks to be able to create seperate lines for each option.
    }

    showTeamMenuOptions(teamInfo) {                 //created the showteam menu function passing (teamInfo) to be able to return options for user to make for teams players.
        return prompt(`
        0) back
        1) create player
        2) delete player
        --------------------
        ${teamInfo}
        `);                                 
    }

    displayTeams() {                                //created function to display teams 
        let teamString = '';                                        //created teamstring as empty to be able to later on add the team information depending on which was selected.
        for (let i = 0; i < this.teams.length; i++){                //created for loop to be able to iterate over the teams length and be able to show selected team.
            teamString += i + ')' + this.teams[i].name + '\n';      
        }
        alert(teamString);                                  //logs out the selected teams name 
    }       

    createTeam() {                                          //created create team function to be able to input information for new team.
        let name = prompt('Enter name for new team: ');     // created name variable with name string for later output.
        this.teams.push(new Team(name));                    // used pushed method and gave it new team class passing in the new (name) as parameter.
    }

    viewTeam() {                                            //created viewteam function 
        let index = prompt('Enter the index of the team you wish to view:');        //created prompt to show selection of which team user would want to view.
        if (index > -1 && index < this.teams.length) {                              //created loop that does not let user input under 0 so it avoids crashing.
            this.selectedTeam = this.teams[i];                                      
            let description = 'Team name: ' +  this.selectedTeam.describe() + '\n';    //concatenated string variable with selected team.describe function and created a new line.
            
            for (let i = 0; i <this.selectedTeam.players.length; i++) {                 //created for loop to be able to view the selected player in the selected team.
                description += i + ') ' + this.selectedTeam.players[i].name + ' - ' +   //iterating through the index as it finds the selected teams players name..
                this.selectedTeam.players[i].describe() + '\n';                         //..concatenated with the description function and forming a new line.
            }   

            let selection = this.showTeamMenuOptions(description);                  //gave selection variable a function of showing teammenu options.
            switch(selection) {                                                     //creatd switch statement to be able to give diffrent viewing options to user.
                case '1':
                    this.createPlayer();                                            //created create player function for input to be added later.
                    break;
                case '2':
                    this.deletePlayer();                                             //created delete player function for input to be added later.
            }
        }
    }

    createPlayer() {                                                                //created create player function
        let name = prompt('Enter name for new player: ');                           //gave name variable a prompt for user to add new information for player.
        let position = prompt('Enter position for new player: ');                  //gave position variable a prompt for user to add new information for player.
        this.selectedTeam.players.push(new Player(name,position));                 //used push method to be able to output the new information obtained from the user.
    }

    deletePlayer() {                                                                //created delete player function
        let index = prompt('Enter the index of the player you wish to delete: ');       //gave index prompt value for user to be able to enter the index to delete.
        if (index > -1 && index < this.selectedTeam.players.length) {                   //created loop to be able to select the index through teams players length. 
            this.selectedTeam.players.splice(index, 1);                             //used slice method for user to be able to input the index it wants to remove and continue to log whats left.
        }
    }
}


let menu = new Menu();                                                        //created new menu class 
menu.start();                                                                 //called for the new menu class created to show.