import { StyleSheet, Text, View } from "react-native";
import { Chip, ChipRow, Screen } from "../components/ui";
import { experiencias } from "../data/curriculo";
import { colors, radius, space } from "../theme";

export default function Profissional() {
  return (
    <Screen>
      {experiencias.map((e) => (
        <View key={e.cargo} style={styles.bloco}>
          <View style={styles.faixa} />
          <View style={styles.conteudo}>
            <View style={{ alignSelf: "flex-start" }}>
              <Chip label={e.periodo} tone="accent" />
            </View>
            <Text style={styles.cargo}>{e.cargo}</Text>
            <Text style={styles.empresa}>{e.empresa}</Text>

            <View style={{ gap: 12, marginTop: 6 }}>
              {e.itens.map((item) => (
                <View key={item} style={styles.item}>
                  <Text style={styles.seta}>▸</Text>
                  <Text style={styles.itemTxt}>{item}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.rotulo}>Ferramentas</Text>
            <ChipRow>
              {e.techs.map((t) => <Chip key={t} label={t} />)}
            </ChipRow>
          </View>
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  bloco: {
    flexDirection: "row", backgroundColor: colors.surface, borderRadius: radius.lg,
    borderWidth: 1, borderColor: colors.line, overflow: "hidden",
  },
  faixa: { width: 6, backgroundColor: colors.accent },
  conteudo: { flex: 1, padding: space.md, gap: 8 },
  cargo: { color: colors.text, fontSize: 24, fontWeight: "900" },
  empresa: { color: colors.teal, fontSize: 15, fontWeight: "600" },
  item: { flexDirection: "row", gap: 10 },
  seta: { color: colors.accent, fontSize: 14, marginTop: 2 },
  itemTxt: { flex: 1, color: colors.text, fontSize: 14.5, lineHeight: 22 },
  rotulo: { color: colors.muted, fontSize: 13, fontWeight: "700", marginTop: 10 },
});
