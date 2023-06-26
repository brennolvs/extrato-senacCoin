import React, { useState, useEffect } from 'react';
import { api } from '../../services';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

function Header() {

    const [movimentacoes, setMovimentacoes] = useState([]);
    const userId = '3b700ecc-cec9-4be4-8c00-48bced543861'

    useEffect(() => {
        async function getSenacCoin() {
            const response = await api.get(`/api/SenacCoin/FiltrarSenacCoinByUsuarioId/${userId}`);

            setMovimentacoes(response.data);
            console.log(response.data);
        }

        getSenacCoin();
    }, []);

    return (
        // <SafeAreaView>
        <View style={styles.header}>
            <View style={styles.logo}>
                <TouchableOpacity style={styles.buttonIcon} onPress={() => navigation.goBack()}>
                    <FontAwesome
                        name="arrow-left"
                        size={20}
                        color="#205395"
                    />
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>
                        Senac Coin
                    </Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 14, color: '#FFF' }}>
                    Saldo Senac Coin
                </Text>
                <View style={styles.saldo}>
                    <Image style={styles.image} source={require('../../icon/chinese-coin.png')} />
                    <Text style={{ fontSize: 15, color: '#FFF', marginLeft: 10, fontWeight: 'bold' }}>{movimentacoes.saldo}</Text>
                </View>
            </View>


            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 10 }}>Extrato</Text>
            </View>

        </View>
        // </SafeAreaView>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#205395',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 16,
        height: 150,
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#EF8F2F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        elevation: 10
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        elevation: 10
    },
    icon: {
        marginRight: 17,
        elevation: 10
    },
    saldo: {
        flexDirection: 'row'
    },
    image: {
        width: 20,
        height: 20
    }
});