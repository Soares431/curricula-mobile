import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { colors } from "../theme";

function icone(emoji: string) {
  return ({ focused }: { focused: boolean }) => (
    <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
  );
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: colors.dark },
          headerTintColor: colors.onDark,
          headerTitleStyle: { fontWeight: "700" },
          headerShadowVisible: false,
          sceneStyle: { backgroundColor: colors.bg },
          tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
          tabBarActiveTintColor: colors.primaryDark,
          tabBarInactiveTintColor: colors.muted,
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Home", headerTitle: "Lucas Soares", tabBarIcon: icone("🏠") }} />
        <Tabs.Screen name="sobre" options={{ title: "Sobre", headerTitle: "Sobre", tabBarIcon: icone("👤") }} />
        <Tabs.Screen name="academica" options={{ title: "Estudos", headerTitle: "Experiência Acadêmica", tabBarIcon: icone("🎓") }} />
        <Tabs.Screen name="profissional" options={{ title: "Trabalho", headerTitle: "Experiência Profissional", tabBarIcon: icone("💼") }} />
        <Tabs.Screen name="projetos" options={{ title: "Projetos", headerTitle: "Projetos", tabBarIcon: icone("🚀") }} />
        <Tabs.Screen name="jogo" options={{ title: "Jogo", headerTitle: "Jogo da Forca", tabBarIcon: icone("🎮") }} />
      </Tabs>
    </>
  );
}
