import React, { Component } from 'react';
import './diff.css';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Diff extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.center, { backgroundColor: 'cadetblue' }]}>
          <Text style={{ color: '#fff', fontSize: 30 }}> 蠟筆小新 </Text>
        </View>
        <h2>漫畫與動畫的差別</h2>
        <h3>人物的差異</h3>
        <div>
            <table align="center">
            <thead>
                <tr>
                    <th>漫畫版</th>
                    <th>動畫版</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>小新是黃色上衣、紫色短褲、紫色鞋子、有時候沒穿襪子</td>
                    <td>小新是紅色上衣、黃色短褲、黃色鞋子、有穿襪子</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>美冴是黑髮的</td>
                    <td>美冴的髮色是茶色</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>石坂綠是繫著粉紅、紅色或黃色絲帶的黑髮</td>
                    <td>石坂綠是繫著水藍色絲帶的茶色頭髮</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>風間是黑髮的</td>
                    <td>風間的髮色是深藍色的</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>妮妮的髮色是焦糖色的</td>
                    <td>妮妮的髮色是茶色</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>正男的頭皮是灰色的</td>
                    <td>正男的頭皮是水藍色的</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>松坂梅是黑髮的</td>
                    <td>松坂梅的髮色是綠黑色</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>大原娜娜子的髮色是茶色</td>
                    <td>大原娜娜子的髮色是綠黑色</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>有野原狹志，廣志的哥哥，小新與小葵的大伯，40歲。從事農業，相當吝嗇。</td>
                    <td>沒有登場</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>行田德郎，接骨院醫生，因松坂梅受傷就醫而結識，後成為其男友。興趣是研究骨頭，後來為了挖掘化石而遠赴南美洲。在南美智利共和國聖地亞哥遭到以色列猶太教極端正統派恐怖份子的炸彈襲擊中死去，得知此消息後，松坂梅一度想自殺，但最後被雙葉幼稚園裡的各位阻止。</td>
                    <td>前面敘述同漫畫，但遠赴南美洲後，就未登場。沒有提及死亡，以及之後的事。</td>
                </tr>
            </tbody>
        </table>
        <p></p>
        <img alt="" src='pictures/p2.jpg' width="320" height="500"></img> 
        <img alt="" src='pictures/p1.jpg' width="320" height="500"></img>
        </div>
        <div>
        <h3>其他差異</h3>
            <table align="center">
            <thead>
                <tr>
                    <th>漫畫版</th>
                    <th>動畫版</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>野原家的屋子很少出現</td>
                    <td>很常出現</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>小新上的幼稚園叫動感幼稚園</td>
                    <td>小新上的幼稚園叫雙葉幼稚園</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>以前野原廣志工作的公司叫動感商事，現在漫畫版也使用雙葉商事</td>
                    <td>野原廣志工作的公司叫雙葉商事</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>雞飛狗跳莊篇中，201室為役津栗優、202室為野原家、203室為四郎、204室為蘇珊小雪、205室為苦汁屋京助和污田急痣刑警、206室為偶比古，屈底家不住在此公寓。</td>
                    <td>201室為四郎、202室為野原家、203室為役津栗優、204室為刑警、205室為屈底家、206室為空的。</td>
                </tr>
            </tbody>
        </table>
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('HelloReactNative', () => Diff);