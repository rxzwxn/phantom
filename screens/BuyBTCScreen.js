import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const BuyBTCScreen = ({ navigation }) => {
  const [amount, setAmount] = useState(10);
  const btcValue = '0.000103';
  return (
    <View style={{ flex: 1, backgroundColor: '#181818', paddingTop: 48, paddingHorizontal: 16 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 8 }}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}>Buy BTC</Text>
        <TouchableOpacity style={{ padding: 8 }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Buy</Text>
        </TouchableOpacity>
      </View>
      {/* Amount */}
      <View style={{ alignItems: 'center', marginBottom: 24, position: 'relative' }}>
        <Text style={{ color: '#fff', fontSize: 48, fontWeight: 'bold' }}>${amount}</Text>
        <Text style={{ color: '#aaa', fontSize: 20, marginTop: 8 }}>{btcValue} BTC</Text>
        <TouchableOpacity style={{ position: 'absolute', right: 0, top: 0, backgroundColor: '#23232b', borderRadius: 20, padding: 8 }}>
          <Feather name="arrow-up-down" size={20} color="#aaa" />
        </TouchableOpacity>
      </View>
      {/* Preset Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 }}>
        {[100, 500, 1000].map(val => (
          <TouchableOpacity key={val} style={{ backgroundColor: '#23232b', borderRadius: 24, paddingVertical: 12, paddingHorizontal: 28, marginHorizontal: 4 }} onPress={() => setAmount(val)}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>${val}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Payment Method */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#23232b', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <Feather name="credit-card" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Credit & Debit Card</Text>
        <View style={{ flex: 1 }} />
        <Text style={{ color: '#aaa', fontSize: 16, fontWeight: '600' }}>Topper</Text>
        <Feather name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 6 }} />
      </View>
      {/* Buy Button */}
      <TouchableOpacity style={{ backgroundColor: '#b9aaff', borderRadius: 24, alignItems: 'center', paddingVertical: 16, marginBottom: 16 }}>
        <Text style={{ color: '#181818', fontSize: 18, fontWeight: '700' }}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyBTCScreen; 