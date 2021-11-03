import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';

import {nikePegasus36, nikeMetcon5Black, nikeZoomKobe1Proto, nikeMetcon4, nikeMetcon6, nikeMetcon5Purple, nikeMetcon3, nikeMetconFree} from './constants/images';
import Header from './components/Header';
import FlatListHeader from './components/FlatListHeader';
import FlatListBody from './components/FlatListBody';

export default function App() {
  
      // Dummy Data
    const [trending, setTrending] = useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike air Metcon 5 ",
            img: nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);

    const [recentlyViewed, setRecentlyViewed] = useState([
      {
          id: 0,
          name: "Nike Metcon 4",
          img: nikeMetcon4,
          bgColor: "#414045",
          type: "TRAINING",
          price: "$119",
          sizes: [6, 7, 8]
      },
      {
          id: 1,
          name: "Nike Metcon 6",
          img: nikeMetcon6,
          bgColor: "#4EABA6",
          type: "TRAINING",
          price: "$135",
          sizes: [6, 7, 8, 9, 10, 11]
      },
      {
          id: 2,
          name: "Nike Metcon 5",
          img: nikeMetcon5Purple,
          bgColor: "#2B4660",
          type: "TRAINING",
          price: "$124",
          sizes: [6, 7, 8, 9]
      },
      {
          id: 3,
          name: "Nike Metcon 3",
          img: nikeMetcon3,
          bgColor: "#A69285",
          type: "TRAINING",
          price: "$99",
          sizes: [6, 7, 8, 9, 10, 11, 12, 13]
      },
      {
          id: 4,
          name: "Nike Metcon Free",
          img: nikeMetconFree,
          bgColor: "#A02E41",
          type: "TRAINING",
          price: "$108",
          sizes: [6, 7, 8, 9, 10, 11]
      },
  ]);



  return (
    <View style={{flex: 1}} >
      <Header/>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 15, marginBottom: 15}}>TRENDING</Text>
      <View style={{flex: 1}} >
      <FlatList horizontal={true} data={trending} renderItem={ ({item}) => <FlatListHeader data={item}/> } />
      </View>

      <View style={{flex: 1.5,borderWidth: 0.1,borderTopLeftRadius: 9, borderTopRightRadius: 9 }}>
        
          <Text style={{color: '#ABAFB8', fontSize: 25, transform: [{ rotate: '-90deg' }] }}>RECENTLY VIEWED</Text>
         
          <FlatList data={recentlyViewed} renderItem={ ({item})=> <FlatListBody data={item} /> } />
        
    </View>

    </View>
  );
}
