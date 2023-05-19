import { Home, HomeRoute } from "../screens/Home";
import { Download, DownloadRoute } from "../screens/Download";
import { Upload, UploadRoute } from "../screens/Upload";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Sobre, SobreRoute } from "../screens/Sobre";
import logo from "../assets/images/logo.png";


const Tab = createBottomTabNavigator();

export function Navigator() {
  const iconSize = 30;
  return (
    <Tab.Navigator
      screenOptions={
        ({ navigation }) => ({
          headerLeft: () => (
            <Image ml={5} source={logo} size={"50px"} alt="Logo do projeto"/>
          ),
          headerStyle: {
            height: 86
          },
          tabBarStyle: {
            height: 76,
          },
          tabBarIconStyle: {
            marginTop: 4
          },
          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom: 6
          }
        })
      }
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
    </Tab.Navigator >
  );
}