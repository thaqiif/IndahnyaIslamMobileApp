import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';

/** Import Component */
import Card from './Card';

class PostSlide extends React.Component{
    render() {
        return (
            <View style={{flex: 1, marginBottom: 22}}>
                <TouchableOpacity style={{flex: 1, flexDirection: 'row', marginHorizontal: 20, marginBottom: 22, position: "relative"}} onPress={() => this.props.navigation.push("CategorySingle", {name: this.props.category})}>
                    <Text style={[styles.categoryTitle, {flex: 10}]}>{this.props.category}</Text>
                    <Image style={{position:"absolute", right: 1, top: 4, width: 26, height: 26}} source={require("../assets/right-arrow.png")}/>
                </TouchableOpacity>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 17}} style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.props.content.map((p, i) =>
                        <TouchableOpacity key={i} onPress={() => this.props.navigation.push("SinglePost", {post_url: p.link})}>
                            <Card key={i} title={p.title} thumbnail={p.thumbnail} date={p.date}/>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    categoryTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: '#232323',
        paddingLeft: 4
    },
    scrollView: {
        flex: 1,
        flexDirection: "row",
        height: 180,
        width: '100%'
    }
});

export default withNavigation(PostSlide);