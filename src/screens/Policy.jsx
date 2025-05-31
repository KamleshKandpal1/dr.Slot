import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import policyData from '../json/privacyPolicy.json';

const Policy = () => {
  const policy = policyData.privacyPolicy;

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-stone-100">
        <ScrollView className="px-4 py-1 h-full bg-yellow-50/60">
          <View className="mb-6">
            <Text className="text-3xl font-bold text-center text-slate-800">
              {policy.hospitalName}
            </Text>
            <Text className="text-lg font-medium text-center text-slate-600 mt-1">
              Privacy Policy
            </Text>
            <Text className="text-sm text-center text-slate-500 mt-1">
              Effective: {policy.effectiveDate} | Updated: {policy.lastUpdated}
            </Text>
          </View>

          {policy.sections.map((section, index) => (
            <View
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 mb-4 border border-stone-200">
              <View className="flex-row items-center mb-1">
                {/* <Icon name="shield" size={18} color="#334155" /> */}
                <Text className="text-lg font-semibold text-slate-700 ml-2">
                  {section.title}
                </Text>
              </View>

              {section.description && (
                <Text className="text-sm text-slate-600 leading-5 tracking-wide mb-2 ml-2">
                  {section.description}
                </Text>
              )}

              {/* Purposes */}
              {section.purposes?.length > 0 && (
                <View className="mb-2">
                  {/* <Text className="text-sm font-medium text-slate-700 mb-1">
                    Purposes:
                  </Text> */}
                  {section.purposes.map((purpose, idx) => (
                    <Text key={idx} className="text-sm text-slate-600 ml-2">
                      • {purpose}
                    </Text>
                  ))}
                </View>
              )}

              {/* Conditions */}
              {section.conditions?.length > 0 && (
                <View className="mb-2">
                  {/* <Text className="text-sm font-medium text-slate-700 mb-1">
                    Purposes:
                  </Text> */}
                  {section.conditions.map((purpose, idx) => (
                    <Text key={idx} className="text-sm text-slate-600 ml-2">
                      • {purpose}
                    </Text>
                  ))}
                </View>
              )}

              {/* Measures */}
              {section.measures?.length > 0 && (
                <View className="mb-2">
                  {/* <Text className="text-sm font-medium text-slate-700 mb-1">
                    Purposes:
                  </Text> */}
                  {section.measures.map((purpose, idx) => (
                    <Text key={idx} className="text-sm text-slate-600 ml-2">
                      • {purpose}
                    </Text>
                  ))}
                </View>
              )}

              {/* Rights */}
              {section.rights?.length > 0 && (
                <View className="mb-2">
                  {/* <Text className="text-sm font-medium text-slate-700 mb-1">
                    Rights:
                  </Text> */}
                  {section.rights.map((right, idx) => (
                    <Text key={idx} className="text-sm text-slate-600 ml-2">
                      • {right}
                    </Text>
                  ))}
                </View>
              )}

              {/* Details */}
              {section.details && (
                <View className="mb-2">
                  {Object.entries(section.details).map(([key, values], i) => (
                    <View key={i} className="mb-2">
                      <Text className="text-sm font-semibold capitalize text-slate-700">
                        {key.replace(/([A-Z])/g, ' $1')}:
                      </Text>
                      {values.map((item, j) => (
                        <Text key={j} className="text-sm text-slate-600 ml-2">
                          - {item}
                        </Text>
                      ))}
                    </View>
                  ))}
                </View>
              )}

              {/* Contact-Info */}
              {section.contactInfo && (
                <View className="mt-2 space-y-1">
                  {/* <Text className="text-sm font-semibold text-slate-700">
                    Contact Info:
                  </Text> */}
                  {section.contactInfo.email && (
                    <View className="flex-row items-center gap-2 my-1">
                      <FontAwesome name="envelope" color="#000" size={14} />
                      <Text className="text-sm text-slate-600">
                        {section.contactInfo.email}
                      </Text>
                    </View>
                  )}
                  {section.contactInfo.phone && (
                    <View className="flex-row items-center gap-2 my-1">
                      <FontAwesome name="phone" color="#000" size={14} />
                      <Text className="text-sm text-slate-600">
                        {section.contactInfo.phone}
                      </Text>
                    </View>
                  )}
                  {section.contactInfo.address && (
                    <View className="flex-row items-center gap-2 my-1">
                      <FontAwesome name="map-marker" color="#000" size={14} />
                      <Text className="text-sm text-slate-600">
                        {section.contactInfo.address}
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Policy;
