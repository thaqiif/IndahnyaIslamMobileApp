import * as React from 'react';
import Constants from 'expo-constants';
import {withNavigation} from 'react-navigation';
import {View, ScrollView, TouchableOpacity, Image, Text, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import HTMLView from 'react-native-htmlview'; 

// Post URL
// https://api.myjson.com/bins/1ehr8b

class SinglePost extends React.Component {

    postURL = this.props.navigation.getParam("post_url");
    
    state = {
        data: '',
        isFetch: false,
        isAvailable: false  // If the link not returning error
    }

    componentDidMount(){
        this.fetchSinglePost();
    }

    fetchSinglePost = async() => {
        //const call = await fetch("https://api.myjson.com/bins/12tvhn");
        const call = await fetch("https://api-ii.herokuapp.com/article.php?url="+this.postURL);
        const json = await call.json();

        if(json.title) this.setState({data: json, isFetch: true, isAvailable: true});
        else this.setState({isFetch: true, isAvailable: false});
    }

    displayError = () => {
        return (
            <Text>Not Available.</Text>
        );
    }

    displayPost = () => {
        return(<View>

            <Text style={{fontSize: 24, fontWeight: "700", lineHeight: 30, color: '#232323', textAlign: "center", paddingHorizontal: 20}}>{this.state.data.title}</Text>
            <Text style={{fontSize: 16, fontWeight: "500", marginTop: 10, color: '#7A7A7A', textAlign: "center"}}>{this.state.data.posted_on}</Text>
            <View style={{flex: 1, textAlign: "justify"}}>
                {this.state.data.content.map((p, i) => {
                    if(p.img){
                        return <Image 
                            key={i}
                            style={{flex: 1, width: '100%', height: 300, marginVertical: 10}}
                            source={{uri: p.img, cache: "force-cache"}}
                            resizeMode="contain"/>
                    }else if(p.p && p.p != "&nbsp;"){
                        return <HTMLView stylesheet={{span:{textAlign: "justify", fontSize: 20}}} style={styles.post} key={i} value={"<span style='text-align: justify;'>"+p.p+"</span>"}/>
                    }
                })}
            </View>
        </View>);
    }

    displayPostHTML = () => {
        return <WebView style={{flex: 1}} source={{html: this.state.data.html}}></WebView>
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: Constants.statusBarHeight, backgroundColor: '#0B4D42'}}/>

                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../assets/left-arrow.png")} style={{width: 30, height: 30, marginHorizontal: 20, marginBottom: 10, marginTop: 20}}/>
                    </TouchableOpacity>

                    <View style={styles.entry}>
                        {!this.state.isFetch && !this.state.isAvailable && <ActivityIndicator/>}
                        {this.state.isFetch && !this.state.isAvailable && <this.displayError/>}
                        {this.state.isFetch && this.state.isAvailable && <this.displayPost/>}
                    </View>
                    

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    entry: {
        flex: 1,
        marginVertical: 10
    },
    post: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});

export default withNavigation(SinglePost);