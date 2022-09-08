import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View , Button} from 'react-native'
import { auth } from '../firebase';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
    const navigation = useNavigation()
    const [name,setName]=useState('');
    const [LastName,setLastName]=useState('');
    const [galleryPermission, setGalleryPermission] = useState(null);
    const [image,setImage] = useState(null)

    useEffect(()=>{
        (async()=>{
            const galleryStatus= await ImagePicker.requestMediaLibraryPermissionsAsync();
            setGalleryPermission(galleryStatus.status === "granted");
        })();
    },[]);

    const pickImage = async () => {
        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditting: true,
            aspect:[4,3],
            quality:1,
        });

        console.log(results.uri)
        if(!results.cancelled){
            setImage(results)
        }
        setImage(results.uri)

    }
console.log(image)
    if(galleryPermission===false){
        return <Text>No access to internal storage</Text>
    }

    // function handleClick(){
    //     upload(photo,currentUser,setLoading)
    //   }
    //     useEffect(()=>{
    //       if(currentUser?.photoURL ){
    //         setPhotoURL( currentUser.photoURL);
    //       }
          
    //     },[currentUser])

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View  style={styles.container}>
         <Text>Email: {auth.currentUser?.email}</Text>
      <Text>ProfileScreen</Text>
      <View style={styles.inputContainer}>
    <Button title='choose Image'
    onPress={()=> pickImage() }/>
    
{image && <Image source={{url:image}} />}

        <TextInput
          placeholder="name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="LastName"
          value={LastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
  