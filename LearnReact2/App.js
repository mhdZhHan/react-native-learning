import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

// components (includes)
import FlatCards from './src/components/includes/FlatCards'
import ElevatedCards from './src/components/includes/ElevatedCards'
import FancyCard from './src/components/includes/FancyCard'
import ActionCard from './src/components/includes/ActionCard'
import ContactList from './src/components/includes/ContactList'

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCards />
                <FancyCard />
                <ActionCard />
                <ContactList />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App