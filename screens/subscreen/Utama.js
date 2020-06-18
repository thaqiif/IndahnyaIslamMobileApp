import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';

import PostSlide from '../../components/PostSlide';

class Utama extends React.Component{
    state = {
        data: '',
        isLoaded: false
      }
    
      componentDidMount(){
        // fetch data
        this._fetchMainPage();
      }
    
      _fetchMainPage = async() => {
        try {
          //const call = await fetch('https://api.myjson.com/bins/p9bzd');
          const call = await fetch('https://api-ii.herokuapp.com/homepage.php');
          const json = await call.json();
          this.setState({isLoaded: true, data: json});
          //console.log(json);
        } catch (err) {
          console.log("Error... ", err);
        }
      }

    render() {
        if(!this.state.isLoaded){
            return <ActivityIndicator/>
        }else{
            return this.state.data.map((sec, i) => 
                <PostSlide category={sec.category} content={sec.content} key={i}/>
            )
        }
    }
}

// Enable react navigation for this component
export default withNavigation(Utama);