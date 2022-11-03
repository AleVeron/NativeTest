import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from 'react-native'
import repositories from "../data/repositories";

export default function RepositoryList() {


    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: rep }) => (
                <View key={rep.id}>

                    <View style={styles.firstDiv}>
                    
                    <Image style={styles.image} source={{uri: rep.ownerAvatarUrl}} />

                    <View style={styles.titles}>
                        <Text style={styles.textContainer}>{rep.fullName}</Text>
                        <Text >{rep.description}</Text>
                        <Text style={styles.language}>{rep.language}</Text>
                    </View>
                    </View>
                    <View style={styles.secondDive}>

                        <View style={styles.lowDiv}>
                            <Text style={styles.textContainer}> {rep.stars}</Text>
                            <Text>Stars</Text>
                        </View>
                        <View style={styles.lowDiv}>
                            <Text style={styles.textContainer}> {rep.forksCount}</Text>
                            <Text >Forks</Text>
                        </View>
                        <View style={styles.lowDiv}>
                            <Text style={styles.textContainer}> {rep.ratingAverage}</Text>
                            <Text >Rating</Text>
                        </View>
                        <View style={styles.lowDiv}>
                            <Text style={styles.textContainer}> {rep.reviewCount}</Text>
                            <Text>Review</Text>
                        </View>


                    </View>
                </View>
            )}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    firstDiv:{
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    titles:{
        flex:1,
        paddingLeft:10
    },
    secondDive: {
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
        flexGrow:0
    },
    lowDiv: {
        padding: 10,
        alignItems: "center"
    },
    language: {
        backgroundColor: "blue",
        alignSelf: "flex-start",
        color: "#fff",
        padding: 5,
        borderRadius: 4,
        overflow:"hidden",
        marginTop:4,
        marginBottom:4
    }
})