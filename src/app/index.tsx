import { useRouter } from "expo-router";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { Card, Heading, Screen } from "../components/ui";
import { perfil } from "../data/curriculo";
import { colors, radius, space } from "../theme";

const atalhos = [
  { titulo: "Sobre mim e o app", rota: "/sobre" },
  { titulo: "Experiência acadêmica", rota: "/academica" },
  { titulo: "Experiência profissional", rota: "/profissional" },
  { titulo: "Projetos", rota: "/projetos" },
  { titulo: "Jogo da Forca", rota: "/jogo" },
] as const;

export default function Home() {
  const router = useRouter();
  return (
    <Screen>
      <View style={styles.hero}>
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
      </View>

      <Heading>Navegue</Heading>
      <Card style={{ padding: 0, gap: 0, overflow: "hidden" }}>
        {atalhos.map((a, i) => (
          <Pressable
            key={a.rota}
            onPress={() => router.push(a.rota)}
            style={[styles.linha, i > 0 && { borderTopWidth: 1, borderTopColor: colors.line }]}
          >
            <Text style={styles.linhaTxt}>{a.titulo}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
      </Card>

      <Heading>Contato</Heading>
      <Card>
        <Text style={styles.contato}>{perfil.local}</Text>
        <Pressable onPress={() => Linking.openURL(perfil.telefoneLink)}>
          <Text style={styles.contatoLink}>{perfil.telefone}</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL(`mailto:${perfil.email}`)}>
          <Text style={styles.contatoLink}>{perfil.email}</Text>
        </Pressable>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.dark, borderRadius: radius.md, padding: space.lg, gap: 6 },
  nome: { color: colors.onDark, fontSize: 28, fontWeight: "800" },
  cargo: { color: colors.onDarkMuted, fontSize: 16 },
  botoes: { flexDirection: "row", gap: 10, marginTop: 12 },
  btn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: radius.sm },
  btnCheio: { backgroundColor: colors.primary },
  btnCheioTxt: { color: colors.onDark, fontWeight: "700" },
  btnBorda: { borderWidth: 1.5, borderColor: colors.onDark },
  btnBordaTxt: { color: colors.onDark, fontWeight: "700" },
  linha: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: space.md },
  linhaTxt: { color: colors.text, fontSize: 16 },
  chevron: { color: colors.muted, fontSize: 22 },
  contato: { color: colors.text, fontSize: 15 },
  contatoLink: { color: colors.primaryDark, fontSize: 15, fontWeight: "600" },
});
