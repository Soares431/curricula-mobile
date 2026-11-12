import { StyleSheet, Text, View } from "react-native";
import { Card, Chip, ChipRow, Heading, Screen } from "../components/ui";
import { comportamentais, habilidades, idiomas, perfil, tecnologiasApp } from "../data/curriculo";
import { colors } from "../theme";

export default function Sobre() {
  return (
    <Screen>
      <Card>
        <Text style={styles.texto}>{perfil.sobre}</Text>
      </Card>

      <Heading>Habilidades</Heading>
      <Card>
        <Text style={styles.rotulo}>Técnicas</Text>
        <ChipRow>{habilidades.map((h) => <Chip key={h} label={h} />)}</ChipRow>
        <Text style={[styles.rotulo, { marginTop: 8 }]}>Comportamentais</Text>
        <ChipRow>{comportamentais.map((h) => <Chip key={h} label={h} />)}</ChipRow>
        <Text style={[styles.rotulo, { marginTop: 8 }]}>Idiomas</Text>
        <Text style={styles.texto}>{idiomas}</Text>
      </Card>

      <Heading>Como este app foi feito</Heading>
      {tecnologiasApp.map((g) => (
        <Card key={g.grupo}>
          <Text style={styles.grupo}>{g.grupo}</Text>
          {g.itens.map((item) => (
            <View key={item} style={styles.item}>
              <Text style={styles.ponto}>•</Text>
              <Text style={styles.itemTxt}>{item}</Text>
            </View>
          ))}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  texto: { color: colors.text, fontSize: 15, lineHeight: 22 },
  rotulo: { color: colors.muted, fontSize: 13, fontWeight: "700" },
  grupo: { color: colors.primaryDark, fontSize: 16, fontWeight: "700" },
  item: { flexDirection: "row", gap: 8 },
  ponto: { color: colors.primary, fontSize: 15 },
  itemTxt: { flex: 1, color: colors.text, fontSize: 15, lineHeight: 22 },
});
