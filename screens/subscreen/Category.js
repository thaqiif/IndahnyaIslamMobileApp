import * as React from 'react';
import { View, ScrollView, Text, ActivityIndicator} from 'react-native';
import Card from '../../components/Card';

// URL: https://api.myjson.com/bins/wgn3j Tokoh

export default class Category extends React.Component {

    state = {
        isLoaded: false,
        data: ''
    }

    componentDidMount(){
        this._fetchCategoryPage();
    }

    _fetchCategoryPage = async() => {
        try {
            //const call = await fetch("https://api.myjson.com/bins/wgn3j");
            const call = await fetch("https://api-ii.herokuapp.com/category.php?c="+this.props.name);
            const json = await call.json();
            this.setState({isLoaded: true, data: json});
        }catch(e){
            console.log("Error ----", e);
        }
    }

    render() {
        if(!this.state.isLoaded){
            return <ActivityIndicator/>
        }else{
            if(this.state.data.category){
                return (
                    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, flexDirection: "column"}} contentContainerStyle={{alignItems: "center"}}>
                        {this.state.data.content.map((cont, i) => {
                            return <Card key={i} title={cont.title} thumbnail={cont.thumbnail} date={cont.date} vertical={true}/>
                        })}
                    </ScrollView>
                )
            }
        }
    }
}