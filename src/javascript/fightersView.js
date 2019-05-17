import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';

class FightersView extends View {
  constructor(fighters) {
    super();
    
    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
  }

  fightersDetailsMap = new Map();

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element;
    });

    this.element = this.createElement({ tagName: 'div', className: 'fighters' });
    this.element.append(...fighterElements);
  }

  handleFighterClick(event, fighter) {
    this.fightersDetailsMap.set(fighter._id, fighter);
    const fighterMap = this.fightersDetailsMap.get(fighter._id); // nothing good!!!
    const showInfo = (fighterService.getFighterDetails(fighterMap._id)) 
      .then(showInfo => { console.log('Name - ' + showInfo.name, 'Health - ' + showInfo.health,'Attack - ' + showInfo.attack, 'Defense - ' + showInfo.defense) });
    // console.log(showInfo);
    
    

    // get from map or load info and add to fightersMap
    // show modal with fighter info
    // allow to edit health and power in this modal
  }
}

export default FightersView;