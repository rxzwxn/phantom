import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, Feather, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

const TOKENS = [
  { key: '1', name: 'Ethereum', symbol: 'ETH', amount: '0.00687', value: '$18.98', change: '+$0.36', changePct: '', icon: <FontAwesome5 name="ethereum" size={24} color="#fff" />, color: '#222' },
  { key: '2', name: 'USDC', symbol: 'USDC', amount: '2.24262', value: '$2.25', change: '-<$0.01', changePct: '', icon: <FontAwesome5 name="coins" size={24} color="#fff" />, color: '#2775CA' },
  { key: '3', name: 'Solana', symbol: 'SOL', amount: '0', value: '$0.00', change: '+$0.00', changePct: '', icon: <MaterialIcons name="currency-bitcoin" size={24} color="#fff" />, color: '#000' },
  { key: '4', name: 'Ethereum', symbol: 'ETH', amount: '0', value: '$0.00', change: '+$0.00', changePct: '', icon: <FontAwesome5 name="ethereum" size={24} color="#fff" />, color: '#222' },
];

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}><Text style={{fontSize: 18}}>🔥</Text></View>
          <View>
            <Text style={styles.username}>@Alexsmithmobbin</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.account}>Account 2</Text>
              <AntDesign name="down" size={14} color="#aaa" style={{marginLeft: 4}} />
            </View>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Feather name="maximize" size={22} color="#fff" style={{marginRight: 18}} />
          <Feather name="search" size={22} color="#fff" />
        </View>
      </View>

      {/* Balance */}
      <View style={styles.balanceSection}>
        <Text style={styles.balance}>$21.23</Text>
        <View style={styles.balanceChangeRow}>
          <Text style={styles.balanceChange}>+$0.36</Text>
          <Text style={styles.balanceChangePct}>1.74%</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        <View style={styles.actionBtn}><Feather name="qrcode" size={24} color="#b9aaff" /><Text style={styles.actionText}>Receive</Text></View>
        <View style={styles.actionBtn}><Feather name="send" size={24} color="#b9aaff" /><Text style={styles.actionText}>Send</Text></View>
        <View style={styles.actionBtn}><Feather name="repeat" size={24} color="#b9aaff" /><Text style={styles.actionText}>Swap</Text></View>
        <View style={styles.actionBtn}><Feather name="dollar-sign" size={24} color="#b9aaff" /><Text style={styles.actionText}>Buy</Text></View>
      </View>

      {/* Info Banner */}
      <View style={styles.infoBanner}>
        <Feather name="search" size={18} color="#b9aaff" style={{marginRight: 8}} />
        <Text style={styles.infoText}>Search from Explore to find new tokens faster</Text>
      </View>

      {/* Token List */}
      <FlatList
        data={TOKENS}
        style={{flex: 1, width: '100%'}} 
        contentContainerStyle={{paddingBottom: 80}}
        renderItem={({item}) => (
          <View style={styles.tokenRow}>
            <View style={[styles.tokenIcon, {backgroundColor: item.color}]}>{item.icon}</View>
            <View style={{flex: 1}}>
              <Text style={styles.tokenName}>{item.name}</Text>
              <Text style={styles.tokenAmount}>{item.amount} {item.symbol}</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.tokenValue}>{item.value}</Text>
              <Text style={[styles.tokenChange, {color: item.change.startsWith('+') ? '#3dd68c' : '#e74c3c'}]}>{item.change}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.key}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navBtn}><Feather name="home" size={24} color="#b9aaff" /></View>
        <View style={styles.navBtn}><Feather name="grid" size={24} color="#b9aaff" /></View>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('BuyBTC')}>
          <Feather name="repeat" size={24} color="#b9aaff" />
        </TouchableOpacity>
        <View style={styles.navBtn}><Feather name="clock" size={24} color="#b9aaff" /></View>
        <View style={styles.navBtn}><Feather name="slash" size={24} color="#b9aaff" /></View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

function BuyBTCScreen({ navigation }) {
  const [amount, setAmount] = useState(10);
  const btcValue = '0.000103';
  return (
    <View style={styles.buyContainer}>
      {/* Header */}
      <View style={styles.buyHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: 8}}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.buyTitle}>Buy BTC</Text>
        <TouchableOpacity style={{padding: 8}}>
          <Text style={styles.buyHeaderBuy}>Buy</Text>
        </TouchableOpacity>
      </View>
      {/* Amount */}
      <View style={styles.buyAmountSection}>
        <Text style={styles.buyAmount}>${amount}</Text>
        <Text style={styles.buyBTCValue}>{btcValue} BTC</Text>
        <TouchableOpacity style={styles.buySwitchBtn}>
          <Feather name="arrow-up-down" size={20} color="#aaa" />
        </TouchableOpacity>
      </View>
      {/* Preset Buttons */}
      <View style={styles.buyPresetRow}>
        {[100, 500, 1000].map(val => (
          <TouchableOpacity key={val} style={styles.buyPresetBtn} onPress={() => setAmount(val)}>
            <Text style={styles.buyPresetText}>${val}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Payment Method */}
      <View style={styles.buyPaymentRow}>
        <Feather name="credit-card" size={20} color="#fff" style={{marginRight: 10}} />
        <Text style={styles.buyPaymentText}>Credit & Debit Card</Text>
        <View style={{flex: 1}} />
        <Text style={styles.buyPaymentProvider}>Topper</Text>
        <Feather name="chevron-right" size={20} color="#aaa" style={{marginLeft: 6}} />
      </View>
      {/* Buy Button */}
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.buyBtnText}>Buy</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BuyBTC" component={BuyBTCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18281e',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  username: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
  },
  account: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceSection: {
    alignItems: 'center',
    marginBottom: 18,
  },
  balance: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  balanceChangeRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  balanceChange: {
    color: '#3dd68c',
    fontSize: 16,
    marginRight: 8,
  },
  balanceChangePct: {
    color: '#3dd68c',
    fontSize: 16,
    backgroundColor: '#1e3a2f',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  actionBtn: {
    alignItems: 'center',
    flex: 1,
  },
  actionText: {
    color: '#b9aaff',
    fontSize: 13,
    marginTop: 4,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23232b',
    borderRadius: 12,
    padding: 12,
    marginBottom: 18,
  },
  infoText: {
    color: '#b9aaff',
    fontSize: 14,
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23232b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  tokenIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  tokenName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  tokenAmount: {
    color: '#aaa',
    fontSize: 13,
  },
  tokenValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  tokenChange: {
    fontSize: 13,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: '#23232b',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingBottom: 10,
  },
  navBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buyContainer: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  buyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  buyTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  buyHeaderBuy: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buyAmountSection: {
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  buyAmount: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  buyBTCValue: {
    color: '#aaa',
    fontSize: 20,
    marginTop: 8,
  },
  buySwitchBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#23232b',
    borderRadius: 20,
    padding: 8,
  },
  buyPresetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  buyPresetBtn: {
    backgroundColor: '#23232b',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 28,
    marginHorizontal: 4,
  },
  buyPresetText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buyPaymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23232b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  buyPaymentText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buyPaymentProvider: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '600',
  },
  buyBtn: {
    backgroundColor: '#b9aaff',
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 16,
  },
  buyBtnText: {
    color: '#181818',
    fontSize: 18,
    fontWeight: '700',
  },
});
