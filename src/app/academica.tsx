import { StyleSheet, Text } from "react-native";
import { Card, Chip, Heading, Screen } from "../components/ui";
import { extras, formacao } from "../data/curriculo";
import { colors } from "../theme";

export default function Academica() {
  return (
    <Screen>
      <Heading>Formação</Heading>
      {formacao.map((f) => (
        <Card key={f.curso}>
          <Text style={styles.titulo}>{f.curso}</Text>
          <Text style={styles.local}>{f.local}</Text>
          <Text style={styles.meta}>{f.periodo}</Text>
          <Chip label={f.status} tone={f.status === "Concluído" ? "green" : "blue"} />
        </Card>
      ))}

      <Heading>Cursos e atividades extras</Heading>
      {extras.map((e) => (
        <Card key={e.titulo}>
          <Text style={styles.titulo}>{e.titulo}</Text>
          <Text style={styles.meta}>{e.meta}</Text>
          <Text style={styles.texto}>{e.texto}</Text>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  titulo: { color: colors.text, fontSize: 17, fontWeight: "700" },
  local: { color: colors.primaryDark, fontSize: 15, fontWeight: "600" },
  meta: { color: colors.muted, fontSize: 13 },
  texto: { color: colors.text, fontSize: 14, lineHeight: 21 },
});
