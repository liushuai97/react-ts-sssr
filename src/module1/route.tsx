import * as React from 'react';
import { Route } from 'react-router-dom';
import List from './containers/List';
import Detail from './containers/Detail';
import Open from './containers/Open';
import Admissions from './containers/Admissions';
//import * as Loading from './Loading';


/*const AsyncList = Loadable({
     loader:()=> import('./containers/List'),
     loading: () => <div>loading</div>
});
const AsyncDetail = Loadable({
    loader: () => import('./containers/Detail'),
    loading: () => <div>loading</div>
});*/

export const routes = (
        <div>
            <Route exact path="/" component={List}/>
            <Route path="/admissions" component={Admissions}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/open/item/:id" component={Open}/>
        </div>
);

export const routeArray = [
    {path:'/',component:List,exact:true},
    {path:'/admissions',component:Admissions},
    {path:'/detail',component:Detail},
    {path:'/open/item/:id',component:Open}
];
