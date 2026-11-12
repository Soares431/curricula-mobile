import { useRouter } from "expo-router";
import { Linking, Pressable, StyleSheet, Text } from "react-native";
import { Card, Chip, ChipRow, Screen } from "../components/ui";
import { projetos } from "../data/curriculo";
import { colors, radius } from "../theme";

export default function Projetos() {
  const router = useRouter();
  return (
    <Screen>
      {projetos.map((p) => (
        <Card key={p.nome}>
          <Text style={styles.nome}>{p.nome}</Text>
          <Text style={styles.desc}>{p.desc}</Text>
          <ChipRow>{p.tech.map((t) => <Chip key={t} label={t} />)}</ChipRow>
          <Pressable
            style={[styles.btn, p.interno ? styles.btnCheio : styles.btnBorda]}
            onPress={() => (p.interno ? router.push("/jogo") : Linking.openURL(p.link))}
          >
            <Text style={p.interno ? styles.btnCheioTxt : styles.btnBordaTxt}>
              {p.interno ? "Jogar agora" : "Ver no GitHub"}
            </Text>
          </Pressable>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  nome: { color: colors.text, fontSize: 18, fontWeight: "700" },
  desc: { color: colors.muted, fontSize: 14.5, lineHeight: 21 },
  btn: { alignSelf: "flex-start", paddingHorizontal: 18, paddingVertical: 9, borderRadius: radius.sm, marginTop: 6 },
  btnCheio: { backgroundColor: colors.primary },
  btnCheioTxt: { color: colors.onDark, fontWeight: "700" },
  btnBorda: { borderWidth: 1.5, borderColor: colors.primary },
  btnBordaTxt: { color: colors.primary, fontWeight: "700" },
});
