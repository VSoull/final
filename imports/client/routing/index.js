import route from './router';

import Home from '/imports/client/pages/home/Home';
import Donuts from '/imports/client/pages/donuts/Donuts';


route('/', Home, {}, {
    name: 'home'
});

route('/donuts', Donuts, {}, {
    name: 'donuts'
});
