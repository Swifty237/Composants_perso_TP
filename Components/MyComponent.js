import { StyleSheet, Text, View, Image } from 'react-native';


export default function MyComponent (props) {
    return (

        <View style={styles.container}> 
            <Image style={styles.picture} source={{uri: props.img}}/>

            <View style={styles.text}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.description}>{props.desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 2,
      flexDirection: "row",
      borderWidth: 2,
      margin: 10
    },
  
    picture: {
      flex: 1,
      margin: 10 
    },
  
    title: {
      margin: 10
    },
  
    description: {
      margin: 10
    },
  
    text: {
      flex: 1
    }
  });