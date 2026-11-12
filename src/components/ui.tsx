import { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors, radius, space } from "../theme";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={styles.screen}>
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

export function Chip({ label, tone = "blue" }: { label: string; tone?: "blue" | "green" }) {
  const t = tone === "green"
    ? { bg: colors.successBg, fg: colors.successText }
    : { bg: colors.chipBg, fg: colors.chipText };
  return (
    <View style={[styles.chip, { backgroundColor: t.bg }]}>
      <Text style={[styles.chipText, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

export function ChipRow({ children }: { children: ReactNode }) {
  return <View style={styles.chipRow}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: { padding: space.md, paddingBottom: space.lg * 2, gap: 12 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: space.md,
    borderWidth: 1,
    borderColor: colors.line,
    gap: 6,
  },
  heading: { color: colors.text, fontSize: 20, fontWeight: "700", marginTop: 6 },
  chip: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  chipText: { fontSize: 13, fontWeight: "600" },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
});
