import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const filters = [
  { label: 'Tokens', color: '#3dd68c' },
  { label: 'Perps', color: '#f7c6e0' },
  { label: 'Lists', color: '#b9aaff' },
  { label: 'People', color: '#ffe066' },
];

const trendingTokens = [
  { rank: 1, name: 'Bog', icon: 'https://i.imgur.com/1Q9Z1Zm.png', mc: '$396K MC', price: '$0.00040394', change: '+7,568.82%', changeColor: '#3dd68c' },
  { rank: 2, name: 'PEPE', icon: 'https://i.imgur.com/4M34hi2.png', mc: '$1.4M MC', price: '$0.00140011', change: '+29,525.41%', changeColor: '#3dd68c' },
  { rank: 3, name: 'MOON', icon: 'https://i.imgur.com/8Km9tLL.png', mc: '$475K MC', price: '$0.0004854', change: '-52.83%', changeColor: '#e74c3c' },
];

const perps = [
  { rank: 1, name: 'BTC-USD', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', leverage: '40x', price: '$121,962.00', change: '+3.15%', changeColor: '#3dd68c' },
  { rank: 2, name: 'ETH-USD', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', leverage: '25x', price: '$3,047.10', change: '+2.40%', changeColor: '#3dd68c' },
  { rank: 3, name: 'XRP-USD', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png', leverage: '20x', price: '$2.96', change: '+1.84%', changeColor: '#3dd68c' },
];

const ExploreScreen = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#181818', paddingTop: 32, paddingHorizontal: 12 }} contentContainerStyle={{ paddingBottom: 32 }}>
    {/* Search Bar */}
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#23232b', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 18 }}>
      <Feather name="search" size={20} color="#aaa" style={{ marginRight: 8 }} />
      <TextInput
        placeholder="Sites, tokens, URL"
        placeholderTextColor="#aaa"
        style={{ color: '#fff', fontSize: 16, flex: 1 }}
      />
      <View style={{ backgroundColor: '#23232b', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, marginLeft: 8 }}>
        <Text style={{ color: '#aaa', fontSize: 14 }}>1</Text>
      </View>
    </View>
    {/* Filter Buttons */}
    <View style={{ flexDirection: 'row', marginBottom: 18 }}>
      {filters.map((f, i) => (
        <TouchableOpacity key={f.label} style={{ backgroundColor: f.color + '22', borderRadius: 16, paddingHorizontal: 18, paddingVertical: 8, marginRight: 10 }}>
          <Text style={{ color: f.color, fontWeight: '700', fontSize: 15 }}>{f.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
    {/* Featured Card */}
    <View style={{ backgroundColor: '#23232b', borderRadius: 16, padding: 16, marginBottom: 24 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Image source={{ uri: 'https://i.imgur.com/8Km9tLL.png' }} style={{ width: 36, height: 36, borderRadius: 8, marginRight: 12 }} />
        <View>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>PUMP Token Sale</Text>
          <Text style={{ color: '#aaa', fontSize: 14 }}>Community</Text>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 6 }}>
          <Text style={{ color: '#23232b', fontWeight: '700', fontSize: 15 }}>Visit</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#aaa', fontSize: 14 }}>Registered buyers can access the PUMP public sale here</Text>
    </View>
    {/* Trending Tokens */}
    <View style={{ marginBottom: 24 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 20, flex: 1 }}>Trending Tokens</Text>
        <TouchableOpacity><Text style={{ color: '#b9aaff', fontWeight: '700', fontSize: 15 }}>See More</Text></TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#23232b', borderRadius: 16, padding: 8 }}>
        {trendingTokens.map((t, i) => (
          <View key={t.name} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: i < trendingTokens.length - 1 ? 1 : 0, borderBottomColor: '#222' }}>
            <Image source={{ uri: t.icon }} style={{ width: 36, height: 36, borderRadius: 18, marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>{t.name}</Text>
              <Text style={{ color: '#aaa', fontSize: 13 }}>{t.mc}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>{t.price}</Text>
              <Text style={{ color: t.changeColor, fontSize: 13 }}>{t.change}</Text>
            </View>
            <View style={{ marginLeft: 10, backgroundColor: '#23232b', borderRadius: 10, paddingHorizontal: 6, paddingVertical: 2 }}>
              <Text style={{ color: '#aaa', fontSize: 13 }}>#{t.rank}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
    {/* Perps */}
    <View style={{ marginBottom: 24 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 20, flex: 1 }}>Perps</Text>
        <TouchableOpacity><Text style={{ color: '#b9aaff', fontWeight: '700', fontSize: 15 }}>See More</Text></TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#23232b', borderRadius: 16, padding: 8 }}>
        {perps.map((p, i) => (
          <View key={p.name} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: i < perps.length - 1 ? 1 : 0, borderBottomColor: '#222' }}>
            <Image source={{ uri: p.icon }} style={{ width: 36, height: 36, borderRadius: 18, marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>{p.name}</Text>
              <Text style={{ color: '#aaa', fontSize: 13 }}>{p.leverage}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>{p.price}</Text>
              <Text style={{ color: p.changeColor, fontSize: 13 }}>{p.change}</Text>
            </View>
            <View style={{ marginLeft: 10, backgroundColor: '#23232b', borderRadius: 10, paddingHorizontal: 6, paddingVertical: 2 }}>
              <Text style={{ color: '#aaa', fontSize: 13 }}>#{p.rank}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
);

export default ExploreScreen; 