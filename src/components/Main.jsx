import { Text, View } from "react-native"
import RepositoryList from './RepositoryList'

export default function Main() {
    return (
        <View style={{
            alignItems:"center",
        }}>

            <Text 
                style={{
                    padding:20
                }}
            >NativeApp</Text>
            <View>
                <RepositoryList />
            </View>
        </View>
    )
}

