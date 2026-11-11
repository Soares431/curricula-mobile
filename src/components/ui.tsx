import { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors, radius, space } from "../theme";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function Heading({ children }: { children: ReactNode }) {
  return <Text style={styles.heading}>{children}</Text>;
}

export function Chip({ label, tone = "default" }: { label: string; tone?: "default" | "accent" | "teal" }) {
  const tones = {
    default: { bg: colors.surfaceHi, fg: colors.text },
    accent: { bg: colors.accent, fg: colors.accentInk },
    teal: { bg: "rgba(53,208,186,0.16)", fg: colors.teal },
  }[tone];
  return (
    <View style={[styles.chip, { backgroundColor: tones.bg }]}>
      <Text style={[styles.chipText, { color: tones.fg }]}>{label}</Text>
    </View>
  );
}

export function ChipRow({ children }: { children: ReactNode }) {
  return <View style={styles.chipRow}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: { padding: space.md, paddingBottom: space.xl * 1.5, gap: space.md },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: space.md,
    borderWidth: 1,
    borderColor: colors.line,
    gap: space.sm,
  },
  heading: { color: colors.text, fontSize: 22, fontWeight: "800", marginTop: space.sm },
  chip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill },
  chipText: { fontSize: 13, fontWeight: "600" },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
