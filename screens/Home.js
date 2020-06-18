import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

/** Import components */
import Utama from './subscreen/Utama';
import Category from './subscreen/Category';

export default class Home extends React.Component {

  state = {
    selectedTab: 1,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: Constants.statusBarHeight, backgroundColor: '#0B4D42'}}/>
        
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image source={require("../assets/logo.png")} style={{width: 80, height: 55}}/>
          </View>

          <View style={{height: 40, marginBottom: 20}}>
            <ScrollView contentContainerStyle={{paddingHorizontal: 14}} style={styles.navbar} scrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableWithoutFeedback onPress={()=>{this.setState({selectedTab: 1})}}>
                  <Text style={[styles.navbarItem, this.state.selectedTab == 1 && styles.navbarItemSelected]}>Utama</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>{this.setState({selectedTab: 2})}}>
                  <Text style={[styles.navbarItem, this.state.selectedTab == 2 && styles.navbarItemSelected]}>Kempen</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>{this.setState({selectedTab: 3})}}>
                  <Text style={[styles.navbarItem, this.state.selectedTab == 3 && styles.navbarItemSelected]}>Tokoh</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>{this.setState({selectedTab: 4})}}>
                  <Text style={[styles.navbarItem, this.state.selectedTab == 4 && styles.navbarItemSelected]}>Kolumnis</Text>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>


          {this.state.selectedTab == 1 && <Utama/>}
          {this.state.selectedTab == 3 && <Category name="tokoh"/>}
          {this.state.selectedTab == 4 && <Category name="kolumnis"/>}

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
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
  },
  navbarItem: {
    fontSize: 24,
    color: '#232323',
    fontWeight: "700",
    paddingHorizontal: 10,
    height: 100
  },
  navbarItemSelected: {
    color: '#0B4D42'
  }  
});
