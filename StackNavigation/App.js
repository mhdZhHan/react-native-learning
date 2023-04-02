import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// components
import Home from './src/components/screens/Home'
import About from './src/components/screens/About'
import Details from './src/components/screens/Details'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName='Home' 
				screenOptions={{headerShown: false}}
			>
				<Stack.Screen 
					name="Home"
					component={Home}
					options={{
						title: 'My Home',
						headerShown: true,
						headerStyle: {
							backgroundColor: 'teal',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
						  	fontWeight: 'bold',
						},
					}}
				/>
				<Stack.Screen name="About" component={About} />
				<Stack.Screen 
					name="Details" 
					initialParams={{name: 'Mohammed'}} 
					component={Details} 
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}