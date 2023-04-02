// import {
//   View,
//   ScrollView,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   Button,
//   Pressable,
//   TouchableHighlight,
//   TouchableOpacity,
//   ImageBackground,
//   // SafeAreaView,
// } from 'react-native';
// import React, {Fragment} from 'react';

// export default function App() {
//   return (
//     <Fragment>
//       <View style={styles.box}>
//         <Text>Hello world 1</Text>
//         <Text>Hello world</Text>
//         <Image
//           style={styles.image}
//           source={{
//             uri: 'https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png',
//           }}
//         />
//         {/* <Image
//         style={styles.image}
//         source={require('./src/assets/images/insta.png')}
//       /> */}

//         <TextInput
//           onChangeText={text => console.warn(text)}
//           style={styles.input}
//           placeholder="Hello world"
//           // value="Red Apple"
//           // keyboardType="numeric"
//         />
//         <Button
//           onPress={() => console.warn('Clicked')}
//           title="Click Me"
//           color="green"
//         />

//         <Pressable
//           style={styles.button}
//           onPress={() => console.warn('Button clicked')}
//           onPressIn={() => console.warn('Justi clicked')}
//           onPressOut={() => console.warn('Leave clicked')}
//           onLongPress={() => console.warn('Long press clicked')}>
//           <Text>Pressable Button!</Text>
//         </Pressable>

//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={styles.button}
//           onPress={() => console.warn('Button2 Clicked')}>
//           <Text>TouchableOpacity Button</Text>
//         </TouchableOpacity>

//         <TouchableHighlight
//           underlayColor="red"
//           style={styles.button}
//           onPress={() => console.warn('TouchableHighlight button clicked')}>
//           <Text>TouchableHighlight Button</Text>
//         </TouchableHighlight>
//       </View>

//       {/* Scroll view */}
//       <ScrollView horizontal>
//         <Image
//           style={styles.image}
//           source={require('./src/assets/images/insta.png')}
//         />
//         <Image
//           style={styles.image}
//           source={require('./src/assets/images/insta.png')}
//         />
//         <Image
//           style={styles.image}
//           source={require('./src/assets/images/insta.png')}
//         />
//       </ScrollView>
//       <ImageBackground
//         resizeMode="contain"
//         style={styles.bg_car}
//         source={require('./src/assets/images/bg_car.jpg')}>
//         <Text>ImageBackground</Text>
//       </ImageBackground>
//     </Fragment>
//   );
// }

// const styles = StyleSheet.create({
//   box: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bg_car: {
//     width: '100%',
//     height: 70,
//   },
//   image: {
//     height: 66,
//     width: 66,
//     margin: 10,
//   },
//   input: {
//     width: '70%',
//     height: 50,
//     borderWidth: 1,
//   },
//   button: {
//     backgroundColor: 'green',
//     width: '80%',
//     height: 40,
//     margin: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   Text: {
//     color: '#fff',
//   },
// });

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Platform,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const students = [
    {
      id: 1,
      name: 'Mohammed',
    },
    {
      id: 2,
      name: 'John',
    },
    {
      id: 3,
      name: 'Doe',
    },
    {
      id: 4,
      name: 'Miller',
    },
  ];
  const pullDown = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  console.warn(refreshing);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={pullDown} />
        }
        data={students}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.view}>
        <Text style={{fontSize: 30}}>Your Devive Inf:</Text>
        <ActivityIndicator size="large" color="tomato" animating />
        <Text>Devive is: {Platform.OS}</Text>
        <Text>Devive Version is: {Platform.Version}</Text>
        <Text>Devive is a TV: {Platform.isTV.toString()}</Text>
        <Text
          style={{
            fontSize: 20,
            color: Platform.os === 'ios' ? '#fff' : '#000',
          }}>
          Hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 24,
    backgroundColor: 'crimson',
    height: 300,
    marginHorizontal: 17,
    marginVertical: 9,
  },
  view: {
    padding: 24,
    marginVertical: 9,
    marginHorizontal: 17,
    backgroundColor: 'teal',
  },
});
