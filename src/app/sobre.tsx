import { StyleSheet, Text, View } from "react-native";
import { Card, Chip, ChipRow, Heading, Screen } from "../components/ui";
import {
  comportamentais, habilidades, idiomas, perfil, tecnologiasApp,
} from "../data/curriculo";
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
        <ChipRow>
          {habilidades.map((h) => <Chip key={h} label={h} />)}
        </ChipRow>
        <Text style={[styles.rotulo, { marginTop: 8 }]}>Comportamentais</Text>
        <ChipRow>
          {comportamentais.map((h) => <Chip key={h} label={h} tone="teal" />)}
        </ChipRow>
        <Text style={[styles.rotulo, { marginTop: 8 }]}>Idiomas</Text>
        <Text style={styles.texto}>{idiomas}</Text>
      </Card>

      <Heading>Como este app foi feito</Heading>
      <Text style={styles.intro}>
        Tecnologias e módulos usados no desenvolvimento deste aplicativo.
      </Text>
      {tecnologiasApp.map((g) => (
        <Card key={g.grupo}>
          <Text style={styles.grupo}>{g.grupo}</Text>
          {g.itens.map((item) => (
            <View key={item} style={styles.item}>
              <View style={styles.ponto} />
              <Text style={styles.itemTxt}>{item}</Text>
            </View>
          ))}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  texto: { color: colors.text, fontSize: 15, lineHeight: 23 },
  intro: { color: colors.muted, fontSize: 14, marginTop: -8 },
  rotulo: { color: colors.muted, fontSize: 13, fontWeight: "700" },
  grupo: { color: colors.accent, fontSize: 17, fontWeight: "800" },
  item: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  ponto: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.teal, marginTop: 8 },
  itemTxt: { flex: 1, color: colors.text, fontSize: 15, lineHeight: 22 },
});
