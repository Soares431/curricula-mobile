import { StyleSheet, Text, View } from "react-native";
import { Card, Chip, Heading, Screen } from "../components/ui";
import { extras, formacao } from "../data/curriculo";
import { colors, space } from "../theme";

export default function Academica() {
  return (
    <Screen>
      <Heading>Formação</Heading>
      <View>
        {formacao.map((f, i) => {
          const andamento = f.status === "Em andamento";
          return (
            <View key={f.curso} style={styles.linhaTempo}>
              <View style={styles.trilho}>
                <View style={[styles.marca, andamento && styles.marcaAtiva]} />
                {i < formacao.length - 1 && <View style={styles.fio} />}
              </View>
              <Card style={{ flex: 1, marginBottom: space.md }}>
                <View style={{ alignSelf: "flex-start" }}>
                  <Chip label={f.status} tone={andamento ? "accent" : "teal"} />
                </View>
                <Text style={styles.curso}>{f.curso}</Text>
                <Text style={styles.local}>{f.local}</Text>
                <Text style={styles.periodo}>{f.periodo}</Text>
              </Card>
            </View>
          );
        })}
      </View>

      <Heading>Cursos e atividades extracurriculares</Heading>
      {extras.map((e) => (
        <Card key={e.titulo}>
          <Text style={styles.curso}>{e.titulo}</Text>
          <Text style={styles.periodo}>{e.meta}</Text>
          <Text style={styles.texto}>{e.texto}</Text>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  linhaTempo: { flexDirection: "row", gap: 12 },
  trilho: { width: 18, alignItems: "center" },
  marca: {
    width: 14, height: 14, borderRadius: 7, marginTop: 20,
    backgroundColor: colors.surfaceHi, borderWidth: 2, borderColor: colors.muted,
  },
  marcaAtiva: { backgroundColor: colors.accent, borderColor: colors.accent },
  fio: { flex: 1, width: 2, backgroundColor: colors.line, marginTop: 4, marginBottom: -space.md },
  curso: { color: colors.text, fontSize: 17, fontWeight: "800" },
  local: { color: colors.teal, fontSize: 15, fontWeight: "600" },
  periodo: { color: colors.muted, fontSize: 13 },
  texto: { color: colors.text, fontSize: 14, lineHeight: 21 },
});
