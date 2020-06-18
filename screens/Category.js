import * as React from 'react';
import Constants from 'expo-constants';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

import CategorySubscreen from './subscreen/Category';

class Category extends React.Component {

    categoryName = this.props.navigation.getParam("name");

    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{height: Constants.statusBarHeight, backgroundColor: '#0B4D42'}}/>

                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../assets/left-arrow.png")} style={{width: 30, height: 30, marginHorizontal: 20, marginBottom: 10, marginTop: 20}}/>
                    </TouchableOpacity>
                    <Text style={styles.categoryName}>{this.categoryName.charAt(0).toUpperCase() + this.categoryName.slice(1)}</Text>
                    <CategorySubscreen name={this.categoryName.toLowerCase()}/>
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
    categoryName: {
        fontSize: 24,
        fontWeight: "700",
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20
    }
});

export default withNavigation(Category);