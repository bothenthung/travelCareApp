import { NativeWindStyleSheet } from "nativewind"
import colors from "./colors"

export const mainStyles = NativeWindStyleSheet.create({
  styles: {
    "text-primary": {
      color: colors.default.primary,
    },
    "text-secondary": {
      color: colors.default.secondary,
    },
    "bg-primary": {
      backgroundColor: colors.default.primary,
    },
    "bg-primary-hover": {
      backgroundColor: colors.default.primary,
      opacity: 0.7,
    },
    "bg-secondary": {
      backgroundColor: colors.default.secondary,
    },
    "bg-secondary-hover": {
      backgroundColor: colors.default.secondary,
      opacity: 0.7,
    },
  },
})
