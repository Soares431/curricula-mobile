import { StyleSheet, Text, View } from "react-native";
import { Card, Chip, ChipRow, Screen } from "../components/ui";
import { experiencias } from "../data/curriculo";
import { colors } from "../theme";

export default function Profissional() {
  return (
    <Screen>
      {experiencias.map((e) => (
        <Card key={e.cargo}>
          <Text style={styles.cargo}>{e.cargo}</Text>
          <Text style={styles.empresa}>{e.empresa}</Text>
          <Text style={styles.meta}>{e.periodo}</Text>

          <View style={{ gap: 8, marginVertical: 8 }}>
            {e.itens.map((item) => (
              <View key={item} style={styles.item}>
                <Text style={styles.ponto}>•</Text>
                <Text style={styles.itemTxt}>{item}</Text>
              </View>
            ))}
          </View>

          <ChipRow>{e.techs.map((t) => <Chip key={t} label={t} />)}</ChipRow>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  cargo: { color: colors.text, fontSize: 20, fontWeight: "700" },
  empresa: { color: colors.primaryDark, fontSize: 15, fontWeight: "600" },
  meta: { color: colors.muted, fontSize: 13 },
  item: { flexDirection: "row", gap: 8 },
  ponto: { color: colors.primary, fontSize: 15 },
  itemTxt: { flex: 1, color: colors.text, fontSize: 14.5, lineHeight: 21 },
});
