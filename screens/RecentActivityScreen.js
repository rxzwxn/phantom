import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const activityData = [
  {
    date: 'Jul 9, 2025',
    items: [
      {
        type: 'App interaction',
        detail: 'Unknown',
        icon: 'check-circle',
        iconType: 'Feather',
        color: '#3dd68c',
        amount: '',
        subAmount: '',
      },
    ],
  },
  {
    date: 'Jan 25, 2025',
    items: [
      {
        type: 'Swapped',
        detail: 'OKX',
        icon: 'solana',
        iconType: 'custom',
        color: '#00ffa3',
        amount: '+0.00985 SOL',
        subAmount: '-4,656 CR7',
      },
      {
        type: 'Swapped',
        detail: 'OKX',
        icon: 'cr7',
        iconType: 'custom',
        color: '#fff',
        amount: '+4,656.00596 CR7',
        subAmount: '-20 NC',
      },
    ],
  },
  {
    date: 'Jan 17, 2025',
    items: [
      {
        type: 'Sent',
        detail: 'To Dprq...KhnF',
        icon: 'solana',
        iconType: 'custom',
        color: '#00ffa3',
        amount: '-0.0115 SOL',
        subAmount: '',
      },
      {
        type: 'Swapped',
        detail: 'Unknown',
        icon: 'solana',
        iconType: 'custom',
        color: '#00ffa3',
        amount: '+36.75 NC',
        subAmount: '-0.001 SOL',
      },
      {
        type: 'Received',
        detail: 'From Dprq...KhnF',
        icon: 'solana',
        iconType: 'custom',
        color: '#00ffa3',
        amount: '+0.02155 SOL',
        subAmount: '',
      },
      {
        type: 'Sent',
        detail: 'To Dprq...KhnF',
        icon: 'solana',
        iconType: 'custom',
        color: '#00ffa3',
        amount: '-0.01 SOL',
        subAmount: '',
      },
    ],
  },
];

const renderIcon = (item) => {
  if (item.iconType === 'Feather') {
    return <Feather name={item.icon} size={28} color={item.color} style={{ marginRight: 10 }} />;
  }
  if (item.icon === 'solana') {
    return <Image source={{ uri: 'https://cryptologos.cc/logos/solana-sol-logo.png' }} style={{ width: 28, height: 28, borderRadius: 14, marginRight: 10 }} />;
  }
  if (item.icon === 'cr7') {
    return <Image source={{ uri: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7e2e8e9e06cfafc2/64e4e2b7e0c7e2b7e0c7e2b7.png' }} style={{ width: 28, height: 28, borderRadius: 14, marginRight: 10 }} />;
  }
  return <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: '#23232b', marginRight: 10 }} />;
};

const RecentActivityScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#181818', paddingTop: 48, paddingHorizontal: 16 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
      <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Recent Activity</Text>
      <Feather name="more-horizontal" size={24} color="#fff" />
    </View>
    <FlatList
      data={activityData}
      keyExtractor={item => item.date}
      contentContainerStyle={{ paddingBottom: 24 }}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: '#aaa', fontSize: 15, fontWeight: '600', marginBottom: 10 }}>{item.date}</Text>
          {item.items.map((act, idx) => (
            <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#23232b', borderRadius: 12, padding: 14, marginBottom: 10 }}>
              {renderIcon(act)}
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>{act.type}</Text>
                <Text style={{ color: '#aaa', fontSize: 13 }}>{act.detail}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                {act.amount ? <Text style={{ fontSize: 15, fontWeight: '700', color: act.amount.startsWith('+') ? '#3dd68c' : act.amount.startsWith('-') ? '#e74c3c' : '#fff' }}>{act.amount}</Text> : null}
                {act.subAmount ? <Text style={{ fontSize: 13, color: act.subAmount.startsWith('+') ? '#3dd68c' : act.subAmount.startsWith('-') ? '#e74c3c' : '#aaa' }}>{act.subAmount}</Text> : null}
              </View>
            </View>
          ))}
        </View>
      )}
    />
  </View>
);

export default RecentActivityScreen; 