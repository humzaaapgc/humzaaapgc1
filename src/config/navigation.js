import{StackNavigator,TabNavigator} from 'react-navigation';
import main from '../../screen/main';
import it from '../../screen/it';
import cs from '../../screen/cs';
import se from '../../screen/se';

const flip=TabNavigator
(
    {
    
    cs:{screen:cs},
    se:{screen:se}
    },
        {
        animationEnabled:true,
        tabBarPosition:'top',
        }
);

export default AppNavigator=StackNavigator
({

    main:{screen:main},
    it:{screen:it},
    flip:{screen:flip},

});