import React, { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard,
    StyleSheet,
} from "react-native";

import firebase from "../../firebase/firebaseconection"



export default function Registrar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState('');

    async function login() {
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((value) => {
                setUser(value.user.email)
            }).catch((error) => {
                alert(`Não foi possivel logar erro:${error.code}`)
            })
        setEmail('');
        setSenha('');
        Keyboard.dismiss();
    }
    
   async function deslogar(){
      await firebase.auth().signOut();
      setUser('');
    }

    return (
        <View style={styles.container} >

            {user ?
                <View style={styles.renderContaier}  >

                    <Text>Seja bem vindo {user}</Text>
                    <TouchableOpacity style={styles.renderBtn} onPress={deslogar}  >

                        <Text style={styles.renderTexto} >Deslogar</Text>

                    </TouchableOpacity>

                </View>

                :

                <View style={styles.container} >
                    <View style={styles.areaTexto} >

                        <Text style={styles.texto} >Email</Text>

                        <TextInput
                            value={email}
                            placeholder="Coloca um email valido"
                            underlineColorAndroid='transparent'
                            onChangeText={(item) => setEmail(item)}
                            style={styles.textInput}
                        />
                        <Text style={styles.texto} >Senha</Text>

                        <TextInput
                            value={senha}
                            placeholder="Coloca uma senha valida"
                            underlineColorAndroid='transparent'
                            onChangeText={(item) => setSenha(item)}
                            keyboardType='numeric'
                            style={styles.textInput}
                        />


                    </View>
                    <View style={styles.btnBotao}>

                        <TouchableOpacity style={styles.botao} onPress={login} >

                            <Text style={styles.btnTexto} >Login</Text>

                        </TouchableOpacity>
                    </View>
                </View>

            }


        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    textTop: {
        marginRight: -250,
        width: '100%',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
    },
    areaTexto: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    textInput: {
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#dddd',
        height: 100,
        color: 'black',
        borderWidth: 5,
        padding: 30,

    },
    texto: {
        color: 'black',
        fontSize: 16,
        marginLeft: -280,
        fontWeight: 'bold',
        marginTop: 20,

    },
    btnBotao: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '90%',
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    botao: {
        borderRadius: 5,
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTexto: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    btnRender: {
        marginTop: 20,
        width: '90%',
        height: '10%',
        borderRadius: 5,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 20,
    },
    renderContaier: {
        flex: 1,
        backgroundColor: '#dddd',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    renderBtn: {
        width: '90%',
        height: '5%',
        borderRadius: 5,
        backgroundColor: 'red',
        marginTop: 10,
    },
    renderTexto: {
        color: '#ffff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
    }

});
