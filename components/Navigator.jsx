import { Home, HomeRoute } from "../screens/Home";
import { Download, DownloadRoute } from "../screens/Download";
import { Upload, UploadRoute } from "../screens/Upload";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Sobre, SobreRoute } from "../screens/Sobre";
import logo from "../assets/images/logo.png";

// Cria um NAVEGADOR
const Tab = createBottomTabNavigator();

// cria as ROTAS das telas
export function Navigator() {
  const iconSize = 30;
  return (
    <Tab.Navigator
      screenOptions={
        ({ navigation }) => ({
          headerStyle: {
            height: 104,
          },
          headerTitle: () => (
            // LOGOTIPO do projeto
            <Image source={logo} width={"110px"} height={"30px"} alt="Logo do projeto" />
          ),
          headerTitleAlign: "center",
          tabBarStyle: {
            height: 86,
          },
          tabBarIconStyle: {
            marginTop: 12
          },
          tabBarLabelStyle: {
            fontSize: 17,
            marginBottom: 12,
          }
        })
      }
    >
      {/* TELAS --> */}
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
      {/* <-- TELAS */}
    </Tab.Navigator >
  );
}