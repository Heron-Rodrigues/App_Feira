import { Home, HomeRoute } from "../screens/Home";
import { Download, DownloadRoute } from "../screens/Download";
import { Upload, UploadRoute } from "../screens/Upload";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Sobre, SobreRoute } from "../screens/sobre";


const Tab = createBottomTabNavigator();

export function Navigator() {
  const iconSize = 30;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 76,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 16
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => { return <Icon name="home-outline" size={iconSize} color={color} /> }
        }}
        component={Home}
        name={HomeRoute}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => { return <Icon name="download-outline" size={iconSize} color={color} /> },
        }}
        component={Download}
        name={DownloadRoute}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => { return <Icon name="cloud-upload-outline" size={iconSize} color={color} /> },
        }}
        component={Upload}
        name={UploadRoute}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => { return <Icon name="settings-outline" size={iconSize} color={color} /> },
        }}
        component={Sobre}
        name={SobreRoute}
      />
    </Tab.Navigator>
  );
}