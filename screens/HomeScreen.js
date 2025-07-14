import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const TOKENS = [
  { key: '1', name: 'Ethereum', symbol: 'ETH', amount: '0.00687', value: '$18.98', change: '+$0.36', changePct: '', icon: <Feather name="hexagon" size={24} color="#fff" />, color: '#222' },
  { key: '2', name: 'USDC', symbol: 'USDC', amount: '2.24262', value: '$2.25', change: '-<$0.01', changePct: '', icon: <Feather name="dollar-sign" size={24} color="#fff" />, color: '#2775CA' },
  { key: '3', name: 'Solana', symbol: 'SOL', amount: '1', value: '$162.00', change: '+$0.00', changePct: '', icon: <Feather name="activity" size={24} color="#fff" />, color: '#000' },
  { key: '4', name: 'Ethereum', symbol: 'ETH', amount: '0', value: '$0.00', change: '+$0.00', changePct: '', icon: <Feather name="hexagon" size={24} color="#fff" />, color: '#222' },
  { key: '5', name: 'Chainlink', symbol: 'ETH', amount: '0', value: '$0.00', change: '+$0.00', changePct: '', icon: <Feather name="hexagon" size={24} color="#fff" />, color: '#222' },
  { key: '6', name: 'Polygon', symbol: 'ETH', amount: '0', value: '$0.00', change: '+$0.00', changePct: '', icon: <Feather name="hexagon" size={24} color="#fff" />, color: '#222' }
];

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#18281e', paddingTop: 48, paddingHorizontal: 16 }}>
    {/* Header */}
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}><Text style={{ fontSize: 18 }}>🔥</Text></View>
        <View>
          <Text style={{ color: '#aaa', fontSize: 14, fontWeight: '600' }}>@Alexsmithmobbin</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Account 2</Text>
            <AntDesign name="down" size={14} color="#aaa" style={{ marginLeft: 4 }} />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Feather name="maximize" size={22} color="#fff" style={{ marginRight: 18 }} />
        <Feather name="search" size={22} color="#fff" />
      </View>
    </View>
    {/* Balance */}
    <View style={{ alignItems: 'center', marginBottom: 18 }}>
      <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>$21.23</Text>
      <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: '#3dd68c', fontSize: 16, marginRight: 8 }}>+$0.36</Text>
        <Text style={{ color: '#3dd68c', fontSize: 16, backgroundColor: '#1e3a2f', borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2 }}>1.74%</Text>
      </View>
    </View>
    {/* Action Buttons */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 }}>
      <View style={{ alignItems: 'center', flex: 1 }}><Feather name="qrcode" size={24} color="#b9aaff" /><Text style={{ color: '#b9aaff', fontSize: 13, marginTop: 4 }}>Receive</Text></View>
      <View style={{ alignItems: 'center', flex: 1 }}><Feather name="send" size={24} color="#b9aaff" /><Text style={{ color: '#b9aaff', fontSize: 13, marginTop: 4 }}>Send</Text></View>
      <View style={{ alignItems: 'center', flex: 1 }}><Feather name="repeat" size={24} color="#b9aaff" /><Text style={{ color: '#b9aaff', fontSize: 13, marginTop: 4 }}>Swap</Text></View>
      <View style={{ alignItems: 'center', flex: 1 }}><Feather name="dollar-sign" size={24} color="#b9aaff" /><Text style={{ color: '#b9aaff', fontSize: 13, marginTop: 4 }}>Buy</Text></View>
    </View>
    {/* Info Banner */}
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#23232b', borderRadius: 12, padding: 12, marginBottom: 18 }}>
      <Feather name="search" size={18} color="#b9aaff" style={{ marginRight: 8 }} />
      <Text style={{ color: '#b9aaff', fontSize: 14 }}>Search from Explore to find new tokens faster</Text>
    </View>
    {/* Token List */}
    <FlatList
      data={TOKENS}
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ paddingBottom: 80 }}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#23232b', borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 14, backgroundColor: item.color }}>{item.icon}</View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
            <Text style={{ color: '#aaa', fontSize: 13 }}>{item.amount} {item.symbol}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>{item.value}</Text>
            <Text style={{ fontSize: 13, color: item.change.startsWith('+') ? '#3dd68c' : '#e74c3c' }}>{item.change}</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.key}
    />
    {/* Bottom Navigation */}
    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 64, backgroundColor: '#23232b', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingBottom: 10 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}><Feather name="home" size={24} color="#b9aaff" /></View>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}><Feather name="grid" size={24} color="#b9aaff" /></View>
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} onPress={() => navigation.navigate('BuyBTC')}>
        <Feather name="repeat" size={24} color="#b9aaff" />
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} onPress={() => navigation.navigate('RecentActivity')}>
        <Feather name="clock" size={24} color="#b9aaff" />
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} onPress={() => navigation.navigate('Explore')}>
        <Feather name="slash" size={24} color="#b9aaff" />
      </TouchableOpacity>
    </View>
  </View>
);

export default HomeScreen; 