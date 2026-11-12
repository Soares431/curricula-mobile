import { View } from "react-native";
import { colors } from "../theme";

type LineProps = { x1: number; y1: number; x2: number; y2: number; color: string; t?: number };

// Desenha uma linha entre dois pontos usando apenas <View> girada.
function Line({ x1, y1, x2, y2, color, t = 5 }: LineProps) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return (
    <View
      style={{
        position: "absolute",
        left: (x1 + x2) / 2 - len / 2,
        top: (y1 + y2) / 2 - t / 2,
        width: len,
        height: t,
        borderRadius: t / 2,
        backgroundColor: color,
        transform: [{ rotate: `${angle}deg` }],
      }}
    />
  );
}

export function Hangman({ erros, perdeu }: { erros: number; perdeu: boolean }) {
  const forca = colors.dark;
  const corpo = perdeu ? colors.danger : colors.primary;
  return (
    <View style={{ width: 200, height: 240, alignSelf: "center" }}>
      <Line x1={20} y1={225} x2={130} y2={225} color={forca} t={6} />
      <Line x1={50} y1={225} x2={50} y2={20} color={forca} t={6} />
      <Line x1={50} y1={20} x2={140} y2={20} color={forca} t={6} />
      <Line x1={140} y1={20} x2={140} y2={45} color={forca} t={4} />

      {erros > 0 && (
        <View
          style={{
            position: "absolute", left: 120, top: 45, width: 40, height: 40,
            borderRadius: 20, borderWidth: 4, borderColor: corpo,
          }}
        />
      )}
      {erros > 1 && <Line x1={140} y1={85} x2={140} y2={145} color={corpo} />}
      {erros > 2 && <Line x1={140} y1={100} x2={115} y2={128} color={corpo} />}
      {erros > 3 && <Line x1={140} y1={100} x2={165} y2={128} color={corpo} />}
      {erros > 4 && <Line x1={140} y1={145} x2={118} y2={185} color={corpo} />}
      {erros > 5 && <Line x1={140} y1={145} x2={162} y2={185} color={corpo} />}

      {perdeu && (
        <>
          <Line x1={131} y1={58} x2={138} y2={65} color={corpo} t={3} />
          <Line x1={138} y1={58} x2={131} y2={65} color={corpo} t={3} />
          <Line x1={142} y1={58} x2={149} y2={65} color={corpo} t={3} />
          <Line x1={149} y1={58} x2={142} y2={65} color={corpo} t={3} />
        </>
      )}
    </View>
  );
}
