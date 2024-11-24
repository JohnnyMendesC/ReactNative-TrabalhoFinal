import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDrawer from "../src/screens/Home";
import LoginDrawer from "../src/screens/Login/login";
import CadastroDrawer from "../src/screens/Cadastro";
import CustomDrawer from "../src/components/Drawer";

export default function RoutesDrawer() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                drawerActiveBackgroundColor: "#0088",
                drawerInactiveBackgroundColor: "gray",
                drawerActiveTintColor: "green",
                drawerInactiveTintColor: "#454",
                drawerStyle: {
                    backgroundColor: "#d9d9d9",
                    width: 250,

                }
            }}
        >
            <Drawer.Screen name="Login" component={LoginDrawer} />
            <Drawer.Screen name="Cadastro" component={CadastroDrawer} />
            {/* <Drawer.Screen name="Sobre" component={SobreDrawer} /> */}
            {/* <Drawer.Screen name="Contato" component={ContatoDrawer} /> */}
            <Drawer.Screen name="Home" component={HomeDrawer} />
        </Drawer.Navigator>
    )
}