import { 
	View, Text, SafeAreaView, StyleSheet, 
	ScrollView, TouchableOpacity, Image, TextInput
} from 'react-native'

import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function App() {
	const [inputText, setInputText] = useState('')
	const [tasks, setTasks] = useState([])

	const getTasks = ()=>{
		axios
			.get('https://todo.talrop.works/')
			.then((response)=>setTasks(response.data))
			.catch((error)=>console.log(error))
	}

	useEffect(()=>{
		getTasks()
	}, [])

	const addToList = () => {
		if(inputText){
			axios
				.post('https://todo.talrop.works/create/', { title: inputText })
				.then((response) => {
					console.log(response.data)
					setInputText('')
					getTasks()
				})
				.catch((error) =>console.log(error))
		}
	}

	const removeitem = (task) => {
		axios
			.post(`https://todo.talrop.works/delete/${task.id}/`, {
				is_deleted: true
			})
			.then((response)=>{
				console.log(response.data)
				getTasks()
			})
			.catch((error)=> console.log(error))
	}

	const handleStatus = (task) => {
		axios
			.post(`https://todo.talrop.works/update/${task.id}/`, {
				is_completed: !task.is_completed
			})
			.then((response)=>{
				console.log(response.data)
				getTasks()
			})
			.catch((error)=> console.log(error))
	}

	const TodoItem = ({task}) => (
		<View style={styles.itemView}>
			{
				task.is_completed ? (
					<View style={styles.itemLeft}>
						<Image 
							source={require('./src/assets/icons/check.png')} 
							style={styles.checkIcon} 
						/>
						<Text style={styles.itemTitle}>{task.title}</Text>
					</View>
				) : (
					<TouchableOpacity 
						style={styles.itemLeft}
						onPress={()=>handleStatus(task)}
					>
						<View style={styles.circleView}></View>
						<Text style={styles.itemTitle}>{task.title}</Text>
					</TouchableOpacity>
				)
			}
			<View style={styles.itemRight}>
				{
					task.is_completed && (
						<TouchableOpacity onPress={()=>handleStatus(task)}>
							<Image 
								source={require('./src/assets/icons/undo.png')}
								style={styles.undoIcon}
							/>
						</TouchableOpacity>
					)
				}
				<TouchableOpacity onPress={()=>removeitem(task)}>
					<Image 
						source={require('./src/assets/icons/delete.png')}
						style={styles.deleteIcon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)

	return (
		<SafeAreaView style={styles.mainContainer}>
			<ScrollView style={styles.container}>
				<Text style={styles.title}>My ToDo</Text>
				{/* Todo list view */}
				<View style={styles.sectionView}>
					<Text style={styles.sectionTitle}>Todo List</Text>
					{
						tasks.filter(item => !item.is_completed).map(task => (
							<TodoItem key={task.id} task={task} />
						))
					}
					{/* Input box View */}
					<View style={styles.addView}>
						<View style={styles.addLeft}>
							<Text style={styles.typeText}>+</Text>
							<TextInput
								value={inputText}
								onChangeText={setInputText}
								style={[styles.typeText, {marginLeft: 15,flex: 1, color: '#fafafa'}]} 
								placeholder='Type new todo...' 
							/>
						</View>
						<TouchableOpacity
							onPress={addToList}
							style={styles.addButton}
						>
							<Text style={{color: '#fff', fontSize: 15, fontFamily: 'Ubuntu-Regular'}}>Add New</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* Completed todo items */}
				<View style={styles.sectionView}>
					<Text style={styles.sectionTitle}>Completed todos</Text>
					{
						tasks.filter(item => item.is_completed).map(task => (
							<TodoItem key={task.id} task={task} />
						))
					}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Ubuntu-Regular',
	},
	mainContainer: {
		flex: 1,
	},
	container: {
		marginTop: 20,
		marginHorizontal: 30,
	},
	title: {
		fontSize: 27,
		textAlign: 'center',
		fontFamily: 'Ubuntu-Bold'
	},
	sectionView: {
		paddingVertical: 30,
	},
	sectionTitle: {
		fontSize: 22,
		fontFamily: 'Ubuntu-Bold',
		marginBottom: 19,
	},
	itemView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 13,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	circleView: {
		width: 22,
		height: 22,
		borderRadius: 22 / 2,
		borderWidth: 2,
		borderColor: '#fff'
	},
	itemTitle:{
		fontSize: 18,
		fontFamily: 'Ubuntu-Regular',
		marginLeft: 13,
	},
	deleteIcon: {
		width: 25,
		height: 25,
	},
	checkIcon: {
		width: 22,
		height: 22,
	},
	undoIcon: {
		width: 25,
		height: 25,
		marginRight: 11,
	},
	addView: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	addLeft: {
		height: 45,
		paddingHorizontal: 15,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderTopLeftRadius: 6,
		borderBottomLeftRadius: 6,
		// borderRightColor: 'transparent',
		borderColor: '#999',
		borderWidth: 1,
	},
	typeText: {
		fontFamily: 'Ubuntu-Regular',
		color: '#999',
		fontSize: 17,
	},
	addButton: {
		backgroundColor: '#2196f3',
		height: '100%',
		paddingHorizontal: 18,
		flexDirection: 'row',
		alignItems: 'center',
		borderTopRightRadius: 6,
		borderBottomRightRadius: 6,
	},
	itemRight: {
		flexDirection: 'row',
		alignItems: 'center',
	}
})