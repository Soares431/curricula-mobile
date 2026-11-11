import { useRouter } from "expo-router";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { Chip, ChipRow, Screen } from "../components/ui";
import { projetos } from "../data/curriculo";
import { colors, radius, space } from "../theme";

export default function Projetos() {
  const router = useRouter();
  return (
    <Screen>
      {projetos.map((p) => (
        <View key={p.nome} style={styles.card}>
          <View style={[styles.topo, p.interno && { backgroundColor: colors.accent }]}>
            <Text style={{ fontSize: 34 }}>{p.icone}</Text>
          </View>
          <View style={styles.corpo}>
            <Text style={styles.nome}>{p.nome}</Text>
            <Text style={styles.desc}>{p.desc}</Text>
            <ChipRow>
              {p.tech.map((t) => <Chip key={t} label={t} tone="teal" />)}
            </ChipRow>
            {p.interno ? (
              <Pressable style={[styles.btn, styles.btnCheio]} onPress={() => router.push("/jogo")}>
                <Text style={styles.btnCheioTxt}>Jogar agora</Text>
              </Pressable>
            ) : (
              <Pressable style={[styles.btn, styles.btnBorda]} onPress={() => Linking.openURL(p.link)}>
                <Text style={styles.btnBordaTxt}>Ver no GitHub</Text>
              </Pressable>
            )}
          </View>
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface, borderRadius: radius.lg, overflow: "hidden",
    borderWidth: 1, borderColor: colors.line,
  },
  topo: { height: 84, backgroundColor: colors.surfaceHi, alignItems: "center", justifyContent: "center" },
  corpo: { padding: space.md, gap: 10 },
  nome: { color: colors.text, fontSize: 20, fontWeight: "900" },
  desc: { color: colors.muted, fontSize: 14.5, lineHeight: 22 },
  btn: { alignSelf: "flex-start", paddingHorizontal: 20, paddingVertical: 11, borderRadius: radius.md, marginTop: 4 },
  btnCheio: { backgroundColor: colors.accent },
  btnCheioTxt: { color: colors.accentInk, fontWeight: "800" },
  btnBorda: { borderWidth: 1.5, borderColor: colors.line },
  btnBordaTxt: { color: colors.text, fontWeight: "700" },
});
