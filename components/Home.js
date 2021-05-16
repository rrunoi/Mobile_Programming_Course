import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Button, Alert } from 'react-native';

export default function Home(props) {
    const [text, setText] = useState('Slipknot');
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getTab()
    }, []);

    const getTab = () => {
        fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${text}`)
            .then(response => response.json())
            .then(data => { setItemList(data) })
            .catch((error) => {
                Alert.alert('Error', error);
            });
    }

    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '90%',
                    backgroundColor: 'rgba(156,154,151,1.0)',
                }}
            />
        );
    }

    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder='Search tabs'
                        onChangeText={(text) => setText(text)}
                    >
                    </TextInput>
                </View>
                <View>
                    <Button title="Search" onPress={getTab()} />
                </View>
            </View>
            <View style={{ flex: 4 }}>
                <FlatList
                    style={{ marginLeft: '10%' }}
                    keyExtractor={(item, id) => id.toString()}
                    renderItem={({ item }) =>
                        <View>
                            <Text
                                style={{ fontSize: 18 }}
                            // onPress={() => navigate('TabPage', item.id)} make clickable by removing comment tag
                            >Artist: {item.artist.name}</Text>
                            <Text
                                style={{ fontSize: 18, color: 'rgba(115, 105, 255, 1.0)' }}
                                onPress={() => navigate('TabPage', item.id)}  // clickable item
                            >Title: {item.title}</Text>
                        </View>
                    }
                    ItemSeparatorComponent={listSeparator}
                    data={itemList}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(72,191,250,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        fontSize: 18,
        width: 300,
        borderColor: 'rgba(156,154,151,1.0)',
        borderWidth: 1,
        padding: 2,
        margin: 6,
    },
});
