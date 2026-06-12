import Main_1 from './Main_1';
import Main_2 from './Main_2';
import Main_3 from './Main_3';
import Main_4 from './Main_4';
import Main_5 from './Main_5';
import Main_6 from './Main_6';
import Main_7 from './Main_7';
import Main_8 from './Main_8';
import Main_9 from './Main_9';
import Main_10 from './Main_10';




const Main_wrapper =() => {
    return (
        <div className='main_page_wrapper'>
        <div id='start'><Main_1/></div>
        <div id='slogan'><Main_2/></div>
        <div id='profile'><Main_3/></div>
        <div id='proj1'><Main_4/></div>
        <div id='strategy'><Main_5/></div>
        <div id='visual'><Main_6/></div>
        <div id='live'><Main_7 url="https://github.com"/></div>
        <div id='logic'><Main_8/></div>
        <div id='proj2'><Main_9/></div>
        <div id='finish'><Main_10/></div>
 
        </div>
    );
}

export default Main_wrapper;