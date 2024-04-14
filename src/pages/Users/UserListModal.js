import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function UserListModal() {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(`Error fetching data: ${error}`)
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { setSelectedUser(item); setModalVisible(true); }}>
            <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedUser && (
                            <View>
                                <Text style={styles.modalText}><Text style={styles.bold}>Name:</Text> {selectedUser.name}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Username:</Text> {selectedUser.username}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Email:</Text> {selectedUser.email}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Phone:</Text> {selectedUser.phone}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Website:</Text> {selectedUser.website}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Address:</Text> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Company:</Text> {selectedUser.company.name}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>Catch Phrase:</Text> {selectedUser.company.catchPhrase}</Text>
                                <Text style={styles.modalText}><Text style={styles.bold}>BS:</Text> {selectedUser.company.bs}</Text>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Text style={styles.closeButton}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#f0f0f0',
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    listContainer: {
        paddingTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        marginBottom: 10,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 10,
        textAlign: 'center',
        color: '#2196F3',
    },
});
