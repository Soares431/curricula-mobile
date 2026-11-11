import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { Card, Heading, Screen } from "../components/ui";
import { perfil } from "../data/curriculo";
import { colors, radius, space } from "../theme";

const atalhos = [
  { emoji: "👤", titulo: "Sobre mim e o app", rota: "/sobre" },
  { emoji: "🎓", titulo: "Experiência acadêmica", rota: "/academica" },
  { emoji: "💼", titulo: "Experiência profissional", rota: "/profissional" },
  { emoji: "🚀", titulo: "Projetos", rota: "/projetos" },
] as const;

export default function Home() {
  const router = useRouter();

  // Única animação automática do app: a apresentação entra suavemente.
  const entrada = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(entrada, { toValue: 1, duration: 700, useNativeDriver: true }).start();
  }, [entrada]);

  return (
    <Screen>
      <Animated.View
        style={[
          styles.hero,
          {
            opacity: entrada,
            transform: [{ translateY: entrada.interpolate({ inputRange: [0, 1], outputRange: [18, 0] }) }],
          },
        ]}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarTxt}>{perfil.iniciais}</Text>
        </View>
        <Text style={styles.ola}>Olá, eu sou</Text>
        <Text style={styles.nome}>{perfil.nome}</Text>
        <Text style={styles.cargo}>{perfil.cargo}</Text>

        <View style={styles.botoes}>
          <Pressable style={[styles.btn, styles.btnCheio]} onPress={() => Linking.openURL(perfil.github)}>
            <Text style={styles.btnCheioTxt}>GitHub</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnBorda]} onPress={() => Linking.openURL(perfil.linkedin)}>
            <Text style={styles.btnBordaTxt}>LinkedIn</Text>
          </Pressable>
        </View>
      </Animated.View>

      <Pressable style={styles.jogo} onPress={() => router.push("/jogo")}>
        <Text style={{ fontSize: 30 }}>🎮</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.jogoTitulo}>Jogo da Forca</Text>
          <Text style={styles.jogoSub}>Feito em React Native, roda dentro do app.</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>

      <Heading>Explore</Heading>
      <Card style={{ padding: 0, gap: 0, overflow: "hidden" }}>
        {atalhos.map((a, i) => (
          <Pressable
            key={a.rota}
            onPress={() => router.push(a.rota)}
            style={({ pressed }) => [
              styles.linha,
              i > 0 && { borderTopWidth: 1, borderTopColor: colors.line },
              pressed && { backgroundColor: colors.surfaceHi },
            ]}
          >
            <Text style={{ fontSize: 20 }}>{a.emoji}</Text>
            <Text style={styles.linhaTxt}>{a.titulo}</Text>
            <Text style={styles.chevronMuted}>›</Text>
          </Pressable>
        ))}
      </Card>

      <Heading>Contato</Heading>
      <Card>
        <Text style={styles.contato}>📍 {perfil.local}</Text>
        <Pressable onPress={() => Linking.openURL(perfil.telefoneLink)}>
          <Text style={styles.contatoLink}>📞 {perfil.telefone}</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL(`mailto:${perfil.email}`)}>
          <Text style={styles.contatoLink}>✉️ {perfil.email}</Text>
        </Pressable>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { paddingTop: space.md, paddingBottom: space.sm, gap: 4 },
  avatar: {
    width: 72, height: 72, borderRadius: 36, backgroundColor: colors.accent,
    alignItems: "center", justifyContent: "center", marginBottom: space.md,
  },
  avatarTxt: { color: colors.accentInk, fontSize: 28, fontWeight: "900" },
  ola: { color: colors.muted, fontSize: 16 },
  nome: { color: colors.text, fontSize: 38, fontWeight: "900", lineHeight: 42, letterSpacing: -0.5 },
  cargo: { color: colors.teal, fontSize: 17, fontWeight: "600", marginTop: 4 },
  botoes: { flexDirection: "row", gap: 10, marginTop: space.md },
  btn: { paddingHorizontal: 22, paddingVertical: 12, borderRadius: radius.md },
  btnCheio: { backgroundColor: colors.accent },
  btnCheioTxt: { color: colors.accentInk, fontWeight: "800" },
  btnBorda: { borderWidth: 1.5, borderColor: colors.line },
  btnBordaTxt: { color: colors.text, fontWeight: "700" },
  jogo: {
    flexDirection: "row", alignItems: "center", gap: 14, padding: space.md,
    backgroundColor: colors.accent, borderRadius: radius.lg,
  },
  jogoTitulo: { color: colors.accentInk, fontSize: 18, fontWeight: "900" },
  jogoSub: { color: colors.accentInk, opacity: 0.8, fontSize: 13 },
  chevron: { color: colors.accentInk, fontSize: 28, fontWeight: "700" },
  linha: { flexDirection: "row", alignItems: "center", gap: 14, padding: space.md },
  linhaTxt: { flex: 1, color: colors.text, fontSize: 16, fontWeight: "600" },
  chevronMuted: { color: colors.muted, fontSize: 24 },
  contato: { color: colors.text, fontSize: 15 },
  contatoLink: { color: colors.accent, fontSize: 15, fontWeight: "600" },
});
