import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          height: 125,
          width: 125,
        }}

        style={styles.image}
        />
        <Text style={{fontSize: 23}}>Welcome to</Text>
        <Text style={{fontWeight: 'bold', fontSize: 23}}>Power Bike Shop</Text>

        <TouchableOpacity style={styles.google}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
            height: 20,
            width: 20,
          }}
        />
          <Text style={{color: '#000', fontSize: 16, paddingLeft: 7}}>Login with Gmail</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.apple}>
        <FontAwesome name="apple" size={24} color="white"/>
          <Text style={{color: '#fff', fontSize: 16, paddingLeft: 7}}>Login with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 12}}>
          Not a member? <Text style={{color: 'orange'}}>Sign up</Text>
          </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    transform: [{rotate: '40deg'}],
    borderRadius: 5,
    marginBottom: 50,
  },
  google:{
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
    height: 40,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginTop: 15,
  },

  apple:{
     backgroundColor: '#000',
    height: 40,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },

  register: {
    marginTop: 10,
  }
})