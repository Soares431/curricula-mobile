import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Hangman } from "../components/Hangman";
import { Screen } from "../components/ui";
import { colors, radius, space } from "../theme";

const PALAVRAS = [
  "REACT", "JAVASCRIPT", "PYTHON", "JAVA", "DJANGO", "SELENIUM", "PANDAS",
  "POSTGRES", "MYSQL", "GITHUB", "SERVIDOR", "ALGORITMO", "VARIAVEL",
  "FUNCAO", "COMPILADOR", "NAVEGADOR", "FRONTEND", "BACKEND", "LINUX",
  "TECLADO", "MONITOR", "PROTOCOLO", "SEGURANCA", "HARDWARE", "SOFTWARE",
  "INTERFACE", "COMPONENTE", "ESTADO", "CODIGO", "PROGRAMA", "INTERNET",
  "CLASSE", "OBJETO", "FRAMEWORK", "BIBLIOTECA", "DEPURAR", "EXPO", "MOBILE",
];

const MAX_ERROS = 6;
const LINHAS_TECLADO = ["ABCDEFG", "HIJKLMN", "OPQRSTU", "VWXYZ"];

function sortear(evitar?: string) {
  let nova = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
  while (nova === evitar) nova = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
  return nova;
}

export default function Jogo() {
  const [palavra, setPalavra] = useState(() => sortear());
  const [usadas, setUsadas] = useState<string[]>([]);
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const erradas = usadas.filter((l) => !palavra.includes(l));
  const venceu = palavra.split("").every((l) => usadas.includes(l));
  const perdeu = erradas.length >= MAX_ERROS;
  const fim = venceu || perdeu;

  function tentar(letra: string) {
    if (fim || usadas.includes(letra)) return;
    const novas = [...usadas, letra];
    setUsadas(novas);
    const errosNovos = novas.filter((l) => !palavra.includes(l)).length;
    if (palavra.split("").every((l) => novas.includes(l))) setVitorias((v) => v + 1);
    else if (errosNovos >= MAX_ERROS) setDerrotas((d) => d + 1);
  }

  function reiniciar() {
    setPalavra(sortear(palavra));
    setUsadas([]);
  }

  return (
    <Screen>
      <Text style={styles.tema}>Tema: tecnologia e programação</Text>

      <View style={styles.placar}>
        <Text style={styles.placarTxt}>Vitórias <Text style={{ color: colors.success }}>{vitorias}</Text></Text>
        <Text style={styles.placarTxt}>Derrotas <Text style={{ color: colors.danger }}>{derrotas}</Text></Text>
      </View>

      <View style={styles.painel}>
        <Hangman erros={erradas.length} perdeu={perdeu} />
      </View>

      <View style={styles.palavra}>
        {palavra.split("").map((l, i) => (
          <View key={i} style={styles.casa}>
            <Text style={[styles.letra, perdeu && !usadas.includes(l) && { color: colors.danger }]}>
              {usadas.includes(l) || perdeu ? l : ""}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.tentativas}>
        Tentativas restantes: <Text style={{ color: colors.accent, fontWeight: "800" }}>{MAX_ERROS - erradas.length}</Text> de {MAX_ERROS}
      </Text>

      {venceu && (
        <View style={[styles.msg, { borderColor: colors.success }]}>
          <Text style={styles.msgTxt}>🎉 Você venceu! A palavra era {palavra}.</Text>
        </View>
      )}
      {perdeu && (
        <View style={[styles.msg, { borderColor: colors.danger }]}>
          <Text style={styles.msgTxt}>💀 Você perdeu. A palavra era {palavra}.</Text>
        </View>
      )}

      <View style={styles.teclado}>
        {LINHAS_TECLADO.map((linha) => (
          <View key={linha} style={styles.linhaTecla}>
            {linha.split("").map((l) => {
              const usada = usadas.includes(l);
              const certa = usada && palavra.includes(l);
              const errada = usada && !palavra.includes(l);
              return (
                <Pressable
                  key={l}
                  onPress={() => tentar(l)}
                  disabled={usada || fim}
                  style={({ pressed }) => [
                    styles.tecla,
                    certa && { backgroundColor: colors.success },
                    errada && { backgroundColor: colors.danger, opacity: 0.55 },
                    pressed && { transform: [{ scale: 0.92 }] },
                    fim && !usada && { opacity: 0.45 },
                  ]}
                >
                  <Text style={[styles.teclaTxt, certa && { color: "#06240F" }]}>{l}</Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>

      <Pressable style={styles.reiniciar} onPress={reiniciar}>
        <Text style={styles.reiniciarTxt}>{fim ? "Jogar de novo" : "Trocar palavra"}</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tema: { color: colors.muted, textAlign: "center", fontSize: 14 },
  placar: { flexDirection: "row", justifyContent: "center", gap: 28 },
  placarTxt: { color: colors.text, fontWeight: "700", fontSize: 15 },
  painel: {
    backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1,
    borderColor: colors.line, paddingVertical: space.md,
  },
  palavra: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 8 },
  casa: { width: 30, height: 42, borderBottomWidth: 3, borderBottomColor: colors.accent, alignItems: "center", justifyContent: "flex-end" },
  letra: { color: colors.text, fontSize: 26, fontWeight: "800" },
  tentativas: { color: colors.muted, textAlign: "center", fontSize: 14 },
  msg: { borderWidth: 1.5, borderRadius: radius.md, padding: space.md, backgroundColor: colors.surface },
  msgTxt: { color: colors.text, fontSize: 15, fontWeight: "700", textAlign: "center" },
  teclado: { gap: 8, alignItems: "center" },
  linhaTecla: { flexDirection: "row", gap: 8 },
  tecla: {
    width: 40, height: 46, borderRadius: radius.sm, backgroundColor: colors.surfaceHi,
    alignItems: "center", justifyContent: "center",
  },
  teclaTxt: { color: colors.text, fontSize: 17, fontWeight: "800" },
  reiniciar: {
    alignSelf: "center", paddingHorizontal: 26, paddingVertical: 13, borderRadius: radius.md,
    backgroundColor: colors.accent, marginTop: 4,
  },
  reiniciarTxt: { color: colors.accentInk, fontWeight: "900", fontSize: 15 },
});
